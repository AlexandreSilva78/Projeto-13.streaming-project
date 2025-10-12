export function getImages(path) {
    if (!path) {
        return 'placeholder.jps';
    }
    return `https://image.tmdb.org/t/p/original${path}`
}