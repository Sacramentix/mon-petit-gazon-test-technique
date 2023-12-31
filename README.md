# Mon petit gazon test technique

This is an express api of Mon petit gazon.

## 🚀 Tech stack

<p align="center">
	<a href="https://www.typescriptlang.org" title="Typescript"><img width=32 height=32 src="https://api.iconify.design/logos:typescript-icon.svg" alt="Typescript logo"></a>
  	<a href="https://nodejs.org" title="Node"><img width=32 height=32 src="https://api.iconify.design/logos:nodejs-icon.svg" alt="Node logo"></a>
  	<a href="https://expressjs.com" title="Express"><img width=32 height=32 src="https://api.iconify.design/skill-icons:expressjs-light.svg" alt="Express logo"></a>
 	<a href="https://www.couchbase.com" title="Couchbase"><img width=32 height=32 src="https://api.iconify.design/logos:couchbase.svg" alt="Couchbase logo"></a>
</p>

## 🏗️ How to setup the project

#### Clone the project

- First clone the project on your local computer
```
git clone https://github.com/Sacramentix/mon-petit-gazon-test-technique
cd mon-petit-gazon-test-technique
```

#### Node js

- Make sure you have node installed. You can install it from the official website [here](https://nodejs.org).
- Install version 18.11 or above if you want to run `npm run dev`.
- I suggest you install [NVM](https://github.com/nvm-sh/nvm) in order to handle multiple node version.

#### Docker

- We use docker in order to start an Couchbase.
- Make sure you have Docker installed. You can install it from the official website [here](https://www.docker.com).

#### Env

- Make sure you create .env based on the .env.sample file.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                       |
|:-----------------------   |:-------------------------------------------- |
| `npm install`             | Install all the dependencies                 |
| `npm i`                   | Alias for `npm install`                      |
| `npm run exec:ts`			| Run the ts file in argument				   |
| `npm run check:type`      | Check for typescript error on the project    |
| `npm run check:env`       | Check the env config                         |
| `npm test`       			| Run all test           		               |
| `npm run couchbase:docker`| Launch Couchbase with Docker                 |
| `npm run couchbase:init`  | Launch Couchbase with Docker and setup it	   |
| `npm run couchbase:test`  | Flush & load test data in Couchbase          |
| `npm run dev`             | Start the server and auto-reload on change   |
| `npm run build`           | Transpile the project to js in dist folder   |
| `npm start`               | Start the server                             |

## What we can improve

- We can add some automated test.
- We can improve error handling of Couchbase error.
- We can add custom message on league creation and team update success.
