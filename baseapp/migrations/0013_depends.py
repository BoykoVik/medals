# Generated by Django 3.2.12 on 2023-07-03 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseapp', '0012_auto_20230703_1448'),
    ]

    operations = [
        migrations.CreateModel(
            name='Depends',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('parametre', models.ManyToManyField(to='baseapp.Parameters', verbose_name='Зависимость')),
            ],
            options={
                'verbose_name': 'Зависимость',
                'verbose_name_plural': 'Зависимости',
            },
        ),
    ]
