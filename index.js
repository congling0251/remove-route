
module.exports = function removeRoute(app, _path, method) {
  
  const removeMiddlewares = function (route, i, routes, path) {
    if (route.handle.name === 'router') {
      const pre = route.regexp.toString().slice(3, -13);
      route.handle.stack.forEach((_route, _i, _routes) => removeMiddlewares(_route, _i, _routes, pre));
    } else if (route.route && (path + route.route.path) === _path) {
      if (!method) {
        routes.splice(i)
      } else {
        route.route.methods[method.toLowerCase()] = false;
      }
    }
    
  }
  var routes = app._router.stack;
  routes.forEach((route, i, routes) => removeMiddlewares(route, i, routes, ''));
};