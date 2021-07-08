# AWS-BuildOn-2021-Genesis

Greetings, this repository contains the source code of our hackathon solution. For the client side, `NextJS` is used to develop static UI assets, together with the renowed `Material-ui` styling library. For the server side,  `ExpressJS` is used to develop APIs which interact with our cloud services and data layer.

## Installing / Getting started

Clone the repository:

```shell
git clone https://github.com/jerrenss/AWS-BuildOn-2021-Genesis.git
```

## Development

The development workflow is orchestrated with Docker Compose, with launches both the client and server in a single command. Hot reload is enabled through the use of volume mounting. Client can be accessed at [http://localhost:3000](http://localhost:3000), and server can be accessed at [http://localhost:4000](http://localhost:4000).

To build the project and run the client and server containers concurrently:
```
docker-compose up
```

To remove the containers and volumes after development work is completed:
```
docker-compose down -v
```