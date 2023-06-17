from django.contrib import admin
from .models import Categories, Product, ProductImage, Categorymedals
# Register your models here.

class ProductImageInline(admin.TabularInline):
    model = ProductImage

@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title",)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "category",)
    inlines = (ProductImageInline,)
    search_fields = ("title",)
    list_filter = ("title", "category",)

@admin.register(Categorymedals)
class CategorymedalsAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title",)