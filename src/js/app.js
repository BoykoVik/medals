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