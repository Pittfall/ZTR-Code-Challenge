from django.db import models


class Machine(models.Model):
    """The machine data."""

    name = models.CharField(max_length=255)
    make = models.CharField(max_length=255)
    longitude = models.CharField(max_length=255)
    latitude = models.CharField(max_length=255)

    def __str__(self):
        """Return the machine name."""

        return self.name
