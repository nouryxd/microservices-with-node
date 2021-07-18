# Docker Commands

## Commands

- Create and run

  - docker run [image name] [alternate commands]

- Docker start

  - docker start [image name]

- Docker create

  - docker create [image name]

- List running containers

  - docker ps
    - Gives container ID, Image, Command, Created, Status, Ports, Names

- Start

  - docker start [container id]
  - and attach
    - docker start -a [container id]

- Stop a container

  - if after 10 seconds it hasn't stopped it'll send docker kill automatically
  - docker stop [container id]

- Kill a container

  - docker kill [container id]

- Remove al stopped containers

  - docker system prune

- Show all created containers

  - docker ps --all

- Retrieve output logs
  - docker logs [container id]

## Flags

- -a
  - attach (shows output)
