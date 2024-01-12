from django.db import models
from django.contrib.auth.models import User

class Enquiry(models.Model):
   
    name = models.CharField(max_length=255)
    mobile = models.CharField(max_length=20)
    email= models.EmailField()
    address = models.TextField(blank=True, null = True)
    requirement = models.CharField(max_length=255, blank=True, null = True)
    floor_pain = models.ImageField(upload_to='Floor_pain/',max_length=None, blank=True, null = True)
    user = models.ForeignKey(User,on_delete=models.CASCADE, blank=True, null = True)

class Design(models.Model):
    STATUS_CHOICES = (
        ('Approved', 'Approved'),
        ('Reject', 'Reject'),
    )
    
    title =   models.CharField(max_length=255, blank=True, null = True)
    image = models.ImageField(upload_to='Images/',max_length=None, blank=True, null = True)
    approval = models.CharField(max_length=20, choices=STATUS_CHOICES,default='')
    user= models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null = True)


    