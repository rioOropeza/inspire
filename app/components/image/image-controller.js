import ImageService from "./image-service.js"
let _imageService = new ImageService()

function drawImage(randomImg) {
  let images = _imageService.images
  let template = `<img src="${randomImg.large_url}>`
  document.getElementById('dude').style.backgroundImage = `url(${randomImg.large_url})`
}

export default class ImageController {
  constructor() {
    _imageService.getImage(drawImage)
  }


}

