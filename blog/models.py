from django.db import models
from django.utils.translation import gettext_lazy as _
from tinymce import HTMLField
from django.utils import timezone
from django.urls import reverse
# Create your models here.


class Post(models.Model):
  slug       = models.SlugField(verbose_name="Посилання на публікацію", blank=False, null=False, max_length=255, unique=True)
  title      = models.CharField(verbose_name=("Заголовок публікації"),blank=True, null=True, max_length=120,)
  content    = HTMLField(verbose_name="Контент", blank=True, null=True)
  image      = models.ImageField(verbose_name="Картинка", blank=True, null=True, default='blog/test_blog.png')
  updated    = models.DateTimeField(verbose_name="Оновлено", auto_now_add=False, auto_now=True, blank=True, null=True)
  created    = models.DateTimeField(verbose_name="Створено", default=timezone.now)

  def __str__(self):
    return f'{self.title}'

  class Meta:
    verbose_name = 'Публікація'
    verbose_name_plural = _('Публікації')

  def get_absolute_url(self):
    return reverse("post", kwargs={"slug": self.slug})


class Client(models.Model):
  name      = models.CharField(verbose_name="Ім'я", max_length=50, blank=True, null=True)
  phone     = models.CharField(verbose_name="Телефон", max_length=50, blank=True, null=True)
  email     = models.CharField(verbose_name="Email", max_length=100, blank=True, null=True)
  created   = models.DateTimeField(verbose_name="Створено", default=timezone.now)


  class Meta:
    verbose_name = "Клієнт"
    verbose_name_plural = 'Клієнти'


  def __str__(self):
    return f'{self.name}, {self.phone}, {self.email}'


class Vacancy(models.Model):
  slug          = models.SlugField(verbose_name="Посилання на публікацію", blank=False, null=False, max_length=255, unique=True)
  title         = models.CharField(verbose_name="Заголовок", max_length=50, blank=True, null=True)
  name          = models.CharField(verbose_name="Ім'я", max_length=50, blank=True, null=True)
  adress        = models.CharField(verbose_name="Адреса", max_length=50, blank=True, null=True)
  phone         = models.CharField(verbose_name="Телефон", max_length=50, blank=True, null=True)
  activity      = models.TextField(verbose_name="Діяльність", blank=True, null=True)
  requirements  = models.TextField(verbose_name="Вимоги", blank=True, null=True)
  description   = models.TextField(verbose_name="Опис", blank=True, null=True)
  created       = models.DateTimeField(verbose_name="Створено",default=timezone.now)

  
  class Meta:
    verbose_name = 'Вакансія'
    verbose_name_plural = 'Вакансії'

  def __str__(self):
    return f'{self.title}'

  def get_absolute_url(self):
      return reverse("vacancy", kwargs={"slug": self.slug})
  


class Slave(models.Model):
  name        = models.CharField(verbose_name="Ім'я", max_length=150, blank=True, null=True)
  email       = models.CharField(verbose_name="Email", max_length=100, blank=True, null=True)
  phone       = models.CharField(verbose_name="Телефон", max_length=50, blank=True, null=True)
  file        = models.FileField(verbose_name="Файл", blank=True, null=True)
  vacancy     = models.ForeignKey(Vacancy, verbose_name="Вакансія", blank=True, null=True, on_delete=models.CASCADE)


  class Meta:
    verbose_name = 'Раб'
    verbose_name_plural = 'Раби'

  def __str__(self):
    return f'{self.phone} {self.vacancy}'
