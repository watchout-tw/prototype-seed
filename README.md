# Watchout Prototype Seed

# Feature

1. Support ES6 syntax
2. API server endpoint
3. Flux [Tradition]
4. React-router
5. API server auto restart [for development]
6. HMR support [for development]
7. Basic Authentication (TODO)

# Usage

1. Fork this seed.
2. `$ npm install`
3. `$ npm run start-dev`

    * Use nodemon to progress files under `server`, `api`.

    * Use webpack-dev-server + http-proxy to progress HMR (Hot Module Replacement).

# Directory Structure

1. `app` is a react app
    * Traditional flux structure
    * Entry is `app/app.es6`

2. `server` is api endpoint
    * add new endpoint in `server/api`, route path will automatically add by three ways.

        a. By Filename: `news.es6` will be `/news`

        b. By Export path:

            const path = "/news/id"
            export default {path}
        c. By Custom Route:

            {
                method: "GET",
                path: "/news/my/path",
                handle: function () {}
            }

# TODO

1. Basic Authentication
2. Test

# LICENSE

[MIT](LICENSE.md)
