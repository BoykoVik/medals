from django.urls import path
from . import views

app_name = 'apiapp'

urlpatterns = [
    path('products-new', views.products_new, name='products-new'),
    path('products-hit', views.products_hit, name='products-hit'),
    path('products-sale', views.products_sale, name='products-sale'),
    path('products-list', views.products_list, name='products-list'),
]