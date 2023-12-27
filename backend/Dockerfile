FROM python:3.12

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY . /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Update and install dos2unix, to change entrypoing.sh file from CRLF to LF
# Havn't found a better solution, windows hidden characters throws error on linux
RUN apt-get update && \
    apt-get install -y dos2unix && \
    rm -rf /var/lib/apt/lists/*
RUN dos2unix /entrypoint.sh
# End of Hidden Character Solution

ENTRYPOINT ["sh", "/entrypoint.sh"]
