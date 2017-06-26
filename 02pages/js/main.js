'use strict';

var course_title = "Carus Group";
var sub_title = "Peru, Illinois";
var header_color = "#e3721b"; //#b1273e
var header_txt_color = "#fff";
var user_name = 'Admin';
//var user_name = 'Curt';

// Selecting each title
document.getElementsByTagName('h1')[0].innerHTML = course_title;
document.getElementsByTagName('h2')[0].innerHTML = sub_title;

// Applying a custom header and text color
$("#masterhead").css({"background":header_color});
$("#masterhead").css({"color":header_txt_color});

// If user is admin add controls as property on audio and media tag
if ( user_name == 'Admin' ) {
	document.getElementById('admin-audio').setAttribute("controls", true);
	document.getElementById('slide-video').setAttribute("controls", true);
}
else {
	document.getElementById('admin-audio').removeAttribute("controls");
	document.getElementById('slide-video').removeAttribute("controls");
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

var slides = [




	{
		slideTitle: 'Introduction',
		slideText: '<p>Welcome to Carus Group\'s, Peru Illinois headquarters.</p><p>The employees with Carus are committed to maintaining a safe work environment. At our headquarters, safety is a condition of employment. We ask that you always look for safety hazards, be aware of your environment and be your brother\'s keeper.</p><p>SAFETY IS FIRST - NO EXCEPTIONS!!!</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/1.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/1.jpg',	
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},

	{
		slideVideo: 'business1/firstMilkyWay.mp4',
		templateType: 'video'
	},

	{
		slideTitle: 'Introduction',
		slideText: '<p>The policies and procedures set forth in this orientation establish our expectations for Contractor work behavior.</p><p>Failure to adhere to these expectations is considered a violation and will be dealt with accordingly.</p> <p>If you are unsure about anything, please ask your Carus Group representative.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/2.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/2.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Introduction',
		slideText: '<p>This orientation does not replace the safety, health and environmental training you have received from your company and is not intended to be all-inclusive.</p><p>Contractors are responsible for their behavior and unsafe actions will not be tolerated!</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/3.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/3.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>At the successful completion of this orientation you will be issued a Carus Group-approved Contractors ID badge.</p><p>You must have this card on your person, prominently displayed whenever you do work at our facility.</p><p>This Contractors ID badge is to be returned to Carus Group at the conclusion of you contracted tasks.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/4.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/4.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>The training you will receive today is valid for one year.</p><p>Failure to stay current with the safety certification requirements could result in the termination of your contract and cost your company future work with Carus Group.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/5.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/5.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>As a contract employee, park your personal vehicle in the main parking lot and enter (and exit) the facility through an authorized exit.  An authorized entrance/exit is one where the exit is equipped with a card reader.</p><p>You are required to "Badge in" when you enter the building and required to "Badge out" when you leave the building.</p><p>This will assure that you will be accounted for in the event of an emergency.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/6.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/6.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'You are required to "Badge in" when you enter the building and "Badge out" when you leave the building for any reason.',
		quizAnswer: 'True',
		templateType: 'question'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>As a contract employee, park your personal vehicle in the main parking lot and enter (and exit) the facility through an authorized exit.  An authorized entrance/exit is one where the exit is equipped with a card reader.</p><p><font color="#FF0000">You are required to "Badge in" when you enter the building and required to "Badge out" when you leave the building.</font></p><p>This will assure that you will be accounted for in the event of an emergency.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/6.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/6.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>Please be advised that all posted signs (warning or otherwise) and audio warnings in use at our facility use the English language.</p><p>It is the Contractor\'s responsibility to ensure that all of its workers are fluent in reading and speaking English in order to provide the safest work environment possible.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/7.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/7.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>You are expected to keep your work area clean at all times.</p><p>Tools, materials and equipment must be cleaned up at the end of each shift.  Under no circumstances should tools or equipment block access to safety or emergency equipment or exits.</p><p>Contracting firms are responsible for removing all waste materials, including materials that may be considered hazardous, consistent with the current regulations in force.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/8.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/8.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>Chemicals must be approved by Carus prior to being brought on site.</p><p>Chemicals and contaminated materials may <b>not</b> be washed down the drain or placed into general waste receptacles unless authorized by the local site EHSS Department.</p><p>Please see your Carus Group representative to coordinate the proper disposal of these items.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/9.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/9.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>Smoking is permitted only in approved areas outside of the Carus headquarters building; all areas within the building are designated "No Smoking.” </p><p>See your Carus Group representative for approved smoking areas if needed.  Smoking material must be disposed of in approved containers.</p>  <p>Food and beverage consumption is limited to authorized areas only and not in areas where a spill or a breakage would create a safety and/or health hazard.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/10.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/10.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'Smoking is not permitted in the Peru Headquarters building.',
		quizAnswer: 'True',
		templateType: 'question'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p><font color="#FF0000">Smoking is permitted only in approved areas outside of the Carus headquarters building; all areas within the building are designated "No Smoking."</font></p> <p>See your Carus Group representative for approved smoking areas if needed.  Smoking material must be disposed of in approved containers.</p><p>Food and beverage consumption is limited to authorized areas only and not in areas where a spill or a breakage would create a safety and/or health hazard.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/10.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/10.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>Cameras are not allowed on facility grounds without written permission from a Carus Group representative.</p><p>The possession or use of firearms, ammunition, explosives, alcoholic beverages or illegal drugs is strictly prohibited.</p> <p>Concealed deadly weapons are also strictly prohibited.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/11.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/11.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>All injuries, no matter how minor, <b>must</b> be reported to your Carus Group representative immediately.</p><p>An accident report is to be filled out for each incident.</p><p>Your Carus Group representative, or member of management, must be notified immediately when an ambulance or other vehicle is called to assist in an emergency.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/12.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/12.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'All injuries, no matter how minor, must be reported to your Carus Group representative _____.',
		quizChoice: [ 'Immediately', 'By the end of the work week', 'By the end of the day', 'When you get an opportunity' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideText: '<p><font color="#FF0000">All injuries, no matter how minor, <b>must</b> be reported to your Carus Group representative immediately.</font></p><p>An accident report is to be filled out for each incident.</p><p>Your Carus Group representative, or member of management, must be notified immediately when an ambulance or other vehicle is called to assist in an emergency.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/12.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/12.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>You must report any safety hazards or conditions or near-miss incidents to your supervisor as well as your Carus Group representative.</p>  <p>It is Carus Group\'s requirement that any employee or contractor who observes unsafe work practices request that the work STOP immediately, and notify their Carus Group supervisor or contact.</p><p>Safety is everyone\'s responsibility.  Keep your eyes and mind on your task while on site, and ask questions if there is any doubt.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/13.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/13.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'Carus Group employee is observed to be violating established work procedures.  You should:',
		quizChoice: [ 'Request that the work stop, and notify a supervisor', 'Not worry about it as it is not your problem', 'Walk away and look for a supervisor to intervene', 'Take good notes so that it can be discussed at the next safety meeting' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideTitle: 'General Information',
		slideText: '<p>You must report any safety hazards or conditions or near-miss incidents to your supervisor as well as your Carus Group representative.</p><p><font color="#FF0000">It is Carus Group\'s requirement that any employee or contractor who observes unsafe work practices request that the work STOP immediately, and notify their Carus Group supervisor or contact.</font></p><p>Safety is everyone\'s responsibility.  Keep your eyes and mind on your task while on site, and ask questions if there is any doubt.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/13.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/13.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Personal Protective Equipment (PPE)',
		slideText: '<p>Contractors performing work at the Carus Group headquarters are expected to arrive for their job “Fit for Duty,” including having all appropriate PPE for the contracted job.</p><p>Examples include: safety glasses, gloves fit for the task, appropriate footwear, hearing protection, and specialized PPE such as burning goggles, and respirators, etc.</p><p>Failure to wear the required PPE will result in action on the part of Carus up to expulsion from the site.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/14.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/14.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Fall Protection',
		slideText: '<p>Contractors must provide their own personal fall protection equipment.</p><p><font color="#FF0000">Personal fall protection equipment (as required by OSHA) is required when working at heights over <b>4 feet</b> or where temporary or permanent fall protection is not in place.</font>   At a minimum, a full body harness with shock absorbing lanyard is required.</p><p>Contractors must provide fall protection barricades, covers, or rails, etc. to protect any openings, pits or holes that have resulted from their work.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/15.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/15.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Fall Protection',
		slideText: '<p>Examples of conditions where personal fall protection will be required include work performed on:</p><p><ul><li>Manlifts or personnel lifts of any type (in this situation, the fall protection equipment must be secured to approved anchor points on the lift)</li><li>Sloping roofs</li><li>Any suspended platform or stage</li><li>Flat roofs without handrails or parapets within 8 feet of the edge or opening</li></ul></p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/16.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/16.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Fall Protection',
		slideText: '<p>Examples of conditions where personal fall protection will be required include work performed on:</p><p><ul><li>Elevated positions without permanent fall protection</li><li>Any scaffold with incomplete handrails or decking, or</li><li>Any scaffold during assembly</li></ul></p><p>Please note: all tie-off points must be capable of withstanding 5000 pounds of force per employee.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/17.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/17.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Fall Protection',
		slideText: '<p>The Contractor must furnish all tools and equipment.  They must be in good condition and used in a safe manner.</p><p>All tools and equipment, including extension cords, must be inspected prior to use; defective tools or equipment may not be used and must be removed from the site.</p><p>Contract employees will not be permitted to use Carus Group tools or equipment unless authorized by their Carus Group representative.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/18.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/18.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Tools and Equipment',
		slideText: '<p>Ground Fault Circuit Interrupters (GFCIs) must be used on all electric tools, extension cords, and portable electric equipment.</p><p>They must be in good condition and used in a safe manner.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/19.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/19.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Ladders',
		slideText: '<p>Carus Group insists on the use of fiberglass ladders; wood or metal ladders are prohibited.  All ladders should be inspected prior to use.</p><p>You are required to follow all rules and regulations for the safe use of ladders.  Do not overload ladders.  Always maintain 3 points of contact when using a ladder.</p><p>Use ladders for their intended purpose only.  Under no circumstance should a chair, other furniture, drums or pails be used as a ladder.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/20.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/20.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'Carus Group insists on the use of metal ladders on site.',
		quizAnswer: 'False',
		templateType: 'question'
	},
	{
		slideTitle: 'Ladders',
		slideText: '<p><font color="#FF0000">Carus Group insists on the use of fiberglass ladders; wood or metal ladders are prohibited.</font>  All ladders should be inspected prior to use.</p><p>You are required to follow all rules and regulations for the safe use of ladders.  Do not overload ladders.  Always maintain 3 points of contact when using a ladder.</p><p>Use ladders for their intended purpose only.  Under no circumstance should a chair, other furniture, drums or pails be used as a ladder.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/20.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/20.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Ladders',
		slideText: '<p>All straight and extension ladders must be adequately tied-off or held securely in place with spreaders locked in place.  Follow the "4 to 1" rule when using a straight ladder or extension ladder.</p><p>Stepladders must be fully opened and set level on all four feet with spreaders locked in place.  Never use a stepladder as a straight ladder.</p><p>No materials or tools should be placed on steps or the platform.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/21.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/21.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Scaffolding',
		slideText: '<p>All scaffolds must be erected level and plumb, on a firm base, and meet applicable OSHA Standards.  They must be rated to handle five times the working load.</p><p>Always inspect scaffolding before working from it to insure that:</p><p><ul><li>Handrails, midrails, toeboards, and decking are in place</li><li>All wheels are locked, if it is a moveable scaffold, and that</li><li>Locking pins are in place at each joint</li></ul></p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/22.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/22.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Barricades',
		slideText: '<p>Barricades or covers are required around excavations, holes, or openings in floors, roofs and elevated platforms.</p><p>They must also be used for overhead work, underground work, in areas where it is necessary to warn or protect people of potential hazards, or to separate the construction area.</p><p>Barricades must be about 42 inches high, neat, level, and constantly maintained.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/23.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/23.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'Which of the following statements regarding barricades at this facility are true?',
		quizChoice: [ 'Barricades must be about 42 inches high, neat, level and constantly maintained', 'Barricades are required around excavations, holes or openings in floors, roofs and elevated platforms', 'Barricades must be used wherever necessary to warn or protect people of potential hazards', 'All of the above' ],
		quizAnswer: [ 4 ],
		templateType: 'question'
	},
	{
		slideTitle: 'Barricades',
		slideText: '<p><font color="#FF0000">Barricades or covers are required around excavations, holes, or openings in floors, roofs and elevated platforms.</p><p>They must also be used for overhead work, underground work, in areas where it is necessary to warn or protect people of potential hazards, or to separate the construction area.</p><p>Barricades must be about 42 inches high, neat, level, and constantly maintained.</font></p> ',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/23.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/23.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Utilities',
		slideText: '<p>Your Carus Group representative must be notified before attaching any hose or other equipment to any site utility, such as steam, water, or air, etc.</p><p>At no time, should you hook any hose or other equipment to the potable (city) water line without the permission of your Carus Group representative.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/24.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/24.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Confined Space Entry',
		slideText: '<p>A <b><i>Confined Space Entry Permit</i></b> is required for any job that involves entering a confined space such as a vessel, tank, or other space where the atmospheric conditions must be monitored prior to and during occupancy.</p><p>A <b><i>Confined Space Entry Permit</i></b> is required for all confined space entry.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/25.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/25.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'A _____ is required for any job that involves entering a confined space such as a vessel or a tank.',
		quizChoice: [ '<b><i>Confined Space Entry Permit</i></b>', '<b><i>Lockout/Tagout Permt</i></b>', '<b><i>Line Breaking Permit</i></b>', '<b><i>Hot Work Permit</i></b>' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideTitle: 'Confined Space Entry',
		slideText: '<p><font color="#FF0000">A <b><i>Confined Space Entry Permit</i></b> is required for any job that involves entering a confined space such as a vessel, tank, or other space where the atmospheric conditions must be monitored prior to and during occupancy.</font></p><p>A <b><i>Confined Space Entry Permit</i></b> is required for all confined space entry.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/25.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/25.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Confined Space Entry',
		slideText: '<p>Your Carus Group representative (or a qualified designee) will indicate when the scope of work requires entry into a confined space and will issue this permit.</p><p>Properly display the <b><i>Confined Space Entry Permit</i></b> at the entrance to the confined space.</p><p>A Carus Group representative will review any specific procedures for a particular confined space to be entered.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/26.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/26.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Lockout/Tagout',
		slideText: '<p>Carus Group maintains a strict lockout/tagout policy.  This practice applies to electrical, pneumatic and hydraulic equipment as well as piping systems.</p><p>Many pre-established written procedures are available and will be followed for most common lockout situations.</p><p>If a pre-established written procedure is not available, one may be developed for the lockout.</p> ',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/27.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/27.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Lockout/Tagout',
		slideText: '<p>During a lockout at this facility, a Carus Group employee will be responsible for placing locks on all energy sources along with the contracting employee.</p><p>There will always be at a minimum two locks required, one for the contractor and one for the Carus Group employee.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/28.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/28.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Lockout/Tagout',
		slideText: '<p>Contractors are encouraged to bring their own locks.  Contractor locks must be installed on the equipment before work is initiated.  In the absence of specific contracting company locks, maintenance locks can be obtained and coordinated through Maintenance.</p><p>Contractor locks must include the name of the company on the lock (and the craft for multi-craft companies).</p><p>Only a contractor company representative can remove a contractor lock.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/29.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/29.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Lockout/Tagout',
		slideText: '<p>Only the person who attaches their lock to a piece of equipment may remove it; you are not permitted to remove someone else\'s lock or tag.</p><p>Should a lock need to be cut, only an authorized contractor employee, in coordination with the building Maintenance Department, can have the lock removed.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/30.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/30.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'Who may remove a lock placed for lockout/tagout of a piece of equipment?',
		quizChoice: [ 'Only the person who attached the lock', 'Anyone', 'Any Carus employee', 'Any Supervisor' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideTitle: 'Lockout/Tagout',
		slideText: '<p><font color="#FF0000">Only the person who attaches their lock to a piece of equipment may remove it; you are not permitted to remove someone else\'s lock or tag.</font></p><p>Should a lock need to be cut, only an authorized contractor employee, in coordination with the building Maintenance Department, can have the lock removed.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/30.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/30.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p>All Contractors must be trained in the specific hazards present at this facility.</p><p>A list of all hazardous chemicals used on site is present and available in the Maintenance Department.</p><p>Each chemical has its own Safety Data Sheet (SDS) describing all aspects of the chemical.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/31.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/31.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'All SDSs are kept where?',
		quizChoice: [ 'Maintenance Department', 'CEO\'s office', 'EHSS Department', 'Receptionist' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p>All Contractors must be trained in the specific hazards present at this facility.</p><p><font color="#FF0000">A list of all hazardous chemicals used on site is present and available in the Maintenance Department. </font></p><p>Each chemical has its own Safety Data Sheet (SDS) describing all aspects of the chemical.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/31.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/31.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p>All Contractors must be trained in the specific hazards present at this facility.</p><p>A list of all hazardous chemicals used on site is present and available in the Maintenance Department.</p><p>Each chemical has its own Safety Data Sheet (SDS) describing all aspects of the chemical.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/31.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/31.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p>HazCom requires that all containers of hazardous chemicals entering or leaving the plant be properly labeled.</p><p>These labels must include: the identity of the chemical, the appropriate hazard warnings, and the name and address of the manufacturer or importer of the chemical.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/32.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/32.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p>All chemicals brought on site must be pre-approved by the EHSS Department and your Carus Group representative.</p><p>An SDS for each chemical must be on site prior to the arrival of the chemical.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/33.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/33.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'All chemicals brought on site must be pre-approved by EHSS and your Carus Group representative, and _____ must be on site prior to the arrival of the chemical.',
		quizChoice: [ 'An SDS', 'An original container', 'A Bill of Lading', 'A label' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p><font color="#FF0000">All chemicals brought on site must be pre-approved by the EHSS Department and your Carus Group representative.</p><p>An SDS for each chemical must be on site prior to the arrival of the chemical.</font></p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/33.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/33.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p>Asbestos is a mineral made up of microscopic fibers.</p><p>Asbestos consisting of fibers that become airborne when disturbed is considered "friable" and can present a breathing hazard.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/34.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/34.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p>Old asbestos insulating material exists in isolated areas of the building, away from any normal day-to-day activity.  It has been encapsulated in such a way as to prevent any potential exposure.</p><p>Any and all operations that require work on piping must be coordinated with the Maintenance Department to ensure that the asbestos is not disturbed.</p><p>Only trained and licensed contractors can handle asbestos.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/35.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/35.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'Asbestos, which is present in some areas of the building, may only be handled by trained and licensed contractors.',
		quizAnswer: 'False',
		templateType: 'question'
	},
	{
		slideTitle: 'Hazard Communication (HazCom)',
		slideText: '<p><font color="#FF0000">Old asbestos insulating material exists in isolated areas of the building, away from any normal day-to-day activity.</font>  It has been encapsulated in such a way as to prevent any potential exposure.</p><p>Any and all operations that require work on piping must be coordinated with the Maintenance Department to ensure that the asbestos is not disturbed.</p><p><font color="#FF0000">Only trained and licensed contractors can handle asbestos.</font></p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/35.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/35.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Hot Work',
		slideText: '<p>You must obtain a Carus <b><i>Hot Work Permit</i></b> prior to starting any welding jobs.</p><p>Appropriate fire extinguishers and a 30-minute fire watch must also be provided for all hot work.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/36.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/36.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Hot Work',
		slideText: '<p>Contractors must provide approved welding blinds made of a fire resistant material when welding.</p><p>These blinds must be placed so as to shield all passersby from exposure to welding flash.</p><p>Welding blinds must also protect the immediate environment of people and facilities from welding slag, sparks, and flying particles from grinding or chipping.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/37.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/37.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>It is important that you know how to act during an emergency while working here at the Carus Group\'s Peru facility.</p><p>You should be familiar with the location of all emergency equipment, evacuation routes, and assembly areas before you begin your job.</p><p>Your Carus Group contact can help you with this important information.  If you do not know, ask!</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/38.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/38.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>If you need to report a life-threatening emergency, you are required to notify your Carus Group representative and pick up the nearest phone and dial <b>8-911</b>.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/39.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/39.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'If you need to report a life-threatening emergency, pick up the nearest phone and dial _____.',
		quizChoice: [ '8-911', '711', '6060', '311' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p><font color="#FF0000">If you need to report a life-threatening emergency, you are required to notify your Carus Group representative and pick up the nearest phone and dial <b>8-911</b>.</font></p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/39.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/39.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>All contractors are required to immediately evacuate the site to the designated muster point when the evacuation alarm sounds.</p><p>Specific training for Headquarter-related evacuations and emergency response will be provided by the appropriate Carus Group representative prior to any work being performed on site.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/40.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/40.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>First aid cabinets are located within the building.</p><p>Carus Group is not responsible for first aid treatment for contractors.</p><p>All injuries, however, should be reported to the appropriate Carus Group personnel.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/41.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/41.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>If an emergency (such as a serious injury, fire, or health, safety or security issue) requires immediate assistance or response, the appropriate Carus Group personnel must be notified.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/42.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/42.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>If an emergency alarm is activated you are required to do the following:</p><p><ul><li>Shut down all tools and equipment</li><li>Follow all instructions given by Carus Group personnel and consistent with the evacuation training received</li><li>Walk immediately to the \"muster area,\" and</li><li>Remain in the muster area for further instructions</li></ul></p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/43.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/43.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		quizQuestion: 'Which of the following should you NOT do if an emergency alarm is activated?',
		quizChoice: [ 'Finish whatever you are doing and then evacuate', 'Shut down all tools and equipment', 'Follow all instructions you were provided during training', 'Walk immediately to the “muster area' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p><font color="#FF0000">If an emergency alarm is activated you are required to do the following:</font></p><p><ul><li><font color="#FF0000">Shut down all tools and equipment</font></li><li><font color="#FF0000">Follow all instructions given by Carus Group personnel and consistent with the evacuation training received</font></li><li><font color="#FF0000">Walk immediately to the "muster area,"</font> and</li><li>Remain in the muster area for further instructions</li></ul></p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/43.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/43.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>Building maps displaying evacuation routes, fire extinguisher locations, and assembly areas are located throughout this facility.</p><p>You should familiarize yourself with all possible evacuation routes from your work area as well as the nearest assembly areas.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/44.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/44.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>Be sure to ask your Carus Group representative if you are unsure about evacuation routes or muster area locations.</p><p>It is important that you report to the muster area in case of an evacuation.</p><p>Do not leave the muster area until you have been accounted for.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/45.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/45.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Emergency Response',
		slideText: '<p>Fire alarms, hydrants, fire extinguishers and exits are plainly marked and must be kept clear of all obstructions.</p> ',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/46.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/46.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideTitle: 'Conclusion',
		slideText: '<p>Once again, welcome to Carus Groups’ Corporate Headquarters.</p><p>Your safety, as well as that of our employees and the community, is our top priority.  We are working hard on our safety record and hope that you realize how important safety is to us.</p><p>It should be just as important to you - your health and safety may depend on it!</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/47.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/47.jpg',
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	}
];

/* Pagenation */

// For total number of course slides
var total_course_num;
	total_course_num = 0;

// Showing the current course slide number
var current_course_num;
	current_course_num = 0;

// Current slide number
var current_slide_num;
	current_slide_num = 0;

// Bookmarked slide number
var bookmarked;
	bookmarked = 0;

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
pg_current.innerHTML = current_course_num + 1;
pg_total.innerHTML = total_course_num + 1;

// Back Button
document.getElementById('pg-back').addEventListener("click", function(){
	prev_slide();
	slides_work();
});

// Going back to previous slide
function prev_slide() {
	if ( current_slide_num > 0 ) {
		current_slide_num--;
		if ( slides[ current_slide_num ].templateType !== 'question' || slides[ current_slide_num ].slideType !== 'remediation' ) {
			current_course_num--;
			pg_current.innerHTML = current_course_num + 1;
		}
		while ( slides[ current_slide_num ].templateType === 'question' || slides[ current_slide_num ].slideType === 'remediation' ) {
			current_slide_num--;
		}	
	}
}

// Next Button
document.getElementById('pg-next').addEventListener("click", function(){
	next_slide();
	slides_work();
});

// Moving to next slide
function next_slide() {
	// Below if statement is to prevent page going to exceed the max slide number
	if ( current_slide_num < slides.length - 1 ) {
		if ( bookmarked > current_slide_num + 1 ) {
			current_slide_num++;
			current_course_num++;
			pg_current.innerHTML = current_course_num + 1;
			while ( slides[ current_slide_num ].templateType === 'question' || slides[ current_slide_num ].slideType === 'remediation' ) {
				current_slide_num++;
			}
		}
		else {
			if ( slides[ current_slide_num ].templateType === 'question' ) {
				current_slide_num++;
				writeBookmark();
			}
			else if ( slides[ current_slide_num ].slideType === 'remediation' ) {
				current_slide_num--;
				decreaseBookmark();
			}
			else {
				current_slide_num++;
				current_course_num++;	
				pg_current.innerHTML = current_course_num + 1;
			}
		}
	}	
}

function skip_next_slide() {
	current_slide_num = current_slide_num + 2;
	bookmarked = bookmarked + 2;
}

// Bookmarking
function writeBookmark() {
	if ( bookmarked === 0 || bookmarked <= current_slide_num ) {
		bookmarked++;
		//updateProgress();
	}
}
// Using only after remediation slide
function decreaseBookmark() {
	bookmarked = bookmarked - 2;
	//updateProgress();
}

/* Course Contents */

// Get user name
document.getElementById('user-name').innerHTML = user_name;

// Creating Course Contents
function slides_work() {


// This block is to accommodate next button gets disabled initially on iPhone
if ( slides[ current_slide_num ].templateType === 'video' ) {
	// disable next btn when no bookmarked pg or current slide num is smaller than bookmarked
	if ( current_slide_num >= bookmarked ) {
		document.getElementById('pg-next').setAttribute('disabled', true);
		console.log('case disabled true');
	}
}




	
	// Getting text
	document.getElementsByTagName('h3')[0].innerHTML = slides[ current_slide_num ].slideTitle;
	slide_text.innerHTML = slides[ current_slide_num ].slideText;

	var body_media = document.getElementById('bodymedia');
	var media_default = body_media.childNodes[ current_slide_num ];

	// Removing image from previous page
    while (body_media.hasChildNodes()) {
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

		// Hiding Pagenation and Showing the Embeded Txt in HTML
		if (slides[ current_slide_num ].slideType === 'remediation') {
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

	// Disable back button when current page is 1 and remediation slids
	if ( current_slide_num == 0 || slides[ current_slide_num ].slideType === 'remediation' ) {
		document.getElementById('pg-back').setAttribute("disabled", true);
	}
	// Enable back button when current page is NOT 1
	else {
		document.getElementById('pg-back').removeAttribute('disabled');
	}

	// Loading Question Template
	if ( slides[ current_slide_num ].templateType === 'question' ) {
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
	    for (index = 0; index < quizInput.length; index++) {
	        quizInput[index].checked = false;
	    }

		// Hide the page controller
		document.getElementById('pg-buttons').setAttribute("class", "display-no");

		// Remove the result of previous question
		document.getElementById('question-result').setAttribute("class", "display-no");
		document.getElementById('question-correct').setAttribute("class", "display-no");
		document.getElementById('question-wrong').setAttribute("class", "display-no");

		// Getting an appropriate question form

		if ( typeof(slides[ current_slide_num ].quizChoice) == 'undefined' ) {
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
			if ( slides[ current_slide_num ].quizQuestion == "None of the above" || "All of the above" ) {
				maxNum = 3;
				q_4_input.value = 4;
				q_4_span.innerHTML = slides[ current_slide_num ].quizChoice[3];

			}
			else {
				maxNum = 4;
				q_4_input.value = randomNum[3];
				q_4_span.innerHTML = slides[ current_slide_num ].quizChoice[ randomNum[3] - 1 ];
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

			q_1_span.innerHTML = slides[ current_slide_num ].quizChoice[ randomNum[0] - 1 ];
			q_2_span.innerHTML = slides[ current_slide_num ].quizChoice[ randomNum[1] - 1 ];
			q_3_span.innerHTML = slides[ current_slide_num ].quizChoice[ randomNum[2] - 1 ];
			//q_4_span.innerHTML = slides[ slides_num ].quizChoice[ randomNum[3] - 1 ];

		}

		// Getting Question
		question_q.innerHTML = slides[ current_slide_num ].quizQuestion;
		
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

// Checking if the submitted answer is correct or wrong
document.getElementById('question-submit').addEventListener("click", function(){
	var selectedAnswer = $('input:checked').val();

	if ( slides[ current_slide_num ].quizAnswer == selectedAnswer ) {
		console.log(slides[ current_slide_num ].quizAnswer);
		console.log(selectedAnswer);
		// Correct answer
		document.getElementById('question-result').setAttribute("class", "display-yes");
		document.getElementById('question-correct').removeAttribute("class", "display-no");
		document.getElementById('question-wrong').setAttribute("class", "display-no");

		// Moving to the next slide by skipping remediation slide after 2 seconds
		setTimeout(function(){
			// current_slide_num++;
			// bookmarked++;
			// next_slide();
			skip_next_slide();
			slides_work();
		}, 1500);
	}
	else {
		console.log(slides[ current_slide_num ].quizAnswer);
		console.log(selectedAnswer);
		// Wrong answer
		document.getElementById('question-result').setAttribute("class", "display-yes");
		document.getElementById('question-correct').setAttribute("class", "display-no");
		document.getElementById('question-wrong').removeAttribute("class", "display-no");

		// Moving to the next (remediation) slide after 2 seconds
		setTimeout(function(){
			next_slide();
			slides_work();
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