// A Utility Function which checks the image url of the company in popular job sessions. Does it exist or not
export const checkImageURL = (url) => {
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
}; 