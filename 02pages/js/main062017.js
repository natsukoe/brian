'use strict';

var course_title = "ADM - Cidar Rapids (Adding more letters to test for a longer name), Iowa";
var sub_title = "Safety Orientation";
var chapter_name = "Alpha Course Template Level 1";
var header_color = "#b1273e";
var header_txt_color = "#fff";
var user_name = 'Admin';
//var user_name = 'Curt';

// Selecting each title
document.getElementsByTagName('h1')[0].innerHTML = course_title;
document.getElementsByTagName('h2')[0].innerHTML = sub_title;
document.getElementsByTagName('h3')[0].innerHTML = chapter_name;

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
		quizQuestion: 'Is Hungarian Indo-European language?',
		quizAnswer: 'False',
		templateType: 'question'
	},
	{
		slideText: 'remediation slide 1 <font color="#026332"><b>ADM Safe Work Plan</b></font><p>Designated <font color="#f00">ADM personnel must approve all permits.</font>  All signatures must be obtained PRIOR to allowing the work to commence.</p>  <p>Each item on a permit must be initialed as it is completed and/or verified.  Involved personnel in the SWP include authorizing crew members, atmospheric tester, work supervisor, fire watch, attendant, entrant, and operation representative.</p>  <p>Please follow the instructions for the SWP for its usage and approvals.  See your ADM representative before proceeding.</p>',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/adm-2.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		quizQuestion: 'Wich of the following country belongs to EU?',
		quizChoice: [ 'UK', 'Russia', 'Turkey', 'All of the above' ],
		quizAnswer: [ 1 ],
		templateType: 'question'
	},
	{
		slideText: 'remediation slide 2 <font color="#026332"><b>ADM Safe Work Plan</b></font><p>Designated <font color="#f00">ADM personnel must approve all permits.</font>  All signatures must be obtained PRIOR to allowing the work to commence.</p>  <p>Each item on a permit must be initialed as it is completed and/or verified.  Involved personnel in the SWP include authorizing crew members, atmospheric tester, work supervisor, fire watch, attendant, entrant, and operation representative.</p>  <p>Please follow the instructions for the SWP for its usage and approvals.  See your ADM representative before proceeding.</p>',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/adm-2.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideText: '<p>Page 3 of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/eclipse.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/adm-1.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 3',
		templateType: 'basic'
	},
	{
		slideText: '<p>Page 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'images/450-blue.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 4',
		templateType: 'basic'
	},
	{
		quizQuestion: 'Where would you think the best city to live in USA?',
		quizChoice: [ 'Accident, Maryland', 'Embarrass, Minnesota', 'Chicago, Illinois', 'Cut And Shoot, Texas' ],
		quizAnswer: [ 3 ],
		templateType: 'question'
	},
	{
		slideText: 'remediation slide 3 <font color="#026332"><b>ADM Safe Work Plan</b></font><p>Designated <font color="#f00">ADM personnel must approve all permits.</font>  All signatures must be obtained PRIOR to allowing the work to commence.</p>  <p>Each item on a permit must be initialed as it is completed and/or verified.  Involved personnel in the SWP include authorizing crew members, atmospheric tester, work supervisor, fire watch, attendant, entrant, and operation representative.</p>  <p>Please follow the instructions for the SWP for its usage and approvals.  See your ADM representative before proceeding.</p>',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/adm-2.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic',
		slideType: 'remediation'
	},
	{
		slideText: 'Page 5: <font color="#026332"><b>ADM Safe Work Plan</b></font><p>Designated ADM personnel must approve all permits.  All signatures must be obtained PRIOR to allowing the work to commence.</p>  <p>Each item on a permit must be initialed as it is completed and/or verified.  Involved personnel in the SWP include authorizing crew members, atmospheric tester, work supervisor, fire watch, attendant, entrant, and operation representative.</p>  <p>Please follow the instructions for the SWP for its usage and approvals.  See your ADM representative before proceeding.</p>',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/adm-2.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic'
	},
	{
		slideText: 'Page 6: Safe Work, <font color="#026332"><b>Barricades</b></font><br />Barricades should be installed around most work areas, to make everyone entering the area aware of potential hazards and material movement.<br />The type of barricading will depend on the hazards; examples may include excavations, holes in floors, leaks, overhead work, areas where structures such as handrails or stairs have been removed, and all temporary work areas where tripping or falling hazards exist.<br />Barricading should not block emergency equipment such as: fire extinguishers, fire hoses, safety showers, and eyewashes.<br />',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'images/450-pink.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 6',
		templateType: 'basic'
	},
	{
		slideText: '<p>Page 7: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
		slideAudio: 'CarusGroup_Peru_Contractor_Course/eclipse.mp3',
		slideMedia: 'CarusGroup_Peru_Contractor_Course/adm-3.jpg',	
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
	// Getting text
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