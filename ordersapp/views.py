from django.shortcuts import render
from baseapp.views import categorytonav
# Create your views here.
def cart(request):
    return render(request, 'ordersapp/cart.html', {
        'categories': categorytonav(),
    })