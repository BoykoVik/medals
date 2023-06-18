from django.shortcuts import render, get_object_or_404
from .models import Product, ProductImage, Categories, Categorymedals

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
    imgs = product.imgs.all()
    broads = []
    broads.append(f'<li class="breadcrumb-item"><a href="category?category={ product.category.id }">{product.category}</a></li>')
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
    broads = []

    if 'itemtype' in request.GET:
        medaltypeId = request.GET['itemtype']
        medaltype = get_object_or_404(Categorymedals, pk = medaltypeId)
        products = Product.objects.filter(category = category, medalcategory = medaltype)
        broads.append(f'<li class="breadcrumb-item">{category.title}</li>')
        broads.append(f'<li class="breadcrumb-item active">{medaltype.title}</li>')
    else:
        medaltypeId = '1'
        products = Product.objects.filter(category = category)
        broads.append(f'<li class="breadcrumb-item active">{category.title}</li>')
    medalstypes = Categorymedals.objects.all()
    
    return render(request, 'baseapp/catalog.html', {
        'products': products,
        'categories': categorytonav(),
        'medalstypes': medalstypes,
        'category': category,
        'broads': broads})




def categorytonav():
    categories = Categories.objects.all()
    return categories