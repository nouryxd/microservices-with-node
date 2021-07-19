# Kubernetes

Kubernetes is a tool for running a bunch of different containers. We give it some configuration on how we want our containers to run and interact with eachother.

## Install

- Linux:
  - https://github.com/kubernetes/minikube on AUR
    - Pick kubectl in optional dependencies
  - Test if it works:
    - minikube start
    - kubectl version

## Terminology

- Kubernetes Cluster:
  - A collection of nodes + a master to manage them
- Node:
  - A virtual machine that will run our containers
- Pod:
  - More or less a running container. technically, a pod can run multiple containers.
- Deployment:
  - Monitors a set of pods, makes sure they are running and restarts them if they crash.
- Service:
  - Provides an easy-to-remembered URL to access a running container.

## Tour of Kubernetes

1. Create a new docker Image from the service.
2. Create a Kubernetes Config file, (for example) run 2 copies of Posts
3. Feed the Kubernetes Config file to the Master Cluster
4. The Master Cluster then reads the Config file and searches the docker cluster for Posts images.
5. The master cluster then adds 2 Pods with each having a Container running Posts image to the Master Cluster.
6. In order to manage the Pods it will also add a Deployment which will read the config file and will manage both Pods. If one Pod crashes for some reason the Deployment will make sure it restart If one Pod crashes for some reason the Deployment will make sure it restarts.
7. In order to manage the access to the services in the Kubernetes cluster Kubernetes will also create something called a Servics. Which will give us access to the running services in the Cluster. Basically our Event Bus from the mini app.

## Kubernetes Config Files

- Tells Kubernetes about the different Deploymets, Pods and Services (referred to as 'Objects') that we want to create
- Written in YAML Syntax
- Always store these files with our project source code - they are documentation
- We can create Objects without config files (don't do this). Config files provide a precise definition of what your cluster is running.
  - Kubernetes docs will tell you to run direct commands to create objects - only do this for testing purposes.
  - Blog posts will tell you to run direct commands to create objects - close the blog post, don't do this.
