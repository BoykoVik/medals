from django.shortcuts import render
from baseapp.views import categorytonav
# Create your views here.
def cart(request):
    broads = []
    broads.append(f'<li class="breadcrumb-item active">Корзина</li>')
    return render(request, 'ordersapp/cart.html', {
        'categories': categorytonav(),
        'broads': broads,
        'product': 'Корзина',
    })