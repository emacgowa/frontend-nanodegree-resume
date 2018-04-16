/*
This is empty on purpose! Your code to build the resume will go here.
 */

//creating an object called bio that contains all the important information about me
 var bio = {
 	"name": "Emily MacGowan",
 	"role": "UX Designer",
 	"contacts": {
 		"email": "emilyrmacgowan@gmail.com",
 		"mobile": "416-720-9032",
 		"twitter": "@emilyraemac",
 		"github":"emacgowa",
 		"location": "145 Willow Avenue, Toronto"
 	},
 	"biopic": "images/EmilyMacHeadshot.jpg",
 	"welcomeMessage": "Hey! Mac Attack here",
 	"skills": ["user interviews", "remote user testing", "user journey maps", "javascript", "HTML", "CSS"
 	],
 	"display": function() {

 		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 		$("#header").prepend(formattedRole);

 		var formattedName = HTMLheaderName.replace("%data%", bio.name);
 		$("#header").prepend(formattedName);


 		// add contacts section to the page
 		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 		$("#topContacts").append(formattedMobile);

 		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 		$("#topContacts").append(formattedEmail);

 		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 		$("#topContacts").append(formattedGithub);

 		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 		$("#topContacts").append(formattedTwitter);

 		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 		$("#topContacts").append(formattedLocation);



 		// add the image of my face to the page

 		var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
 		$("#header").append(formattedImg);

 		$("#header img").addClass("hvr-shrink");
 		$("#header img").attr("href", "https://www.linkedin.com/in/emilymacgowan/");

 		 // check to see if there is any information in the skills propery of the bio object
		 // if there is then add the skills to the page

		 if (bio.skills.length > 0) {
			  $("#header").append(HTMLskillsStart);
			   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			  $("#skills").append(formattedSkill);

			  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			  $("#skills").append(formattedSkill);

			  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			  $("#skills").append(formattedSkill);

			  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			  $("#skills").append(formattedSkill);

			  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
			  $("#skills").append(formattedSkill);

			  formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
			  $("#skills").append(formattedSkill);


		 }
 	},
 	"displayfooter": function() {
 		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 			$("#footerContacts").append(formattedMobile);

 			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 			$("#footerContacts").append(formattedEmail);

 			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 			$("#footerContacts").append(formattedGithub);

	 		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	 		$("#footerContacts").append(formattedTwitter);

	 		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	 		$("#footerContacts").append(formattedLocation);
 	}
 };

 bio.display();


// // create a new work object and then add position, employers, years, and city to it

 var work = {
 	"jobs": [
 		{
	 		"title": "Consultant",
	 		"employer": "Doblin Canada",
	 		"dates": " May 2018 - Aug 2018",
	 		"location": "Toronto, ON",
	 		"description": "Working on an interdisciplinary team to innovate products and services for industries across healthcare, banking, government"
 		},
 		{
 			"title": "UX Designer",
 			"employer": "Pharmacy5in5",
 			"dates": "Sept 2016 - present",
 			"location": "Waterloo, ON",
 			"description": "Responsible for researching and re-designing an e-learning platform for pharmacists and pharmacy technicians across Ontario."

 		},
 		{
	 		"title": "UX Designer",
	 		"employer": "RBC",
	 		"dates": " May 2017 - Aug 2017",
	 		"location": "Toronto, ON",
	 		"description": "Worked with an strategy and design team to research, design and, in some cases, build products and services to support employees across the bank."
 		}
 	],
 	"display": function() {
	 		for (var job = 0; job < work.jobs.length; job++) {
		    $("#workExperience").append(HTMLworkStart);
		    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)

		    $(".work-entry:last").append(formattedEmployer + formattedTitle);

		    // now add all the other work details to the page
		    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		    $(".work-entry:last").append(formattedDates);

		    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		    $(".work-entry:last").append(formattedDescription);
		}
 	}
 };


// you cannot comment out the line below because if you do, you aren't actually running the function and therefore nothing will display
 work.display();



// var displayWork = function() {
// 		for (var job in work.jobs) {
// 	    $("#workExperience").append(HTMLworkStart);
// 	    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
// 	    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)

// 	    $(".work-entry:last").append(formattedEmployer + formattedTitle);

// 	    // now add all the other work details to the page
// 	    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
// 	    $(".work-entry:last").append(formattedDates);

// 	    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
// 	    $(".work-entry:last").append(formattedDescription);
// 	}
// }

// Internationalize names

// $("#main").append(internationalizeButton);

// var inName = function(name) {
// 	name = name.trim().split(" ");
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return name[0] + " " + name[1];
// }


// inName(bio.name);

// create a project object to hold my projects

var projects = {
	"programWork": [
		{
			"name": "Museum Design",
			"start": "2015",
			"dates": "2015",
			"location": "Waterloo",
			"description": "Designed a museum exhibit that used the cosmetics industry as a case study to show how companies can use values to manipulate our buying decisions.",
			"images": ["images/Gamesroom4-400_medium_1x.JPG"]
		},
		{
			"name": "Pharmacy5in5",
			"start": "2016",
			"dates": ["2016", "2017", "2018"],
			"location": "Waterloo",
			"description": "Conducted primary and secondary research to inform design decisions for an e-learning platform for practicing pharmacists across Ontario.",
			"images": ["images/pharmacy5in5-400_medium_1x.png"]
		},
		{
			"name": "RBC Pathway",
			"start": "2017",
			"dates": "2017",
			"location": "88 Queens Quay",
			"description": "Conducted research to design a tool to help design researchers across the bank document and store their design research artifacts and documents.",
			"images": ["images/rbcmockup-400_medium_1x.png"]
		}
	],
	"display": function() {
		for (var project = 0; project < projects.programWork.length; project++) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.programWork[project].name);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.programWork[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.programWork[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.programWork[project].images.length > 0) {
				for (var image in projects.programWork[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.programWork[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}

// for (var project = 0; project < projects.programWork.length; project++) {
// 			$("#projects").append(HTMLprojectStart);

// 			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.programWork[project].name);
// 			$(".project-entry:last").append(formattedTitle);

// 			var formattedDates = HTMLprojectDates.replace("%data%", projects.programWork[project].dates);
// 			$(".project-entry:last").append(formattedDates);

// 			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.programWork[project].description);
// 			$(".project-entry:last").append(formattedDescription);

// 			if (projects.programWork[project].images.length > 0) {
// 				for (var image in projects.programWork[project].images) {
// 					var formattedImage = HTMLprojectImage.replace("%data%", projects.programWork[project].images[image]);
// 					$(".project-entry:last").append(formattedImage);
// 				}
// 			}
// 		}

projects.display();


// create a new property of the projects object called display
// projects.display = function() {
// 	for (var project in projects.programWork) {
// 		$("#projects").append(HTMLprojectStart);

// 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.programWork[project].name);
// 		$(".project-entry:last").append(formattedTitle);

// 		var formattedDates = HTMLprojectDates.replace("%data%", projects.programWork[project].dates);
// 		$(".project-entry:last").append(formattedDates);

// 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.programWork[project].description);
// 		$(".project-entry:last").append(formattedDescription);

// 		if (projects.programWork[project].images.length > 0) {
// 			for (var image in projects.programWork[project].images) {
// 				var formattedImage = HTMLprojectImage.replace("%data%", projects.programWork[project].images[image]);
// 				$(".project-entry:last").append(formattedImage);
// 			}
// 		}


// 	}
// }

var education = {
 	"schools": [
		{ 
			"name": "University of Waterloo",
			"location": "Waterloo ON",
			"degree": "Bachelors",
			"major": "Knowledge Integration",
			"dates": "2012 - 2018"

		}
 	],
 	"onlineCourses": [
	 	{
	 		"title": "Javascript Crash Course",
	 		"school": "Udacity",
	 		"dates": "2018",
	 		"url": "https://www.udacity.com/nanodegree"

	 	}
 	],
 	"display": function() {
 		$("#education").append(HTMLschoolStart);

	 	for (var school=0; school < education.schools.length; school++) {
	 		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
	 		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	 		$('.education-entry').append(formattedSchool + formattedDegree);

	 		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	 		$('.education-entry').append(formattedDates);

	 		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	 		$('.education-entry').append(formattedMajor);


	 		var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	 		$('.education-entry').append(formattedLoc);

	 		
 		}


 		$("#education").append(HTMLonlineClasses);
 		$("#education").append(HTMLschoolStart);
 		for (var online = 0; online < education.onlineCourses.length; online++) {
 			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
 			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
 			$(".education-entry:last").append(formattedTitle + formattedSchool);

 			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
 			$(".education-entry:last").append(formattedDates);

 		}

 	}
 };

 education.display();



// add a map to your resume
$("#mapDiv").append(googleMap);

// add the footer to the page

bio.displayfooter();
 			
	

 		// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 		// $("#footerContacts").append(formattedEmail);

 		// var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 		// $("#footerContacts").append(formattedGithub);

 		// var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 		// $("#footerContacts").append(formattedTwitter);

 		// var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 		// $("#footerContacts").append(formattedLocation);
		






