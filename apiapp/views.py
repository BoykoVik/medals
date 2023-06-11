from django.shortcuts import render

# Create your views here.
def products_new(request):

    return render(request, 'baseapp/home.html')

def products_hit(request):

    return render(request, 'baseapp/home.html')

def products_sale(request):

    return render(request, 'baseapp/home.html')