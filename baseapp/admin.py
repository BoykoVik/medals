from django.contrib import admin
from .models import Categories, Product, ProductImage, Categorymedals, Callrequest, Parameters, Bases, Examples, ExampleImage
# Register your models here.

class ProductImageInline(admin.TabularInline):
    model = ProductImage


@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title",)

@admin.register(ExampleImage)
class ExampleImageAdmin(admin.ModelAdmin):
    list_display = ("id","image",)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "parameters",)
    inlines = (ProductImageInline,)
    search_fields = ("title",)
    list_filter = ("category",)

@admin.register(Categorymedals)
class CategorymedalsAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title",)

@admin.register(Callrequest)
class CallrequestAdmin(admin.ModelAdmin):
    list_display = ("number", "dateandtame",)
    search_fields = ("dateandtame",)

@admin.register(Parameters)
class ParametersAdmin(admin.ModelAdmin):
    list_display = ("title", "label",)

@admin.register(Bases)
class BasesAdmin(admin.ModelAdmin):
    list_display = ("title", "requireColor",)

@admin.register(Examples)
class ExamplesAdmin(admin.ModelAdmin):
    list_display = ("title", "about",)

