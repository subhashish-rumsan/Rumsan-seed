<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Dive deep into the core of NestJS with this hands-on project that touches the fundamentals of the framework. This project serves as both a practical learning tool and a comprehensive reference to setting up, building, and deploying a robust NestJS application. Whether you're a beginner eager to learn or an advanced user looking to refresh your skills, this project covers everything you need to know about NestJS.

### Key Features:

- Fastify Integration: Set up the project using the @nestjs/fastify for a fast, efficient, and scalable API framework.
- Logging: Comprehensive application monitoring using the @nestjs/common logger.
- Swagger Integration: Implement API documentation with @nestjs/swagger. Plus, enhance security with built-in authorization support.
- Environment Configuration: Embed environment-specific variables using the @nestjs/config and dotenv for more secure and scalable apps.
- API Versioning: Flexible routing with support for multiple API versions. By default, route to /api/v1.
- Role-Based Access Control (RBAC): Secure your application resources by defining roles and permissions.
- Docker Support: Ensure consistent runtime environments and scalability with Docker containerization.
- Global Exception Handling: A custom global exception filter for capturing and handling application-wide errors gracefully.
- User Authentication: Protect user data and application resources with comprehensive authentication measures.
- Social Login Capabilities: Integrate social logins using Passport with strategies for JWT and Local authentication.
- SMTP Email Service: Implement an emailing service using Nodemailer to facilitate application notifications and communications.
- Bull Queuing: Optimize tasks like email sending with the Bull queue system.
- Database Upgrade: Transition from a lightweight Sqlite database to a more robust Prisma/Postgres setup.
- Linter Configuration: Maintain a clean and consistent codebase with tslint, eslint, and prettier.
- Thorough Testing: Ensure the reliability of your application with integration and unit testing using Jest.

## Folder Structure
```
Below is a description of the primary folders in this project:
src/
├── config/ # Configuration settings and environment variables
├── decorators/ # Custom decorators for routes, guards, etc.
├── filters/ # Exception filters
├── guards/ # Guards for routes
├── interceptors/ # Custom interceptors
├── middleware/ # Middlewares for handling requests
├── modules/ # Feature modules
│ ├── user/ # User module (e.g.)
│ └── auth/ # Authentication module (e.g.)
├── shared/ # Shared utilities, models, and services
├── app.controller.ts # Main application controller
├── app.service.ts # Main application service
└── main.ts # Application entry point
```

### Details:

- `config/`: Holds the configuration files. It includes settings, constants, and environment variable handling.
- `decorators/`: Contains any custom decorators that are used across the application.
- `filters/`: Exception filters for handling exceptions across the application or specific modules.
- `guards/`: Defines route guards to restrict access to certain routes based on custom logic.
- `interceptors/`: Interceptors allow you to transform the response sent back to the client or perform specific actions before the route handler is executed.
- `middleware/`: Middlewares are functions that have access to the request and response objects, and the next middleware function in the cycle.
- `modules/`: The application is broken down into feature modules, and each feature has its own folder under this directory. For instance, the `user/` module might handle user-related logic, while the `auth/` module handles authentication.
- `shared/`: A directory for shared utilities, services, DTOs, interfaces, and any other shared code.

## 🛠 NestJS CLI - Automated Module Generation

The NestJS Command Line Interface (CLI) offers a suite of commands designed to help scaffold and manage your application structure. It facilitates the quick generation of modules, services, controllers, and various other components.

### 1. **Installation of NestJS CLI**

If the NestJS CLI isn't already set up, you can install it globally with:

```bash
npm install -g @nestjs/cli
```
### **Generating a module**
To create a new module using the CLI, utilize the generate (or g for short) command:
```bash
nest g module <ModuleName>
```
 ### **Generating Additional Components**
 The CLI also enables the generation of controllers, services, and more, each associated with specific modules:
 ```bash
nest g controller <ModuleName>
nest g service <ModuleName>
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
