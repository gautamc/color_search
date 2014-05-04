=> source/elements/ contains polymer elements that use slim templating. Therefore we add the following to config.ru:

page "/elements/*", :layout => false

=> To start development server:

$ bundle install

$ bundle exec middleman server --verbose
