from django.shortcuts import render
from blog.models import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from blog.models import *
from django.contrib.auth.models import User
# Create your views here.

def index(request):
    return render(request, 'index.html', locals())


def about(request):
    return render(request, 'about.html', locals())


def auto_park(request):
    return render(request, 'auto_park.html', locals())


def cabinet(request):
    return render(request, 'cabinet.html', locals())


def contact(request):
    return render(request, 'contact.html', locals())


def post_list(request):
    post_list = Post.objects.all()
    return render(request, 'post_list.html', locals())


def post(request, slug):
    post        = Post.objects.get(slug=slug)
    return render(request, 'post.html', locals())


def profile(request):
    return render(request, 'profile.html', locals())


def vacancy_list(request):
    vacancy_list    = Vacancy.objects.all()
    return render(request, 'vacancy_list.html', locals())


def vacancy(request, slug):
    vacancy     = Vacancy.objects.get(slug=slug)
    return render(request, 'vacancy.html', locals())


def sto_page(request):
    return render(request, 'sto_page    .html', locals())


def STO(request):
    return render(request, 'STO.html', locals())

@csrf_exempt
def client(request):
    data    = request.POST
    contact_us, created = Client.objects.get_or_create(
        name    = data.get('field_1'),
        phone   = data.get('field_2'),
        email   = data.get('field_3'),
    )
    user        = User.objects.create_user(str(data.get('field_1')), str(data.get('field_2')), str(data.get('field_3')))
    print(request.user)
    contact_us.created = timezone.now()
    contact_us.save()
    return JsonResponse({})




@csrf_exempt
def get_vacancy(request):

    return JsonResponse({})


@csrf_exempt
def get_subordinate(request):

    return JsonResponse({})