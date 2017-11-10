# remove-route-runtime
Delete a route in express at runtime.

# Overview
I wanted the ability to dynamically control Express routing but
was not able to delete a route at runtime.  This module solves that
problem.

# Installation

    npm install remove-route-runtime

# Usage

    var removeRoute = require('remove-route-runtime');

    var app = express();
    var router = express.Router();

    router.get('/info', function(res, res) {
        res.send('user/info');
    });
    router.post('/info', function(res, res) {
       res.send('user/info');
    });
    app.use('/user', router);

    removeRoute(app, '/user/info);  //all method remove
    removeRoute(app, '/foo/remove/me', 'get'); // only get method remove