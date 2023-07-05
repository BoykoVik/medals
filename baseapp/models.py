from django.db import models
from PIL import Image

# Create your models here.
INPUTKIND = [
    ('1', 'checkbox'),
    ('2', 'input'),
    ('3', 'select'),
    ]
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

class Parameters(models.Model):
    title = models.CharField(blank=False, max_length=180, verbose_name='Вид параметра')
    inputtype = models.CharField(blank=True, max_length=20, choices = INPUTKIND, verbose_name='Тип ввода')
    label = models.CharField(blank=False, max_length=180, verbose_name='Подпись')
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Вид параметра'
        verbose_name_plural = 'Виды параметров'
        ordering = ['-id']

# Модель товаров
class Product(models.Model):
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, verbose_name='Категория', related_name="category")
    medalcategory = models.ForeignKey(Categorymedals, blank=True, null=True, on_delete=models.CASCADE, verbose_name='Вид награды', related_name="categorymedal")
    title = models.CharField(blank=False, max_length=180, verbose_name='Наименование товара')
    image = models.ImageField(blank=False, null=False, upload_to='products_imgs/', verbose_name='Главное изображение товара')
    price = models.IntegerField(blank=False, null=False, default=100, verbose_name='Цена')
    description = models.TextField(blank=True, null=True, verbose_name='Описание товара')
    parameters = models.ForeignKey(Parameters, blank=True, null=True, on_delete=models.CASCADE, verbose_name='Параметр', related_name="parameter")

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return str(self.title)
    
    def save(self):
        super().save()
        img = Image.open(self.image.path)
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
    

    
class Bases(models.Model):
    title = models.CharField(blank=False, max_length=180, verbose_name='Наименование основы(крепления)')
    image = models.ImageField(blank=True, upload_to='categories/', verbose_name='Изображение крепления')
    requireColor = models.BooleanField(default=False, verbose_name="Нужен ли выбор цвета")
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Вид крепления'
        verbose_name_plural = 'Виды креплений'
        ordering = ['title']

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
        ordering = ['date']

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