from django.contrib import admin
from .models import *


class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email', 'created' ]

admin.site.register(Vacancy)
admin.site.register(Slave)
admin.site.register(Post)
admin.site.register(Client, ClientAdmin)
