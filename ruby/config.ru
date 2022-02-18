require 'rack'
require_relative 'app'

Rack::Server.start(
  app: App.new,
  Port: ENV['PORT'] || 3000,
  Host: ENV['HOST'] || '0.0.0.0'
)
