import QuoteService from "./quote-service.js";

let qs = new QuoteService()


// function drawQuote(res.data) {
// 	let quote = res
// 	let template = `<div><p>${quote.body}</p></div>`
// 	document.getElementById('quote').innerHTML = template
// }
export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote(res) {
		qs.getQuote(function (quote) {
			let template = `<div><p>${quote.quote.body}</p><h5>${quote.quote.author}</h5></div>`
			document.getElementById('quote').innerHTML = template
		})
	}
}
