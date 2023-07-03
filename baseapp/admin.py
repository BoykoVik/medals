from django.contrib import admin
from .models import Categories, Product, ProductImage, Categorymedals, Callrequest, Parameters, Subparameters
# Register your models here.

class ProductImageInline(admin.TabularInline):
    model = ProductImage



class SubparametersInline(admin.TabularInline):
    model = Subparameters
    


@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title",)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "category",)
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
    list_display = ("title",)
    search_fields = ("title",)
    inlines = (SubparametersInline,)
