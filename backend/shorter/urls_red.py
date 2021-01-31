from django.urls import path, include
from . import views
urlpatterns = [
    path('<str:short>/', views.redirect, name='redirect')
]
