from django.contrib import admin
from .models import Obtains, Orders, Photoorder
# Register your models here.
class ObtainsInline(admin.StackedInline):
    model = Obtains

class PhotoorderInline(admin.StackedInline):
    model = Photoorder

@admin.register(Obtains)
class ObtainsAdmin(admin.ModelAdmin):
    list_display = ("order", "count",)
    list_filter = ("order",)
    search_fields = ("order",)

@admin.register(Photoorder)
class PhotoorderAdmin(admin.ModelAdmin):
    list_display = ("order",)
    search_fields = ("order",)

@admin.register(Orders)
class OrdersAdmin(admin.ModelAdmin):
    list_display = ("id", "date", "sumcost", "phone", "is_paid",)
    list_filter = ("phone", "is_paid",)
    search_fields = ("phone", "date",)
    inlines =(ObtainsInline, PhotoorderInline)