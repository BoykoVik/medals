from django.db import models

# Create your models here.

# Модель категорий
class Categories(models.Model):
    title = models.CharField(blank=False, max_length=80, verbose_name='Наименование категории')
    image = models.ImageField(blank=True, upload_to='categories/', verbose_name='Главное изображение категории')
    
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['title']

class Categorymedals(models.Model):
    title = models.CharField(blank=False, max_length=80, verbose_name='Вид награды')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Вид награды'
        verbose_name_plural = 'Виды наград'
        ordering = ['title']

# Модель товаров
class Product(models.Model):
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, verbose_name='Категория', related_name="category")
    medalcategory = models.ForeignKey(Categorymedals, blank=True, null=True, on_delete=models.CASCADE, verbose_name='Вид награды', related_name="categorymedal")
    title = models.CharField(blank=False, max_length=80, verbose_name='Наименование товара')
    image = models.ImageField(blank=True, upload_to='products_imgs/', verbose_name='Главное изображение товара')
    price = models.IntegerField(blank=False, null=False, default=0, verbose_name='Цена')
    description = models.TextField(blank=True, null=True, verbose_name='Описание товара')
    is_new = models.BooleanField(default=False, verbose_name='Отображать в новинках')
    is_hit = models.BooleanField(default=False, verbose_name='Отображать в хитах продаж')
    is_sale = models.BooleanField(default=False, verbose_name='Отображать в распродажах')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return str(self.title)

# Модель дополнительных изображений товаров
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name='товар', related_name="imgs")
    image = models.ImageField(blank=True, upload_to='product_imgs/', verbose_name='Дополнительное изображение')
    
    class Meta:
        verbose_name = 'Дополнительное изображение'
        verbose_name_plural = 'Дополнительные изображения'
    def __str__(self):
        return str(self.image.url)
    
