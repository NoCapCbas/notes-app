from django.urls import include, path
from . import views

urlpatterns = [
    path('register'),
    path('login'),
    path('logout'),
    path('user'),
]
