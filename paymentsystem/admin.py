from django.contrib import admin
from .models import Obtains, Orders
# Register your models here.
class ObtainsInline(admin.StackedInline):
    model = Obtains

@admin.register(Obtains)
class ObtainsAdmin(admin.ModelAdmin):
    list_display = ("order", "count",)
    list_filter = ("order",)
    search_fields = ("order",)

@admin.register(Orders)
class OrdersAdmin(admin.ModelAdmin):
    list_display = ("date", "sumcost", "phone", "is_paid",)
    list_filter = ("phone", "is_paid",)
    search_fields = ("phone", "date",)
    inlines =(ObtainsInline,)