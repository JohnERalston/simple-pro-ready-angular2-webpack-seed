# simple-pro-ready-angular2-webpack-seed
A simple yet production ready angular 2 webpack seed.
This can be used as a standalone application or within another project such as ASP.NET MVC or Web API, Java Spring etc.

## Running
1. `npm run build` - builds the application into the dist directory the contents of which are stand-alone and fully functional.
You can run it by navigating to the dist directory in a command terminal and serving it up using npm module http-server or httpster etc.
2. `npm run build-w` - This does the same as 1 but continues to listen for code changes, building automatically when changes are detected.
3. `npm live` - This fires up the webpack-dev-server and serves up the application on http://localhost:8081. It rebuilds and reloads the browser automatically when code changes are detected.
4. `npm test` - Runs unit tests once, result displayed in terminal
5. `npm test-w` - Runs unit tests as code changes

## About
The resultant compiled code is minimised and complete with source maps for debugging purposes.
There is just one build which is suitable for dev, pro and any other environment.
The generated index.html file cache busts the generated css and js files by adding a hash query string parameter.
The code is fully debuggable in chrome or firebug 

## Standalone application
When built, the dist folder contains the compiled application. Launch in any application server to see it.
*E.g. in a console `cd` into the `dist` folder and use `http-server` (npm module) to launch the application.*
Obviously, during development use `npm run build-w` or `npm live` for convenience.

## Integrated into another application
Such as Spring, Ninjaframework, ASP.NET MVC or WEB API etc.
1. Add this entire thing to the root of the project. (ok so the folder structure may not be exactly as you want it but hey... it works)
2. Edit `webpack.config.js` as so
 ```javascript
 new HtmlWebpackPlugin({
     cachebust: new Date().getTime(),
     template: './index.html.template', //this should end in anything other than .html otherwise use [Another template option](http://https://github.com/ampedandwired/html-webpack-plugin/blob/master/docs/template-option.md)
     filename: './Views/Shared/_Layout.cshtml', //MVC //In other words, make this path to anywhere relative to root directory
     hash: true,
     inject: false
})
3. Update `index.html.template` `script` and `link` tags to point to the `dist` directory

That's pretty much it.

Feel perfectly free to post an questions here: [Outbottle.com](angular-2-production-ready-webpack-seed)
