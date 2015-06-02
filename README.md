# Baltimore Hackathon

Website for the fourth Baltimore Hackathon, Sept 18 - 20th, 2015. Lives at
http://baltimorehackathon.github.io/baltimorehackathon/ (For now)
Eventually it will be => http://baltimorehackathon.com.

## System Dependencies

- Ruby 2.2.1
- Bundler

## Getting Started

1. Run `bundle install` in this directory.
2. Run `bin/middleman server` in this directory.
3. Go to http://0.0.0.0:4567 to see the site!

Everything you'll need to edit is contained in the `source` directory. The
websites from the past years live in `source/2010`,`source/2012` and `source/2014` and are
self contained. 
We're using the "middleman-livereload" gem, so no need to restart the server or browser when making changes to the source files in your text editor.
The Files below are the ones you want to edit to make changes for the current year Hackathon.
* `source/images`
* `source/javascripts` - include any new javacript files in here and add file to `application.js`
* `source/layouts` - layout.erb is the layout for `source/index.html.erb`
* `source/stylesheets` - include and new css/scss file in here and add file to `application.scss`
For additional information about developing with Middleman,
[check out their docs](http://middlemanapp.com/).

## Deploying

Deploying uses the `middleman-deploy` gem to automate the process of deploying
the website to Github pages. The command will deploy the built website to the
Push URL in `git remote show origin`.

1. Run `middleman build`.
2. Run `middleman deploy`.
