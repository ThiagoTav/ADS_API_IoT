# projetoIoT/models.py
from django.db import models

class DadosDoSensor(models.Model):
    acceleration_x = models.FloatField()
    acceleration_y = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Dados do Sensor em {self.timestamp}'