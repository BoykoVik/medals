# Generated by Django 3.2.12 on 2023-07-12 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseapp', '0007_alter_examples_about'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExampleImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, upload_to='photogallery/', verbose_name='Фото фотогалереи')),
            ],
            options={
                'verbose_name': 'Фото фотогалереи',
                'verbose_name_plural': 'Фото фотогалереи',
            },
        ),
        migrations.AlterModelOptions(
            name='examples',
            options={'ordering': ['title'], 'verbose_name': 'Пример работы (слайдер)', 'verbose_name_plural': 'Примеры работ (слайдер)'},
        ),
    ]
