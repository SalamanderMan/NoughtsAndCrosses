module.exports = {
   unit:{
       configFile: 'karma.conf.js',
        options:{
                files:['./bower_components/angular/angular.js',
                        './bower_components/angular-mocks/angular-mocks.js',
                        './main-app/app/scripts/modules.js',
                        './main-app/app/scripts/services*/*.js',
                        './testing/*.js',
                        ]
        }
   }
};


