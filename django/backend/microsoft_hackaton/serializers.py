from rest_framework import serializers
from .models import MicrosoftHackaton

class MicrosoftHackatonSerializer(serializers.ModelSerializer):
    class Meta:
        model = MicrosoftHackaton
        fields = ('id', 'title', 'description', 'completed')