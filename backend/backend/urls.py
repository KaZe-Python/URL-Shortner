from django.contrib import admin
from django.urls import path, include
from shorter import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('short-api/', include('shorter.urls')),
    path('<str:short>/', views.redirectShort)
]
