# Choosing our python image
FROM python:3.7-alpine

# Updating packages
RUN apk update

# Install the c compiler
RUN apk add build-base

# Make app directory
RUN mkdir /usr/src/app

# Install dependencies
RUN pip install bs4 flask requests

# Copy directory contents from source
COPY . .
