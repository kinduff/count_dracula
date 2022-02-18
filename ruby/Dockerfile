FROM ruby:alpine
WORKDIR /app
COPY count_dracula.gemspec ./
COPY Gemfile* ./
RUN bundle install --jobs=3 --retry=3
COPY . .
EXPOSE 3000
CMD ["bundle", "exec", "rackup"]
