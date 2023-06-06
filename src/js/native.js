import initFormCallback from './modules/formCallback/index'

initFormCallback()

// меню
$('.nav-menu-link').click(function (e) {
    e.stopPropagation()
    e.preventDefault()

    const $container = $('#nav-menu')
    $container.attr('data-is-opened', '1')
    $('body').css('overflow', 'hidden')
})

$('.nav-menu-close').click(function (e) {
    e.preventDefault()

    $('#nav-menu').attr('data-is-opened', '0')
    $('body').css('overflow', 'initial')
})

$('.nav-link').click(function (e) {
    $('#nav-menu').attr('data-is-opened', '0')
    $('body').css('overflow', 'initial')
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

// поиск по сайту
$('.site-search-btn').click(function (e) {
    const $form = $(this).closest('form')
    const $input = $form.find('input')

    if ($input.val() === '') {
        $input.focus()
    } else {
        $(this).closest('form').submit()
    }
})


