
/* var formattedName=HTMLheaderName.replace("%data%","Sachin Thakur");
var formattedRole=HTMLheaderRole.replace("%data%","Web developer");
var formattedMobile=HTMLmobile.replace("%data%","+919882362696");
var formattedmail=HTMLemail.replace("%data%","thakursachin467@gmail.com");
var formattedtwitter=HTMLtwitter.replace("%data%","thakursachin467");
var formattedgithub= HTMLgithub.replace("%data%","thakursachin467");
var formattedLocation= HTMLlocation.replace("%data%","Punjab");
var skills=["Web developing","Programming","Networking"];
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedmail);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedLocation); */


var bio = {
    "name": "Sachin Thakur",
    "role": "Web developer",
    "welcome": "HELLO",
    "bioPic": "images/dp.jpg",
    "contact": {
        "Mobile": "+918894208631",
        "email": "thakursachin467@gmail.com",
        "twitter": "@thakursachin467",
        "github": "thakursachin467",
        "location": "Punjab"
    },

    "skills": ["web developer", "Programming", "Networking"]
};
var education = {
    "schools": {
        "name": "carmel convent",
        "city": "nahan",
        "degree": "higher studies",
        "year": 2015
    },
    "online courses": {
        "title": "into to html and css",
        "school": "udacity",
        "date": 2017,
        "url": "www.udacity.com"
    }
};
var work = {

    "jobs" : [
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

var projects = {
    "projects": [{
        "title": "portfolio",
        "date": 2017,
        "description": "A website, or simply site, is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. A website may be accessible via a public Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a uniform resource locator (URL) that identifies the site.",
        "images": "images/project1"
    }]
};
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);
var formattedMobile=HTMLmobile.replace("%data%",bio.contact.Mobile);
$("#topContacts").append(formattedMobile);
var formattedmail=HTMLemail.replace("%data%",bio.contact.email);
$("#topContacts").append(formattedmail);
var formattedtwitter=HTMLtwitter.replace("%data%",bio.contact.twitter);
$("#topContacts").append(formattedtwitter);
var formattedgithub= HTMLgithub.replace("%data%",bio.contact.github);
$("#topContacts").append(formattedgithub);
var formattedLocation= HTMLlocation.replace("%data%",bio.contact.location);
$("#topContacts").append(formattedLocation);
var formattedMessege= HTMLwelcomeMsg.replace("%data%",bio.welcome);
$("#header").append(formattedMessege);
var formattedpic= HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedpic);
if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	var i;
	for(i=0;i<bio.skills.length;i++)
	{
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[i]);
	$("#header").append(formattedSkill);
	}
}
//displaywork();
/*displaywork()
{
  var j;
  for(j=0;j<work.jobs.length;j++)
{
    $(#workExperience).append(HTMLworkStart);
    var formattedEmployeer=HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
    var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[j].title);
    var formattedEmployeerTitle=formattedEmployeer+formattedTitle;
    $(".work-entry:last").append(formattedEmployeerTitle);
    var formattedDate=HTMLworkDates.replace("%data%",work.job[j].date);
    $(".work-entry:last").append(formattedDate);
    var formattedDescription=HTMLworkDescription.replace("%data%",work.job[j].description);
    $(".work-entry:last").append(formattedDescription);
}  
}*/









