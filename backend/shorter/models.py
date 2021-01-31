from django.db import models
import string, random

def shortenURL(slug: str = None):
    LENGTH = 10
    while(True):
        out = ''.join(random.choices(string.ascii_letters+string.digits, k=LENGTH))
        if Short.objects.filter(short_url=out).count() == 0:
            break
    return slug if (Short.objects.filter(short_url=slug).count() == 0 and not(slug is None)) else out

class Short(models.Model):
    short_url   = models.CharField(max_length=10, unique=True, null=True)
    long_url    = models.CharField(max_length=600)

    def __str__(self):
        return self.short_url