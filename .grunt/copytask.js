module.exports =  {
        images: {
            cwd: '',
            src: 'main-app/app/images/*',
            dest: '.build/',
            expand:true
        },

        html:{
            cwd: '',
            src: 'main-app/app/index.html',
            dest: '.build/',
            expand:true
        },

        angular:{
            cwd:'bower_components/',
            src:'angular/**',
            dest: '.build/main-app/app/',
            expand:true
        },

        script:{
            cwd:'',
            src:'scripts/*',
            dest: '.build/main-app/scripts',
            expand:true
        },

        audio:{
            cwd:'',
            src:'main-app/app/sounds/*',
            dest: '.build/',
            expand: true
        }
};








