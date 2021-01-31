from django.shortcuts import render, redirect
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Short, shortenURL
from .serializers import ViewShortSerializer, CreateShortSerializer
import re, random, string

# Create your views here.
class ViewShort(generics.ListAPIView):
    queryset = Short.objects.all()
    serializer_class = ViewShortSerializer

class CreateShort(generics.CreateAPIView):
    serializer_class = CreateShortSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            long_url = serializer.data.get('long_url')
            slug     = serializer.data.get('short_url')
            if slug:
                short_url = shortenURL(slug)
                short = Short(long_url=long_url, short_url=short_url)
                short.save()
                return Response(ViewShortSerializer(short).data, status=status.HTTP_201_CREATED)
            else:
                short_url = shortenURL(None)
                short = Short(long_url=long_url, short_url=short_url)
                short.save()
                return Response(ViewShortSerializer(short).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)

def redirectShort(request, short):
    long_url = Short.objects.filter(short_url=short)[0]
    return redirect(long_url.long_url)