// GOOGLE MAP
window.initMap = function () {
	var uluru = {lat: 50.489351, lng: 30.479336};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru
	});
	//var image = 'img/icon/marker.svg';
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
		//icon: image
	});
}



var App = {

	options: {},

	init: function () {

		//Open burger menu
		$('.js-burger-btn').click(function () {
			$(this).toggleClass('active');
			$('.c-header__nav-wrap').toggleClass('active');
		});

		$('.js-login-menu').click(function () {
			$(this).toggleClass('active');
			$('.js-login-menu-content').slideToggle('600');
		});

		$('.js-hidden-onload').hide('600');
		$('.js-remove-active-onload').removeClass('active');


		$('.js-open-filter').on('click', function () {
			$(this).parents('.js-filter-wrap').find('.js-filter-body').toggleClass('active');
			$('body').css('overflow-y', 'hidden')
		})

		$('.js-filter-body').on('click', function (event) {
			if ($(event.target).is('.js-filter-body')) {
				$(this).removeClass('active');
				$('body').css('overflow-y', 'auto')
			}
		});


		//slideToggle content
		$('.js-slideToggle-content').hide();

		$('.js-slideToggle-btn').on('click', function () {
			$(this).toggleClass('active')
			$(this).parents('.js-slideToggle-wrap').find('.js-slideToggle-content').slideToggle('600');
		})
	},

	//Welcome tab
	welTab: function () {
		$(document).on('click', '.b-welcome-tab__item[data-main]', function () {

			$('.b-welcome-tab__item').removeClass('active');
			$(this).addClass('active');

			$('.o-welcome__item').removeClass('active');
			$('.o-welcome__item[data-child=' + $(this).data('main') + ']').addClass('active');

		});
	},
	//Select position employer or aspirant
	selectPosition: function () {
		$employerList = $('.js-employer-step-list');
		$aspirantList = $('.js-aspirant-step-list');
		$employer = $('.js-employer');
		$aspirant = $('.js-aspirant');
		$switcher = $('.e-toggle__check');

		$employer.on('click', function () {

			$switcher.prop('checked', false);
			$(this).addClass('active');

			$aspirant.removeClass('active');
			$aspirantList.removeClass('active');

			$employer.addClass('active');
			$employerList.addClass('active');
		});

		$aspirant.on('click', function () {

			$switcher.prop('checked', true);
			$(this).addClass('active');

			$employer.removeClass('active');
			$employerList.removeClass('active');

			$aspirantList.addClass('active');


		});

		$switcher.on('click', function () {

			$aspirant.toggleClass('active');
			$employer.toggleClass('active');

			$aspirantList.toggleClass('active');
			$employerList.toggleClass('active');

		});
	},
	//validation form
	validate: function () {


		$('button.js-send').on('click', function (s) {
			s.preventDefault();
			var e = $(this).closest('form'),
				n = !0;
			return $(this).parents('form').find('input.js-required').parents('.b-form__field-wrap, .b-form__field-group').removeClass('error'), e.find('input.js-required, textarea.js-required').each(function () {
				return '' === $(this).val() ? ($(this).parents('.b-form').find('.b-form__error').addClass('error'), $(this).parents('.b-form__field-wrap, .b-form__field-group').addClass('error'), $(this).focus(), n = !1, !1) : void 0;
			}), n && (
				$(this).parents('.b-form').find('.b-form__error').removeClass('error'),
					$(this).parents('form').find('input.js-required, textarea.js-required').parents('.b-form__field-wrap, .b-form__field-group').removeClass('error'), e.submit()), !1;


		});


		// Masked

		$('.js-only-number').keypress(function (e) {
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				return false;
			}
		});

		$('.js-phone-masked').mask('+38 (999) 999 99 99');

	},
	// Modal
	modal: function () {

		$('.js-modal-btn').on('click', function (event) {
			event.preventDefault();
			var modal = $(this).attr('href');
			$(modal).addClass('active');
			$('body').addClass('modal-open');

		});

		$('.o-modal').on('click', function (event) {
			if ($(event.target).is('.o-modal__center')) {
				$('.o-modal').removeClass('active');
				$('body').removeClass('modal-open');
			}
		});

		$('.js-modal-close').on('click', function (event) {

			$('.o-modal').removeClass('active');
			$('body').removeClass('modal-open');

		});
	},
	accordion: function () {

		$accordionBtn = $('.js-accordion-btn');
		$accordionContent = $('.js-accordion-content');
		$accordionBody = $('.js-accordion-body');
		$accordionItem = $('.js-accordion-item');

		$accordionBtn.on('click', function () {
			if (!($(this).parent($accordionItem).hasClass('active'))) {
				$(this).parents($accordionBody).find($accordionItem).removeClass('active');
				$(this).parents($accordionBody).find($accordionContent).hide('600');

				$(this).parent($accordionItem).addClass('active');
				$(this).parent().find($accordionContent).slideToggle('600');
			} else {

				$(this).parent($accordionItem).removeClass('active');
				$(this).parent().find($accordionContent).hide('600');

			}

		});
	},

	//Commutator / toggle content
	commutator: function () {

		// $commutatorBody = $('.js-commutator-body');
		// $commutatorContent = $('.js-commutator-content');
		$commutatorBtn = $('.js-commutator-btn');

		$commutatorBtn.on('click', function () {
			if (!($(this).hasClass('active'))) {

				$(this).parents('.js-commutator-body').find('.js-commutator-btn').removeClass('active');
				$(this).addClass('active');

				$dataMain = $(this).data('main');
				$dataChild = $(this).parents('.js-commutator-body').find('.js-commutator-content');
				$dataChild.removeClass('active');

				$('.js-commutator-content[data-child="' + $dataMain + '"]').addClass('active');


			}
		});


		$commutatorInsideBtn = $('.js-inside-commutator-btn');

		$commutatorInsideBtn.on('click', function () {

			$dataMain = $(this).data('main');
			$(this).parents('.js-commutator-body').find('.js-commutator-btn[data-main="' + $dataMain + '"]').click();


		});

	},

	goRecVideo: function () {
		$showRecVideo = $('.js-go-rec-video');

		$showRecVideo.on('click', function () {

			$('.js-commutator-btn[data-main="c"]').click();
			$('.js-commutator-content[data-child="c"]').addClass('active');

		});

	},

	dropdown: function () {

		$dropdownBtn = $('.js-dropdown-btn');
		$dropdownContent = $('.js-dropdown-content');
		$dropdownBody = $('.js-dropdown-body');


		$dropdownBtn.on('click', function () {

			$(this).parent($dropdownBody).toggleClass('active');
			$(this).parent($dropdownBody).find($dropdownContent).slideToggle('600');
		});
		$(document).mouseup(function (e) {

			if ($dropdownBody.has(e.target).length === 0) {
				$dropdownBody.removeClass('active');
				$dropdownBody.find($dropdownContent).hide(0);
			}
		});

	},
	select: function () {

		$(document).on('click', '.b-select__item', function () {

			$selectInputVal = $(this).data('value');
			$filterLable = $(this).parents('.b-select').find('.js-value-name');
			$filterHiddenInput = $(this).parents('.b-select').find('.js-value-input');

			$(this).parents('.b-select').find('.b-select__item').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.js-dropdown-content').removeClass('active').slideToggle('600');
			$(this).parents('.b-select').removeClass('active');

			$filterLable.html($selectInputVal).addClass('active');
			$filterHiddenInput.val($selectInputVal);

		});
	},
	timeInterview: function () {

		$('.js-time-interview').mask('00:00');


		$(document).on('keyup', '.js-time-interview', function () {

			$containerTime = $('.js-time-body');
			$enterTime = $('.js-time-interview');
			$showResult = $('.js-time-left');

			$pieFill = $('.js-time-pie-fill');

			let data = {};
			let summH = 0;
			let summM = 0;
			$containerTime.find($enterTime).each(function (i, y) {
				data[i] = $(this).val().split(':');
				$enterTimeVal = $(this).val();
				if ($enterTimeVal) {
					summH += Number((data[i][0]) * 60);
					summM += Number((data[i][1]));

					$result = summH + summM;
				}

			});
			$showResult.html($result);

			// $forFill = $result * 2;
			$pieFill.css({'transform': 'rotate(' + $result + 'deg)'});

		});


	},
	interactionTable: function () {

		$table = $('.js-int-table');
		$tableRow = $('.b-table__row');

		$tableRow.on('click', function () {

			$(this).parent($table).find($tableRow).removeClass('active');
			$(this).addClass('active');
		});


	},

	showPreview: function () {

		$('.js-show-tabs').on('click', function (event) {
			event.preventDefault();
			$('.o-interview-tables__item').removeClass('active');
			var table = $(this).attr('href');
			$(table).addClass('active');

		});
	},
	range: function () {

		$('input[type=range]').on('input', function (e) {
			$after = $('.js-range');
			var min = e.target.min,
				max = e.target.max,
				val = e.target.value;

			$after.css({
				'width': (val - min) * 100 / (max - min) + '%'
			});
		}).trigger('input');
	},

	getWebcamDevice: function () {

		'use strict';
		//
		//var videoElement = document.querySelectorAll('.js-web-video');
		var audioSelect = document.querySelector('#audioSource');
		var loudspeakerSelect = document.querySelector('#loudspeakerSource');
		var videoSelect = document.querySelector('#videoSource');
		//console.log(videoElement);


		navigator.mediaDevices.enumerateDevices()
			.then(gotDevices).then(getStream).catch(handleError);

		// audioSelect.onchange = getStream;
		// videoSelect.onchange = getStream;
		// audioSelect.onclick = getStream;
		// loudspeakerSelect.onclick = getStream;
		// videoSelect.onclick = getStream;

		function gotDevices (deviceInfos) {

			for (var i = 0; i !== deviceInfos.length; ++i) {
				var deviceInfo = deviceInfos[i];
				var option = document.createElement('span');


				option.setAttribute('data-value', deviceInfo.label);
				option.className = 'b-select__item';


				if (deviceInfo.kind === 'audioinput') {
					option.innerHTML = deviceInfo.label ||
						'microphone ' + (audioSelect.length + 1);
					audioSelect.appendChild(option);

					//КОСТЫЛЬ
					switch (deviceInfo.deviceId) {

						case true:
							document.querySelector('.js-audioSourceDefault').innerHTML = deviceInfo.label;
							option.className += ' active';
							break;

						case 'default':
							document.querySelector('.js-audioSourceDefault').innerHTML = deviceInfo.label;
							option.className += ' active';
							break;


					}


				} else if (deviceInfo.kind === 'videoinput') {
					option.innerHTML = deviceInfo.label || 'camera ' +
						(videoSelect.length + 1);
					videoSelect.appendChild(option);

					//КОСТЫЛЬ
					switch (deviceInfo.deviceId) {

						case 'default':
							document.querySelector('.js-videoSourceDefault').innerHTML = deviceInfo.label;
							option.className += ' active';
							break;

						default :
							document.querySelector('.js-videoSourceDefault').innerHTML = deviceInfo.label;
							option.className += ' active';
							break;


					}

				} else if (deviceInfo.kind === 'audiooutput') {
					option.innerHTML = deviceInfo.label ||
						'Динамик ' + (loudspeakerSelect.length + 1);
					loudspeakerSelect.appendChild(option);

					//КОСТЫЛЬ
					switch (deviceInfo.deviceId) {

						case true:
							document.querySelector('.js-loudspeakerSourceDefault').innerHTML = deviceInfo.label;
							option.className += ' active';
							break;

						case 'default':
							document.querySelector('.js-loudspeakerSourceDefault').innerHTML = deviceInfo.label;
							option.className += ' active';
							break;

					}

				}
				else {
					console.log('Found one other kind of source/device: ', deviceInfo);
				}
			}
		}
		function getStream () {
			// if (window.stream) {
			// 	window.stream.getTracks().forEach(function (track) {
			// 		track.stop();
			// 	});
			// }

				var constraints = {
					audio: {
						deviceId: {exact: audioSelect.value}
					},
					loudspeaker: {
						deviceId: {exact: loudspeakerSelect.value}
					},
					video: {
						deviceId: {exact: videoSelect.value}
					}
				};

			 	navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);
			}


			function gotStream (stream) {
				//window.stream = stream; // make stream available to console

				// for (var i = 0; i < videoElement.length; i++) {
				//
				// 	//console.log(videoElement[wtf])
				//
				// 	videoElement[i].srcObject = stream;
				// }

				//videoElement.srcObject = stream;
			}

			function handleError (error) {
				console.log('Error: ', error);
			}

	},

	getWebcam: function () {

		var  stream, recorder;
		$video = $('.js-web-video');
		$reqBtn = $('.js-start-webcam');
		$startBtn = $('.js-start-record');
		$overwriteBtn = $('.js-overwrite-video');
		$stopBtn = $('.js-stop-record');
		$recordedVideo = $('.js-record-video');

		$reqBtn.on('click', function () {
			if ($(this).is(':checked')) {
				requestVideo();
				$video.css('opacity', '1')

			} else {
				stream.getTracks().forEach((track) => {
					track.stop();
				$video.css('opacity', '0')
			})

		}

		});


		$startBtn.on('click', function () {
			setTimeout(startRecording, 30000);
		});

		$overwriteBtn.on('click', function () {
			setTimeout(startRecording, 30000);
		});
		$stopBtn.on('click', function () {
			$.fn.stopRecording();
		});

		function requestVideo() {
			navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true
			})

				.then(stm => {
				stream = stm;

			for (var i = 0; i < $video.length; i++) {


				// $video[i].src = URL.createObjectURL(stream);
				$video[i].srcObject = stream;

			}


		}).catch(e => console.error(e));
		}


		function startRecording() {
				recorder = new MediaRecorder(stream, {
					mimeType: 'video/webm; codecs="opus,vp8"'
				}),

			recorder.start();

		}

		$.fn.stopRecording = function stopRecording() {
			recorder.ondataavailable = e => {

				$recordedVideo.attr('src', URL.createObjectURL(e.data))

			};
			recorder.stop();
		}

	},

	recordVideo: function () {

		$videoBody = $('.b-web-video');
		$startBtn = $('.b-web-video__btn-start-record');
		$stopBtn = $('.b-web-video__btn-stop-record');
		$overwriteBtn = $('.b-web-video__overwrite-btn');
		$videoContainer = $('.b-web-video__container');
		$pieAnimation = $('.b-web-video__pie');
		$buttonWrap = $('.b-web-video__button');
		$statusRecord = $('.b-web-video__status-record');


		$startBtn.on('click', function () {

			$(this).parent($buttonWrap).hide();
			$(this).parents($videoContainer).find($pieAnimation).addClass('active');
			$(this).parents('.b-web-video__container').find('.js-set-time-out').text('3')
			setTime();


		});


		function setTime() {
			var _Seconds = $('.js-set-time-out').text(),
				int;
			int = setInterval(function() { // запускаем интервал
				if (_Seconds > 1) {
					_Seconds--; // вычитаем 1
					$('.js-set-time-out').text(_Seconds); // выводим получившееся значение в блок
				} else {
					$('.js-set-time-out').text('')
					clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
					$('.b-web-video__pie').removeClass('active');
					$('.b-web-video__button').show();
					$('.b-web-video').addClass('record');

				}
			}, 1000);
		};

		$stopBtn.on('click', function () {
			$(this).parent($videoContainer).find($statusRecord).hide();
			//$statusRecord.hide();
			$(this).parents($videoContainer).find($buttonWrap).hide();
			$('.b-web-video').removeClass('record');
			$(this).parents('.b-web-video').addClass('view-record');

		});

		$overwriteBtn.on('click', function () {
			$(this).parents('.b-web-video').removeClass('view-record');
			$(this).parents('.b-web-video').addClass('record');
			$(this).parents('.b-web-video').find($statusRecord).show();
			//$(this).parents('.b-web-video').find($buttonWrap).show();
			$(this).parents($videoContainer).find($pieAnimation).addClass('active');
			$(this).parents('.b-web-video__container').find('.js-set-time-out').text('3')
			setTime();

		});


	//answer record
	$bodyAswRec = $('.b-record-answer')
	$startAnswRec = $('.b-record-answer__start-record');
	$stopAnswRec = $('.b-record-answer__stop-record');
	$overwriteAnswRec = $('.b-record-answer__start-overwrite');
	$playRecAnsw = $('.b-record-answer__play-recorded');
	$pieAnswRec = $('.b-record-answer__pie');
	$headAnswRec = $('.b-record-answer__header');
	$timeAnsw = $('.b-record-answer__time');
	$messageAnsw = $('.b-web-video__message-recording');


	$valInit = $timeAnsw.html();
	$timeAnsw.attr('data-time',$valInit)


		$startAnswRec.on('click', function () {

			$(this).hide();
			$(this).parents('.b-record-answer').find($stopAnswRec).show();
			$(this).parents('.b-record-answer').find($pieAnswRec).addClass('active');
			$(this).parents('.b-record-answer').removeClass('finish-record')
			$(this).parents('.b-record-answer').find('.b-web-video').removeClass('message');
			$(this).parents('.b-record-answer').addClass('record');
			$(this).parents('.b-record-answer').find('.b-web-video').removeClass('view-record');
			$(this).parents('.b-record-answer').find('.js-set-time-out').text('3')


			setTime();

			setTimeout(setAnswTimeDelay, 3000)

		});


		 function stopReAnswRec() {
			$(this).hide();
			$(this).parents('.b-record-answer').find($startAnswRec).show();

			//$statusRecord.hide();

			$(this).parents('.b-record-answer').find($headAnswRec).removeClass('record');

			 $(this).parents('.b-record-answer').addClass('finish-record');
			 $('.b-web-video').removeClass('record');
			 $(this).parents('.b-record-answer').find('.b-web-video').addClass('message');

			//$bodyAswRec.find('.b-web-video').addClass('view-record');

			clearInterval($intervalHandel);
		};

		$stopAnswRec.click(stopReAnswRec);

		$overwriteAnswRec.on('click', function () {
			$(this).parents('.b-record-answer').find($playRecAnsw).show();
			$(this).parents('.b-record-answer').find($stopAnswRec).show();
			$(this).parents('.b-record-answer').find($startAnswRec).hide();
			$(this).parents('.b-record-answer').find($pieAnswRec).addClass('active');

			$(this).parents('.b-record-answer').find($headAnswRec).addClass('record');
			$(this).parents('.b-record-answer').removeClass('finish-record')
			$(this).parents('.b-record-answer').find('.b-web-video').removeClass('message');
			$(this).parents('.b-record-answer').find('.b-web-video').removeClass('view-record');

			$(this).parents('.b-record-answer').find('.js-set-time-out').text('3')


			$val = $timeAnsw.attr('data-time');

			$timeAnsw.html($val);

			setTime();

			setTimeout(setAnswTimeDelay, 3000);



		});
		$playRecAnsw.on('click', function () {
			$(this).hide()
			$bodyAswRec.find('.b-web-video').removeClass('message');
			$bodyAswRec.find('.b-web-video').addClass('view-record');
		});

		function setAnswTime() {


			var $worked = $timeAnsw;

			var myTime = $worked.html();

			var ss = myTime.split(":");
			var dt = new Date();
			dt.setHours(0);
			dt.setMinutes(ss[0]);
			dt.setSeconds(ss[1]);



			var dt2 = new Date(dt.valueOf() - 1000);
			var temp = dt2.toTimeString().split(" ");
			var ts = temp[0].split(":");

			$worked.html(ts[1]+":"+ts[2]);

			if(temp[0] === '00:00:00') {
				$('.b-web-video').removeClass('record');
				$stopAnswRec.click();

				clearInterval($intervalHandel);

				$.fn.stopRecording()

				// $stopAnswRec.hide();
				// $startAnswRec.show();
				// $bodyAswRec.addClass('finish-record')
				// $headAnswRec.removeClass('record');
				//
				// $bodyAswRec.find('.b-web-video').addClass('message');
				// $bodyAswRec.find('.b-web-video').removeClass('record');


			}

		}

		function setAnswTimeDelay() {
			$intervalHandel = setInterval(setAnswTime,1000)
		}


	},

	customVideoPlayer: function () {

		$(document).ready(function () {
		$(document).on('click', '.js-video-control', function(e) {

			$video = $(this).parents('.js-video-wrap').find('.js-video-content');

			if ($(this).parents('.js-video-wrap').hasClass('paused')) {

				// Play the video
				$video.get(0).play();
				$(this).parents('.js-video-wrap').removeClass('paused').addClass('playing');

			}
			else {

				// Pause the video
				$video.get(0).pause();
				$(this).parents('.js-video-wrap').removeClass('playing').addClass('paused');

			}


		});

		var vid = document.querySelector(".js-video-content");

		vid.ontimeupdate = function(){

			var percentage = ( vid.currentTime / vid.duration ) * 100;
			$(".js-progress-bar-video span").css("width", percentage+"%");

		};

		$(".js-progress-bar-video").on("click", function(e){

			var offset = $(this).offset();
			var left = (e.pageX - offset.left);
			var totalWidth = $(".js-progress-bar-video").width();
			var percentage = ( left / totalWidth );
			var vidTime = vid.duration * percentage;
			vid.currentTime = vidTime;

		});//click()


		//fullscreen button clicked
		$('.js-video-full-screen').on('click', function() {
			$video = $(this).parents('.js-video-wrap').find('.js-video-content');
			if($.isFunction($video[0].webkitEnterFullscreen)) {
				$video[0].webkitEnterFullscreen();
			}
			else if ($.isFunction($video[0].mozRequestFullScreen)) {
				$video[0].mozRequestFullScreen();
			}
			else {
				alert('Your browsers doesn\'t support fullscreen');
			}
		});
		});
	},

	openFilter: function () {

		$filterDropdownBtn = $('.js-filter-dropdown-btn');
		$filterDropdownContent = $('.js-filter-dropdown-content');
		$filterDropdownBody = $('.js-filter-dropdown-body');


		$filterDropdownBtn.on('click', function () {

			$(this).toggleClass('active');
			$(this).parent($filterDropdownBody).find($filterDropdownContent).slideToggle('600');
		});

	},
	rangeSlider: function () {
		$(document).ready(function(){
		// THIS IS THE RANGE SLIDER LOGIC DO NOT CHANGE !!
		var ZBRangeSlider = function(id) {
			var self = this;
			var startX = 0, x = 0;

			// retrieve touch button
			var slider     = document.querySelector(id)
			var touchLeft  = document.querySelector('.js-range-slider-touch-left');
			var touchRight = document.querySelector('.js-range-slider-touch-right');
			var lineSpan   = document.querySelector('.js-range-slider-span');

			// get some properties
			var min   = parseFloat(slider.getAttribute('se-min'));
			var max   = parseFloat(slider.getAttribute('se-max'));

			// retrieve default values
			var defaultMinValue = min;
			if(slider.hasAttribute('se-min-value'))
			{
				defaultMinValue = parseFloat(slider.getAttribute('se-min-value'));
			}
			var defaultMaxValue = max;

			if(slider.hasAttribute('se-max-value'))
			{
				defaultMaxValue = parseFloat(slider.getAttribute('se-max-value'));
			}

			// check values are correct
			if(defaultMinValue < min)
			{
				defaultMinValue = min;
			}

			if(defaultMaxValue > max)
			{
				defaultMaxValue = max;
			}

			if(defaultMinValue > defaultMaxValue)
			{
				defaultMinValue = defaultMaxValue;
			}

			var step  = 0.0;

			if (slider.getAttribute('se-step'))
			{
				step  = Math.abs(parseFloat(slider.getAttribute('se-step')));
			}

			// normalize flag
			var normalizeFact = 26;

			self.slider = slider;
			self.reset = function() {
				touchLeft.style.left = '0px';
				touchRight.style.left = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
				lineSpan.style.marginLeft = '0px';
				lineSpan.style.width = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
				startX = 0;
				x = 0;
			};

			self.setMinValue = function(minValue)
			{
				var ratio = ((minValue - min) / (max - min));
				touchLeft.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact))) + 'px';
				lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
				lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
				slider.setAttribute('se-min-value', minValue);
			}

			self.setMaxValue = function(maxValue)
			{
				var ratio = ((maxValue - min) / (max - min));
				touchRight.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact)) + normalizeFact) + 'px';
				lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
				lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
				slider.setAttribute('se-max-value', maxValue);
			}

			// initial reset
			self.reset();

			// usefull values, min, max, normalize fact is the width of both touch buttons
			var maxX = slider.offsetWidth - touchRight.offsetWidth;
			var selectedTouch = null;
			var initialValue = (lineSpan.offsetWidth - normalizeFact);

			// set defualt values
			self.setMinValue(defaultMinValue);
			self.setMaxValue(defaultMaxValue);

			// setup touch/click events
			function onStart(event) {

				// Prevent default dragging of selected content
				event.preventDefault();
				var eventTouch = event;

				if (event.touches)
				{
					eventTouch = event.touches[0];
				}

				if(this === touchLeft)
				{
					x = touchLeft.offsetLeft;
				}
				else
				{
					x = touchRight.offsetLeft;
				}

				startX = eventTouch.pageX - x;
				selectedTouch = this;
				document.addEventListener('mousemove', onMove);
				document.addEventListener('mouseup', onStop);
				document.addEventListener('touchmove', onMove);
				document.addEventListener('touchend', onStop);


			}

			function onMove(event) {
				var eventTouch = event;

				if (event.touches)
				{
					eventTouch = event.touches[0];
				}

				x = eventTouch.pageX - startX;

				if (selectedTouch === touchLeft)
				{
					if(x > (touchRight.offsetLeft - selectedTouch.offsetWidth + 10))
					{
						x = (touchRight.offsetLeft - selectedTouch.offsetWidth + 10)
					}
					else if(x < 0)
					{
						x = 0;
					}

					selectedTouch.style.left = x + 'px';
				}
				else if (selectedTouch === touchRight)
				{
					if(x < (touchLeft.offsetLeft + touchLeft.offsetWidth - 10))
					{
						x = (touchLeft.offsetLeft + touchLeft.offsetWidth - 10)
					}
					else if(x > maxX)
					{
						x = maxX;
					}
					selectedTouch.style.left = x + 'px';
				}

				// update line span
				lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
				lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';

				// write new value
				calculateValue();

				// call on change
				if(slider.getAttribute('on-change'))
				{
					var fn = new Function('min, max', slider.getAttribute('on-change'));
					fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
				}

				if(self.onChange)
				{
					self.onChange(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
				}

			}

			function onStop(event) {
				document.removeEventListener('mousemove', onMove);
				document.removeEventListener('mouseup', onStop);
				document.removeEventListener('touchmove', onMove);
				document.removeEventListener('touchend', onStop);

				selectedTouch = null;

				// write new value
				calculateValue();

				// call did changed
				if(slider.getAttribute('did-changed'))
				{
					var fn = new Function('min, max', slider.getAttribute('did-changed'));
					fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
				}

				if(self.didChanged)
				{
					self.didChanged(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
				}
			}

			function calculateValue() {
				var newValue = (lineSpan.offsetWidth - normalizeFact) / initialValue;
				var minValue = lineSpan.offsetLeft / initialValue;
				var maxValue = minValue + newValue;

				var minValue = minValue * (max - min) + min;
				var maxValue = maxValue * (max - min) + min;

				//console.log(step);
				if (step !== 0.0)
				{
					var multi = Math.floor((minValue / step));
					minValue = step * multi;

					multi = Math.floor((maxValue / step));
					maxValue = step * multi;
				}

				slider.setAttribute('se-min-value', minValue);
				slider.setAttribute('se-max-value', maxValue);
			}

			// link events
			touchLeft.addEventListener('mousedown', onStart);
			touchRight.addEventListener('mousedown', onStart);
			touchLeft.addEventListener('touchstart', onStart);
			touchRight.addEventListener('touchstart', onStart);
		};

		// -------------------
		// How to use?
		var newRangeSlider = new ZBRangeSlider('.js-range-slider');

		newRangeSlider.onChange = function(min, max)
		{
			//console.log(min, max, this);
			document.querySelector('.js-range-slider-min').value = min
			document.querySelector('.js-range-slider-max').value = max
			//document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
		}

		newRangeSlider.didChanged = function(min, max)
		{
			//console.log(min,max, this);
			//document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
		}

		// call reset if needed
		// newRangeSlider.reset();

		// call reset if needed
		// newRangeSlider.reset();
		});
	},

	addFavorite: function () {

		$favoritBody = $('.js-favorit-body');
		$favoritBtn = $('.js-favorit-btn');

		$favoritBtn.on('click', function () {
			event.preventDefault();
			if ($(this).hasClass('active')) {

				$(this).parent($favoritBody).find($favoritBtn).toggleClass('active');
			} else {
				$(this).parent($favoritBody).find($favoritBtn).toggleClass('active');

				modal();
			}



		});
	},

	textAreaTag: function () {
				 $(".js-tags").keypress( function(event) {
					 var key = event.which;
					 $tagThis =  $(this).parents('.js-tags-body').find('.js-tags');
					 if (key == 13 || key == 44){
						 event.preventDefault();
						 var tag = $(this).val();
						 if(tag.length > 0){
							 $("<span class='e-textarea-tag__item'>"+tag+"<span class='js-delete-tag'> <i class='e-icon e-icon--no-border e-icon--no-size e-icon--right'> <svg class='icon icon-close e-icon__figure e-icon__figure--close--xxs'><use xlink:href='assets/img/sprite/sprite.svg#close'></use></svg></i> </span></span>").insertBefore($tagThis);
							 $(this).val("");
						 }
					 }
				 });

			$(".js-tags-body").on("click", ".js-delete-tag", function() {
				$(this).parent(".e-textarea-tag__item").remove();
			});

			$(".js-tags-body").on("click", ".js-add-tag", function() {

				$tagThis =  $(this).parents('.js-tags-body').find('.js-tags');
				$tagValue = $tagThis.val();

				if($tagValue.length > 0){

					$("<span class='e-textarea-tag__item'>"+$tagValue+"<span class='js-delete-tag'> <i class='e-icon e-icon--no-border e-icon--no-size e-icon--right'> <svg class='icon icon-close e-icon__figure e-icon__figure--close--xxs'><use xlink:href='assets/img/sprite/sprite.svg#close'></use></svg></i> </span></span>").insertBefore($tagThis);

					$tagThis.val('');

				}

			});

	},
	wysiwyg: function () {
		function commande(nom, argument){
			if (typeof argument === 'undefined') {
				argument = '';
			}
			document.execCommand(nom, false, argument);
		}
		function rafraichit(){
			var valeur = $('.js-editeur').html();
			$('.htmlview').text(valeur);
		}
		$(document).ready(function(){
			$('.b-wysiwyg__btn').click(function(){
				var id = $(this).attr('data-id');
				switch(id){
					case "createLink":
						argument = prompt("Quelle est l'adresse du lien ?");
						commande(id, argument);
						break;
					case "insertImage":
						argument = prompt("Veuillez entrer le lien vers l'image");
						commande(id, argument);
						break;

					case "forecolor":
						argument = prompt("Quelle couleur désirez vous ?");
						commande(id, argument);
						break;

					default:
						commande(id);
						break;
				}
				rafraichit();
			});

			$('.js-editeur').keyup(function(){
				rafraichit();
			});

		});
	},

	fileInput: function () {

		(function() {

			'use strict';

			$('.js-input-file').each(function() {
				var $input = $(this),
					$label = $input.parent('.js-labelFile'),
					labelVal = $label.html();

				$input.on('change', function(element) {
					var fileName = '';
					if (element.target.value) fileName = element.target.value.split('\\').pop();
					fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
				});
			});

		})();

	},

	constructorForm: function () {

		$constructorBtn = $('.js-constructor-btn');
		$constructorBody = $('.js-constructor-body');
		$constructorStep = $('.b-constructor__step');
		$constructorStepActive = $('.b-constructor__step.active');
		$constructorStepBtn = $('.b-constructor-progress__item');
		$constructorFooter = $('.b-constructor__footer');

		$constructorBtn.on('click', function () {

			$length = $constructorStep.length;

			$stepCount = $('.b-constructor__step.active').data('form');
			$stepCountNext = $stepCount + 1;
			$step = $(this).parents($constructorBody).find($constructorStepActive);
			$input = $step.find('input.js-required, textarea.js-required');



			if ($stepCountNext == $length) {

				$constructorFooter.hide();

			}

			var n = !0;
			return $input.each(function () {
				return '' === $(this).val() ? ($(this).parents('.b-form').find('.b-form__error').addClass('error'), $(this).parents('.b-form__field-wrap, .b-form__field-group').addClass('error'), $(this).focus(), n = !1, !1) : void 0;
			}), n && (
				$input.parents('.b-form__field-wrap, .b-form__field-group').removeClass('error'), $constructorStep.removeClass('active'), $('[data-form="'+ $stepCountNext +'"]').addClass('active'),$constructorStepBtn.removeClass('active'),$('[data-step="'+ $stepCountNext +'"]').addClass('active'),$('[data-step="'+ $stepCount +'"]').addClass('passed')), !1;



			// $constructorStep.each(function (index) {
			// 	if (index === ($length - 1)) {
			//
			// 	}
			// });


		});
		$constructorStepActive.keypress(function() {

			$input = $step.find('input.js-required, textarea.js-required');

			$input.each(function(){

				if ($(this).val()) {
					$(this).parents('.b-form__field-wrap, .b-form__field-group').removeClass('error')

				}
			})
		})

		$constructorStepBtn.click(function(){
			if($(this).is('.passed')) {
				$constructorStepBtn.removeClass('active');
				$(this).addClass('active')
				var dataStep = $(this).attr('data-step');
				$('.b-constructor__step').removeClass('active');
				$('.b-constructor__step[data-form="'+dataStep+'"]').addClass('active');
				$constructorFooter.show();
			}

		})
	},

	jsNumber: function () {
		if($('.js-number').length>0) {
			$('.js-number').each(function () {
				$(this).keyup(function (e) {
					var maxlength = $(this).attr('maxlength');
					var testText =  $(this).val();
					if(testText*1 + 0  !=  $(this).val()){
						$(this).val(testText.substring(0, testText.length - 1))
					}
				})
			})
		}
	},

	validateCheck: function () {
		$('.validate-check').change(function() {
			if(this.checked === true){
				$('.no-active').addClass('active');
			} else {
				$('.no-active').removeClass('active');
			}

		});
	},

    datePicker: function () {
		$('.form_date').datetimepicker({
			language:  'ua',
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0
		});
    },

	initTinymce: function () {
		$('.tinymce').tinymce();
		// tinymce.init({
		// 	selrctor: 'textarea.tinymce'
		// });
	}



}; //App
$(document).ready(function () {

	App.init(),
	App.welTab(),
	App.selectPosition(),
	App.validate(),
	App.accordion(),
	App.commutator(),
	App.goRecVideo(),
	App.dropdown(),
	App.select(),
	App.modal(),
	App.timeInterview(),
	App.interactionTable(),
	App.showPreview(),
	App.range(),
	App.getWebcamDevice(),
	App.getWebcam(),
	App.recordVideo(),
	App.customVideoPlayer(),
	App.openFilter(),
	App.rangeSlider(),
	App.addFavorite(),
	App.textAreaTag(),
	App.fileInput(),
	App.wysiwyg(),
	App.constructorForm(),
	App.jsNumber(),
	App.validateCheck(),
	App.datePicker();
	App.initTinymce();




});
