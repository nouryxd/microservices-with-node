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

## Why Docker?

- One Docker container per instance.
  - If we need a new service we can just start up a new Docker container.
- Doesn't care about the environment it runs in.
- Makes it easier to start our app since they wrap everything needed for the program and how to start and run it.

## Why Kubernetes?

- Kubernetes is a tool for running a bunch of different containers.
- We give it some configuration to describe how we want our containers to run and interact with each other.

Config File:

- To Master:
  - Please run 2 copies of Posts
  - Please allow copies of Posts to be accessible from network

Master then reads the config file and does as it says.

- Kubernetes Cluster:
  - Node > Container > Posts Service
  - Node > Container > Posts Service
  - Node > Container > Event Bus
