from django.db import models
from PIL import Image

import os
# Create your models here.

# Модель категорий
class Categories(models.Model):
    title = models.CharField(blank=False, max_length=180, verbose_name='Наименование вида товара')
    image = models.ImageField(blank=True, upload_to='categories/', verbose_name='Главное изображение вида товара')
    
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Вид товара'
        verbose_name_plural = 'Виды товаров'
        ordering = ['title']

class Categorymedals(models.Model):
    title = models.CharField(blank=False, max_length=180, verbose_name='Вид награды')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Вид награды'
        verbose_name_plural = 'Виды наград'
        ordering = ['-id']

# Модель товаров
class Product(models.Model):
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, verbose_name='Категория', related_name="category")
    medalcategory = models.ForeignKey(Categorymedals, blank=True, null=True, on_delete=models.CASCADE, verbose_name='Вид награды', related_name="categorymedal")
    title = models.CharField(blank=False, max_length=180, verbose_name='Наименование товара')
    image = models.ImageField(blank=False, null=False, upload_to='products_imgs/', verbose_name='Главное изображение товара')
    price = models.IntegerField(blank=False, null=False, default=100, verbose_name='Цена')
    description = models.TextField(blank=True, null=True, verbose_name='Описание товара')
    is_new = models.BooleanField(default=False, verbose_name='Отображать в новинках')
    is_hit = models.BooleanField(default=False, verbose_name='Отображать в хитах продаж')
    is_sale = models.BooleanField(default=False, verbose_name='Отображать в распродажах')
    needparameters = models.BooleanField(default=True, verbose_name='Запрашивать тип планки')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return str(self.title)
    
    def save(self):
        super().save()
        img = Image.open(self.image.path)
        directory = os.getcwd()
        mask = Image.open('mask.png')
        mask_crop = mask.crop((0, 0, img.width, img.height))
        img.paste(mask_crop, (0, 0), mask_crop)
        img.save(self.image.path)

# Модель дополнительных изображений товаров
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name='товар', related_name="imgs")
    image = models.ImageField(blank=True, upload_to='product_imgs/', verbose_name='Дополнительное изображение')
    
    class Meta:
        verbose_name = 'Дополнительное изображение'
        verbose_name_plural = 'Дополнительные изображения'

    def __str__(self):
        return str(self.image.url)
    
    def save(self):
        super().save()
        img = Image.open(self.image.path)
        directory = os.getcwd()
        mask = Image.open('mask.png')
        mask_crop = mask.crop((0, 0, img.width, img.height))
        img.paste(mask_crop, (0, 0), mask_crop)
        img.save(self.image.path)
    

class Callrequest(models.Model):
    number = models.CharField(blank=False, null=False, max_length=80, verbose_name='Номер телефона')
    dateandtame = models.DateTimeField(blank=False, null=False, verbose_name='Дата и время')

    class Meta:
        verbose_name = 'Заказ обратного звонка'
        verbose_name_plural = 'Заказы обратного звонка'

    def __str__(self):
        return str(self.number)
    
# Модель параметров товаров
class Parameters(models.Model):
    title = models.CharField(blank=False, max_length=180, verbose_name='Наименование параметра')
    backcolor = models.BooleanField(default=False, verbose_name='Требуется запрос цвета подложки')
    class Meta:
        verbose_name = 'Тип планки'
        verbose_name_plural = 'Типы Планок'

    def __str__(self):
        return str(self.title)
    