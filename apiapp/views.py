from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.core import serializers
from baseapp.models import Categories, Product, ProductImage
# Create your views here.

def products_new(request):
    objects = Product.objects.filter(is_new = True)
    return JsonResponse(serialise_data(objects), safe=False, encoder=DjangoJSONEncoder)
    
def products_hit(request):
    objects = Product.objects.filter(is_hit = True)
    return JsonResponse(serialise_data(objects), safe=False, encoder=DjangoJSONEncoder)

def products_sale(request):
    objects = Product.objects.filter(is_sale = True)
    return JsonResponse(serialise_data(objects), safe=False, encoder=DjangoJSONEncoder)


def serialise_data(objects):
    objects_serialized_data = []

    for obj in objects:
        objects_serialized_data.append({
            "id": obj.id,
            "name": obj.title,
            "description": obj.title,
            "price": obj.price,
            "url": f"detail/{obj.id}",
            "image": obj.image.url,
            "imageAlt": f"{obj.description} заказать Москва",
            "parameters": [
            "color",
            "base"
            ],
            "sectionName": f"{obj.category}"
        })
        print(obj.category)
    return objects_serialized_data
