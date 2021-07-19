# Kubernetes

Kubernetes is a tool for running a bunch of different containers. We give it some configuration on how we want our containers to run and interact with eachother.

## Install

- Linux:
  - https://github.com/kubernetes/minikube on AUR
    - Pick kubectl in optional dependencies
  - Test if it works:
    - minikube start
    - kubectl version

## Tour of Kubernetes

1. Create a new docker Image from the service.
2. Create a Kubernetes Config file, (for example) run 2 copies of Posts
3. Feed the Kubernetes Config file to the Master Cluster
4. The Master Cluster then reads the Config file and searches the docker cluster for Posts images.
5. The master cluster then adds 2 Pods with each having a Container running Posts image to the Master Cluster.
6. In order to manage the Pods it will also add a Deployment which will read the config file and will manage both Pods. If one Pod crashes for some reason the Deployment will make sure it restart If one Pod crashes for some reason the Deployment will make sure it restarts.
7. In order to manage the access to the services in the Kubernetes cluster Kubernetes will also create something called a Servics. Which will give us access to the running services in the Cluster. Basically our Event Bus from the mini app.
