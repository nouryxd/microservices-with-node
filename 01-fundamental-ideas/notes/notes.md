# # Fundamentals

## Monolith vs Microservice
### Monolith:
- Has all the code needed to implement the whole application. 
### Microservice:
- Only has the code for the specific type of thing it was built to do, not the full application and handles only a portion.
- It is easy to change/add/remove features since you can just replace the small Microservice portion instead of having to mangle around in the Monolith.

## Big Challenges
- Data management between services (Database-Per-Service)
  - Each service gets its own database.
  - Services will never reach into another services database.
  - Each service will run independently.

## Communication Strategies Between Services
- Sync
    - Services communicate with each other using direct requests.
    - If one service fails the whole application fails.
    - Only as fast as the slowest request.
- Async
  - Services communicate with each other using events.
  - The goal of the 'Event Bus' is to handle little notifications emmited from our different services.
  - These notifications are like little notes that describe something that needs to happen inside our overall application. Is a point of failure so needs to be robust.