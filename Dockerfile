# use a base image
FROM ubuntu:latest

WORKDIR /app

RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip

# copy application files
COPY . . 

# Environment variables
ENV NAME=Venkatesh

# RUN THE APP

CMD ["python3", "app.py"]


