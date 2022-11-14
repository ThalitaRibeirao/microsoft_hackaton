from django.shortcuts import render
from rest_framework import viewsets
from .serializers import  MicrosoftHackatonSerializer
from .models import MicrosoftHackaton

# Create your views here.

class  MicrosoftHackatonView(viewsets.ModelViewSet):
    serializer_class =  MicrosoftHackatonSerializer
    queryset =  MicrosoftHackaton.objects.all()
