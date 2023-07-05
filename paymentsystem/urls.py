from django.urls import path
from .views import paymentstate
from paymentsystem.views import createorder
app_name = 'paymentsystem'

urlpatterns = [
    path('status', paymentstate, name='paymentstate'),
]