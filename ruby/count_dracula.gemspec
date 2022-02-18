# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = 'count_dracula'
  spec.summary       = 'SS API to call using Redis.'
  spec.description   = 'SS API to call using Redis.'
  spec.version       = '1.0.0'
  spec.authors       = ['Alejandro AR']
  spec.email         = ['kinduff@protonmail.com']
  spec.homepage      = 'https://github.com/kinduff/count_dracula'
  spec.licenses      = ['MIT']
  spec.files         = ['app.rb']
  spec.required_ruby_version = '>= 2.5'
  spec.add_dependency 'redis', '~> 4.6'
  spec.add_dependency 'rack', '~> 2.2'
  spec.add_dependency 'webrick', '~> 1.7'
  spec.metadata['rubygems_mfa_required'] = 'true'
end
