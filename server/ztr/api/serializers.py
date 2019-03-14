from rest_framework import serializers

from . import models


class MachineSerializer(serializers.ModelSerializer):
    """A serializer for a Machine."""

    class Meta:
        model = models.Machine
        fields = '__all__'
