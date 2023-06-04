import $ from "jquery";

const ui = {
    $cart: null,
    $cardCarts: null,
    $cartCount: null,
    $cartHint: null
}

const conf = {
    cartDataDefault: {
        count: 0
    },
    canUseEffect: true
}

export default function initCardCart() {
    ui.$cart = $('#cart')
    ui.$cartCount = ui.$cart.find('.nav-cart-count')
    ui.$cartHint = ui.$cart.find('.nav-cart-hint')

    ui.$cardCarts = $('.card-cart')

    console.log(ui)

    ui.$cardCarts.click(cardCartClick)
    updateCartIcon()
}

// добавление товаров в корзину
function cardCartClick(e) {
    e.preventDefault()

    const $card = $(this).closest('.card')
    const id = $card.attr('data-id')

    const cartData = getCartData()

    if (cartData.hasOwnProperty(id)) {
        cartData[id]++
    }
    else {
        cartData[id] = 1
    }

    cartData.count++;
    saveCartData(cartData)
    updateCartIcon()
    cartEffect()
}

// получить корзину
function getCartData() {
    let cartData = localStorage.getItem('cart')

    if (cartData === null) {
        cartData = JSON.stringify(conf.cartDataDefault)
    }

    return JSON.parse(cartData)
}

function saveCartData(cartData) {
    localStorage.setItem('cart', JSON.stringify(cartData))
}

// обновить значок корзины
function updateCartIcon() {
    const cartData = getCartData()

    if (cartData.count > 0) {
        ui.$cartCount.attr('data-is-active', '1')
        ui.$cartCount.text(cartData.count)

        if (cartData.count > 999) {
            ui.$cartCount.text('999')
        }

    }
    else {
        ui.$cartCount.attr('data-is-active', '0')
        ui.$cartCount.text('')
    }
}

// эффект при добавлении товара в корзину
function cartEffect() {
    if (conf.canUseEffect) {
        conf.canUseEffect = false

        ui.$cartHint.fadeIn(500, function () {
            $(this).delay(1000).fadeOut(500, function () {
                $(this).css('top', '120%');
            });
        }).css('top', '120%');

        setTimeout(() => {
            conf.canUseEffect = true
        }, 2000)
    }
}