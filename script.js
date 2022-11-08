var answerDatabase = {};
var lastQuestion = "";
var mx = 0;
var my = 0;
var lastAnswer = null;
setInterval(() => {
	var items = document.getElementsByClassName("notranslate lang-en");
	if (items.length == 5) {
		var question = items[0].innerText;
		var answer1 = items[1];
		var answer2 = items[2];
		var answer3 = items[3];
		var answer4 = items[4];
		lastQuestion = question;
		console.log(question);
		if (answerDatabase[question] != null) {
			answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";
			answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";
			answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";
			answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";
			if (answer1.innerText != answerDatabase[question]) {
				answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			}
			if (answer2.innerText != answerDatabase[question]) {
				answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			}
			if (answer3.innerText != answerDatabase[question]) {
				answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			}
			if (answer4.innerText != answerDatabase[question]) {
				answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			}
			
		}
	} else if (items.length == 1) {
		answerDatabase[lastQuestion] = items[0].innerText;
	} else {
		var divs = document.getElementsByTagName("div");
		for (let i = 0; i < divs.length; i++) {
			if (divs[i].innerHTML.slice(0,2) == "+$" && lastQuestion in answerDatabase == false) {
				answerDatabase[lastQuestion] = lastAnswer.innerText;
			}
		}
	}
});
function getDistance(xA, yA, xB, yB) {
	var xDiff = xA - xB;
	var yDiff = yA - yB;

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
addEventListener('mousemove', (event) => {
	mx = event.clientX;
	my = event.clientY;
	var spans = document.getElementsByClassName("notranslate lang-en");
	var lowestDist = 10000000000;
	var lowestSpan = null;
	for (let i = 0; i < spans.length; i++) {
		var rect = spans[i].getBoundingClientRect();
		if (getDistance(rect.left, rect.top, mx, my) < lowestDist && spans[i].parentElement.parentElement.parentElement.style.fontSize == "25px") {
			lowestDist = getDistance(rect.left, rect.top, mx, my);
			lowestSpan = spans[i];
		}
	}
	if (lowestSpan != null) {
		lastAnswer = lowestSpan;
	}
});


