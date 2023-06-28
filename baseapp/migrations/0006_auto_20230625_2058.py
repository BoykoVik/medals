# Generated by Django 3.2.12 on 2023-06-25 20:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('baseapp', '0005_callrequest'),
    ]

    operations = [
        migrations.CreateModel(
            name='Parameters',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=180, verbose_name='Наименование параметра')),
            ],
            options={
                'verbose_name': 'Параметр товара',
                'verbose_name_plural': 'Параметры товара',
            },
        ),
        migrations.AlterModelOptions(
            name='categories',
            options={'ordering': ['title'], 'verbose_name': 'Вид товара', 'verbose_name_plural': 'Виды товаров'},
        ),
        migrations.AlterModelOptions(
            name='categorymedals',
            options={'ordering': ['-id'], 'verbose_name': 'Вид награды', 'verbose_name_plural': 'Виды наград'},
        ),
        migrations.AlterField(
            model_name='categories',
            name='image',
            field=models.ImageField(blank=True, upload_to='categories/', verbose_name='Главное изображение вида товара'),
        ),
        migrations.AlterField(
            model_name='categories',
            name='title',
            field=models.CharField(max_length=180, verbose_name='Наименование вида товара'),
        ),
        migrations.AlterField(
            model_name='categorymedals',
            name='title',
            field=models.CharField(max_length=180, verbose_name='Вид награды'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to='products_imgs/', verbose_name='Главное изображение товара'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.IntegerField(default=100, verbose_name='Цена'),
        ),
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(max_length=180, verbose_name='Наименование товара'),
        ),
        migrations.CreateModel(
            name='Parameterstypes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=180, verbose_name='Наименование параметра')),
                ('parameter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='param', to='baseapp.parameters', verbose_name='параметр товара')),
            ],
            options={
                'verbose_name': 'Вад вараметра товара',
                'verbose_name_plural': 'Виды параметров товара',
            },
        ),
    ]