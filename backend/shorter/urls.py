from django.urls import path
from .views import CreateShort, ViewShort

urlpatterns = [
    path('create/', CreateShort.as_view()),
    path('list/', ViewShort.as_view())
]
