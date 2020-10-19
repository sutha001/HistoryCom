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

 function scrollSmoothToTop (id) {
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
 





