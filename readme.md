# simple-pro-ready-angular2-webpack-seed
A simple yet production ready angular 2 webpack seed.
This can be used as a standalone application or within another project such as ASP.NET MVC or Web API, Java Spring etc.
Complete with karma, jasmine and istanbul
Questions welcome at [Outbottle.com](http://outbottle.com/angular-2-production-ready-webpack-seed-starter/)

## Running
1. `npm run build` - builds the application into the dist directory the contents of which are stand-alone and fully functional.
You can run it by navigating to the dist directory in a command terminal and serving it up using npm module http-server or httpster etc.
2. `npm run build-w` - This does the same as 1 but continues to listen for code changes, building automatically when changes are detected.
3. `npm live` - This fires up the webpack-dev-server and serves up the application on http://localhost:8081. It rebuilds and reloads the browser automatically when code changes are detected.
4. `npm test` - Runs unit tests once, result displayed in terminal
5. `npm test-w` - Runs unit tests as code changes
6. `npm run coverage` - launches chrome showing unit test code coverage (note that this is only available after all tests pass)

## About
The resultant compiled code is minimised and complete with source maps for debugging purposes.
There is just one build which is suitable for dev, pro and any other environment.
If you want to speed things up during development however feel free to simply use this command from the console `webpack --watch` which is a quicker build but not quite pro ready.
The generated index.html file cache busts the generated css and js files by adding a hash query string parameter.
The code is fully debuggable in chrome or firebug via the generated maps

## Standalone application
When built, the `/dist` folder contains the compiled standalone application. Launch in any application server to see it.
*E.g. in a console `cd` into the `dist` folder and use `http-server` (npm module) to launch the application.*
Obviously, during development use `npm run build-w` or `npm run live` for convenience.

## Integrated into another application
Such as Spring, Ninjaframework, ASP.NET MVC or WEB API etc.
1. Add this entire thing to the root of the project. (ok so the folder structure may not be exactly as you want but keeep in mind that an there are essentially two projects (angular2 and Spring/MVC or whatever) occuping the same root, this is somewhat unavoidable)
2. Edit `webpack.config.js` as so
 ```javascript
 new HtmlWebpackPlugin({
     cachebust: new Date().getTime(),
     template: './index.html.template', //this should end in anything other than .html otherwise use [Another template option](http://https://github.com/ampedandwired/html-webpack-plugin/blob/master/docs/template-option.md)
     filename: './Views/Shared/_Layout.cshtml', //MVC //In other words, make this path anywhere relative to root directory
     hash: true,
     inject: false
})
```
3. Update `index.html.template` `script` and `link` tags to point to the `dist` directory. 

## Standalone Vs. Integrated into Spring or MVC or whatever
If you're integrating into Spring, Web API or whatever, it's unlikely that the devServer live feature will be of much benifet. The Angular2 aplication will be running on localhost:8081 while the Spring or Web API application will be running from ISS or Tomcat or whatever, there will be CORS issues, there may also be relative path issues. These can be solved of course but just be aware of it. It would probably be best to simply run `npm run build-w` rater than `npm run live` and hit F5 on the browser each time. #
If however, you're intend the Angular2 application be a stand-alone front end with a separate REST back end or something to that effect, then `npm run live` will work quite nicely.


## Adding external resources
Adding static resources such as images, js, css etrc that are not in the `/app` folder can be acheived by doing the following.
1. Add the file(s) to the `ext_resources` directory.
2. Include them in `index.html.template` e.g.
```
<body>
    <my-app>Loading...</my-app>
    <!-- External Resources -->
    <script src="ext_resources/jquery.js?<%= htmlWebpackPlugin.options.cachebust %>"></script>
    <script src="ext_resources/js.js?<%= htmlWebpackPlugin.options.cachebust %>"></script>
    
    <script src="vendor.js?<%= htmlWebpackPlugin.options.cachebust %>"></script>
    <script src="app.js?<%= htmlWebpackPlugin.options.cachebust %>"></script>
</body>
```
Similarly, add css files to the `<head>`

## Including vendor modules
in `vendor.ts` add "modules" as so
`import "../node_modules/some_module/src";`

## Including your application modules
In `main.ts` add "modules" as so
`import "../my_modules/some_module_I_made_earlier/src";`


That is pretty much it.

Feel perfectly free to post any questions here: [Outbottle.com](http://outbottle.com/angular-2-production-ready-webpack-seed-starter/)
