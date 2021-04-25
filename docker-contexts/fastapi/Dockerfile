FROM python:3.9

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

# create and set cwd in docker
WORKDIR /code

# copy our project to that working dir
COPY ./server/requirements.txt /code/

RUN pip install -r requirements.txt

COPY ./server/ /code/

EXPOSE 8000