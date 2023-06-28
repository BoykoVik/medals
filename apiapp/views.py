from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.core import serializers
from baseapp.models import Categories, Product, ProductImage, Parameters
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

def products_list(request):
    if 'category' in request.GET:
        categoryId = request.GET['category']
    else:
        categoryId = '1'
    objects = Product.objects.filter(category = categoryId)[:4]
    return JsonResponse(serialise_data(objects), safe=False, encoder=DjangoJSONEncoder)

def products_list_selected(request):
    if 'category' in request.GET:
        categoryId = request.GET['category']
    else:
        categoryId = '1'
    if 'itemtype' in request.GET:
        medaltypeId = request.GET['itemtype']
    else:
        medaltypeId = '1'
    products = Product.objects.filter(category = categoryId, medalcategory = medaltypeId)
    return JsonResponse(serialise_data(products), safe=False, encoder=DjangoJSONEncoder)

def cartitems(request):
    items = request.GET.getlist('data[]')
    objects_serialized_data = []
    for itemId in items:
        print(itemId)
        product = get_object_or_404(Product, pk = itemId)
        if product.needparameters:
            parametres = 111
        objects_serialized_data.append({
            "id": product.id,
            "name": product.title,
            "price": product.price,
            "url": f"detail?item={product.id}",
            "image": product.image.url,
            "imageAlt": f"{product.description} заказать Москва",
            "parameters": [],
            "sectionName": f"{product.category}"
        })
    return JsonResponse(objects_serialized_data, safe=False, encoder=DjangoJSONEncoder)

def getparameters(request):
    '''
    parameterType = request.GET['parameterType']
    print(parameterType)
    objects = Product.objects.filter(is_sale = True)
    return JsonResponse(serialise_data(objects), safe=False, encoder=DjangoJSONEncoder)
    '''
    parameterType = request.GET['parameterType']
    print(parameterType)
    objects_serialized_data = []
    items = []
    if parameterType == 'bracing':
        parametres = Parameters.objects.all()
        for obj in parametres:
            items.append({
                "id": obj.id,
                "name": obj.title,
            })
            
    objects_serialized_data.append({
        "label": 'вид крепления',
        "items": items
    })
    print(objects_serialized_data)
    print('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    return JsonResponse(objects_serialized_data, safe=False, encoder=DjangoJSONEncoder)


def getparameterlabel(request):
    parameterTuple = request.GET['parameterTuple']
    #print(parameterTuple)
    objects = Product.objects.filter(is_sale = True)
    return JsonResponse(serialise_data(objects), safe=False, encoder=DjangoJSONEncoder)







def serialise_data(objects):
    objects_serialized_data = []
    parametres = list(Parameters.objects.all().values('title').values_list('title', flat=True))
    for obj in objects:
        
        if obj.needparameters:
            print('qwewqeqwewq')
            objects_serialized_data.append({
            "id": obj.id,
            "name": obj.title,
            "description": obj.title,
            "price": obj.price,
            "url": f"detail?item={obj.id}",
            "image": obj.image.url,
            "imageAlt": f"{obj.description} заказать Москва",
            "parameters": [
                "bracing",
                "back"
            ],
            "sectionName": f"{obj.category}"
        })
        else:
            objects_serialized_data.append({
            "id": obj.id,
            "name": obj.title,
            "description": obj.title,
            "price": obj.price,
            "url": f"detail?item={obj.id}",
            "image": obj.image.url,
            "imageAlt": f"{obj.description} заказать Москва",
            "parameters": [],
            "sectionName": f"{obj.category}"
            })
    #print(objects_serialized_data)
    return objects_serialized_data
