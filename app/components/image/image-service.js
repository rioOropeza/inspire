const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=oceans'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let _images = []




export default class ImageService {

	getImage(callWhenDone) {
		console.log("Looking for a good pic")
		imgApi().then(res => {
			_images = res.data.images
			let randomImg = _images[Math.floor(Math.random() * _images.length)]
			callWhenDone(randomImg)
		})
	}
	get images() {
		return _images
	}
}

