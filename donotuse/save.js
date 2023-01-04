var dict = answerDatabase;
document.write("{");
for (let i = 0; i < Object.keys(dict).length; i++) {
	if (i == Object.keys(dict).length - 1) {
		document.write(`"${Object.keys(dict)[i]}":"${dict[Object.keys(dict)[i]]}"`);
	} else {
		document.write(`"${Object.keys(dict)[i]}":"${dict[Object.keys(dict)[i]]}",`);
	}
}
document.write("}");
