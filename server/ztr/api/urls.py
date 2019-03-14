from django.conf.urls import re_path
from django.conf.urls import include

from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('machine', views.MachineViewSet)

urlpatterns = [
    re_path(r'', include(router.urls)),
]
