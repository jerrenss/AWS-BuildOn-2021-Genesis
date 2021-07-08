# AWS-BuildOn-2021-Genesis

Greetings, this repository contains the source code of our hackathon solution. For the client side, `NextJS` is used to develop static UI assets, together with the renowed `Material-ui` styling library. For the server side,  `ExpressJS` is used to develop APIs which interact with our cloud services and data layer.

---

## Installation

Clone the repository:

```shell
git clone https://github.com/jerrenss/AWS-BuildOn-2021-Genesis.git
```

---

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

For commits, please use [semantic messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) for clarity and easier tracking.
```
feat: new feature for the user, not a new feature for build script
fix: a bug fix
docs: changes to the documentation only
style: formatting, white-space, etc; no production code change
refactor: code change that does not fix a bug or add a feature, eg. renaming a variable
perf: code change that improves performance
test: adding missing tests, refactoring tests; no production code change
build: change that affects the build system or external dependencies (example scopes: gulp, npm)
ci: change to the CI configuration files and scripts
chore: change that does not modify src or test files
revert: reverts a previous commit
```

For merging of changes, please make a Pull Request (any branch name is fine) instead of committing directly to master, to prevent accidental breakage of application.

---

That's all folks, cheers! =)