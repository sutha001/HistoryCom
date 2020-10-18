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
			'margin-top': '0px'
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
document.getElementById("age1").disabled = true;
document.getElementById("age2").disabled = true;
document.getElementById("age3").disabled = true;
document.getElementById("age4").disabled = true;
document.getElementById("age5").disabled = true;

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
	time = ((end - start) * 0.001) * 1000;
	console.log(time);
	alert(time + " S");
	document.getElementById("age1").disabled = false;
	document.getElementById("age2").disabled = false;
	document.getElementById("age3").disabled = false;
	document.getElementById("age4").disabled = false;
	document.getElementById("age5").disabled = false;
}

document.getElementById("load").style.visibility = "hidden";
document.getElementById("wait").style.visibility = "visible";
document.getElementById("finis").style.visibility = "hidden";

document.getElementById("load2").style.visibility = "hidden";
document.getElementById("wait2").style.visibility = "visible";
document.getElementById("finis2").style.visibility = "hidden";

document.getElementById("load3").style.visibility = "hidden";
document.getElementById("wait3").style.visibility = "visible";
document.getElementById("finis3").style.visibility = "hidden";

document.getElementById("load4").style.visibility = "hidden";
document.getElementById("wait4").style.visibility = "visible";
document.getElementById("finis4").style.visibility = "hidden";

document.getElementById("load5").style.visibility = "hidden";
document.getElementById("wait5").style.visibility = "visible";
document.getElementById("finis5").style.visibility = "hidden";



function count1() {
	console.log("1");
	var timeleft = 0;
	document.getElementById("load").style.visibility = "hidden";

	document.getElementById("wait").style.visibility = "visible";

	document.getElementById("finis").style.visibility = "hidden";
	var downloadTimer = setInterval(function () {
		if (timeleft >= (time * 10000)) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie").innerHTML = "Finished " + timeleft + " Sec";
			document.getElementById("age1").disabled = false;
			document.getElementById("finis").style.visibility = "visible";
			document.getElementById("load").style.visibility = "hidden";
		} else {
			document.getElementById("timeeie").innerHTML = timeleft + " Seconds Ago";
			document.getElementById("age1").disabled = true;
			document.getElementById("load").style.visibility = "visible";
			document.getElementById("wait").style.visibility = "hidden";
		}
		timeleft += 1;
	}, 1000);
}

function count2() {
	console.log("1");
	var timeleft = 0;
	document.getElementById("load2").style.visibility = "hidden";

	document.getElementById("wait2").style.visibility = "visible";

	document.getElementById("finis2").style.visibility = "hidden";
	var downloadTimer = setInterval(function () {
		if (timeleft >= (time * 1000)) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie2").innerHTML = "Finished " + timeleft + " Sec";
			document.getElementById("age2").disabled = false;
			document.getElementById("finis2").style.visibility = "visible";
			document.getElementById("load2").style.visibility = "hidden";
		} else {
			document.getElementById("timeeie2").innerHTML = timeleft + " Seconds Ago";
			document.getElementById("age2").disabled = true;
			document.getElementById("load2").style.visibility = "visible";
			document.getElementById("wait2").style.visibility = "hidden";
		}
		timeleft += 1;
	}, 1000);
}

function count3() {
	console.log("1");
	var timeleft = 0;
	document.getElementById("load3").style.visibility = "hidden";

	document.getElementById("wait3").style.visibility = "visible";

	document.getElementById("finis3").style.visibility = "hidden";
	var downloadTimer = setInterval(function () {
		if (timeleft >= (time * 100)) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie3").innerHTML = "Finished " + timeleft + " Sec";
			document.getElementById("age3").disabled = false;
			document.getElementById("finis3").style.visibility = "visible";
			document.getElementById("load3").style.visibility = "hidden";
		} else {
			document.getElementById("timeeie3").innerHTML = timeleft + " Seconds Ago";
			document.getElementById("age3").disabled = true;
			document.getElementById("load3").style.visibility = "visible";
			document.getElementById("wait3").style.visibility = "hidden";
		}
		timeleft += 1;
	}, 1000);
}

function count4() {
	console.log("1");
	var timeleft = 0;
	document.getElementById("load4").style.visibility = "hidden";

	document.getElementById("wait4").style.visibility = "visible";

	document.getElementById("finis4").style.visibility = "hidden";
	var downloadTimer = setInterval(function () {
		if (timeleft >= (time * 10)) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie4").innerHTML = "Finished " + timeleft + " Sec";
			document.getElementById("age4").disabled = false;
			document.getElementById("finis4").style.visibility = "visible";
			document.getElementById("load4").style.visibility = "hidden";
		} else {
			document.getElementById("timeeie4").innerHTML = timeleft + " Seconds Ago";
			document.getElementById("age4").disabled = true;
			document.getElementById("load4").style.visibility = "visible";
			document.getElementById("wait4").style.visibility = "hidden";
		}
		timeleft += 1;
	}, 1000);
}

function count5() {
	console.log("1");
	var timeleft = 0;
	document.getElementById("load5").style.visibility = "hidden";

	document.getElementById("wait5").style.visibility = "visible";

	document.getElementById("finis5").style.visibility = "hidden";
	var downloadTimer = setInterval(function () {
		if (timeleft >= time) {
			clearInterval(downloadTimer);
			document.getElementById("timeeie5").innerHTML = "Finished " + timeleft + " Sec";
			document.getElementById("age5").disabled = false;
			document.getElementById("finis5").style.visibility = "visible";
			document.getElementById("load5").style.visibility = "hidden";
		} else {
			document.getElementById("timeeie5").innerHTML = timeleft + " Seconds Ago";
			document.getElementById("age5").disabled = true;
			document.getElementById("load5").style.visibility = "visible";
			document.getElementById("wait5").style.visibility = "hidden";
		}
		timeleft += 1;
	}, 1000);
}

var i = 0;
var txt = 'ยุคที่ 3 คอมพิวเตอร์ในยุคนี้เริ่มต้นภายหลังจากการใช้ทรานซิสเตอร์ได้เพียง 5 ปีเนื่องจากได้มีการประดิษฐ์คิดค้นเกี่ยวกับวงจรรวม Integrated-Circuit หรือเรียกกันย่อๆว่าICซึ่งไอซีนี้ทำให้ส่วนประกอบและวงจรต่างๆ สามารถวางลงได้บนแผ่นชิป chip เล็กๆ เพียงแผ่นเดียจึงมีการนำเอาแผ่นชิปมาใช้แทนทรานซิสเตอร์ทำให้ประหยัดเนื้อที่ได้มากนอกจากนี้ยังเริ่มมีการใช้งานระบบจัดการฐานข้อมูลData Base Management Sy และมีการพัฒนาเครื่องคอมพิวเตอร์ให้สามารถทำงานร่วมกันได้หลายๆงานในเวลาเดียวกัน และมีระบบที่ผู้ใช้สามารถโต้ตอบกับเครื่องได้หลายๆคนพร้อมๆกัน Time Sharing';
var speed = 50;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("txts").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}





