# # Fundamentals

## Monolith vs Microservice

### Monolith:

-   Has all the code needed to implement the whole application.

### Microservice:

-   Only has the code for the specific type of thing it was built to do, not the full application and handles only a portion.
-   It is easy to change/add/remove features since you can just replace the small Microservice portion instead of having to mangle around in the Monolith.

## Big Challenges

-   Data management between services (Database-Per-Service)
    -   Each service gets its own database.
    -   Services will never reach into another services database.
    -   Each service will run independently.

## Communication Strategies Between Services

### - Sync

-   Services communicate with each other using direct requests.
-   If one service fails the whole application fails.
-   Only as fast as the slowest request.

### - Async

-   Services communicate with each other using events.
-   The goal of the 'Event Bus' is to handle little notifications emmited from our different services.
-   Each service can either emit or receive events from the event bus.
-   These notifications are like little notes that describe something that needs to happen inside our overall application. Is a point of failure so needs to be robust.

## - Pros and Cons of Async

### - Pro:

-   No dependencies on other services.
-   Service X will be really fast.

### - Con:

-   Data duplication, ~~more cost for storage~~. (As shown below, cost difference is tiny)
-   Harder to understand.

### - Price difference ($/GB/m):

-   All in $/GB/Month

    -   Azure:
        -   $.115
    -   Google Cloud:
        -   $.17
    -   AWS:
        -   $.115

-   Response with 1,250 bytes
-   100,000,000 Products
-   (1.25e-6 GB) _ $.115 _ 100,000,000 = $14.375
