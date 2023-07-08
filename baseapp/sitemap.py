from django.contrib.sitemaps import Sitemap
from .models import Product, Categories

    
class ProductViewSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.9
    
    def items(self):
        return Product.objects.all()

    def location(self, item):
        # return reverse('news-page', args=[item.pk])
        return f'/detail/{item.pk}'

class CategoriesViewSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.9
    
    def items(self):
        return Categories.objects.all()

    def location(self, item):
        # return reverse('news-page', args=[item.pk])
        return f'/category/{item.pk}'
