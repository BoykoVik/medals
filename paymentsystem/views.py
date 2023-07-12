from django.shortcuts import render, get_object_or_404, redirect, HttpResponseRedirect
from .models import Obtains, Orders, Photoorder
from baseapp.models import Product, Bases
from apiapp.views import getcolors
from baseapp.views import categorytonav
import json
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from yookassa import Configuration, Payment
import uuid
import keys
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse
import urllib.request
import urllib.parse
from django.core.files.storage import FileSystemStorage

secret_key = keys.secret_key
shopId = keys.shopId
# Create your views here.
def createorder(request):
    objects_serialized_data = []
    data = json.loads(request.body)
    order = Orders()
    order.phone = data.get('phone')
    order.email = data.get('email')
    order.save()
    msgForTg = f'Новый заказ\nномер заказа: {order.id}\nДата: {order.date}\nтелефон: {order.phone}\n__________\n'
    sumOfOrder = 0
    products = data.get('products')
    
    for product in products:
        productId = product.get('id')
        count = product.get('count')
        obtain = Obtains()
        obtain.order = order
        prod = get_object_or_404(Product, pk = productId)#ТОВАР
        sumOfOrder = sumOfOrder + (prod.price * count)
        obtain.product = prod
        obtain.count = count
        msgForTg = msgForTg + f'\n{prod.title}\n\n{prod.category}\n'
        if prod.medalcategory:
            msgForTg = msgForTg + f'\n{prod.medalcategory}\n'
        msgForTg = msgForTg + f'\nколичество: {count}'
        obtain.about = ''
        parameters = product.get('parameters')
        if (parameters):
            for param in parameters:
                parameter = param.get('parameter')
                value = param.get('value')
                if parameter == 'base':
                    base = get_object_or_404(Bases, pk = value)
                    msgForTg = msgForTg + f'\nВид крепления: {base.title}'
                    obtain.about = str(obtain.about) + f'\nВид крепления: {base.title}'
                elif parameter == 'color':
                    msgForTg = msgForTg + f'\nЦвет: {getcolors()[value-1]}'
                    obtain.about = str(obtain.about) + f'\nЦвет: {getcolors()[value-1]}'
                elif parameter == 'number':
                    msgForTg = msgForTg + f'\nНомер: {value}'
                    obtain.about = str(obtain.about) + f'\nНомер: {value}'
        obtain.save()
        msgForTg = msgForTg + '\n__________'
    order.sumcost = sumOfOrder
    order.save()
    msgForTg = msgForTg + f'\nСумма заказа: {sumOfOrder}'
    
    url = u'https://api.telegram.org/bot6359888423:AAGEfUcoYBAcutK4DzvSjkmlfxmPNh23qPQ/sendMessage'
    admins = ('628257666', '701668128',)
    for admin in admins:
        data = {'chat_id': admin, 'text': msgForTg + '\nперейдите в юкассу для списания средств.', 'parse_mode': 'HTML'}
        url_values = urllib.parse.urlencode(data)
        full_url = url + '?' + url_values
        data = urllib.request.urlopen(full_url)
    
    Configuration.account_id = shopId
    Configuration.secret_key = secret_key

    idempotence_key = str(uuid.uuid4())
    payment = Payment.create({
        "amount": {
            "value": f'{sumOfOrder}.00',
            "currency": "RUB"
        },
        "payment_method_data": {
            "type": "bank_card"
        },
        "confirmation": {
            "type": "redirect",
            "return_url": f"http://127.0.0.1:8000/paymentsusses?order={order.id}"
        },
        "description": f"Заказ №{order.id}",
        "metadata": {
        "order_id": f"{order.id}"
        }
    }, idempotence_key)

    confirmation_url = payment.confirmation.confirmation_url
    answer = {
        'paylink': confirmation_url
    }
    return JsonResponse(answer, safe=False, encoder=DjangoJSONEncoder)

@api_view(['GET', 'POST'])
def paymentstate(request):
    parameterType = request.data
    payid = request.data['id']
    statuspay = request.data['status']
    answer = {
        'paylink': 'confirmation_url'
    }
    return JsonResponse(answer, safe=False, encoder=DjangoJSONEncoder)

def photoordersave(request):
    if request.method == 'POST':
        order = Orders()
        order.email = request.POST.get('email')
        order.phone = request.POST.get('phone')
        order.save()
        task = Photoorder()
        for obj in request.FILES.getlist('images'):
            print(dir(obj))
            task = Photoorder()
            task.image = obj
            task.order = order
            task.save()
        url = u'https://api.telegram.org/bot6359888423:AAGEfUcoYBAcutK4DzvSjkmlfxmPNh23qPQ/sendMessage'
        admins = ('628257666', '701668128',)
        for admin in admins:
            data = {'chat_id': admin, 'text': f'Заказ по фото № {order}\nтелефон {order.phone}', 'parse_mode': 'HTML'}
            url_values = urllib.parse.urlencode(data)
            full_url = url + '?' + url_values
            try:
                data = urllib.request.urlopen(full_url)
            except:
                pass
    return render(request, 'baseapp/photosucess.html', {
    'categories': categorytonav(),
    'order': order
    })
    