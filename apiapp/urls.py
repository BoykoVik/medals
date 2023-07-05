from django.urls import path
from .views import products_list, products_list_selected, cartitems, productdetail, getparameters
from paymentsystem.views import createorder
app_name = 'apiapp'

urlpatterns = [
    path('products-list', products_list, name='products-list'),
    path('products-list-selected', products_list_selected, name='products-list-selected'),
    path('cart/items', cartitems, name='cartitems'),
    path('cart/do-order', createorder, name='do-order'),
    path('product/<int:id>', productdetail, name='productdetail'),
    path('parameters', getparameters, name='getparameters'),#список значений параметра товара
]