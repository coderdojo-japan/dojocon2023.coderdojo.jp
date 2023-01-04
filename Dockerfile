FROM ruby:3.1.3

RUN gem install jekyll  --version 4.3.1
RUN gem install bundler --version 2.4.2

WORKDIR /src
ENTRYPOINT bundle install && bundle exec jekyll serve \
  --host 0.0.0.0 --config _config.yml
