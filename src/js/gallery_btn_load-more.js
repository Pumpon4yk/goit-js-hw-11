import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import getApi from './getApi';
import cardTml from "../partials/card.hbs"

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery')
const btn = document.querySelector('.load-more')

let name = '';
let page = 1;
let response = {};

form.addEventListener('submit', searchFoto)
btn.addEventListener('click', onClickBtn)

async function searchFoto(e) {
    e.preventDefault()
    name = e.currentTarget.elements.searchQuery.value

    gallery.innerHTML = '';
    btn.classList.add('hidden')
    page = 1

    if (name === '') {
        return Notify.warning("No data to search");
    }

    try {
        response = await getApi(name)
        if (response.data.hits.length === 0) {
            return Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        }
        if (response.data.hits.length < 39) {
            btn.classList.add('hidden')
            creatCard(response)
            return
        }
        btn.classList.remove('hidden')
        btnLoadMore(true)
        creatCard(response)
        btnLoadMore(false)
    } catch (error) {
        return Notify.info("We're sorry, but you've reached the end of search results.");
    }

}

function creatCard(arr) {
    gallery.insertAdjacentHTML('beforeend', cardTml(arr.data.hits));
    if (page === 1) {
        Notify.success(`Hooray! We found ${arr.data.totalHits} images.`);
    }

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.on('show.simplelightbox')
}

async function onClickBtn() {
    btnLoadMore(true)
    page += 1;

    try {
        const res = await getApi(name, page)

        if (res.data.hits.length < 39) {
            btn.classList.add('hidden')
            Notify.info("We're sorry, but you've reached the end of search results.");
        }

        creatCard(res)
        btnLoadMore(false)

        const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();

        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
    } catch (error) {
        btn.classList.add('hidden')
        Notify.info("We're sorry, but you've reached the end of search results.");
    }

}

function btnLoadMore(bool) {
    btn.disabled = bool;

    if (bool) {
        btn.textContent = 'Loading'
        return
    }

    btn.textContent = 'Load more'
}

