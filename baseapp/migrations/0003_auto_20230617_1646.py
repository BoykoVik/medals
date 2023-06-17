# Generated by Django 3.2.12 on 2023-06-17 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseapp', '0002_product_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Описание товара'),
        ),
        migrations.AddField(
            model_name='product',
            name='is_hit',
            field=models.BooleanField(default=False, verbose_name='Отображать в хитах продаж'),
        ),
        migrations.AddField(
            model_name='product',
            name='is_new',
            field=models.BooleanField(default=False, verbose_name='Отображать в новинках'),
        ),
        migrations.AddField(
            model_name='product',
            name='is_sale',
            field=models.BooleanField(default=False, verbose_name='Отображать в распродажах'),
        ),
    ]
