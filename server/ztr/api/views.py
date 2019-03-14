from django.shortcuts import render
from rest_framework import viewsets

from . import serializers
from . import models


class MachineViewSet(viewsets.ModelViewSet):
    """Creating, reading, deleting updating and replacing of a Machine."""

    serializer_class = serializers.MachineSerializer
    queryset = models.Machine.objects.all()