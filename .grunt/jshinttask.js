
module.exports =  {

    script: {
        cwd: '',
        src: ['main-app/app/scripts/*.js',  'main-app/app/scripts/services/*.js','main-app/app/scripts/controllers/*.js'],
        dest: '.build/',
        expand: true
    },

    file: {
        cwd: '',
        src: '.grunt/*.js',
        dest: '.build/',
        expand: true
    },

    grunt: {
        cwd: '',
        src: 'gruntfile.js',
        dest: '.build/',
        expand: true
    },
    options: {

        quotmark: 'single'

    }

};
