# projetoIoT/serializers.py
from rest_framework import serializers
from .models import DadosDoSensor

class DadosDoSensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosDoSensor
        fields = ('id', 'acceleration_x', 'acceleration_y', 'timestamp')
