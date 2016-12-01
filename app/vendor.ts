// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
// RxJS
import 'rxjs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ... (modules only for JS)
//To use js files normally, don't try to import them here, instead... 
//1. Add the js file to the ext_resources (specifically that folder) 
//2. Add the <script src="ext_resources/my_js.js?<%= htmlWebpackPlugin.options.cachebust %>"></script> to index.html.template
//all files in ext_resources will be served correctly from the devServer during "npm run live" and will be copied to the dis folder during "npm run build".
