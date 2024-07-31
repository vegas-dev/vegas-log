class VGLog {
	constructor() {
		this.logs = ['ass'];

		if (NODE_ENV === 'development') {
			document.getElementById("monitor").innerText = 'sdasdasd asd asdas dasdas d'
		}
	}

	run(string = '') {
		console.log(string)
	}
}

export default VGLog;
