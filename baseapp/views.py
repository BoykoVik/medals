from django.shortcuts import render
# Create your views here.
def index(request):

    return render(request, 'baseapp/home.html')

def detail(request):

    return render(request, 'baseapp/detail.html')