import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import throttle from 'lodash.throttle';

import "simplelightbox/dist/simple-lightbox.min.css";

import getApi from './getApi';
import cardTml from "../partials/card.hbs"

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const spiner = document.querySelector('.loader')

let name = '';
let page = 1;
let response = {};
const throttled = throttle(checkPosition, 300)

form.addEventListener('submit', searchFoto)

async function searchFoto(e) {
    e.preventDefault()
    name = e.currentTarget.elements.searchQuery.value

    gallery.innerHTML = '';
    page = 1;
    response = {}

    spin()

    window.scrollBy(0, -75)
    window.removeEventListener('scroll', throttled)

    if (name === '') {
        return Notify.warning("No data to search");
    }

    try {
        response = await getApi(name)
        if (response.data.hits.length === 0) {
            return Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        }
        creatCard(response)
        window.addEventListener('scroll', throttled)
        spin()
    } catch (error) {
        spin()

        console.log(error);
        return Notify.info("We're sorry, but you've reached the end of search results.");
    }
}

function creatCard(arr) {
    if (page === 1) {
        Notify.success(`Hooray! We found ${arr.data.totalHits} images.`);
    }
    gallery.insertAdjacentHTML('beforeend', cardTml(arr.data.hits));

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.on('show.simplelightbox')

}

function checkPosition() {
    const contentHeight = gallery.offsetHeight;      // 1) высота блока контента вместе с границами
    const yOffset = window.pageYOffset;      // 2) текущее положение скролбара
    const window_height = window.innerHeight;      // 3) высота внутренней области окна документа
    const y = yOffset + window_height;

    try {
        // если пользователь достиг конца
        if (y >= contentHeight) {
            if (response.data.hits.length === 0) {
                Notify.info("We're sorry, but you've reached the end of search results.");
                window.removeEventListener('scroll', throttled)
                return
            }
            loadMore()
            spin()
        }
    } catch (error) {
        window.removeEventListener('scroll', throttled)
    }
}

async function loadMore() {
    page += 1;

    try {
        response = await getApi(name, page)
        creatCard(response)
        spin()
    } catch (error) {
        spin()
        window.removeEventListener('scroll', throttled)
        return Notify.info("We're sorry, but you've reached the end of search results.");
    }
}

function spin() {
    if (spiner.classList.contains("is-hidden")) {
        return spiner.classList.remove('is-hidden')
    }
    return spiner.classList.add('is-hidden')
}




