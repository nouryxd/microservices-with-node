# mini-microservices-app

## Structuring

### Posts Service

| Path    | Method | Body?          | Goal               |
| ------- | ------ | -------------- | ------------------ |
| /posts  | POST   | {title:string} | create new post    |
| /posts/ | GET    | -              | Retrieve all posts |

### Comments Service

| Path                | Method | Body?          | Goal                                                    |
| ------------------- | ------ | -------------- | ------------------------------------------------------- |
| /posts/:id/comments | POST   | {title:string} | Create a comment associated with the given post ID      |
| /posts/:id/comments | GET    | -              | Retrieve all comments associated with the given post ID |
