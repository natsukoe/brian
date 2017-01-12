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
		slideMedia: 'business1/books.jpg',
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
		slideMedia: 'images/adm-intro.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 3',
		templateType: 'basic'
	},
	{
		slideText: '<p>Page 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
		slideAudio: 'audio/letgo.mp3',
		slideMedia: 'business1/man-in-office.jpg',
		slideMediaAlt: 'Image of SlideMedia for page 3',
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


/* Course Contents */

// Course Contents when Page Loaded
slides_num();


// Clicked Course Contents
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

}

// Audio Button Enabled/ Disabled
$('#slide-audio').on('playing', function() {
	// disable button/link
	document.getElementById('pg-next').setAttribute("disabled", true);
});
$('#slide-audio').on('ended', function() {
   // enable button/link
   document.getElementById('pg-next').removeAttribute('disabled');
});


var audio;
        //jInit is my own site standard which is triggered after aynschronous loading of javascript
        //libraries. You can here use $(document).ready instead, in general case.
        function jInit(){
            audio = $(".audioDemo");
            addEventHandlers();
        }
 
        function toggleMuteAudio(){
            audio.prop("muted",!audio.prop("muted"));
        }


