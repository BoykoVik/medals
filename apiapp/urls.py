from django.urls import path
from . import views

app_name = 'apiapp'

urlpatterns = [
    path('products-list', views.products_list, name='products-list'),
    path('products-list-selected', views.products_list_selected, name='products-list-selected'),
    path('cart/items', views.cartitems, name='cartitems'),
    path('cart/do-order', views.do_order, name='do-order'),
    path('product/<int:id>', views.productdetail, name='productdetail'),
    path('parameters', views.getparameters, name='getparameters'),#список значений параметра товара
]