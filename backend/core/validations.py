from rest_framework.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def custom_validation(data):
    errors = {}
    email = data['email'].strip()
    username = data['username'].strip()
    password = data['password'].strip()
    ##
    if not email or UserModel.objects.filter(email=email).exists():
        errors['email'] = 'Choose another email'
    ##
    if not password or len(password) < 8:
        errors['password'] = 'Choose another password, min 8 characters'
    ##
    if not username:
        errors['username'] = 'Choose another username'
    ##
    if errors:
        raise ValidationError(errors)
    return data


def validate_email(data):
    print('Validating email...')
    email = data['email'].strip()
    if not email:
        raise ValidationError('an email is needed')
    return True

def validate_username(data):
    print('Validating username...')
    username = data['username'].strip()
    if not username:
        raise ValidationError('choose another username')
    return True

def validate_password(data):
    print('Validating password...')
    password = data['password'].strip()
    if not password:
        raise ValidationError('a password is needed')
    return True
