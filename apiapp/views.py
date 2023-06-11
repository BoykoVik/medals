from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.core import serializers
from baseapp.models import Categories, Product, ProductImage
# Create your views here.

def products_new(request):
    objects = Product.objects.all()
    objects_serialized_data = []
    for obj in objects:
        objects_serialized_data.append({
            'title': obj.title,
            'image': obj.image.url,
            'price': obj.price,
        })
    
    return JsonResponse(objects_serialized_data, safe=False, encoder=DjangoJSONEncoder)
    
def products_hit(request):

    return render(request, 'baseapp/home.html')

def products_sale(request):

    return render(request, 'baseapp/home.html')
'''
[
    {
        "model": "baseapp.product", "pk": 1, "fields": {
            "title": "\u043f\u043b\u0430\u043d\u043a\u0430",
            "image": "products_imgs/4e3h7t3s1bee5rj5ox5j36x7y0og102y.png"
        }
    },
    {
        "model": "baseapp.product", "pk": 2, "fields": {
            "title": "\u0448\u043b\u044f\u043f\u0430",
            "image": "products_imgs/eap46boyh6bxvrse7u6e9sqi96hvjt6t.png"
            }
    }
]

    objects_serialized_data = []
    for obj in objects:
        objects_serialized_data.append({
            'title': obj.title,
            'image': obj.image,
            'price': obj.price,
        })
'''