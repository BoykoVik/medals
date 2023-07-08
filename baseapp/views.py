from django.shortcuts import render, get_object_or_404
from datetime import datetime
from .models import Product, ProductImage, Categories, Categorymedals, Callrequest, Examples
from paymentsystem.models import Orders
from django.db.models import Q
import urllib.request
import urllib.parse
from django.views.generic import TemplateView

# Create your views here.
def index(request):
    keywords = 'Орденские планки колодки крепления заказать купить Москва, купить Медали России'
    description = 'Мы предлагаем широкий ассортимент орденских планок и колодок'
    examples = Examples.objects.all()
    return render(request, 'baseapp/home.html', {
        'categories': categorytonav(),
        'keywords': keywords,
        'description': description,
        'examples': examples,
    })

def detail(request, id):
    itemId = id
    product = get_object_or_404(Product, pk = itemId)
    imgs = product.imgs.all()
    broads = []
    broads.append(f'<li class="breadcrumb-item"><a href="../category/{ product.category.id }">{product.category}</a></li>')
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

def categorylist(request, id):
    categoryId = id
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
    broads = []
    broads.append(f'<li class="breadcrumb-item active">{category.title}</li>')
    return render(request, 'baseapp/catalog.html', {
        'categories': categorytonav(),
        'medalstypes': medalstypes,
        'medaltypeId': medaltypeId,
        'category': category,
        'keywords': keywords,
        'description': description,
        'broads': broads,
        })

def add_request(request):
    if request.method == 'GET':
        req = Callrequest()
        num = str(request.GET['phone_number'])
        req.number = num
        req.save()

        url = u'https://api.telegram.org/bot6359888423:AAGEfUcoYBAcutK4DzvSjkmlfxmPNh23qPQ/sendMessage'
        admins = ('628257666',)
        trans_table = {ord(' ') : None, ord('-') : None, ord('(') : None, ord(')') : None}
        num = num.translate(trans_table)
        msgForTg = f'Заказан обратный звонок на номер {num}'
        for admin in admins:
            data = {'chat_id': admin, 'text': msgForTg, 'parse_mode': 'HTML'}
            url_values = urllib.parse.urlencode(data)
            full_url = url + '?' + url_values
            data = urllib.request.urlopen(full_url)
    return index(request)

def searchprod(request):
    search_query = request.GET.get('query')
    products = Product.objects.filter(Q(title__iregex=search_query))
    return render(request, 'baseapp/search.html', {
        'categories': categorytonav(),
        'products': products
        })

def photoorder(request):
    broads = []
    broads.append(f'<li class="breadcrumb-item active">Заказ по фото</li>')
    return render(request, 'baseapp/photoorder.html', {
        'categories': categorytonav(),
        'broads': broads,
        })

def categorytonav():
    categories = Categories.objects.all()
    return categories

def paysus(request):
    order = get_object_or_404(Orders, pk = request.GET['order'])
    return render(request, 'baseapp/paysus.html', {
        'categories': categorytonav(),
        'order': order
        })

class RobotsTxtView(TemplateView):
    template_name = 'robots.txt'
    content_type = 'text/plain'