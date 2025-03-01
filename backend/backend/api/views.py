from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, VehicleTransportRequestSerializer
from .models import VehicleTransportRequest


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CreateVehicleTransportRequestView(generics.CreateAPIView):
    queryset = VehicleTransportRequest.objects.all()
    serializer_class = VehicleTransportRequestSerializer
    permission_classes = [AllowAny]

class AllVehicleTransportRequestsView(generics.ListAPIView):
    queryset = VehicleTransportRequest.objects.all()
    serializer_class = VehicleTransportRequestSerializer
    permission_classes = [AllowAny]
