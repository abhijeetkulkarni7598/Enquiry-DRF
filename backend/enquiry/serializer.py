from rest_framework import serializers
from .models import Enquiry, Design

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = '__all__'

class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Design
        fields = '__all__'

    def perform_destroy(self, instance):
        serializer = self.get_serializer(instance)
        serializer.delete(instance)