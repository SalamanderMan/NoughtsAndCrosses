
var copyTask = require('./../../Desktop/NoughtsAndCrossesClient 2/.grunt/copytask');
var cleanTask = require('./../../Desktop/NoughtsAndCrossesClient 2/.grunt/cleantask');
var jshintTask = require('./../../Desktop/NoughtsAndCrossesClient 2/.grunt/jshinttask');
var fileWatchTask = require('./../../Desktop/NoughtsAndCrossesClient 2/.grunt/filewatchertask');
var lessTask = require('./../../Desktop/NoughtsAndCrossesClient 2/.grunt/lesstask');
var expressTask = require('./../../Desktop/NoughtsAndCrossesClient 2/server/server.js');
var concatTask = require('./../../Desktop/NoughtsAndCrossesClient 2/.grunt/concatTask.js');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: copyTask,
        clean: cleanTask,
        jshint: jshintTask,
        watch: fileWatchTask,
        less: lessTask,
        server: expressTask,
        concat: concatTask,

    });


    var port = 35002;
    grunt.registerTask('server', 'starts the express server', function(){
        expressTask.listen(port, function() {
            console.log('Express server listening on ' + port);
        });
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('nostart',['jshint','clean:all','concat','copy','less' ]);
    grunt.registerTask('default',['nostart','server', 'watch']);
};


