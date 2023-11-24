# projetoIoT/urls.py
from django.urls import path
from .views import DadosDoSensorListCreateView

urlpatterns = [
    path('ProjectThingsBoards/', DadosDoSensorListCreateView.as_view(), name='dados-do-sensor-list-create'),
]
