# Docker-file

## Use an existing docker image as a base

- FROM [base image]

  - alpine
    - Lightweight base image of alpine (5mb)

Basically the OS

## Download and install a dependency

- RUN apk add --update [image]
  - RUN apk add --update redis

What programs you want

## Tell the image what to do when it starts as a container

- CMD [command]
  - CMD ["redis-server"]

How to run the programs installed
