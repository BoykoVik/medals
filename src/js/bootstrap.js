// jquery
import $ from 'jquery';
import Inputmask from "inputmask";

window.jQuery = $
window.$ = $
window.Inputmask = Inputmask

// lodash
window._ = require('lodash')

// bootstrap
require('bootstrap/js/dist/modal')
require('bootstrap/js/dist/carousel')

// axios
import axios from "axios"

const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]')?.getAttribute('content');

if (!csrfToken) {
    console.error('Error! CSRF token not found!')
}

axios.defaults.headers.common['X-CSRFToken'] = csrfToken;