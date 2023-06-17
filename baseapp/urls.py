from django.urls import path
from . import views

app_name = 'baseapp'

urlpatterns = [
    path('', views.index, name='home'),
    path('detail', views.detail, name='detail'),
]