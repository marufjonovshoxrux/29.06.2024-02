export function Item(item) {
    const li = document.createElement('li')
    const del = document.createElement('div')


    li.innerHTML = item.Title
    del.classList.add('delete')

    li.append(del)
    const promo__bg = document.querySelector('.promo__bg')
    const promo__genre = document.querySelector('.promo__genre')
    const promo__title = document.querySelector('.promo__title')
    const promo__prod = document.querySelector('.promo__descr')
    const band = document.querySelector('.band')


    li.onclick = () => {
        promo__bg.style.backgroundImage = `url(${item.Poster})` 
        promo__genre.innerHTML = item.Genre
        promo__title.innerHTML = item.Title
        promo__prod.innerHTML = item.Production
        band.innerHTML = item.imdbRating

    }

    return li 
}