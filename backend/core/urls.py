from django.urls import include, path
from . import views

urlpatterns = [
    path('hello', views.hello_world, name='hello_world'),
]
