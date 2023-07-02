from django.shortcuts import render, get_object_or_404
from datetime import datetime
from .models import Product, ProductImage, Categories, Categorymedals, Callrequest
from django.db.models import Q

# Create your views here.
def index(request):
    keywords = 'Орденские планки колодки крепления заказать купить Москва, купить Медали России'
    description = 'Мы предлагаем широкий ассортимент орденских планок и колодок'
    return render(request, 'baseapp/home.html', {
        'categories': categorytonav(),
        'keywords': keywords,
        'description': description,
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
    keywords = f'{product.title}, купить {product.title}, заказать планку {product.title}, купить планку {product.title}, {product.title} на офисную форму'
    description = f'В магазине планки.москва Вы можете заказать орденскую планку или колодку {product.title} на различных видах креплений и подложке'
    return render(request, 'baseapp/detail.html', {
        'product': product,
        'categories': categorytonav(),
        'imgs': imgs,
        'broads': broads,
        'keywords': keywords,
        'description': description,
        })

def categorylist(request):
    if 'category' in request.GET:
        categoryId = request.GET['category']
    else:
        categoryId = '1'
    category = get_object_or_404(Categories, pk = categoryId)
    broads = []
    broads.append(f'<li class="breadcrumb-item active">{category.title}</li>')
    medalstypes = Categorymedals.objects.all()
    keywords = f'{category.title}, заказать {category.title} в Москве'
    description = f'В магазине планки.москва Вы можете заказать {category.title}'
    return render(request, 'baseapp/catalog.html', {
        'categories': categorytonav(),
        'medalstypes': medalstypes,
        'category': category,
        'broads': broads,
        'keywords': keywords,
        'description': description,
        })

def categoryselected(request):
    if 'category' in request.GET:
        categoryId = request.GET['category']
    else:
        categoryId = '1'
    if 'itemtype' in request.GET:
        medaltypeId = request.GET['itemtype']
    else:
        medaltypeId = '1'
    medalstypes = Categorymedals.objects.all()
    category = get_object_or_404(Categories, pk = categoryId)
    keywords = f'{category.title}, заказать {category.title} в Москве'
    description = f'В магазине планки.москва Вы можете заказать {category.title}'
    return render(request, 'baseapp/catalog.html', {
        'categories': categorytonav(),
        'medalstypes': medalstypes,
        'medaltypeId': medaltypeId,
        'category': category,
        'keywords': keywords,
        'description': description,
        })

def add_request(request):
    if request.method == 'GET':
        req = Callrequest()
        req.number = request.GET['phone_number']
        req.dateandtame = datetime.now()
        req.save()
    return index(request)

def searchprod(request):
    search_query = request.GET.get('query','')
    products = Product.objects.filter(Q(title__icontains=search_query))
    return render(request, 'baseapp/search.html', {
        'categories': categorytonav(),
        'products': products
        })

def categorytonav():
    categories = Categories.objects.all()
    return categories
