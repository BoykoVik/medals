from django.db import models
from baseapp.models import Product
from .utils import get_rename
# Create your models here.
class Orders(models.Model):
    phone = models.CharField(blank=False, max_length=20, verbose_name='Номер телефона')
    email = models.CharField(blank=False, max_length=50, verbose_name='Электронная почта')
    date = models.DateField(auto_now_add=True, verbose_name='Дата заказа')
    sumcost = models.CharField(blank=True, max_length=50, verbose_name='Сумма заказа')
    is_paid = models.BooleanField(default=False, verbose_name='оплачено')

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
        ordering = ['-id']

class Obtains(models.Model):#КУПЛЕННЫЕ ТОВАРЫ
    order = models.ForeignKey(Orders, null=True, on_delete=models.CASCADE, verbose_name='Заказ')
    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL, verbose_name='Товар')
    about = models.TextField(blank=True, null=True, max_length=700, verbose_name='Описание заказа')
    count = models.IntegerField(blank=False, null=False, default=100, verbose_name='Количество')

    def __str__(self):
        return str(self.product)

    class Meta:
        verbose_name = 'Покупка'
        verbose_name_plural = 'Покупки'
        ordering = ['order']

class Photoorder(models.Model):#КУПЛЕННЫЕ ТОВАРЫ
    order = models.ForeignKey(Orders, null=True, on_delete=models.CASCADE, verbose_name='Заказ')
    image = models.ImageField(blank=True, upload_to=get_rename, verbose_name='Фото заказа')

    def __str__(self):
        return str(self.order)

    class Meta:
        verbose_name = 'Заказ по фото'
        verbose_name_plural = 'Заказы по фото'
        ordering = ['order']