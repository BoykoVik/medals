from django.shortcuts import render, get_object_or_404
from .models import Product, ProductImage, Categories

# Create your views here.
def index(request):
    return render(request, 'baseapp/home.html', {
        'categories': categorytonav(),
    })

def detail(request):
    if 'item' in request.GET:
        itemId = request.GET['item']
    else:
        itemId = '1'
    product = get_object_or_404(Product, pk = itemId)
    print(product)
    imgs = product.imgs.all()
    print(imgs)
    broads = []
    broads.append(f'<li class="breadcrumb-item"><a href="catalog.html">{product.category}</a></li>')
    broads.append(f'<li class="breadcrumb-item active">{product.title}</li>')
    return render(request, 'baseapp/detail.html', {
        'product': product,
        'categories': categorytonav(),
        'imgs': imgs,
        'broads': broads})

def categorylist(request):
    if 'category' in request.GET:
        categoryId = request.GET['category']
    else:
        categoryId = '1'
    category = get_object_or_404(Categories, pk = categoryId)
    products = Product.objects.filter(category = category)
    broads = []
    broads.append(f'<li class="breadcrumb-item active">{category.title}</li>')
    return render(request, 'baseapp/catalog.html', {
        'products': products,
        'categories': categorytonav(),
        'broads': broads})

def categorytonav():
    categories = Categories.objects.all()
    return categories