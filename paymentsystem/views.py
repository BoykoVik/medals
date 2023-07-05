from django.shortcuts import render, get_object_or_404
from .models import Obtains, Orders
from baseapp.models import Product, Bases
from apiapp.views import getcolors
import json
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder

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
        #obtain.save()
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
    print(msgForTg)
    return JsonResponse(objects_serialized_data, safe=False, encoder=DjangoJSONEncoder)