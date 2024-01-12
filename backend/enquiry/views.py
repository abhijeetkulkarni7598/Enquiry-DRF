from rest_framework import status
from rest_framework import generics, permissions
from .models import *
from .serializer import *
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from datetime import datetime
from django.http import Http404

class EnquiryCreateView(generics.ListCreateAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        user_id = self.request.query_params.get('user', None)
        if user_id is not None:
            return Enquiry.objects.filter(user__id=user_id)
        else:
            return Enquiry.objects.all()

class DesignCreateView(generics.ListCreateAPIView):
    queryset = Design.objects.all()
    serializer_class = DesignSerializer
    permission_classes = [permissions.AllowAny]
    parser_classes = (MultiPartParser, FormParser)


    def create(self, request, *args, **kwargs):
        print(request.data)
    # Extract data from the request
        
        file_titles = request.data.getlist('title', None)
        approvals = request.data.getlist('approval', None)
        files_data = request.FILES.getlist('image', None)
       # user = request.data.getlist('user',None)

        user = self.request.user

        for title, approval, image in zip(file_titles, approvals, files_data):
            data = {'title': title, 'approval': approval, 'image': image, 'user': user.id}
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)

        return Response({"message": "Images uploaded successfully"}, status=201)

    def perform_create(self, serializer):
        serializer.save()

class EnquiryUpdateView(generics.RetrieveUpdateDestroyAPIView):  
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    permission_classes = [permissions.AllowAny] 

class DesignUpdateView(generics.RetrieveUpdateDestroyAPIView):  
    queryset = Design.objects.all()
    serializer_class = DesignSerializer
    permission_classes = [permissions.AllowAny]
    parser_classes = (MultiPartParser, FormParser) 

    def perform_destroy(self, instance):
        serializer = self.get_serializer(instance)
        serializer.delete(instance)


# Create your views here.
