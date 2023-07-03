from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.core import serializers
from baseapp.models import Categories, Product, ProductImage, Parameters, Bases
# Create your views here.

def products_list(request):
    if 'category' in request.GET:
        categoryId = request.GET['category']
    else:
        categoryId = '1'
    objects = Product.objects.filter(category = categoryId)[:8]
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
        product = get_object_or_404(Product, pk = itemId)
        objects_serialized_data.append({
            "id": product.id,
            "name": product.title,
            "price": product.price,
            "url": f"detail?item={product.id}",
            "image": product.image.url,
            "imageAlt": f"{product.description} заказать Москва",
            "sectionName": f"{product.category}"
        })
    return JsonResponse(objects_serialized_data, safe=False, encoder=DjangoJSONEncoder)

def getparameters(request):#список значений параметра товара
    parameterType = request.GET['parameterType']
    objects_serialized_data = []
    items = []
    label = ''
    if parameterType == 'bracing':
        parametres = Parameters.objects.all()
        label = 'Вид крепления'
        for obj in parametres:
            items.append({
                "id": obj.id,
                "name": obj.title,
            })
    if parameterType == 'back':
        label = 'Цвет основы'
        colors = getcolors()
        for col in colors:
            items.append({
                "id": str(colors.index(col) + 1),
                "name": col,
            })
        
    objects_serialized_data = {
        "label": label,
        "items": items
    }
    return JsonResponse(objects_serialized_data, safe=False, encoder=DjangoJSONEncoder)


def productdetail(request, id):#api/product/<int:id>
    product = get_object_or_404(Product, pk = id)
    parameters = []
    
    if product.parameters.id == 4:
        print(product.parameters.id)
        items = []
        bases = Bases.objects.all()
        for obj in bases:
            items.append({
                "id": obj.id,
                "label": obj.title,
                "image": obj.image.url,
                "requireColor": obj.requireColor
            })
        base = {
            "name": "base",
            "type": "checkbox",
            "label": "Основа",
            "items": items
            }
        colors = {
            "name": "color",
            "type": "select",
            "label": "Цвет",
            "items": [
                {
                "id": 1,
                "label": "Черная"
                },
                {
                "id": 2,
                "label": "Оливковая"
                },
                {
                "id": 3,
                "label": "Серая"
                },
                {
                "id": 4,
                "label": "Синяя"
                },
                {
                "id": 5,
                "label": "Морская волна (парадная)"
                },
                {
                "id": 6,
                "label": "Морская волна (парадная)"
                },
                {
                "id": 7,
                "label": "Морская волна (парадная)"
                }
            ]
            }
        
        parameters.append(base)
        parameters.append(colors)
    if product.parameters.id == 5:
        base =     {
        "name": "number",
        "type": "input",
        "label": "Номер жетона"
        }
        parameters.append(base)
    answer =  {
    "id": product.id,
    "name": product.title,
    "description": product.description,
    "price": product.price,
    "url": f"detail?item={product.id}",
    "image": product.image.url,
    "imageAlt": f"{product.title} купить в Москве",
    "sectionName": f"{product.category}",
    "parameters": parameters
    }
    return JsonResponse(answer, safe=False, encoder=DjangoJSONEncoder)




def getcolors():
    return  (
            'Черная',
            'Оливковая',
            'Серая',
            'Синяя',
            'Морская волна (парадная)',
            'Серая (парадная)',
            'Белая (парадная)',
            )


def serialise_data(objects):
    objects_serialized_data = []
    #parametres = list(Parameters.objects.all().values('title').values_list('title', flat=True))
    for obj in objects:   
        objects_serialized_data.append({
        "id": obj.id,
        "name": obj.title,
        "description": obj.title,
        "price": obj.price,
        "url": f"detail?item={obj.id}",
        "image": obj.image.url,
        "imageAlt": f"{obj.title} заказать Москва",
        "sectionName": f"{obj.category}"
    })
    #print(objects_serialized_data)
    return objects_serialized_data
