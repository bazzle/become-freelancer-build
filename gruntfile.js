module.exports = function(grunt) {

  require('jit-grunt')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        style: 'expanded'
      },
      files: {
        src: "assets/css/main.scss",
        dest: "_site/assets/css/style.css"
      }
    },
    postcss: {
      prod: {
        options: {
          processors: [
            require("pixrem")(), // add fallbacks for rem units
            require("autoprefixer"),
            require("cssnano")(), // minify the result
          ]
        },
        src: "assets/css/main.scss",
        dest: "_site/assets/css/style.css"
      }
    },
    svgstore: {
      options: {
        prefix : 'icon-',
        includedemo: false
      },
      default: {
        files: {
          'assets/svg/icons.svg': ['assets/svg/input/*.svg'],
        }
      },
    },
    /* deprecated need to find a replacement for this that compiles es6
    uglify: {
      files: {
        src: "js/main.js",
        dest: "dest/js/scripts.js"
      }
    },
    */
    htmlmin: {
      default: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,
            src: '*.html',
            dest: 'dest/'
          }
        ]
      }
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "assets/images/",
            src: ["**/*.{png,jpg,gif}"],
            dest: "dest/assets/images/"
          }
        ]
      }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    "_site/*.html", "_site/*.css"
                ]
            },
            options: {
                watchTask: true,
                proxy: "localhost:4000"
            }
        }
    },
    watch: {
      css: {
        files: ["assets/css/**/*.scss"],
        tasks: ["sass"]
      }
    }
  });

  grunt.registerTask("dev", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "htmlmin",
    "imagemin",
    "postcss:prod"
  ]);


};
