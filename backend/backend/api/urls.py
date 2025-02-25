from django.urls import path
from .views import CreateVehicleTransportRequestView, UserVehicleTransportRequestsView

urlpatterns = [
    path(
        "create-vehicle-request/",
        CreateVehicleTransportRequestView.as_view(),
        name="create-vehicle-request",
    ),
    path(
        "user-vehicle-requests/",
        UserVehicleTransportRequestsView.as_view(),
        name="user-vehicle-requests",
    ),
]
