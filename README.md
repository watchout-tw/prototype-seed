# Watchout Prototype Seed

# Feature

1. API server endpoint
2. Flux [Tradition]
3. React-router
4. API server auto restart [for development]
5. HMR support [for development]
6. Basic Authentication (TODO)

# Usage

1. fork this seed
2. `$ npm install`
3. `$ npm run start-dev`

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
