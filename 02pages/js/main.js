'use strict';

var course_title = "ADM - Cidar Rapids (Adding more letters to test for a longer name), Iowa";
var sub_title = "Safety Orientation";
var chapter_name = "Alpha Course Template Level 1";
var header_color = "#b1273e";
var user_name = 'Curt';

// Selecting each title
document.getElementsByTagName('h1')[0].innerHTML = course_title;
document.getElementsByTagName('h2')[0].innerHTML = sub_title;
document.getElementsByTagName('h3')[0].innerHTML = chapter_name;

// Applying a custom header color
$("#masterhead").css({"background":header_color});

var pg_current = document.getElementById('pg-current');
var pg_total = document.getElementById('pg-total');
var slide_text = document.getElementById('slide-text');

var media_audio = document.getElementById('slide-audio');
var tempplate_basic = document.getElementById('template-basic');
var template_video = document.getElementById('template-video');
var media_video = document.getElementById('slide-video');

var slides = [
	{
		slideText: '<p>Page 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
		slideAudio: 'business1/eclipse.mp3',
		slideMedia: 'business1/adm-3.jpg',	
		slideMediaAlt: 'Image of SlideMedia',
		templateType: 'basic'
	},
	{
		slideVideo: 'business1/firstMilkyWay.mp4',
		templateType: 'video'
	},
	{
		slideText: '<p>Page 3 of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
		slideAudio: 'business1/eclipse.mp3',
		slideMedia: 'business1/adm-1.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 3',
		templateType: 'basic'
	},
	{
		slideText: '<p>Page 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'business1/man-in-office.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 4',
		templateType: 'basic'
	},
	{
		slideText: 'Page 5: <font color="#026332"><b>ADM Safe Work Plan</b></font><p>Designated ADM personnel must approve all permits.  All signatures must be obtained PRIOR to allowing the work to commence.</p>  <p>Each item on a permit must be initialed as it is completed and/or verified.  Involved personnel in the SWP include authorizing crew members, atmospheric tester, work supervisor, fire watch, attendant, entrant, and operation representative.</p>  <p>Please follow the instructions for the SWP for its usage and approvals.  See your ADM representative before proceeding.</p>',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'business1/adm-2.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 5',
		templateType: 'basic'
	},
	{
		slideText: 'Safe Work, <font color="#026332"><b>Barricades</b></font><br />Barricades should be installed around most work areas, to make everyone entering the area aware of potential hazards and material movement.<br />The type of barricading will depend on the hazards; examples may include excavations, holes in floors, leaks, overhead work, areas where structures such as handrails or stairs have been removed, and all temporary work areas where tripping or falling hazards exist.<br />Barricading should not block emergency equipment such as: fire extinguishers, fire hoses, safety showers, and eyewashes.<br />',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'business1/books.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 6',
		templateType: 'basic'
	}
];

// Pagenation
var current_pg_num;

pg_current.innerHTML = 1;
pg_total.innerHTML = slides.length;

// Back Button
document.getElementById("pg-back").addEventListener("click", function(){	
	if ( pg_current.innerHTML > 1 ) {
	  	pg_current.innerHTML--;
	}
	else {
		pg_current.innerHTML = pg_total.innerHTML;
	}
	slides_num();
});

// Next Button
document.getElementById("pg-next").addEventListener("click", function(){	
	if ( pg_current.innerHTML < pg_total.innerHTML ) {
		pg_current.innerHTML++;
		// Disable next button after clicking
		document.getElementById('pg-next').setAttribute("disabled", true);
	}
	else {
		pg_current.innerHTML = 1;
	}
	slides_num();
});

/* Course Contents */

// Get user name
document.getElementById('user-name').innerHTML = user_name;
// Invoke course contents when page loaded
slides_num();

// Loading Course Contents
function slides_num() {

	// Get text
	slide_text.innerHTML = slides[ pg_current.innerHTML - 1 ].slideText;

	var body_media = document.getElementById('bodymedia');
	var media_default = body_media.childNodes[ pg_current.innerHTML - 1 ];

	// Removing image from previous page
    while (body_media.hasChildNodes()) {
        body_media.removeChild(body_media.firstChild);
    }

	// Inserting a new image
	if ( slides[ pg_current.innerHTML - 1 ].templateType === 'basic' ) {
		var media_img = document.createElement('img');
		media_img.setAttribute('src', slides[ pg_current.innerHTML - 1 ].slideMedia);
		//media_img.setAttribute("width", "304");
		//media_img.setAttribute("width", "228");
		media_img.setAttribute('alt', slides[ pg_current.innerHTML - 1 ].slideMediaAlt);
		body_media.appendChild(media_img);

		// Inserting an audio file
		media_audio.src = slides[ pg_current.innerHTML - 1 ].slideAudio;
	}

	// Insderting a new video
	if ( slides[ pg_current.innerHTML - 1 ].templateType === 'video' ) {
		// Removing audio that has run previously
		media_audio.pause();
		// Choosing a proper template	
		tempplate_basic.setAttribute("class", "display-no"); 
		template_video.setAttribute("class", "display-yes block-padding"); 
		media_video.src = slides[ pg_current.innerHTML - 1 ].slideVideo;
	}
	else {
		tempplate_basic.removeAttribute("class", "display-no");
		template_video.removeAttribute("class", "display-yes");
	}
	
	// Removing video that has run previously
	if ( slides[ pg_current.innerHTML - 1 ].templateType != 'video' ) {
		media_video.pause();
	}

	// Disable back button when current page is 1
	if ( pg_current.innerHTML == 1 ) {
		document.getElementById('pg-back').setAttribute("disabled", true);
	}
	// Enable back button when current page is NOT 1
	else {
		document.getElementById('pg-back').removeAttribute('disabled');
	}

}

// Replay Button
document.getElementById("pg-replay").addEventListener("click", function(){
	if ( slides[ pg_current.innerHTML - 1 ].templateType === 'video' ) {
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
	// disable next btn if current page num is greater than bookmarked page num
	if ( bookmarked === 0 || pg_current.innerHTML > bookmarked ) {
		document.getElementById('pg-next').setAttribute('disabled', true);
	}
	else {
		document.getElementById('pg-next').removeAttribute('disabled');
	}
});
$(media_audio).on('ended', function() {
   // enable button
   document.getElementById('pg-next').removeAttribute('disabled');
   writeBookmark();  
});

$(media_video).on('playing', function() {
	// disable next btn if current page num is greater than bookmarked page num
	if ( bookmarked === 0 || pg_current.innerHTML > bookmarked ) {
		document.getElementById('pg-next').setAttribute('disabled', true);
	}
	else {
		document.getElementById('pg-next').removeAttribute('disabled');
	}
});
$(media_video).on('ended', function() {
   // enable button
   document.getElementById('pg-next').removeAttribute('disabled');
   writeBookmark();
});


/* Bookmark */
var bookmarked;
bookmarked = 0;
function seeBookmark() {
	console.log("current bookmarked pg: " + bookmarked);
}

function writeBookmark() {
	if ( bookmarked === 0 || bookmarked < pg_current.innerHTML ) {
		bookmarked++;
		updateProgress();
		seeBookmark();
	}
}

// Sowing progress bar
function updateProgress() {
	$("#compled-bar").css({"width": bookmarked / pg_total.innerHTML * 100 + "%"});
}

/*
function progressAnimation() {
  var elem = document.getElementById('compled-bar');   
  var width = bookmarked / pg_total.innerHTML * 100;
  console.log(width);
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
*/

/* Make controller float when page is scrolled down 
$(window).scroll(function(e){ 
  var $el = $('#audio-controller'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 30 && !isPositionFixed){ 
    $('#audio-controller').css({'position': 'fixed', 'top': '0', 'background': '#c0c0c0', 'width': '100%', 'left': '-10px'}); 
  }
  if ($(this).scrollTop() < 30 && isPositionFixed)
  {
    $('#audio-controller').css({'position': 'static', 'background': 'none', 'max-width': '450px'}); 
  } 
});
*/

