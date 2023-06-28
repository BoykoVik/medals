from django.urls import path
from . import views

app_name = 'apiapp'

urlpatterns = [
    path('products-new', views.products_new, name='products-new'),
    path('products-hit', views.products_hit, name='products-hit'),
    path('products-sale', views.products_sale, name='products-sale'),
    path('products-list', views.products_list, name='products-list'),
    path('products-list-selected', views.products_list_selected, name='products-list-selected'),
    path('cart/items', views.cartitems, name='cartitems'),
    path('parameters/label', views.getparameterlabel, name='getparameterlabel'),#название параметра и одно его значение
    path('parameters', views.getparameters, name='getparameters'),#список значений параметра товара
]