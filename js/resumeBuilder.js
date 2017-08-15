
var bio = {
    "name": "Sachin Thakur",
    "role": "Web developer",
    "welcome": "welcome to online resume of Sachin Thakur",
    "bioPic": "images/dp.jpg",
    "contact": {
        "Mobile": 918894208631,
        "email": "thakursachin467@gmail.com",
        "twitter": "@thakursachin467",
        "github": "thakursachin467",
        "location": "india"
    },

    "skills": ["web developer", "Programming", "Networking"]
};
var education = {
       "school": [{
        "name": "carmel convent",
        "location": "nahan",
        "major":"science",
        "degree": "higher studies",
        "year": 2015
    }],
    "online": [{
        "title": "into to html and css",
        "school": "udacity",
        "date": 2017,
        "url": "www.udacity.com"
    }]
};
var work = {

    "job" : [
    {
        "employer": "udacity",
        "title": "mentor",
        "date": "november-21-2015",
        "description": "solving problem of students who are having truble in HTML courses they take from udacity.im a person who gives a younger or less experienced person help and advice over a period of time, especially at work or school"
    }, 
    {
        "employer": "EDX",
        "title": "ONLINE HELP",
        "date": "november-21-2014",
        "description": "solving problem of students who are having truble in HTML courses they take from udacity.im a person who gives a younger or less experienced person help and advice over a period of time, especially at work or school"
    }]
};

var project = {
    "projects": [{
        "title": "portfolio",
        "date": 2017,
        "description": "A website, or simply site, is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. A website may be accessible via a public Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a uniform resource locator (URL) that identifies the site.",
        "images": ["images/project1.jpg","images/project2.jpg"]
    }]
};


displaywork = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);


    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contact.Mobile);
    $("#topContacts").append(formattedMobile);



    var formattedmail = HTMLemail.replace("%data%", bio.contact.email);
    $("#topContacts").append(formattedmail);



    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
    $("#topContacts").append(formattedtwitter);



    var formattedgithub = HTMLgithub.replace("%data%", bio.contact.github);
    $("#topContacts").append(formattedgithub);




    var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    $("#topContacts").append(formattedLocation);



    var formattedMessege = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").append(formattedMessege);
    var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedpic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var i;
        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkill);
        }
    }

    formattedMobile = HTMLmobile.replace("%data%", bio.contact.Mobile);
    $("#footerContacts").append(formattedMobile);


    formattedmail = HTMLemail.replace("%data%", bio.contact.email);
    $("#footerContacts").append(formattedmail);


    formattedtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
    $("#footerContacts").append(formattedtwitter);

    formattedgithub = HTMLgithub.replace("%data%", bio.contact.github);
    $("#footerContacts").append(formattedgithub);

    formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    $("#footerContacts").append(formattedLocation);
};
displaywork();


displayjob=function() {
  for(var j=0;j<work.job.length;j++)
{
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployeer=HTMLworkEmployer.replace("%data%",work.job[j].employer);
    var formattedTitle=HTMLworkTitle.replace("%data%",work.job[j].title);
    var formattedEmployeerTitle=formattedEmployeer+formattedTitle;
    $(".work-entry:last").append(formattedEmployeerTitle);


    var formattedDate=HTMLworkDates.replace("%data%",work.job[j].date);
    $(".work-entry:last").append(formattedDate);


    var formattedDescription=HTMLworkDescription.replace("%data%",work.job[j].description);
    $(".work-entry:last").append(formattedDescription);
}  
};
displayjob();

displayproject=function() {
            for(var j=0;j<project.projects.length;j++)
            {
                $("#projects").append(HTMLprojectStart);

                var formattedTitleProject=HTMLprojectTitle.replace("%data%",project.projects[j].title);
                $(".project-entry").append(formattedTitleProject);

                var formattedDateProject=HTMLprojectDates.replace("%data%",project.projects[j].date);
                $(".project-entry").append(formattedDateProject);

                var formattedProjectDescription=HTMLprojectDescription.replace("%data%",project.projects[j].description);
                $(".project-entry").append(formattedProjectDescription);
                for(var k=0;k<project.projects[j].images.length;k++)
                {
                var formattedProjectImage=HTMLprojectImage.replace("%data%",project.projects[j].images[k]);
                $(".project-entry").append(formattedProjectImage);
            }

            }
};
displayproject();

displayEducation=function() {
       

        for(var j=0;j<education.school.length;j++)
        {
            $("#education:last").append(HTMLschoolStart);

            var formattedSchoolName=HTMLschoolName.replace("%data%",education.school[j].name);
            $(".education-entry:last").append(formattedSchoolName);

            var formattedSchoolYear=HTMLschoolDates.replace("%data%",education.school[j].year);
            $(".education-entry:last").append(formattedSchoolYear);

             var formattedSchoolMajor=HTMLschoolMajor.replace("%data%",education.school[j].major);
            $(".education-entry:last").append(formattedSchoolMajor);

            var formattedSchoolCity=HTMLschoolLocation.replace("%data%",education.school[j].location);
            $(".education-entry:last").append(formattedSchoolCity);

            var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.school[j].degree);
            $(".education-entry:last").append(formattedSchoolDegree);

           }
           
           $(".education-entry:last").append(HTMLonlineClasses);
           for(var k=0;k<education.online.length;k++)
           {
            
            var formattedCourseNameOnline=HTMLonlineTitle.replace("%data%",education.online[k].title);
            $(".education-entry:last").append(formattedCourseNameOnline);

            var formattedSchoolNameOnline=HTMLonlineSchool.replace("%data%",education.online[k].school)
            $(".education-entry:last").append(formattedSchoolNameOnline);

            var formattedCourseYear=HTMLonlineDates.replace("%data%",education.online[k].date);
            $(".education-entry:last").append(formattedCourseYear);

            var formattedCourseUrl=HTMLonlineURL.replace("%data%",education.online[k].url);
            $(".education-entry:last").append(formattedCourseUrl);
           }
        

};
displayEducation();
$("#mapDiv").append(googleMap);

/*function inName(name) {
    name=name.trim().split(" ");
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);*/

