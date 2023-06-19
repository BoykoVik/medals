from django.urls import path, include
from . import views
from baseapp.views import detail
app_name = 'ordersapp'

urlpatterns = [
    path('', views.cart, name='cart'),
    path('detail', detail, name='detail'),
]