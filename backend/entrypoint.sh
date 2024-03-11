#!/bin/sh

echo "Make migrations"
python manage.py makemigrations
echo "Migrate db"
python manage.py migrate --no-input
echo "Collect static files"
python manage.py collectstatic --no-input

# echo "Create django admin"
DJANGO_SUPERUSER_PASSWORD=$SUPERUSER_PASSWORD python manage.py createsuperuser --username $SUPERUSER_NAME --email $SUPERUSER_EMAIL --no-input

echo "Starting server"
gunicorn django_server.wsgi:application --bind 0.0.0.0:8000
