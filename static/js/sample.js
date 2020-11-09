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

document.getElementById("popup").style.visibility = "hidden";
//document.getElementById("age1").disabled = true;
//document.getElementById("age2").disabled = true;
//document.getElementById("age3").disabled = true;
//document.getElementById("age4").disabled = true;
//document.getElementById("age5").disabled = true;

//document.getElementById("age1skip").disabled = true;
//document.getElementById("age2skip").disabled = true;
//document.getElementById("age3skip").disabled = true;
//document.getElementById("age4skip").disabled = true;
//document.getElementById("age5skip").disabled = true;

function fib(n) {
	if (n < 2) {
		return n
	}
	return fib(n - 1) + fib(n - 2)
}
var time;

var tim;

function myFunction() {
	document.getElementById("butcal").style.zIndex = 1;
	document.getElementById("popup").style.visibility = "visible";

	var start = new Date().getTime();

	var x = document.getElementById("myNumber").value;
	var y = fib(x);

	document.getElementById("demo").innerHTML = 'ลำดับที่&nbsp' + x + '&nbsp=&nbsp' + y;

	var end = new Date().getTime();
	time = (end - start) * 0.001;

	tim = 0;

	var milsec = time / 1000;
	var microsec = time / 1000000;
	var nanosec = time / 1000000000;
	var piccosec = time / 1000000000000;

	count1();
	count2();
	count3();
	count4();
	count5();

	console.log(time);

	var supp = 0;

	if (time >= 0.001 && time < 0.01) {
		tim = time * 1000;
		supp = 3;
	}
	else if (time >= 0.01 && time < 0.1) {
		tim = time * 100;
		supp = 2;
	}
	else if (time >= 0.1 && time < 1) {
		tim = time * 10;
		supp = 1;
	}

	var milsec = time / 1000;
	var microsec = tim / 1000000;
	var nanosec = tim / 1000000000;
	var piccosec = tim / 1000000000000;

	var aa = -6 - supp;
	var bb = -9 - supp;
	var cc = -12 - supp;

	document.getElementById("timesec").innerHTML = time + " second";
	document.getElementById("timemill").innerHTML = milsec + " millisecond";
	document.getElementById("timemicro").innerHTML = tim + "X10"+ "<sup>"+ aa +"</sup>" + " microsecond";
	document.getElementById("timenano").innerHTML = tim + "X10"+ "<sup>"+ bb +"</sup>" + " nanosecond";
	document.getElementById("timepic").innerHTML = tim + "X10"+ "<sup>"+ cc +"</sup>" + " picosecond";

	//document.getElementById("age1").disabled = false;
	//document.getElementById("age2").disabled = false;
	//document.getElementById("age3").disabled = false;
	//document.getElementById("age4").disabled = false;
	//document.getElementById("age5").disabled = false;

}



document.getElementById("load").style.visibility = "hidden";
//document.getElementById("wait").style.visibility = "visible";
document.getElementById("finis").style.visibility = "hidden";

document.getElementById("load2").style.visibility = "hidden";
////document.getElementById("wait2").style.visibility = "visible";
document.getElementById("finis2").style.visibility = "hidden";

document.getElementById("load3").style.visibility = "hidden";
//document.getElementById("wait3").style.visibility = "visible";
document.getElementById("finis3").style.visibility = "hidden";

document.getElementById("load4").style.visibility = "hidden";
////document.getElementById("wait4").style.visibility = "visible";
document.getElementById("finis4").style.visibility = "hidden";

document.getElementById("load5").style.visibility = "hidden";
//document.getElementById("wait5").style.visibility = "visible";
document.getElementById("finis5").style.visibility = "hidden";

function count1() {
	console.log("1");
	var timeleft = 0;
	if (time >= 0.001 && time < 0.01) {
		tim = time * 1000;
	}
	else if (time >= 0.01 && time < 0.1) {
		tim = time * 100;
	}
	else if (time >= 0.1 && time < 1) {
		tim = time * 10;
	}
	document.getElementById("load").style.visibility = "hidden";

	//document.getElementById("wait").style.visibility = "visible";

	document.getElementById("finis").style.visibility = "hidden";

	//document.getElementById("age1skip").disabled = false;

	//document.getElementsBId("start11").style.visibility = "hidden";
	//document.getElementById("age1").style.visibility = "hidden";

	//document.getElementById("age1skip").style.visibility = "visible";



	var downloadTimer = setInterval(function () {
		if (timeleft >= (tim * 10000)) {
			clearInterval(downloadTimer);
			document.getElementById("load").innerHTML = "Finished " + (tim * 10000) + " Sec";
			//document.getElementById("age1").disabled = false;
			document.getElementById("finis").style.visibility = "visible";
			//document.getElementById("wait").style.visibility = "hidden";
			//document.getElementById("age1skip").disabled = true;
		} else {
			document.getElementById("load").innerHTML = timeleft + " Seconds";
			//document.getElementById("age1").disabled = true;
			document.getElementById("load").style.visibility = "visible";
			//document.getElementById("wait").style.visibility = "hidden";
			//document.getElementById("age1skip").disabled = false;
		}
		timeleft += 1;
	}, 1000);
}

function count2() {
	var timeleft = 0;
	if (time >= 0.001 && time < 0.01) {
		tim = time * 1000;
	}
	else if (time >= 0.01 && time < 0.1) {
		tim = time * 100;
	}
	else if (time >= 0.1 && time < 1) {
		tim = time * 10;
	}
	document.getElementById("load2").style.visibility = "hidden";

	//document.getElementById("wait2").style.visibility = "visible";

	document.getElementById("finis2").style.visibility = "hidden";

	//document.getElementById("start22").style.visibility = "hidden";
	//document.getElementById("age2").style.visibility = "hidden";

	//document.getElementById("age2skip").style.visibility = "visible";

	var downloadTimer = setInterval(function () {
		if (timeleft >= (tim * 1000)) {
			clearInterval(downloadTimer);
			document.getElementById("load2").innerHTML = "Finished " + (tim * 1000) + " Sec";
			//document.getElementById("age2").disabled = false;
			document.getElementById("finis2").style.visibility = "visible";
			//document.getElementById("wait2").style.visibility = "hidden";
			//document.getElementById("age2skip").disabled = true;

		} else {
			document.getElementById("load2").innerHTML = timeleft + " Seconds";
			//document.getElementById("age2").disabled = true;
			document.getElementById("load2").style.visibility = "visible";
			//document.getElementById("wait2").style.visibility = "hidden";
			//document.getElementById("age2skip").disabled = false;

		}
		timeleft += 1;
	}, 1000);
}

function count3() {
	console.log("1");
	var timeleft = 0;
	if (time >= 0.001 && time < 0.01) {
		tim = time * 1000;
	}
	else if (time >= 0.01 && time < 0.1) {
		tim = time * 100;
	}
	else if (time >= 0.1 && time < 1) {
		tim = time * 10;
	}
	var timeleft = 0;
	document.getElementById("load3").style.visibility = "hidden";

	//document.getElementById("wait3").style.visibility = "visible";

	document.getElementById("finis3").style.visibility = "hidden";

	//document.getElementById("start33").style.visibility = "hidden";
	//document.getElementById("age3").style.visibility = "hidden";

	//document.getElementById("age3skip").style.visibility = "visible";

	var downloadTimer = setInterval(function () {
		if (timeleft >= (tim * 100)) {
			clearInterval(downloadTimer);
			document.getElementById("load3").innerHTML = "Finished " + (tim * 100) + " Sec";
			//document.getElementById("age3").disabled = false;
			document.getElementById("finis3").style.visibility = "visible";
			//document.getElementById("wait3").style.visibility = "hidden";
			//document.getElementById("age3skip").disabled = true;
		} else {
			document.getElementById("load3").innerHTML = timeleft + " Seconds ";
			//document.getElementById("age3").disabled = true;
			document.getElementById("load3").style.visibility = "visible";
			//document.getElementById("wait3").style.visibility = "hidden";
			//document.getElementById("age3skip").disabled = false;
		}
		timeleft += 1;
	}, 1000);
}

function count4() {
	console.log("1");
	var timeleft = 0;
	if (time >= 0.001 && time < 0.01) {
		tim = time * 1000;
	}
	else if (time >= 0.01 && time < 0.1) {
		tim = time * 100;
	}
	else if (time >= 0.1 && time < 1) {
		tim = time * 10;
	}
	var timeleft = 0;
	document.getElementById("load4").style.visibility = "hidden";

	//document.getElementById("wait4").style.visibility = "visible";

	document.getElementById("finis4").style.visibility = "hidden";

	//document.getElementById("start44").style.visibility = "hidden";
	//document.getElementById("age4").style.visibility = "hidden";

	//document.getElementById("age4skip").style.visibility = "visible";

	var downloadTimer = setInterval(function () {
		if (timeleft >= (tim * 10)) {
			clearInterval(downloadTimer);
			document.getElementById("load4").innerHTML = "Finished " + (tim * 10) + " Sec";
			//document.getElementById("age4").disabled = false;
			document.getElementById("finis4").style.visibility = "visible";
			//document.getElementById("wait4").style.visibility = "hidden";
			//document.getElementById("age4skip").disabled = true;
			skip44 = 0;
		} else {
			document.getElementById("load4").innerHTML = timeleft + " Seconds ";
			//document.getElementById("age4").disabled = true;
			document.getElementById("load4").style.visibility = "visible";
			//document.getElementById("wait4").style.visibility = "hidden";
			//document.getElementById("age4skip").disabled = false;
		}
		timeleft += 1;
	}, 1000);
}
function count5() {
	console.log("1");
	var timeleft = 0;
	if (time >= 0.001 && time < 0.01) {
		tim = time * 1000;
	}
	else if (time >= 0.01 && time < 0.1) {
		tim = time * 100;
	}
	else if (time >= 0.1 && time < 1) {
		tim = time * 10;
	}
	var timeleft = 0;
	document.getElementById("load5").style.visibility = "hidden";

	//document.getElementById("wait5").style.visibility = "visible";

	document.getElementById("finis5").style.visibility = "hidden";

	//document.getElementById("start55").style.visibility = "hidden";
	//document.getElementById("age5").style.visibility = "hidden";

	//document.getElementById("age5skip").style.visibility = "visible";

	var downloadTimer = setInterval(function () {
		if (timeleft >= tim) {
			clearInterval(downloadTimer);
			document.getElementById("load5").innerHTML = "Finished " + time + " Sec";
			//document.getElementById("age5").disabled = false;
			document.getElementById("finis5").style.visibility = "visible";
			//document.getElementById("wait5").style.visibility = "hidden";
			//document.getElementById("age5skip").disabled = true;
		} else {
			document.getElementById("load5").innerHTML = timeleft + " Seconds ";
			//document.getElementById("age5").disabled = true;
			document.getElementById("load5").style.visibility = "visible";
			//document.getElementById("wait5").style.visibility = "hidden";
			//document.getElementById("age5skip").disabled = false;
		}
		timeleft += 1;
	}, 1000);
}
var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var txt3 = 'ยุคที่ 3 คอมพิวเตอร์ในยุคนี้เริ่มต้นภายหลังจากการใช้ทรานซิสเตอร์ได้เพียง 5 ปีเนื่องจากได้มีการประดิษฐ์คิดค้นเกี่ยวกับวงจรรวม Integrated-Circuit หรือเรียกกันย่อๆว่าICซึ่งไอซีนี้ทำให้ส่วนประกอบและวงจรต่างๆ สามารถวางลงได้บนแผ่นชิป chip เล็กๆ เพียงแผ่นเดียจึงมีการนำเอาแผ่นชิปมาใช้แทนทรานซิสเตอร์ทำให้ประหยัดเนื้อที่ได้มากนอกจากนี้ยังเริ่มมีการใช้งานระบบจัดการฐานข้อมูลData Base Management Sy และมีการพัฒนาเครื่องคอมพิวเตอร์ให้สามารถทำงานร่วมกันได้หลายๆงานในเวลาเดียวกัน และมีระบบที่ผู้ใช้สามารถโต้ตอบกับเครื่องได้หลายๆคนพร้อมๆกัน Time Sharing';
var txt1 = 'ยุคที่1 เป็นการประดิษฐ์เครื่องคอมพิวเตอร์ที่มิใช่เครื่องคำนวณโดยเมาช์ลีและเอ็กเคอร์ต (Mauchlyand Eckert)ได้นำแนวความคิดนั้นมาประดิษฐ์เป็นเครื่องคอมพิวเตอร์ที่มีประสิทธิภาพมากเครื่องหนึ่งเรียกว่า ENIAC (Electronic Numericial Integrator and Calculator) ซึ่งต่อมาได้ทำการปรับปรุงการทำงานของเครื่องคอมพิวเตอร์ให้มีประสิทธิภาพดียิ่งขึ้นและได้ประดิษฐ์เครื่อง UNIVAC (Universal Automatic Computer)ขึ้นเพื่อใช้ในการสำรวจสำมะโนประชากรประจำปี จึงนับได้ว่า UNIVACเป็นเครื่องคอมพิวเตอร์เครื่องแรกของโลกที่ถูกใช้งานในเชิงธุรกิจซึ่งนับเป็นการเริ่มของเครื่องคอมพิวเตอร์ในยุคแรกอย่างแท้จริงเครื่องคอมพิวเตอร์ในยุคนี้ใช้หลอดสุญญากาศในการควบคุมการทำงานของเครื่อง ซึ่งทำงานได้อย่างรวดเร็วแต่มีขนาดใหญ่มากและราคาแพงยุคแรกของคอมพิวเตอร์สิ้นสุดเมื่อมีผู้ประดิษฐ์ทรานซิสเตอร์มาใช้แทนหลอดสูญญากาศ'
var txt2 = 'ยุคที่ 2 มีการนำทรานซิสเตอร์ มาใช้ในเครื่องคอมพิวเตอร์จึงทำให้เครื่องมีขนาดเล็กลง และสามารถเพิ่มประสิทธิภาพในการทำงานให้มีความรวดเร็วและแม่นยำมากยิ่งขึ้น นอกจากนี้ ในยุคนี้ยังได้มีการคิด ภาษาเพื่อใช้กับเครื่องคอมพิวเตอร์ใช้อุปกรณ์ ทรานซิสเตอร์ (Transistor) ซึ่งสร้างจากสารกึ่งตัวนำ (Semi-Conductor) เป็นอุปกรณ์หลัก แทนหลอดสุญญากาศ เนื่องจากทรานซิสเตอร์เพียงตัวเดียว มีประสิทธิภาพในการทำงานเทียบเท่า หลอดสุญญากาศได้นับร้อยหลอด ทำให้เครื่องคอมพิวเตอร์ในยุคนี้มีขนาดเล็ก ใช้พลังงานไฟฟ้าน้อย ความร้อนต่ำ ทำงานเร็ว และได้รับความน่าเชื่อถือมากยิ่งขึ้น'
var txt4 = 'ยุคที่ 4 เป็นยุคที่นำสารกึ่งตัวนำมาสร้างเป็นวงจรรวมความจุสูงมาก (Very Large Scale Integrated : VLSI) ซึ่งสามารถย่อส่วนไอซีธรรมดาหลายๆ วงจรเข้ามาในวงจรเดียวกัน และมีการประดิษฐ์ ไมโครโพรเซสเซอร์ (Microprocessor) ขึ้น ทำให้เครื่องมีขนาดเล็ก ราคาถูกลง และมีความสามารถในการทำงานสูงและรวดเร็วมาก จึงทำให้มีคอมพิวเตอร์ส่วนบุคคล (Personal Computer) ถือกำเนิดขึ้น'
var txt5 = 'ยุคที่ 5 ในยุคนี้ ได้มุ่งเน้นการพัฒนา ความสามารถในการทำงานของระบบคอมพิวเตอร์ และ ความสะดวกสบายในการใช้งานเครื่องคอมพิวเตอร์ อย่างชัดเจน มีการพัฒนาสร้างเครื่องคอมพิวเตอร์แบบพกพาขนาดเล็กขนาดเล็ก (Portable Computer) ขึ้นใช้งานในยุคนี้โครงการพัฒนาอุปกรณ์ VLSI ให้ใช้งานง่าย และมีความสามารถสูงขึ้น รวมทั้งโครงการวิจัยและพัฒนาเกี่ยวกับ ปัญญาประดิษฐ์ (Artificial Intelligence : AI) เป็นหัวใจของการพัฒนาระบบคอมพิวเตอร์ในยุคนี้ โดยหวังให้ระบบคอมพิวเตอร์มีความรู้ สามารถวิเคราะห์ปัญหาด้วยเหตุผล'
var speed1 = 30;
var speed2 = 30;
var speed3 = 30;
var speed4 = 30;
var speed5 = 30;

var i6 = 0;
var txt6 = 'เทคโนโลยีสมัยนี้พัฒนาเร็วมากและขนาดเล็กลงเรื่อยๆโดยที่เห็นในปัจจุบันคือ smart phone ปัจจุบันนี้มีการฝังชิปคอมพิวเตอร์ลงในสมองเราตัวอย่างเทคโนโลยีที่กำลังพัฒนา คือ neuralink ของ Elon Muskในอนาคตอันใกล้เราอาจจะได้เห็น ทุกสิ่งอย่างมีระบบคอมพิวเตอร์อยู่ในตัวของมันก็ได้เช่น ต้นไม้ สัตว์ . .' + ' ' +'คุณอาจจะเป็นคนพัฒนาขึ้นมาก็ได้ ใครจะไปรู้กันล่ะ '
var speed6 = 60;

function typeWriter6(){
	document.getElementById("age6coll").style.display ="contents";
	document.getElementById("summ").style.display="none";
	if (i6 < txt6.length) {
		document.getElementById("textContent6").innerHTML += txt6.charAt(i6);
		i6++;
		setTimeout(typeWriter6, speed6);
	}
}
function typeWriter1() {
	document.getElementById("age1scoll").style.zIndex = 1;
	if (i1 < txt1.length) {
		document.getElementById("txtcontentgen1").innerHTML += txt1.charAt(i1);
		i1++;
		setTimeout(typeWriter1, speed1);
	}
}

function typeWriter2() {
	document.getElementById("age2scoll").style.zIndex = 1;
	if (i2 < txt2.length) {
		document.getElementById("txtcontentgen2").innerHTML += txt2.charAt(i2);
		i2++;
		setTimeout(typeWriter2, speed2);
	}
}
function typeWriter3() {
	if (i3 < txt3.length) {
		document.getElementById("txtcontentgen3").innerHTML += txt3.charAt(i3);
		i3++;
		setTimeout(typeWriter3, speed3);
	}
}

function typeWriter4() {
	if (i4 < txt4.length) {
		document.getElementById("txtcontentgen4").innerHTML += txt4.charAt(i4);
		i4++;
		setTimeout(typeWriter4, speed4);
	}
}

function typeWriter5() {
	if (i5 < txt5.length) {
		document.getElementById("txtcontentgen5").innerHTML += txt5.charAt(i5);
		i5++;
		setTimeout(typeWriter5, speed5);
	}
}

function scrollSmoothToBottom(id) {
	var div = document.getElementById(id);
	$('#' + id).animate({
		scrollTop: div.scrollHeight - div.clientHeight
	}, 500);
}

function scrollSmoothToTop(id) {
	var div = document.getElementById(id);
	$('#' + id).animate({
		scrollTop: 0
	}, 500);
}

function sss() {
	var x = document.getElementById("qwe");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}


function movee() {
	var element = document.querySelector(".Boxtest");
	console.log("1")
	element.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function onLoad1(n) {
	var sec;
	if (n >= 0.001 && n < 0.01) {
		n = n * 1000;
		sec = n * 10000000;
	}
	else if (n >= 0.01 && n < 0.1) {
		n = n * 100;
		sec = n * 10000000;
	}
	else if (n >= 0.1 && n < 1) {
		n = n * 10;
		sec = n * 10000000;
	}
	console.log(sec);
	var circle = new ProgressBar.Circle('#load', {
		strokeWidth: 20,
		color: '#1ce025',
		duration: sec,
		easing: 'easeInOut'
	});

	circle.animate(1);
};

function onLoad2(n) {
	var sec;
	if (n >= 0.001 && n < 0.01) {
		n = n * 1000;
		sec = n * 1000000;
	}
	else if (n >= 0.01 && n < 0.1) {
		n = n * 100;
		sec = n * 1000000;
	}
	else if (n >= 0.1 && n < 1) {
		n = n * 10;
		sec = n * 1000000;
	}
	var circle = new ProgressBar.Circle('#load', {
		strokeWidth: 20,
		color: '#1ce025',
		duration: sec,
		easing: 'easeInOut'
	});
	console.log(sec);
	circle.animate(1);
};

function onLoad3(n) {
	var sec;
	if (n >= 0.001 && n < 0.01) {
		n = n * 1000;
		sec = n * 100000;
	}
	else if (n >= 0.01 && n < 0.1) {
		n = n * 100;
		sec = n * 100000;
	}
	else if (n >= 0.1 && n < 1) {
		n = n * 10;
		sec = n * 100000;
	}
	var circle = new ProgressBar.Circle('#load', {
		strokeWidth: 20,
		color: '#1ce025',
		duration: sec,
		easing: 'easeInOut'
	});
	console.log(sec);
	circle.animate(1);
};

function onLoad4(n) {
	var sec;
	if (n >= 0.001 && n < 0.01) {
		n = n * 1000;
		sec = n * 10000;
	}
	else if (n >= 0.01 && n < 0.1) {
		n = n * 100;
		sec = n * 10000;
	}
	else if (n >= 0.1 && n < 1) {
		n = n * 10;
		sec = n * 10000;
	}

	console.log(sec);
	var circle = new ProgressBar.Circle('#load', {
		strokeWidth: 20,
		color: '#1ce025',
		duration: sec,
		easing: 'easeInOut'
	});

	circle.animate(1);
};

function onLoad5(n) {
	var sec;
	if (n >= 0.001 && n < 0.01) {
		n = n * 1000;
		sec = n * 1000;
	}
	else if (n >= 0.01 && n < 0.1) {
		n = n * 100;
		sec = n * 1000;
	}
	else if (n >= 0.1 && n < 1) {
		n = n * 10;
		sec = n * 1000;
	}
	console.log(sec);
	var circle = new ProgressBar.Circle('#load', {
		strokeWidth: 20,
		color: '#1ce025',
		duration: sec,
		easing: 'easeInOut'
	});

	circle.animate(1);
};
var givemov = 0;
function myMove() {
	if (givemov == 0) {
		var elem = document.getElementById("butcal");
		var elemnex = document.getElementById("nextbarid");
		var pos = -35;
		var id = setInterval(frame, 20);
		function frame() {
			if (pos == 0) {
				clearInterval(id);
			} else {
				pos++;
				elem.style.left = pos + '%';
			}
		}
		var rot = 0;
		var id2 = setInterval(frame2, 1);
		function frame2(){
			if (rot == 180) {
				clearInterval(id2);
			} else {
				rot++;
				elemnex.style.transform = "rotate("+rot+"deg)";
			}
		}
		givemov = 1;
	}
	else {
		var elem = document.getElementById("butcal");
		var elemnex = document.getElementById("nextbarid");
		var pos = 0;
		var id = setInterval(frame, 20);
		function frame() {
			if (pos == -35) {
				clearInterval(id);
			} else {
				pos--;
				elem.style.left = pos + '%';
			}
		}
		var rot = 180;
		var id2 = setInterval(frame2, 1);
		function frame2(){
			if (rot == 0) {
				clearInterval(id2);
			} else {
				rot--;
				elemnex.style.transform = "rotate("+rot+"deg)";
			}
		}
		givemov = 0;
	}

}