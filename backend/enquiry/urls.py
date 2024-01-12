from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EnquiryCreateView, DesignCreateView, EnquiryUpdateView, DesignUpdateView


urlpatterns = [
    path('enquiry/',EnquiryCreateView.as_view(), name = 'list enquiry'),
    path('design/',DesignCreateView.as_view(), name = 'list design'),
    path('enquiry/<int:pk>/',EnquiryUpdateView.as_view(), name='EnquiryUpdateView'),
    path('design/<int:pk>/',DesignUpdateView.as_view(), name='DesignUpdateView'),
    
]
