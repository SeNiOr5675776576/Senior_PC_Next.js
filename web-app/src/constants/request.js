const BaseUrl = 'http://127.0.0.1:1337'
export const Url = {
    getImage:(url)=>BaseUrl + url,
    getData: BaseUrl + '/api/products?populate=image',
    getDataImgCarousel: BaseUrl + '/api/image-company-carousel?populate=Image',
    getDataPeriphery: BaseUrl + '/api/peripheries?populate=image',
    getDataBackground: BaseUrl + '/api/image-bg-signs?populate=Image',
}

