# Generated by Django 3.2.12 on 2023-06-19 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseapp', '0004_auto_20230617_2013'),
    ]

    operations = [
        migrations.CreateModel(
            name='Callrequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=80, verbose_name='Номер телефона')),
                ('dateandtame', models.DateTimeField(verbose_name='Дата и время')),
            ],
            options={
                'verbose_name': 'Заказ обратного звонка',
                'verbose_name_plural': 'Заказы обратного звонка',
            },
        ),
    ]