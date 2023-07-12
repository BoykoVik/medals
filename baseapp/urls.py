from django.urls import path
from . import views
from .sitemap import ProductViewSitemap, CategoriesViewSitemap
from django.views.generic import RedirectView
from django.contrib.sitemaps.views import sitemap
app_name = 'baseapp'

sitemaps = {
    'dynamic': ProductViewSitemap,
    'category' :CategoriesViewSitemap,
}

favicon_view = RedirectView.as_view(url='/static/favicon.png', permanent=True)

urlpatterns = [
    path('robots.txt/', views.RobotsTxtView.as_view()),
    path('favicon.ico/', favicon_view),
    path('', views.index, name='home'),
    path('detail/<int:id>', views.detail, name='detail'),
    path('category/<int:id>', views.categorylist, name='categorylist'),
    path('categoryselected', views.categoryselected, name='categoryselected'),
    path('add_request', views.add_request, name='add_request'),
    path('searchprod', views.searchprod, name='searchprod'),
    path('paymentsusses', views.paysus, name='paysus'),
    path('photoorder', views.photoorder, name='photoorder'),
    path('photoalbum', views.photoalbum, name='photoalbum'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
]