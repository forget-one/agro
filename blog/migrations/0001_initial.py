# Generated by Django 3.0 on 2020-02-17 14:50

from django.db import migrations, models
import django.utils.timezone
import tinymce.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(max_length=255, unique=True, verbose_name='Посилання на публікацію')),
                ('title', models.CharField(blank=True, max_length=120, null=True, verbose_name='Заголовок публікації')),
                ('content', tinymce.models.HTMLField(blank=True, null=True, verbose_name='Контент')),
                ('image', models.ImageField(blank=True, default='blog/test_blog.png', null=True, upload_to='', verbose_name='Картинка')),
                ('updated', models.DateTimeField(auto_now=True, null=True, verbose_name='Оновлено')),
                ('created', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Створено')),
            ],
            options={
                'verbose_name': 'Публікація',
                'verbose_name_plural': 'Публікації',
            },
        ),
    ]
