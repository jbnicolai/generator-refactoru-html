'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var RefactoruHtmlGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if(this.props.handlebars && !this.options['skip-install']) {
        this.npmInstall();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic RefactoruHtml generator.'));

    var prompts = [
      {
        type: 'confirm',
        name: 'bootstrap',
        message: 'Twitter Bootstrap?',
        default: false
      },
      {
        type: 'confirm',
        name: 'normalize',
        message: 'Normalize.css?',
        default: true,
        when: function(answers) {
          return !answers.bootstrap;
        }
      },
      {
        type: 'confirm',
        name: 'css',
        message: 'Include a blank main.css?',
        default: true
      },
      {
        type: 'confirm',
        name: 'handlebars',
        message: 'Precompiled handlebars templates?',
        default: false
      },
      {
        type: 'confirm',
        name: 'jquery',
        message: 'jQuery?',
        default: false,
        when: function(answers) {
          return !answers.handlebars;
        }
      },
      {
        type: 'confirm',
        name: 'jasmine',
        message: 'Jasmine tests?',
        default: false
      },
      {
        type: 'confirm',
        name: 'js',
        message: 'Include a blank main.js file?',
        default: true,
        when: function(answers) {
          return !answers.jquery && !answers.handlebars;
        }
      }
    ];

    this.prompt(prompts, function (props) {

      props.jquery |= props.handlebars
      props.js |= props.jquery

      this.props = props;

      done();
    }.bind(this));
  },

  app: function () {

    this.template('index.html');

    if(this.props.css) {
      this.write('main.css', '');
    }

    if(this.props.js || this.props.jquery || this.props.handlebars) {
      this.template('main.js')
    }

    if(this.props.jasmine) {
      this.directory('test', 'test');
    }

    if(this.props.handlebars) {
      this.copy('_package.json', 'package.json');
      this.copy('Gulpfile.js');
      this.directory('templates', 'templates');
    }
  },
});

module.exports = RefactoruHtmlGenerator;
