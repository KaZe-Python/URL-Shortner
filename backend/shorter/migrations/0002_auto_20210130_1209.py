# Generated by Django 3.1.5 on 2021-01-30 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shorter', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='short',
            name='short_url',
            field=models.CharField(max_length=10, null=True, unique=True),
        ),
    ]
