'use strict';

var course_title = "Alpha Course Template Level 1";
var header_color = "#b1273e";

var pg_current = document.getElementById('pg-current');
var pg_total = document.getElementById('pg-total');
var slide_text = document.getElementById('slide-text');

		// course content will be found in the slides variable
		// it is an array containing arrays
		// each array inside represents a slide
		// Key: [Template1, Text, Image, Audio]
		// Key: [Template2, Video]
		// Key: [Template3, Text]
		// Note: Images/Audio are dead links, replace with your own content for now
		//       Make sure content is in same directory as this html page
		//       Then update the text here with filenames.

var slidesEX = [
		["Template1","Welcome to the Course","introduction.jpg","introduction.mp3"],
		["Template2","introductionVideo.mpg"],
		["Template1","The content here would be the third slide", "3.jpg","3.mp3"]
		["Template3","This is the next slide in the course."]
];

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

/*
	var slides = [
{
slideTitle:'ohgehohoge',
slideType:'video1',
slideContent:{
videoFile:'hogeho.mp3'
}
},
{
slideTitle:'hogehoge2',
slideType:'normal1',
slideContent:{
slideBody:'<h3>foo bar</h3>',
slideBg:'hogehoge.jpg'
}
},
{
slideTitle:'hogehoge2',
slideType:'image',
slideContent:{
slideMainImg:'hogehoge.jpg',
slideImgCapture:'super cool image!!'
}
}
];

*/

// Replacing a course title
document.getElementsByTagName('h1')[0].innerHTML = course_title;

// Applying a custom header color
$("#masterhead").css({"background":header_color});

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
	}
	else {
		pg_current.innerHTML = 1;
	}

	slides_num();
});

// Replay Button
document.getElementById("pg-replay").addEventListener("click", function(){
	if ( slides[ pg_current.innerHTML - 1 ].templateType === 'video' ) {
		document.getElementById('slide-video').play(); 	
	}
	else {
		document.getElementById('slide-audio').play(); 
	}	
});

/* Course Contents */

// Course Contents when Page Loaded
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
	var media_img = document.createElement('img');
	media_img.setAttribute('src', slides[ pg_current.innerHTML - 1 ].slideMedia);
	//media_img.setAttribute("width", "304");
	//media_img.setAttribute("width", "228");
	media_img.setAttribute('alt', slides[ pg_current.innerHTML - 1 ].slideMediaAlt);
	body_media.appendChild(media_img);

	// Inserting an audio file
	var media_audio = document.getElementById('slide-audio');
	media_audio.src = slides[ pg_current.innerHTML - 1 ].slideAudio;

	// Insderting a new video
	var tempplate_basic = document.getElementById('template-basic');
	var template_video = document.getElementById('template-video');
	var media_video = document.getElementById('slide-video');

	if ( slides[ pg_current.innerHTML - 1 ].templateType === 'video' ) {	
		tempplate_basic.setAttribute("class", "display-no"); 
		template_video.setAttribute("class", "display-yes block-padding"); 
		media_video.src = slides[ pg_current.innerHTML - 1 ].slideVideo;
	}
	else {
		tempplate_basic.removeAttribute("class", "display-no");
		template_video.removeAttribute("class", "display-yes");
	}
	
	// Removing a video that has ran previously
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

/* Next Button Enabled/ Disabled until audio or video ends */
$('#slide-audio').on('playing', function() {
	// disable next btn if current page num is greater than bookmarked page num
	if ( bookmarked === 0 || pg_current.innerHTML > bookmarked ) {
		document.getElementById('pg-next').setAttribute("disabled", true);
	}
	else {
		document.getElementById('pg-next').removeAttribute('disabled');
	}
});

$('#slide-audio').on('ended', function() {
   // enable button
   document.getElementById('pg-next').removeAttribute('disabled');
   writeBookmark();  
});

$('#slide-video').on('playing', function() {
	// disable next btn if current page num is greater than bookmarked page num
	if ( bookmarked === 0 || pg_current.innerHTML > bookmarked ) {
		document.getElementById('pg-next').setAttribute("disabled", true);
	}
	else {
		document.getElementById('pg-next').removeAttribute('disabled');
	}
});
$('#slide-video').on('ended', function() {
   // enable button
   document.getElementById('pg-next').removeAttribute('disabled');
   writeBookmark();
});

/* Bookmark */
var bookmarked;
bookmarked = 0;

function writeBookmark() {
	if ( bookmarked === 0 || bookmarked < pg_current.innerHTML ) {
		bookmarked++;
		console.log("registered: " + bookmarked);	
	}
}

