# nome_do_projeto/urls.py

from django.contrib import admin
from django.urls import path, include
from projetoIoT.views import DadosDoSensorListCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('projetoIoT.urls')),  # Correção nesta linha
]
