/**
 * Точка входа, файл, в который будут импортированы все стили, js-код, изображения и шрифты.
 */
// JavaScript
import './js/app';

// Scss
import './style/app.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));
import favicon from './favicon.png'