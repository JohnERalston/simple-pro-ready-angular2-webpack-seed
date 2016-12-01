import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import '../site.css';
//or import any other assets that are part of your app rather than vendor.
//Note however that all js imports must be "modules"
//To use js files normally, don't try to import them here, instead... 
//1. Add the js file to the ext_resources (specifically that folder) 
//2. Add the <script src="ext_resources/my_js.js?<%= htmlWebpackPlugin.options.cachebust %>"></script> to index.html.template
//all files in ext_resources will be served correctly from the devServer during "npm run live" and will be copied to the dis folder during "npm run build". 

platformBrowserDynamic().bootstrapModule(AppModule);
