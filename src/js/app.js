$(document).ready(function () {
    updateCart()
})


// меню
$('.nav-menu-link').click(function (e) {
    e.stopPropagation()
    e.preventDefault()

    const $container = $('#nav-menu')

    if ($container.attr('data-is-opened') === '1') {
        $container.attr('data-is-opened', '0')
    }
    else {
        $container.attr('data-is-opened', '1')
    }
})

// вкладки
$('.tabs-panel-item').click(function (e) {
    e.preventDefault()

    const target = $(this).attr('data-target')

    $('.tabs-content-item').attr('data-is-active', '0')
    $(`.tabs-content-item[data-target="${target}"]`).attr('data-is-active', '1')

    $('.tabs-panel-item').attr('data-is-active', '0')
    $(`.tabs-panel-item[data-target="${target}"]`).attr('data-is-active', '1')
})

// корзина
$('.card').find('.card-cart').click(function (e) {
    const $root = $(this).closest('.card')
    const id = $root.attr('data-id')

    let count = localStorage.getItem(id)

    if (count === null) {
        count = 1
    }
    else {
        count++
    }

    localStorage.setItem(id, count)
    updateCart()
})

function updateCart() {
    let count = 0

    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }

        count += Number(localStorage.getItem(key))
    }

    const $cartCount = $('#cart').find('.nav-cart-count')

    if (count > 0) {
        $cartCount.attr('data-is-active', '1')
        $cartCount.text(count)
    }
    else {
        $cartCount.attr('data-is-active', '0')
        $cartCount.text('')
    }
}