# Generated by Django 3.2.12 on 2023-07-05 16:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('baseapp', '0004_obtains_count'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Obtains',
        ),
        migrations.DeleteModel(
            name='Orders',
        ),
    ]
