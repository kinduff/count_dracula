# frozen_string_literal: true

require 'redis'
require 'json'
require 'digest'

class App
  def call(env)
    hash = Digest::SHA256.hexdigest(env['REQUEST_PATH'])
    value = redis.incr(hash)

    headers = {'Content-Type' => 'application/json'}
    body = { total: value }.to_json
    [200, headers, [body]]
  end

  private

  def redis
    @redis ||= Redis.new(url: ENV['REDIS_URL'])
  end
end

