# Generated by Django 3.2.12 on 2023-07-08 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseapp', '0005_auto_20230705_1920'),
    ]

    operations = [
        migrations.CreateModel(
            name='Examples',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=180, verbose_name='Заголовок')),
                ('about', models.CharField(max_length=180, verbose_name='Описание')),
                ('image', models.ImageField(blank=True, upload_to='examples/', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'Пример работы',
                'verbose_name_plural': 'Примеры работ',
                'ordering': ['title'],
            },
        ),
        migrations.AlterField(
            model_name='callrequest',
            name='dateandtame',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Дата и время'),
        ),
    ]