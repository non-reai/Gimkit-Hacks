var answerDatabase = {};
var lastQuestion = "";
var mx = 0;
var my = 0;
var lastAnswer = null;
var lastAnswerAlphabet = [];
alert("Started.");
setInterval(() => {
	var items = document.getElementsByClassName("notranslate lang-en");
	if (items.length == 5) {
		var question = items[0].innerText;
		var answer1 = items[1];
		var answer2 = items[2];
		var answer3 = items[3];
		var answer4 = items[4];
		var answersAlphabet = [answer1.innerText,answer2.innerText,answer3.innerText,answer4.innerText];
		answersAlphabet.sort();
		lastAnswerAlphabet = answersAlphabet;
		lastQuestion = question;
		
		if (answerDatabase[`${question}_${lastAnswerAlphabet}`] != null) {
			answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";
			answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";
			answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";
			answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";
			if (answer1.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) {
				answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			}
			if (answer2.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) {
				answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			}
			if (answer3.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) {
				answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			}
			if (answer4.innerText != answerDatabase[`${question}_${lastAnswerAlphabet}`]) {
				answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			}
			
		}
	} else if (items.length == 1) {
		answerDatabase[`${lastQuestion}_${lastAnswerAlphabet}`] = items[0].innerText;
	} else {
		var divs = document.getElementsByTagName("div");
		for (let i = 0; i < divs.length; i++) {
			if (divs[i].innerHTML.slice(0,2) == "+$" && `${lastQuestion}_${lastAnswerAlphabet}` in answerDatabase == false) {
				answerDatabase[`${lastQuestion}_${lastAnswerAlphabet}`] = lastAnswer.innerText;
			}
		}
	}
});
addEventListener('mousemove', (event) => {
	mx = event.clientX;
	my = event.clientY;
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	px = mx/vw;
	py = my/vh;
	var possibleQuadrants = [true,true,true,true];
	if (py > 0.745) {
		possibleQuadrants[0] = false;
		possibleQuadrants[1] = false;
	} else {
		possibleQuadrants[2] = false;
		possibleQuadrants[3] = false;
	}
	if (px > 0.5) {
		possibleQuadrants[0] = false;
		possibleQuadrants[2] = false;
	} else {
		possibleQuadrants[1] = false;
		possibleQuadrants[3] = false;
	}
	var quadrant = 0;
	for (let i = 0; i<4; i++) {
		if (possibleQuadrants[i] == true) {
			quadrant = i;
		}
	}
	var items = document.getElementsByClassName("notranslate lang-en");
	if (items.length == 5) {
		lastAnswer = items[quadrant+1];
	}
});


