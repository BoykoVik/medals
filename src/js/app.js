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

$('#nav-menu').click(function (e) {
    console.log(123123)
    $(this).attr('data-is-opened', '0')
})