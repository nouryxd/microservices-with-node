# Deplayment Issues

## Virtual Machine

    | Posts     | Comments  | Query     | Moderation |
    | --------- | --------- | --------- | ---------- |
    | Port 4000 | Port 4001 | Port 4002 | Port 4003  |
    --------------------------------------------------
                            |
                            v
                        Port 4005
                        Event Bus

This is a pain when you have to add new services.

Load balancing is setting up a new (for example comment service) and the load balancer picks whichever comment service to use so it's balancing traffic.

## Docker

- One Docker container per instance.
  - If we need a new service we can just start up a new Docker container.
- Makes it easier to start our app since they wrap everything needed for the program and how to start and run it.
