from django.urls import path
from . import views

app_name = 'baseapp'

urlpatterns = [
    path('', views.index, name='home'),
    path('detail', views.detail, name='detail'),
    path('category', views.categorylist, name='categorylist'),
    path('categoryselected', views.categoryselected, name='categoryselected'),
    path('add_request', views.add_request, name='add_request'),
]