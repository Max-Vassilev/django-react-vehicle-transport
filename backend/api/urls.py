from django.urls import path
from .views import CreateVehicleTransportRequestView

urlpatterns = [
    path(
        "create-vehicle-request/",
        CreateVehicleTransportRequestView.as_view(),
        name="create-vehicle-request",
    ),
]
