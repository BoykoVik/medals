from django.shortcuts import render, get_object_or_404, redirect
from .models import Obtains, Orders
from baseapp.models import Product, Bases
from apiapp.views import getcolors
import json
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from yookassa import Configuration, Payment
import uuid
import keys
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse
secret_key = keys.secret_key
shopId = keys.shopId
# Create your views here.
def createorder(request):
    objects_serialized_data = []
    data = json.loads(request.body)
    order = Orders()
    order.phone = phone = data.get('phone')
    order.email = data.get('email')
    order.save()
    msgForTg = f'Новый заказ\nномер заказа: {order.id}\nДата: {order.date}\n'
    sumOfOrder = 0
    products = data.get('products')
    
    for product in products:
        productId = product.get('id')
        count = product.get('count')
        obtain = Obtains()
        obtain.order = order
        prod = get_object_or_404(Product, pk = productId)#ТОВАР
        msgForTg = msgForTg + f'\n{prod.title}'
        sumOfOrder = sumOfOrder + (prod.price * count)
        obtain.product = prod
        obtain.count = count
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
        msgForTg = msgForTg + '\n'
    order.sumcost = sumOfOrder
    order.save()
    msgForTg = msgForTg + f'\nСумма заказа: {sumOfOrder}'
    

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
            "return_url": "http://ck97689.tw1.ru/"
        },
        "description": f"Заказ №{order.id}",
        "metadata": {
        "order_id": f"{order.id}"
        }
    }, idempotence_key)

    confirmation_url = payment.confirmation.confirmation_url
    print(confirmation_url)
    answer = {
        'paylink': confirmation_url
    }
    return JsonResponse(answer, safe=False, encoder=DjangoJSONEncoder)

@api_view(['GET', 'POST'])
def paymentstate(request):
    parameterType = request.data
    payid = request.data['id']
    statuspay = request.data['status']
    print(parameterType)
    print(payid)
    print(statuspay)
    answer = {
        'paylink': 'confirmation_url'
    }
    return JsonResponse(answer, safe=False, encoder=DjangoJSONEncoder)

        