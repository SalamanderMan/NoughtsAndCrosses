module.exports =  {
        images: {
            cwd: '',
            src: 'main-app/app/images/*',
            dest: '.build/',
            expand:true
        },

        html:{
            cwd: '',
            src: ['main-app/app/index.html', 'main-app/app/*.ico'],
            dest: '.build/',
            expand:true

        },

        angular:{
            cwd:'bower_components/',
            src:'angular/**',
            dest: '.build/main-app/app/',
            expand:true
        },

        audio:{
            cwd:'',
            src:'main-app/app/sounds/*',
            dest: '.build/',
            expand: true
        }
};








