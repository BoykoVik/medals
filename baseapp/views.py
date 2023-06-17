from django.shortcuts import render, get_object_or_404
from .models import Product, ProductImage
# Create your views here.
def index(request):

    return render(request, 'baseapp/home.html')

def detail(request):
    if 'item' in request.GET:
        itemId = request.GET['item']
    else:
        itemId = '1'
    product = get_object_or_404(Product, pk = itemId)
    print(product)
    imgs = product.imgs.all()
    print(imgs)
    return render(request, 'baseapp/detail.html', {
        'product': product,
        'imgs': imgs})