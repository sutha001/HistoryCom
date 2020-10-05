aRCDescript = [{
	srcString: '#layouts .story',
	fitting: resizeables.fillModes.NONE,
	multiLayout: true
}, {
	srcString: '#scaling .story',
	fitting: resizeables.fillModes.FIT_PARENT,
}];


/* */

var optimizationSlide = {
	pause: function () {
		$("#optimization .fastLayer").stop(true, false);
	},
	resume: function () {

		$("#optimization .fastLayer").animate({
			'margin-top': '500px'
		}, 400, 'easeInOutCubic').animate({
			'margin-top': '0px'
		}, 400, 'easeOutCubic', optimizationSlide.resume);
	}
}

function createLayers() {

	for (var i = 0; i < 30; i++) {

		var layer = $("<div class='fastLayer'><div><div></div></div></div>");

		layer.css({
			left: Math.random() * 1750 - 350,
			top: Math.random() * 860 - 200
		});

		var q = Math.random();
		layer.find('>div').attr({
			alt: q * 6 + 1
		});

		var size = q * 270 + 30;
		layer.find('>div>div').css({
			width: size,
			height: size,
			'border-radius': size,
			'-webkit-filter': 'blur(' + q * 15 + 'px)',
			background: 'rgba(255, 255, 255, .5)'
		});

		$('#more .popularResolution').append(layer);

		var animatedCopy = layer.clone();

		$('#animated .popularResolution').append(animatedCopy);

		(function (animatedCopy) {

			var paused = true,
				progress = 0,
				initialPosition = animatedCopy.position(),
				speedKoeff = Math.random(),
				initialPhase = Math.random() * Math.PI * 2,
				amplitude = Math.random() * 100 + 100;

			setInterval(function () {
				if (paused) return;

				var angle = progress * speedKoeff + initialPhase;
				animatedCopy.css('left', initialPosition.left + Math.sin(angle) * amplitude);
				animatedCopy.css('top', initialPosition.top + Math.cos(angle) * amplitude);

				progress += .1;

			}, 17);

			animatedCopy.data({
				resume: function () {
					paused = false;
				},
				pause: function () {
					paused = true;
				}
			});

		})(animatedCopy);

	};
}


$(function () {

	createLayers();
	optimizationSlide.resume();

	$('#parallax').on('finishedMove', function (amount) {

		$('#animated .popularResolution .fastLayer').each(function () {
			$(this).data('resume')();
		});
		optimizationSlide.resume();
	});
	$('#parallax').on('startedMove', function () {

		$('#animated .popularResolution .fastLayer').each(function () {
			$(this).data('pause')();
		});

		optimizationSlide.pause();
	});

	// the only call to the parallax system you need to make
	startAllParaSystems();

});


function fib(n) {
	if (n < 2) {
		return n
	}
	return fib(n - 1) + fib(n - 2)
}
var time;

function myFunction() {
	var start = new Date().getTime();

	var x = document.getElementById("myNumber").value;
	var y = fib(x);

	document.getElementById("demo").innerHTML = y;

	var end = new Date().getTime();
	time = ((end - start) * 0.001)*1000;
	console.log(time);
	alert(time*10000 + " S" + " Age1");
	alert(time*1000 + " S" + " Age2");
	alert(time*100 + " S" + " Age3");
	alert(time*10 + " S" + " Age4");
	alert(time + " S" + " Age5");

}


function count1() {
	console.log("1");
	var timeleft = 0;
	var downloadTimer = setInterval(function () {
		if (timeleft >= (time*10000)) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie").innerHTML = "Finished "+ timeleft +" Sec";
			document.getElementById("age1").disabled = false;
		} else {
			document.getElementById("timeeie").innerHTML = timeleft + " seconds remaining";
			document.getElementById("age1").disabled = true;
		}
		timeleft += 1;
	}, 1000);
}

function count2() {
	console.log("1");
	var timeleft = 0;
	var downloadTimer = setInterval(function () {
		if (timeleft >= (time*1000)) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie2").innerHTML = "Finished "+ timeleft +" Sec";
			document.getElementById("age2").disabled = false;
		} else {
			document.getElementById("timeeie2").innerHTML = timeleft + " seconds remaining";
			document.getElementById("age2").disabled = true;
		}
		timeleft += 1;
	}, 1000);
}

function count3() {
	console.log("1");
	var timeleft = 0;
	var downloadTimer = setInterval(function () {
		if (timeleft >= (time*100)) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie3").innerHTML = "Finished "+ timeleft +" Sec";
			document.getElementById("age3").disabled = false;
		} else {
			document.getElementById("timeeie3").innerHTML = timeleft + " seconds remaining";
			document.getElementById("age3").disabled = true;
		}
		timeleft += 1;
	}, 1000);
}

function count4() {
	console.log("1");
	var timeleft = 0;
	var downloadTimer = setInterval(function () {
		if (timeleft >= (time*10)) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie4").innerHTML = "Finished "+ timeleft +" Sec";
			document.getElementById("age4").disabled = false;
		} else {
			document.getElementById("timeeie4").innerHTML = timeleft + " seconds remaining";
			document.getElementById("age4").disabled = true;
		}
		timeleft += 1;
	}, 1000);
}

function count5() {
	console.log("1");
	var timeleft = 0;
	var downloadTimer = setInterval(function () {
		if (timeleft >= time) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie5").innerHTML = "Finished "+ timeleft +" Sec";
			document.getElementById("age5").disabled = false;
		} else {
			document.getElementById("timeeie5").innerHTML = timeleft + " seconds remaining";
			document.getElementById("age5").disabled = true;
		}
		timeleft += 1;
	}, 1000);
}
