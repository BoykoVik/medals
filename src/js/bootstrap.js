// jquery
import $ from 'jquery';
import Inputmask from "inputmask";

window.jQuery = $
window.$ = $
window.Inputmask = Inputmask

// axios
import axios from "axios"

const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

if (!csrfToken) {
    console.error('Error! CSRF token not found!')
}

axios.defaults.headers.common['X-CSRFToken'] = csrfToken;