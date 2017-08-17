var bio = {
    "name": "Sachin Thakur",
    "role": "Web developer",
    "welcomeMessage": "welcomeMessage to online resume of Sachin Thakur",
    "biopic": "images/dp.jpg",
    "contacts": {
        "mobile": "+918894208631",
        "email": "thakursachin467@gmail.com",
        "twitter": "@thakursachin467",
        "github": "thakursachin467",
        "location": "india"
    },

    "skills": ["web developer", "Programming", "Networking"]
};
var education = {
    "schools": [{
        "name": "carmel convent",
        "location": "nahan",
        "majors": ["science", "maths"],
        "degree": "higher studies",
        "dates": 2015
    }],
    "onlineCourses": [{
        "title": "into to html and css",
        "school": "udacity",
        "dates": 2017,
        "url": "www.udacity.com"
    }]
};
var work = {

    "jobs": [{
        "employer": "udacity",
        "title": "mentor",
        "dates": "november-21-2015",
        "description": "solving problem of students who are having truble in HTML courses they take from udacity.im a person who gives a younger or less experienced person help and advice over a period of time, especially at work or school",
        "location": "ENGLAND"
    }, {
        "employer": "EDX",
        "title": "ONLINE HELP",
        "dates": "november-21-2014",
        "description": "solving problem of students who are having truble in HTML courses they take from udacity.im a person who gives a younger or less experienced person help and advice over a period of time, especially at work or school",
        "location": "USA"
    }]
};

var projects = {
    "projects": [{
        "title": "portfolio",
        "dates": 2017,
        "description": "A website, or simply site, is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. A website may be accessible via a public Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a uniform resource locator (URL) that identifies the site.",
        "images": ["images/project1.jpg", "images/project2.jpg"]
    }]
};


bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);


    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").append(formattedMobile);



    var formattedmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedmail);



    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts,#footerContacts").append(formattedtwitter);



    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedgithub);




    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedLocation);



    var formattedMessege = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessege);
    var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedpic);




    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill, i;
        for (i = 0; i < bio.skills.length; i++) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkill);
        }
    }
};
bio.display();


work.display = function() {
    for (var j = 0; j < work.jobs.length; j++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployeer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
        var formattedEmployeerTitle = formattedEmployeer + formattedTitle;
        $(".work-entry:last").append(formattedEmployeerTitle);


        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[j].dates);
        $(".work-entry:last").append(formattedDate);


        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocations = HTMLworkLocation.replace("%data%", work.jobs[j].location);
        $(".work-entry:last").append(formattedLocations);
    }
};
work.display();

projects.display = function() {
    for (var j = 0; j < projects.projects.length; j++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitleProject = HTMLprojectTitle.replace("%data%", projects.projects[j].title);
        $(".project-entry").append(formattedTitleProject);

        var formattedDateProject = HTMLprojectDates.replace("%data%", projects.projects[j].dates);
        $(".project-entry").append(formattedDateProject);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[j].description);
        $(".project-entry").append(formattedProjectDescription);
        for (var k = 0; k < projects.projects[j].images.length; k++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[j].images[k]);
            $(".project-entry").append(formattedProjectImage);
        }

    }
};
projects.display();

education.display = function() {


    for (var j = 0; j < education.schools.length; j++) {
        $("#education:last").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[j].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolYear = HTMLschoolDates.replace("%data%", education.schools[j].dates);
        $(".education-entry:last").append(formattedSchoolYear);
        for (var l = 0; l < education.schools[j].majors.length; l++) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[j].majors[l]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
        var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[j].location);
        $(".education-entry:last").append(formattedSchoolCity);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[j].degree);
        $(".education-entry:last").append(formattedSchoolDegree);

    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {

        var formattedCourseNameOnline = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        $(".education-entry:last").append(formattedCourseNameOnline);

        var formattedSchoolNameOnline = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $(".education-entry:last").append(formattedSchoolNameOnline);

        var formattedCourseYear = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        $(".education-entry:last").append(formattedCourseYear);

        var formattedCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
        $(".education-entry:last").append(formattedCourseUrl);
    }


};
education.display();
$("#mapDiv").append(googleMap);

/*function inName(name) {
    name=name.trim().split(" ");
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);*/