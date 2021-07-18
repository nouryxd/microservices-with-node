# basics-of-docker

## Why use Docker?

    Installing Software
      Flow Diagram
          | Download installer
          | Run installer
          | Get an error message
          | Troubleshoot issue <----|
          | Rerun installer         |
          v Get another error ------

This is what Docker is trying to fix

## What is Docker?

docker is a platform or ecosystem around creating and running containers.

## What is a container?

- Image:

  - Single file with all the deps and config required to run a program.
  - File System snapshot.

- Container:

  - Instance of an image. Runs a program.

### Namespacing contains:

- Processes
- Hard Drive
- Network
- Users
- Hostnames
- Inter Process Communication

### Control Groups (cgroups) contains:

- Memory
- CPU Usage
- HD I/O
- Network Bandwidth
