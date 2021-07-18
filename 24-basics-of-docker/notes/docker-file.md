# Docker-file

## Use an existing docker image as a base

Basically the OS

- FROM [base image]

  - alpine
    - Lightweight base image of Alpine Linux (5mb)

## Download and install a dependency

What programs you want
apk stands for Alpine Linux package manager (since we used Alpine Linux)

- RUN apk add --update [image]
  - RUN apk add --update redis

## Tell the image what to do when it starts as a container

How to run the programs installed

- CMD [command]
  - CMD ["redis-server"]
