# Watchout Prototype Seed

# Feature

1. Support ES6 syntax.
2. API server endpoint.
3. Traditional flux structure.
4. Use react-router.
5. Autorestart API server. [Development mode]
6. HMR support. [Development mode]
7. Basic authentication. (TODO)

# Usage

1. Fork this seed.
2. `$ npm install`
3. `$ npm run start-dev`

    * Use nodemon to progress files under `server`, `api`.

    * Use webpack-dev-server + http-proxy to progress HMR (Hot Module Replacement).

# Directory Structure

1. In `app` is a react app.
    * Traditional flux structure.
    * Entry point is `app/app.es6`.

2. In `server` is api server based on express.
    * Add new endpoint in `server/api`, route path will automatically add by three ways.

        priority: c > b > a

        a. By filename: `news.es6` will be `/news`

        b. By exporting path:

            const path = "/news/id"
            export default {path}
        c. By custom routing:

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
