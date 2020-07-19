from django.urls import path 
from .views import *
from django.conf import settings
from django.conf.urls import include

urlpatterns = [
    path('i18n/', include('django.conf.urls.i18n')),
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('auto_park/', auto_park, name='auto_park'),
    path('cabinet/', cabinet, name='cabinet'),
    path('contact/', contact, name='contact'),
    path('post_list/', post_list, name='post_list'),
    path('post/<slug>/', post, name='post'),
    path('profile/', profile, name='profile'),
    path('vacancy_list/', vacancy_list, name='vacancy_list'),
    path('vacancy/<slug>/', vacancy, name='vacancy'),
    path('sto_page/', sto_page, name='sto_page'),
    path('STO/', STO, name='STO'),
    path('get_vacancy/', get_vacancy, name='get_vacancy'),
    path('client/', client, name='client'),
    path('get_subordinate/', get_subordinate, name='get_subordinate'),
]


if settings.DEBUG == True:
    from django.conf.urls.static import static
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)