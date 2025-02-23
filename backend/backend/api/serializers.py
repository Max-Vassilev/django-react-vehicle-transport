from django.contrib.auth.models import User
from rest_framework import serializers
from .models import VehicleTransportRequest


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class VehicleTransportRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleTransportRequest
        fields = [
            "first_name",
            "last_name",
            "phone",
            "pickup_country",
            "pickup_city",
            "delivery_country",
            "delivery_city",
            "small_car_count",
            "big_car_count",
            "suv_count",
            "bus_count",
        ]
