const sockets = [];
var nativeWebSocket = window.WebSocket;
var started = false;
var otherStart = true;
alert("started");

window.WebSocket = function(...args) {
	const socket = new nativeWebSocket(...args);
	const nativeSend = socket.send;
	socket.send = function(...args) {
		nativeSend.call(this, ...args);
		if (arrayBufferToB64(...args) != "AAA=" && started == true && otherStart == true) {
			otherStart = false;
			document.onkeydown = (e)=>{
				if (e.key == "u") {
					socket.send(...args);
				};
			};
		};
		if (started == false) {
			started = true;
		};
		
	};
	sockets.push(socket);
	return socket;
};
const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
	const byteCharacters = atob(b64Data);
	const byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize);

		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		const byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}

	const blob = new Blob(byteArrays, { type: contentType });
	return blob;
};
function arrayBufferToB64(buffer) {
	var binary = '';
	var bytes = new Uint8Array(buffer);
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	};
	return window.btoa(binary);
};
