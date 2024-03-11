# Notes App using Django and ReactJS

## Dependencies
- docker 
- .env file
.env file example
```bash
## do not put this file under version control!
## so add this file in .gitignore in production, or keep repo private
SECRET_KEY='django-insecure-gxyxjyidrbh8ll48b+g#1o=o)igdz90g4^lx$x73yi&fe(pk&^'
DEBUG=True

SUPERUSER_NAME='root'
SUPERUSER_PASSWORD='root'
SUPERUSER_EMAIL='root@root.com'
```

Once docker has been installed and a .env file exists in the project directory run the follwing 
to spin up the project:
```bash
docker compose up --build -d
```

### Project Completion List

Backend

Frontend

Deployment
- implement caddy instead on nginx
