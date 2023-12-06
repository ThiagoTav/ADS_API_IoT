# projetoIoT/views.py
from rest_framework import generics
from rest_framework.response import Response
from .models import DadosDoSensor
from .SensorSerializer import DadosDoSensorSerializer

class DadosDoSensorListCreateView(generics.ListCreateAPIView):
    queryset = DadosDoSensor.objects.all()
    serializer_class = DadosDoSensorSerializer

    def post(self, request, *args, **kwargs):
        # Obtém os dados do acelerômetro do corpo da solicitação
        acceleration_x = request.data.get('acceleration_x')
        acceleration_y = request.data.get('acceleration_y')

        # Validação básica dos dados (ajuste conforme necessário)
        if acceleration_x is None or acceleration_y is None:
            return Response({'error': 'Dados do acelerômetro ausentes ou inválidos'}, status=400)

        # Cria uma instância do modelo DadosDoSensor e salva no banco de dados
        dados_do_sensor = DadosDoSensor.objects.create(
            acceleration_x=acceleration_x,
            acceleration_y=acceleration_y
        )

        # Serializa os dados e retorna a resposta
        serializer = DadosDoSensorSerializer(dados_do_sensor)
        return Response(serializer.data, status=201)