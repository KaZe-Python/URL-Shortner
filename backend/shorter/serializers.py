from rest_framework import serializers
from .models import Short

class CreateShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Short
        fields = ('long_url', 'short_url')

class ViewShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Short
        fields = ('id', 'long_url', 'short_url')
