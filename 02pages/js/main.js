'use strict';

var course_title = "MasterBrand Cabinets, Inc. (MBCI)";
var sub_title = "Jasper, Indiana";
var header_color = "#b1273e"; // #e3dd1b #b1273e
var header_txt_color = "#fff";
var user_name = 'Admin';
//var user_name = 'Curt';

// Selecting each title
document.getElementsByTagName('h1')[0].innerHTML = course_title;
document.getElementsByTagName('h2')[0].innerHTML = sub_title;

// Applying a custom header and text color
$("#masterhead").css({"background":header_color});
$("#masterhead").css({"color":header_txt_color});

//$( auto_play_input.checked + " .slider").css({"background-color":header_color});
//$("#auto-play-input:focus").css({"box-shadow":header_color});
//$(".state-label-on").css({"color":header_txt_color});


// If user is admin add controls as property on audio and media tag
if ( user_name == 'Admin' ) {
	document.getElementById('admin-audio').setAttribute("controls", true);
	document.getElementById('slide-video').setAttribute("controls", true);
	document.getElementById('admin-controller').setAttribute("class", "display-yes");
}
else {
	document.getElementById('admin-audio').removeAttribute("controls");
	document.getElementById('slide-video').removeAttribute("controls");
	document.getElementById('admin-controller').removeAttribute("class", "display-yes");
}

// Trim user name after 10th letter
if (user_name.length > 11) {
    user_name = user_name.substr(0,11) + '...';
}
else {
	// Show the entire name
}

var pg_current = document.getElementById('pg-current');
var pg_total = document.getElementById('pg-total');
var slide_text = document.getElementById('slide-text');
var media_audio = document.getElementById('admin-audio');
var tempplate_basic = document.getElementById('template-basic');
var template_video = document.getElementById('template-video');
var template_question = document.getElementById('template-question');
var media_video = document.getElementById('slide-video');
var question_q = document.getElementById('question-q');
var question_multi = document.getElementById('question_multi');
var question_tf = document.getElementById('question-tf');
var q_1_input = document.querySelector('#q-1 input');
var q_2_input = document.querySelector('#q-2 input');
var q_3_input = document.querySelector('#q-3 input');
var q_4_input = document.querySelector('#q-4 input');
var q_1_span = document.querySelector('#q-1 span');
var q_2_span = document.querySelector('#q-2 span');
var q_3_span = document.querySelector('#q-3 span');
var q_4_span = document.querySelector('#q-4 span');
var auto_play_input = document.getElementById('auto-play-input');
var jump_page = document.getElementById('jump-page');

var slides = [
	{
		slideTitle: 'Introduction',
		slideText: '<p>Welcome to the MasterBrand Cabinets Contractor Safety Orientation.  MasterBrand Cabinets, Inc. (MBCI) is the largest cabinet manufacturer in North America.</p><p>Headquartered in Jasper, Indiana, MBCI is also the largest division of Fortune Brands Home & Security.  Today, MBCI has over 11,000 employees with manufacturing and sales locations across the United States, Canada and Mexico.</p><p>MBCI\'s major brands include KitchenCraft, Diamond, Schrock, Kemper, Aristokraft, Kitchen Classics, Wood Crafters, Homecrest, Martha Stewart Living, Thomasville, Decora\', Omega, Mid-Continent, Ultra Craft, Star Mark, and Urban Effects.</p>',
		slideAudio: 'MasterBrand/1.mp3',
		slideMedia: 'MasterBrand/1.jpg',	
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Introduction',
		slideText: '<p>To set the stage for this training, our President, Dave Randich, would like to review our safety commitment.</p>',
		slideAudio: 'MasterBrand/2.mp3',
		slideMedia: 'MasterBrand/2.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideVideo: 'MasterBrand/MasterBrand_Intro.mp4',
		templateType: 'video'
	},
	{
		slideTitle: 'Introduction',
		slideText: '<p>At the successful completion of this orientation you will be issued a Carus Group-approved Contractors ID badge.</p><p>You must have this card on your person, prominently displayed whenever you do work at our facility.</p><p>This Contractors ID badge is to be returned to Carus Group at the conclusion of you contracted tasks.</p>',
		slideAudio: 'MasterBrand/4.mp3',
		slideMedia: 'MasterBrand/4.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Introduction',
		slideText: '<p>Now that you\'ve listened to Mr. Randich\'s message, we\'d like to introduce you to MBCI\'s Contractor Safety Program, where you will learn about:<ul><li>The potential workplace hazards you may face at our facilities, and</li><li>The consequences for non-compliance with federal, national, regional, state and local regulations and MBCI company policy</li></ul></p><p>Throughout the training course, you will be tested on your comprehension of this information.  To progress through the course, you will need to correctly answer all questions.  In addition, there is a brief quiz at the end of the course that you are required to pass in order to complete the course. We anticipate a successful outcome.</p>',
		slideAudio: 'MasterBrand/5.mp3',
		slideMedia: 'MasterBrand/5.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Introduction',
		slideText: '<p>MBCI\'s mission is to provide the best overall kitchen and bath solutions for consumers and channel partners throughout North America.</p><p>To enable the achievement of this mission, employees embody the Four Basics (what we do) and the Five Traits of Success (how we accomplish the Four Basics).</p><p>MBCI\'s <b><i>Safety %26 Risk Management Policy</i></b> is to provide each person a safe, healthful and secure place in which to work.</p>',
		slideAudio: 'MasterBrand/6.mp3',
		slideMedia: 'MasterBrand/6.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Introduction',
		slideText: '<p>Our philosophy is to establish and maintain a World Class "Total Safety Culture" where:<ul><li>Safety and health is a core value</li><li>Injuries are preventable, predictable and unacceptable (our Zero Injury Culture)</li><li>Every reasonable effort is made to prevent injuries and preserve health</li><li>We all share responsibility for safety, health and security</li><li>Continuous improvement is expected, and where</li><li>Safety is viewed as a system of behavioral, technical and business components</li></ul></p>',
		slideAudio: 'MasterBrand/7.mp3',
		slideMedia: 'MasterBrand/7.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Introduction',
		slideText: '<p>MBCI\'s success depends on how safely every job is performed.</p><p>No job is so important, nor any service so urgent that it should not be done safely.</p><p>Our ultimate goal is to not injure anyone.</p>',
		slideAudio: 'MasterBrand/8.mp3',
		slideMedia: 'MasterBrand/8.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Scope and Purpose',
		slideText: '<p>The MBCI <b><i>Contractor Safety Program</i></b> and training requirements apply to all contractors, subcontractors, suppliers and vendors at any MBCI location who perform construction, maintenance, repair, renovation, or other specialty work.</p><p>The purpose of this training is to make you aware of the rules and regulations in place at MBCI, as well as the potential hazards you may face while working at any MBCI facility.</p><p>This training does <b>NOT</b> replace your health and safety training, and it is <b>NOT</b> intended to be all-inclusive.</p>',
		slideAudio: 'MasterBrand/9.mp3',
		slideMedia: 'MasterBrand/9.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p>Contractors are required to develop, implement, and manage their own written health and safety program.  MBCI may request a copy of any contractor\'s written plan.</p><p>Contractor health and safety programs shall provide for the safety of their employees as well as that of subcontractors, suppliers, vendors and others working in conjunction with the contractor.</p><p>The MBCI <b><i>Contractor Safety Policy</i></b> is supplementary to the health and safety programs of each contractor.  No liability is assumed by MBCI by reason of our policy.</p>',
		slideAudio: 'MasterBrand/10.mp3',
		slideMedia: 'MasterBrand/10.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p><span class ="highlight">While on site at any MBCI location, contractors must comply with all applicable national, federal, state, regional and local health and safety regulations and codes, as well as MBCI company policies.</span></p><p>MBCI company policies are available upon request.</p>',
		slideAudio: 'MasterBrand/11.mp3',
		slideMedia: 'MasterBrand/11.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	// First question and remediation slide goes here
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p><span class ="highlight">Contractors are responsible for providing their employees with all training related to applicable national, federal, state, regional and local health and safety regulations and codes that apply to their activities and the products and services they provide to MBCI.</span></p><p>MBCI may request copies of contractor training documentation.</p><p>Contractors are responsible for having all required licenses, permits and certifications necessary to fulfill the contract in compliance with all applicable laws and regulations.</p>',
		slideAudio: 'MasterBrand/12.mp3',
		slideMedia: 'MasterBrand/12.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	// Second question and remediation slide goes here
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p>Each contractor is responsible for designating an onsite Contractor Safety Representative (CSR), whose responsibilities will include:<ul><li>Enforcing and correcting all safety deficiencies in a timely manner</li><li>Enforcing compliance with the requirements of the MBCI <b><i>Contractor Safety Policy</i></b></li><li>Enforcing compliance with all other applicable governmental standards, practices and policies</li><li>Being physically present at the worksite at all times, and</li><li>Advancing personnel safety and the prevention of injuries</li></ul></p>',
		slideAudio: 'MasterBrand/13.mp3',
		slideMedia: 'MasterBrand/13.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p>The CSR shall be a "competent person", which is defined as one who is:<ul><li>Capable of identifying existing and predictable hazards in the surroundings or working conditions which are unsanitary, hazardous or dangerous to employees, and</li><li>Authorized to take prompt corrective measures to eliminate these types of hazards and working conditions</li></ul></p>',
		slideAudio: 'MasterBrand/14.mp3',
		slideMedia: 'MasterBrand/14.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p><font color="#86381A"><b>Additional Contractor Responsibilities</b></font></p><p>Contractors are required to <b>take immediate action on safety concerns</b>.  Failure to do so may constitute a breach of contract by a contractor and result in termination of the contract.</p><p>Specifically, each contractor has agreed in their contract to "provide and maintain the necessary precautions and safeguards for the safety of all persons on the site."</p><p>A contractor\'s response to safety concerns will, at a minimum, be taken into consideration in the awarding of future contracts.</p>',
		slideAudio: 'MasterBrand/15.mp3',
		slideMedia: 'MasterBrand/15.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p><font color="#86381A"><b>Additional Contractor Responsibilities</b></font></p><p>MBCI retains the right to call a job shut-down to correct or abate any observed safety hazard or to terminate a contractor\'s work if imminent danger exists or if the contractor fails to take prompt and appropriate action to correct or abate any safety hazard.</p><p>When contacting MBCI EHS personnel for workplace safety concerns, the first and second points of contact are MBCI site EHS personnel, and MBCI corporate EHS personnel.</p>',
		slideAudio: 'MasterBrand/16.mp3',
		slideMedia: 'MasterBrand/16.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p><font color="#86381A"><b>Additional Contractor Responsibilities</b></font></p><p>The contractor is also responsible for advising and notifying MBCI site EHS personnel of any unique hazards presented by the contractor\'s work, or of any hazards found or discovered during the course of work.</p>',
		slideAudio: 'MasterBrand/17.mp3',
		slideMedia: 'MasterBrand/17.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Personal Conduct',
		slideText: '<p><font color="#86381A"><b>Substance Abuse</b></font></p><p>MBCI has a <b><i>Drug Free Workplace and Substance Abuse Policy</i></b> designed to establish and maintain a work environment free from the effects of drugs and alcohol.</p><p>In our policy, employees are required to report to work free of the effects of alcohol, drugs and the misuse of medication; and the distribution, possession, sale, transfer and use of drugs or alcohol in the workplace is prohibited.</p><p>Contractors are responsible for compliance with this policy.</p>',
		slideAudio: 'MasterBrand/18.mp3',
		slideMedia: 'MasterBrand/18.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Personal Conduct',
		slideText: '<p><font color="#86381A"><b>Workplace Harassment and Retaliation</b></font>MBCI has a policy on <b><i>Equal Opportunity Employment, Workplace Harassment and Retaliation</i></b> designed to establish and maintain a work environment free of discrimination, harassment and retaliation.</p><p>Employees are not to be subjected to sexual harassment or discrimination on the basis of race, color, gender, religion, national origin, age, disability, veteran status, citizenship or any other legally protected status.</p><p>Contractors are responsible for compliance with this policy; non-compliance with this policy is a violation of both company policy and the law.</p>',
		slideAudio: 'MasterBrand/19.mp3',
		slideMedia: 'MasterBrand/19.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Personal Conduct',
		slideText: '<p><font color="#86381A"><b>Solicitation and Distribution</b></font><p><p>MBCI has a policy prohibiting the solicitation and distribution of literature, designed to establish:<ul><li>Limitations on efforts to solicit employees at work, and</li><li>Guidelines for the distribution of literature</li></ul></p><p>The solicitation of employees and the distribution of literature during working times are prohibited.  Contractors are responsible for compliance with this policy.</p>',
		slideAudio: 'MasterBrand/20.mp3',
		slideMedia: 'MasterBrand/20.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Personal Conduct',
		slideText: '<p>Other Personal Conduct rules include:</p><span class="highlight"><p><ul><li>Horseplay: reckless conduct and behavior is strictly prohibited</li><li>Weapons: the possession of any weapon in violation of state or local regulations is prohibited on MBCI property, and</li><li>Smoking: smoking is not allowed, except in designated smoking areas; such areas will be communicated during pre-job reviews</li></ul></p></span><p>Non-compliance with MBCI personal conduct rules is a serious offense and can lead to dismissal from the worksite.</p>',
		slideAudio: 'MasterBrand/21.mp3',
		slideMedia: 'MasterBrand/21.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	// Question 3
	{
		slideTitle: 'Plant Rules and Information',
		slideText: '<p><font color="#86381A"><b>Driving and Parking</b></font></p><p><span class="highlight">Contractors are to park in designated areas only, and not in MBCI employee parking areas unless authorized by MBCI site EHS personnel.</p><p>All contractor employees driving a vehicle on MBCI property must have a valid driver\'s license.</p><p>Unless otherwise posted, the maximum speed limit in MBCI parking lots is <b>5 mph</b>; the maximum speed limit inside any part of an MBCI building is <b>3 mph</b>.</span></p>',
		slideAudio: 'MasterBrand/22.mp3',
		slideMedia: 'MasterBrand/22.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	// Question 4
	{
		slideTitle: 'Plant Rules and Information',
		slideText: '<p><font color="#86381A"><b>Driving and Parking</b></font></p><p>Contractor vehicles <b>may not be parked</b> in MBCI buildings.  Subject to prior approval from MBCI site EHS personnel only, contractor vehicles may only be driven into MBCI buildings to pick up or drop off supplies or equipment.</p><p>Contractors are to avoid operating any vehicle during shift change or break time.</p><p>If left unattended, contractor vehicles must be shut off with the emergency brake set.</p>',
		slideAudio: 'MasterBrand/23.mp3',
		slideMedia: 'MasterBrand/23.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Plant Rules and Information',
		slideText: '<p><font color="#86381A"><b>Driving and Parking</b></font></p><p>Fuel tank valves must be closed when parking contractor propane vehicles for extended time periods.  Forks must be lowered to the ground when fork trucks are left unattended.</p><p>Contractor gasoline powered lift trucks are prohibited within MBCI buildings.</p>',
		slideAudio: 'MasterBrand/24.mp3',
		slideMedia: 'MasterBrand/24.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Conclusion',
		slideText: '<p>You\'ve now completed MBCI\'s Contractor Safety Training.</p><p>Prior to your work assignment at MBCI, you must meet with the MBCI site Project Manager who will provide you with additional details on site-specific pre-work health and safety procedures.  Please do not forget to perform this critical action.</p><p>Congratulations on successfully completing this course.  Please click on the forward button to get credit for taking this course.</p>',
		slideAudio: 'MasterBrand/25.mp3',
		slideMedia: 'MasterBrand/25.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	}
];

var question_slides = [
	// After course slide 11
	{
		quizQuestion: 'Contractor employees are responsible for compliance with all applicable governmental standards, practices, and policies, and the MBCI company policies.',
		quizAnswer: 'True',
		templateType: 'question',
		referenceSlide: 11
	},
	// Before course slide 12
	// After course slide 12
	{
		quizQuestion: 'Who is responsible to provide you with all training related to applicable national, federal, state, regional and local health and safety regulations and codes?',
		quizChoice: [ 'Your company', 'Gatefeed', 'MBCI', 'OSHA' ],
		quizAnswer: [ 1 ],
		templateType: 'question',
		referenceSlide: 12
	},
	// Before course slide 13
	// After course slide 21
	{
		quizQuestion: 'Which of the following personal conduct behaviors is not permissible on MBCI property?',
		quizChoice: [ 'Horseplay', 'Smoking in other than designated areas', 'Weapons possession in violation of state or local regulation', 'All of the above' ],
		quizAnswer: [ 4 ],
		templateType: 'question',
		referenceSlide: 21
	},
	// Before course slide 22
	// After course slide 22
	{
		quizQuestion: 'Which of the following statements regarding MBCI driving and parking rules is true?',
		quizChoice: [ 'Contractors will park in designated areas only and not in MBCI employee parking', 'All contractor employees driving a vehicle on MBCI property must have a valid driver\'s license', 'The maximum speed limit in MBCI parking lots is 5 mph, unless otherwise posted', 'All of the above' ],
		quizAnswer: [ 4 ],
		templateType: 'question',
		referenceSlide: 22
	}
	// Before course slide 23

];
/*
var remediation_slides = [
	// After course slide 11
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p><font color="#FF0000">While on site at any MBCI location, contractors must comply with all applicable national, federal, state, regional and local health and safety regulations and codes, as well as MBCI company policies.</font></p><p>MBCI company policies are available upon request.</p>',
		slideAudio: 'MasterBrand/11.mp3',
		slideMedia: 'MasterBrand/11.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	// Before course slide 12
	// After course slide 12
	{
		slideTitle: 'Contractor Responsibilities',
		slideText: '<p><font color="#FF0000">Contractors are responsible for providing their employees with all training related to applicable national, federal, state, regional and local health and safety regulations and codes that apply to their activities and the products and services they provide to MBCI.</font>  MBCI may request copies of contractor training documentation.</p><p>Contractors are responsible for having all required licenses, permits and certifications necessary to fulfill the contract in compliance with all applicable laws and regulations.</p>',
		slideAudio: 'MasterBrand/12.mp3',
		slideMedia: 'MasterBrand/12.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	// Before course slide 13
	// After course slide 21
	{
		slideTitle: 'Personal Conduct',
		slideText: '<p>Other Personal Conduct rules include:</p><ul><li><font color="#FF0000">Horseplay: reckless conduct and behavior is strictly prohibited</font></li><li><font color="#FF0000">Weapons: the possession of any weapon in violation of state or local regulations is prohibited on MBCI property, and</font></li><li><font color="#FF0000">Smoking: smoking is not allowed, except in designated smoking areas; such areas will be communicated during pre-job reviews</font></li></ul></p><p>Non-compliance with MBCI personal conduct rules is a serious offense and can lead to dismissal from the worksite.</p>',
		slideAudio: 'MasterBrand/21.mp3',
		slideMedia: 'MasterBrand/21.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	// Before course slide 22
	// After course slide 22
	{
		slideTitle: 'Plant Rules and Information',
		slideText: '<p><font color="#86381A"><b>Driving and Parking</b></font></p><p><font color="#FF0000">Contractors are to park in designated areas only, and not in MBCI employee parking areas unless authorized by MBCI site EHS personnel.</p><p>All contractor employees driving a vehicle on MBCI property must have a valid driver\'s license.</p><p>Unless otherwise posted, the maximum speed limit in MBCI parking lots is <b>5 mph</b>; the maximum speed limit inside any part of an MBCI building is <b>3 mph</b>.</font></p>',
		slideAudio: 'MasterBrand/22.mp3',
		slideMedia: 'MasterBrand/22.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	}
	// Before course slide 23
];
*/
var slides_mapper = {
	11: [1],
	12: [2],
	21: [3],
	22: [4]
};

var question_index = Number( slides_mapper[ current_slide_num ] ) - 1;

/* Pagenation */

// For total number of course slides
var total_course_num;
	total_course_num = 0;

// Bookmarked slide number
var bookmarked;
	bookmarked = 0;	

// Showing the current course slide number
var current_course_num;
	if ( bookmarked == 0 ) {
		current_course_num = 0;
	}
	else {
		current_course_num = bookmarked;
	}
	
// Current slide number
var current_slide_num;
if ( bookmarked == 0 ) {
	current_slide_num = 0;	
}
else {
	current_slide_num = bookmarked;
}
// For admin when wanting to jump to desired page
document.getElementById('jump-button').addEventListener("click", function(){
	
	// if page number entered was greater than max pg num
	if ( jump_page.value > slides.length ){
		current_slide_num = prompt("Please enter the page number " + slides.length + " or below.") - 1;
	}
	// when proper page number entered
	else {
		current_slide_num = jump_page.value - 1;		
	}
	
	if ( slides_mapper.hasOwnProperty( current_slide_num ) ) {
		bookmarked = jump_page.value;
	}
	else {
		bookmarked = jump_page.value - 1;
	}	

	slides_work();
	pg_current.innerHTML = current_slide_num + 1;
});

// Counting the total number of question slides
var total_question_num;
	total_question_num = 0;

// Showing the current question slide number
var current_question_num;
	current_question_num = 0;

// Counting the total number of course slides
var i = 0;
	while ( i < slides.length - 1 ) {
		if ( slides[ i ].templateType == 'basic' && slides[ i ].slideType !== 'remediation' || slides[ i ].templateType == 'video' ) {
			total_course_num++;
			i++;
		}
		else {
			i++;
		}
}

// Showing the course slide total and current numbers
pg_current.innerHTML = current_slide_num + 1;
pg_total.innerHTML = total_course_num + 1;

// Back Button
document.getElementById('pg-back').addEventListener("click", function(){
	prev_slide();
	slides_work();
});

// Going back to previous slide
function prev_slide() {
	question_index = Number( slides_mapper[ current_slide_num ] ) - 1;
		if ( current_slide_num > 0 ) {
		current_slide_num--;
		pg_current.innerHTML = current_slide_num + 1;
		/*
		if ( slides[ current_slide_num ].templateType !== 'question' || slides[ current_slide_num ].slideType !== 'remediation' ) {
			current_course_num--;
			
		}
		while ( slides[ current_slide_num ].templateType === 'question' || slides[ current_slide_num ].slideType === 'remediation' ) {
			current_slide_num--;
		}*/	
	}
}

// Next Button
document.getElementById('pg-next').addEventListener("click", function(){
	next_slide();
	slides_work();
	pg_current.innerHTML = current_slide_num + 1;
});

// Moving to next slide
function next_slide() {
	// Below if statement is to prevent page going to exceed the max slide number
	if ( current_slide_num < slides.length - 1 ) {

		if ( bookmarked > current_slide_num + 1 ) {
			current_slide_num++;
			current_course_num++;
			pg_current.innerHTML = current_course_num + 1;
			console.log("case1")
			// Question slides
			while ( slides_mapper.hasOwnProperty( current_slide_num ) && ! bookmarked > current_slide_num ) {
				current_slide_num++;
				console.log("case2");
			}
		}
		else {
			// Question slides
			if ( slides_mapper.hasOwnProperty( current_slide_num ) ) {
				current_slide_num++;
				console.log("case3");				
			}
			// Remediation slides				
			else if ( slide_text.classList.contains('remediation') ) {
				current_slide_num++;
				slide_text.removeAttribute('class', 'remediation');
				decreaseBookmark();
				console.log("case4");
			}
			else {
				current_slide_num++;
				current_course_num++;
				console.log("case5");
				pg_current.innerHTML = current_slide_num + 1;
			}
		}

	}	
}
/*
function skip_next_slide() {
	console.log("current_slide_num" + current_slide_num);
	current_slide_num = current_slide_num + 1;
	bookmarked = bookmarked + 1;
	console.log("current_slide_num" + current_slide_num);
}
*/

// Bookmarking
function writeBookmark() {
	if ( bookmarked === 0 || bookmarked <= current_slide_num || !slides_mapper.hasOwnProperty( current_slide_num ) ) {
		bookmarked++;
		//updateProgress();
	}
}
// Using only after remediation slide
function decreaseBookmark() {
	bookmarked = bookmarked - 1;
	//updateProgress();
}

// Adding style when auto play button gets updated
auto_play_input.addEventListener("click", function() {
	if ( auto_play_input.checked ) {
		document.getElementById('auto-play').setAttribute("class", "on-state");

		// When audio is not playing and auto run is set ON, move slide to next	
		if ( media_audio.duration < 0 || media_audio.paused ) {
			next_slide();
			slides_work();
			pg_current.innerHTML = current_slide_num + 1;
		}
	}
	else {
		document.getElementById('auto-play').removeAttribute("class", "on-state");
	}	
});

/* Course Contents */

// Get user name
document.getElementById('user-name').innerHTML = user_name;

function slides_work() {
	// Make jump page input num blank after once showing it
	if ( current_slide_num != jump_page.value - 1 ) {
		jump_page.value = null;
	}	
	if ( bookmarked > current_slide_num || !slides_mapper.hasOwnProperty( current_slide_num ) || auto_play_input.checked ) {
		course_load();
	}
	else {
		questions_load();
	}
}


// Creating Course Contents
function course_load() {

	// This block is to accommodate next button particularly on video slide gets disabled initially on iPhone
	if ( slides[ current_slide_num ].templateType === 'basic' || 'video' ) {
		// disable next btn when no bookmarked pg or current slide num is smaller than bookmarked
		if ( current_slide_num >= bookmarked ) {
			document.getElementById('pg-next').setAttribute('disabled', true);
		}
	}

	// Getting text
	document.getElementsByTagName('h3')[0].innerHTML = slides[ current_slide_num ].slideTitle;
	slide_text.innerHTML = slides[ current_slide_num ].slideText;

	var body_media = document.getElementById('bodymedia');
	var media_default = body_media.childNodes[ current_slide_num ];

	// Removing image from previous page
	while ( body_media.hasChildNodes() ) {
		body_media.removeChild(body_media.firstChild);
	}

	// Loading Basic Template
	if ( slides[ current_slide_num ].templateType === 'basic' ) {
		// Choosing a proper template
		template_video.removeAttribute("class", "display-yes");
		template_question.removeAttribute("class", "display-yes");

		// Show the page controller
		document.getElementById('pg-buttons').removeAttribute("class", "display-no");

		var media_img = document.createElement('img');
		media_img.setAttribute('src', slides[ current_slide_num ].slideMedia);
		//media_img.setAttribute("width", "304");
		//media_img.setAttribute("width", "228");
		media_img.setAttribute('alt', slides[ current_slide_num ].slideMediaAlt);
		body_media.appendChild(media_img);

		// Inserting an audio file
		media_audio.src = slides[ current_slide_num ].slideAudio;
	}
	// Hiding Pagenation and Showing the Embeded Txt in HTML
	document.getElementById('pagenation').removeAttribute("class", "display-no");
	document.getElementById('pg-question').removeAttribute("class", "display-yes");
	document.getElementById('pg-remediation').removeAttribute("class", "display-yes");

	// Loading Video Template
	if ( slides[ current_slide_num ].templateType === 'video' ) {
		// Removing audio that has run previously
		media_audio.pause();
		// Choosing a proper template	
		tempplate_basic.setAttribute("class", "display-no"); 
		template_video.setAttribute("class", "display-yes block-padding");
		template_question.setAttribute("class", "display-no");   
		media_video.src = slides[ current_slide_num ].slideVideo;

		// Show the page controller
		document.getElementById('pg-buttons').removeAttribute("class", "display-no");

		// Hiding Pagenation and Showing the Embeded Txt in HTML
		document.getElementById('pagenation').removeAttribute("class", "display-no");
		document.getElementById('pg-question').removeAttribute("class", "display-yes");
	}
	else {
		tempplate_basic.removeAttribute("class", "display-no");
		template_video.removeAttribute("class", "display-yes");
	}
		
	// Removing video that has run previously just in case
	if ( slides[ current_slide_num ].templateType != 'video' ) {
		media_video.pause();
	}

	// Disable back button when current page is 1
	if ( current_slide_num == 0 ) {
		document.getElementById('pg-back').setAttribute("disabled", true);
	}
	// Enable back button when current page is NOT 1
	else {
		document.getElementById('pg-back').removeAttribute('disabled');
	}
}

function questions_load() {
	question_index = Number( slides_mapper[ current_slide_num ] ) - 1;

	// Loading Question Template
	if ( question_slides[ question_index ].templateType === 'question' ) {
	// Removing audio that has run previously
	media_audio.pause();

	// Choosing a proper template	
	tempplate_basic.setAttribute("class", "display-no"); 
	template_video.removeAttribute("class", "display-yes");
	template_question.setAttribute("class", "display-yes block-padding");
	//media_video.src = slides[ slides_num ].slideVideo;

	// Clearing previously selected answer
	var quizInput = document.querySelectorAll("input[name='tfQuestion'], input[name='4choices']");
	var index;
	for ( index = 0; index < quizInput.length; index++ ) {
		quizInput[index].checked = false;
	}

	// Hide the page controller
	document.getElementById('pg-buttons').setAttribute("class", "display-no");

	// Remove the result of previous question
	document.getElementById('question-result').setAttribute("class", "display-no");
	document.getElementById('question-correct').setAttribute("class", "display-no");
	document.getElementById('question-wrong').setAttribute("class", "display-no");

	// Getting an appropriate question form

	if ( typeof ( question_slides[ question_index ].quizChoice ) == 'undefined' ) {
		// Load the True or False form	
		document.getElementById('question-tf').setAttribute("class", "display-yes"); 
		document.getElementById('question-multi').removeAttribute("class", "display-yes");
	}
	else {
		// Load the 4 choices form
		document.getElementById('question-tf').removeAttribute("class", "display-yes"); 
		document.getElementById('question-multi').setAttribute("class", "display-yes");

		// Generating unique random numbers between 1 and 4 except for 2 phrases
		var maxNum
		if ( question_slides[ question_index ].quizQuestion == "None of the above" || "All of the above" ) {
			maxNum = 3;
			q_4_input.value = 4;
			q_4_span.innerHTML = question_slides[ question_index ].quizChoice[3];
		}
		else {
			maxNum = 4;
			q_4_input.value = randomNum[3];
			q_4_span.innerHTML = question_slides[ question_index ].quizChoice[ randomNum[3] - 1 ];
		}

		var randomNum = []
		while(randomNum.length < maxNum){
			var randomnumber = Math.ceil( Math.random() * maxNum )
			if( randomNum.indexOf( randomnumber ) > -1 ) continue;
				randomNum[ randomNum.length ] = randomnumber;
			}

			q_1_input.value = randomNum[0];
			q_2_input.value = randomNum[1];
			q_3_input.value = randomNum[2];
			//q_4_input.value = randomNum[3];

			q_1_span.innerHTML = question_slides[ question_index ].quizChoice[ randomNum[0] - 1 ];
			q_2_span.innerHTML = question_slides[ question_index ].quizChoice[ randomNum[1] - 1 ];
			q_3_span.innerHTML = question_slides[ question_index ].quizChoice[ randomNum[2] - 1 ];
			//q_4_span.innerHTML = question_slides[ question_index ].quizChoice[ randomNum[3] - 1 ];

		}

		// Getting Question
		question_q.innerHTML = question_slides[ question_index ].quizQuestion;
			
			/* The below was dvelopping the Select All that Apply type of answers. JS needs to be tweak a bit more when answer slots shuffle to make it work  */
			// Getting all selected values from quiz multi
			/*
			var selectedMulti = [];

			document.getElementById('multi-submit').addEventListener("click", function(){
				$("input:checkbox[type=checkbox]:checked").each(function(){
		    		selectedMulti.push($(this).val());
				});	


			if ( selectedMulti.length == slides[ slides_num ].quizAnswer.length ) {

				var a;
				var i;

				for ( a = 0; a < slides[ slides_num ].quizAnswer.length; a++ ) {
					for ( i = 0; i < slides[ slides_num ].quizAnswer.length; i++ ) {
						if ( slides[ slides_num ].quizAnswer[a] == selectedMulti[i] ) {
							// let's go next page
							console.log("You've gotten it!");
						}
						else {
							console.log("Wrong answer..");
						}
					}
				}
			}
			else {
				console.log( "Wrong num of answer!" );
			}

			});
			*/

		// Hiding Pagenation and Showing the Embeded Txt in HTML
		document.getElementById('pagenation').setAttribute("class", "display-no");
		document.getElementById('pg-question').setAttribute("class", "display-yes");
		document.getElementById('pg-remediation').removeAttribute("class", "display-yes");
	}
	else {
		//tempplate_basic.removeAttribute("class", "display-no");
		//template_video.removeAttribute("class", "display-yes");
	}

}
/*
function remediation_load() {
	
	// This block is to accommodate next button particularly on video slide gets disabled initially on iPhone
	if ( slides[ current_slide_num ].templateType === 'basic' || 'video' || 'remediation' ) {
		// disable next btn when no bookmarked pg or current slide num is smaller than bookmarked
		if ( current_slide_num >= bookmarked ) {
			document.getElementById('pg-next').setAttribute('disabled', true);
		}
	}

		// Getting text
		document.getElementsByTagName('h3')[0].innerHTML = remediation_slides[ question_index ].slideTitle;
		slide_text.innerHTML = remediation_slides[ question_index ].slideText;

		var body_media = document.getElementById('bodymedia');
		var media_default = body_media.childNodes[ question_index ];

		// Removing image from previous page
	    while (body_media.hasChildNodes()) {
	        body_media.removeChild(body_media.firstChild);
	    }

		// Loading Basic Template
		if ( remediation_slides[ question_index ].templateType === 'basic' ) {
			// Choosing a proper template
			template_video.removeAttribute("class", "display-yes");
			template_question.removeAttribute("class", "display-yes");

			// Show the page controller
			document.getElementById('pg-buttons').removeAttribute("class", "display-no");

			var media_img = document.createElement('img');
			media_img.setAttribute('src', remediation_slides[ question_index ].slideMedia);
			//media_img.setAttribute("width", "304");
			//media_img.setAttribute("width", "228");
			media_img.setAttribute('alt', remediation_slides[ question_index ].slideMediaAlt);
			body_media.appendChild(media_img);

			// Inserting an audio file
			media_audio.src = remediation_slides[ question_index ].slideAudio;

			// Hiding Pagenation and Showing the Embeded Txt in HTML
			if ( remediation_slides[ question_index ].slideType === 'remediation' ) {
				document.getElementById('pagenation').setAttribute("class", "display-no");
				document.getElementById('pg-remediation').setAttribute("class", "display-yes");
				document.getElementById('pg-question').removeAttribute("class", "display-yes");
			}
			else {
				document.getElementById('pagenation').removeAttribute("class", "display-no");
				document.getElementById('pg-question').removeAttribute("class", "display-yes");
				document.getElementById('pg-remediation').removeAttribute("class", "display-yes");
			}
		}

		// Loading Video Template
		if ( remediation_slides[ question_index ].templateType === 'video' ) {
			// Removing audio that has run previously
			media_audio.pause();
			// Choosing a proper template	
			tempplate_basic.setAttribute("class", "display-no"); 
			template_video.setAttribute("class", "display-yes block-padding");
			template_question.setAttribute("class", "display-no");   
			media_video.src = remediation_slides[ question_index ].slideVideo;

			// Show the page controller
			document.getElementById('pg-buttons').removeAttribute("class", "display-no");

			// Hiding Pagenation and Showing the Embeded Txt in HTML
			document.getElementById('pagenation').removeAttribute("class", "display-no");
			document.getElementById('pg-question').removeAttribute("class", "display-yes");
		}
		else {
			tempplate_basic.removeAttribute("class", "display-no");
			template_video.removeAttribute("class", "display-yes");
		}
		
		// Removing video that has run previously just in case
		if ( remediation_slides[ question_index ].templateType != 'video' ) {
			media_video.pause();
		}

		// Disable back button when current page is 1 and remediation slids
		if ( current_slide_num == 0 || remediation_slides[ question_index ].slideType === 'remediation' ) {
			document.getElementById('pg-back').setAttribute("disabled", true);
		}
		// Enable back button when current page is NOT 1
		else {
			document.getElementById('pg-back').removeAttribute('disabled');
		}
}
*/

// Checking if the submitted answer is correct or wrong
document.getElementById('question-submit').addEventListener("click", function(){
	var selectedAnswer = $('input:checked').val();
	question_index = Number( slides_mapper[ current_slide_num ] ) - 1;
	if ( question_slides[ question_index ].quizAnswer == selectedAnswer ) {
		// Correct answer
		document.getElementById('question-result').setAttribute("class", "display-yes");
		document.getElementById('question-correct').removeAttribute("class", "display-no");
		document.getElementById('question-wrong').setAttribute("class", "display-no");

		// Moving to the next slide by skipping remediation slide after 2 seconds
		setTimeout(function(){
			//writeBookmark();
			// Showing the current course slide numbers
			pg_current.innerHTML = current_slide_num + 1;
			course_load();

		}, 1500);
	}
	else {
		// Wropg-replayng answer
		document.getElementById('question-result').setAttribute("class", "display-yes");
		document.getElementById('question-correct').setAttribute("class", "display-no");
		document.getElementById('question-wrong').removeAttribute("class", "display-no");

		// Moving to the next (remediation) slide after 2 seconds
		setTimeout(function(){
			current_slide_num = question_slides[ question_index ].referenceSlide - 1;
			pg_current.innerHTML = current_slide_num + 1;
			decreaseBookmark();
			course_load();
			slide_text.setAttribute("class", "remediation");
			// The below 3 lines are to replace the pagenation label
			document.getElementById('pagenation').setAttribute("class", "display-no");
			document.getElementById('pg-question').removeAttribute("class", "display-yes");
			document.getElementById('pg-remediation').setAttribute("class", "display-yes");
		}, 1500);
	}
});

// Replay Button
document.getElementById("pg-replay").addEventListener("click", function(){
	if ( slides[ current_slide_num ].templateType === 'video' ) {
		media_video.pause();
		media_video.currentTime = 0.0;
		media_video.play(); 	
	}
	else {
		media_audio.pause();
		media_audio.currentTime = 0.0;
		media_audio.play();
	}	
});

/* Next Button Enabled/ Disabled until audio or video ends */
$(media_audio).on('playing', function() {
	$("#state-play").css({"display": "none"});
	$("#state-repeat").css({"display": "block"});
	console.log('media_audio on playing, current_slide_num ', current_slide_num, '  bookmarked: ', bookmarked);

	// disable next btn when no bookmarked pg or current slide num is smaller than bookmarked
	if ( bookmarked === 0 || current_slide_num >= bookmarked ) {
		document.getElementById('pg-next').setAttribute('disabled', true);
		console.log('case disabled true');
	}
	else {
		document.getElementById('pg-next').removeAttribute('disabled');
		console.log('case disabled removed');
	}
});
$(media_audio).on('ended', function() {
	$("#state-play").css({"display": "block"});
	$("#state-repeat").css({"display": "none"});

   // enable button
   document.getElementById('pg-next').removeAttribute('disabled');
   writeBookmark(); 	

	// auto play on
	if ( auto_play_input.checked ) {
		next_slide();
		slides_work();
		pg_current.innerHTML = current_slide_num + 1;
	}
});

$(media_video).on('playing', function() {
	$("#state-play").css({"display": "none"});
	$("#state-repeat").css({"display": "block"});

	// disable next btn if current page num is greater than bookmarked page num
	if ( bookmarked === 0 || current_slide_num >= bookmarked ) {
		document.getElementById('pg-next').setAttribute('disabled', true);
	}
	else {
		document.getElementById('pg-next').removeAttribute('disabled');
	}
});

$(media_video).on('ended', function() {
	$("#state-play").css({"display": "block"});
	$("#state-repeat").css({"display": "none"});

   // enable button
   document.getElementById('pg-next').removeAttribute('disabled');
   writeBookmark();

	// auto play on
	if ( auto_play_input.checked ) {
		next_slide();
		slides_work();
		pg_current.innerHTML = current_slide_num + 1;
	}
});

$(media_audio).on('pause', function() {
	$("#state-play").css({"display": "block"});
	$("#state-repeat").css({"display": "none"});
});
$(media_video).on('pause', function() {
	$("#state-play").css({"display": "block"});
	$("#state-repeat").css({"display": "none"});
});




// Sowing progress bar
/*
function updateProgress() {
	$("#compled-bar").css({"width": bookmarked / pg_total.innerHTML * 100 + "%"});
}
*/

// Invoking course contents when page loaded
slides_work();