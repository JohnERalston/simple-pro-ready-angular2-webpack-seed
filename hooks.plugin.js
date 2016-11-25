function HooksPlugin(options) {
}



HooksPlugin.prototype.apply = function (compiler) {
    compiler.plugin("compile", function (params) {
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        console.log("Build in progress.... " + hooksPluginHelper.getTimeString());
        console.log("\n\n\n");
    });

    compiler.plugin("done", function (stats) {
        var pkg = require("./package.json");
        var notifier = require("node-notifier");
        var duration = ((stats.endTime - stats.startTime) / 1000).toFixed(2);

        notifier.notify({
            title: pkg.name,
            message: `Typescript build is done!\n${stats.compilation.errors.length} errors in ${duration}s`,
            sound: true
        },
        function (error, response) {
            var t = hooksPluginHelper.getTimeString();
            //if (!stats.compilation.errors.length) {
            hooksPluginHelper.printComplete(duration, t, hooksPluginHelper.prevBuildTime);
                hooksPluginHelper.prevBuildTime = t;
            //}
        });
    });
};

module.exports = HooksPlugin;

var hooksPluginHelper = (function() {
    
    return {
        printComplete: printComplete,
        getTimeString: getTimeString,
        prevBuildTime: "n/a"
    };

    function getTimeString() {
        var d = new Date();
        return n(d.getHours()) + ":" + n(d.getMinutes()) + ":" + n(d.getSeconds());
        
        function n(n) {
            return n > 9 ? "" + n : "0" + n;
        }
    }

    function printComplete(duration, time, prevBuildTime) {
        console.log("\n\n\nBuild complete    ");
        console.log("    in " + duration + " seconds");
        console.log(" [" + time + "]");
        console.log("    (prev: [" + prevBuildTime + "]) ");
        console.log("\n");
    }

    

})();