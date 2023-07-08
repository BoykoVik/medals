from django.urls import path
from .views import paymentstate, photoordersave
from paymentsystem.views import createorder
app_name = 'paymentsystem'

urlpatterns = [
    path('status', paymentstate, name='paymentstate'),
    path('photoordersave', photoordersave, name='photoordersave'),
]