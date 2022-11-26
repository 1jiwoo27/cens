from django.shortcuts import render
from rest_framework import generics

from .models import cens
from .serializers import PostSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = cens.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = cens.objects.all()
    serializer_class = PostSerializer