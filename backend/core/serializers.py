from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerialiser):
    class Meta:
        model = UserModel
        fields = '__al__'

    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(email=clean_data['email'])
        user_obj.username = clean_data['username']
        user_obj.save()
        return user_obj

class UserLoginSerializer(serializers.Serializer):
    email = serializers.Email

class UserSerializer():
    

