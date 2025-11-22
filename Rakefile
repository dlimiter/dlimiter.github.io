# Rakefile for Jekyll site management

desc "Install dependencies"
task :install do
  puts "Installing Ruby dependencies..."
  sh "bundle install"
end

desc "Build the Jekyll site"
task :build do
  puts "Building Jekyll site..."
  sh "bundle exec jekyll build"
end

desc "Serve the site locally (default port 4000)"
task :serve do
  puts "Starting Jekyll server at http://localhost:4000"
  sh "bundle exec jekyll serve"
end

desc "Serve the site locally with live reload"
task :watch do
  puts "Starting Jekyll server with live reload at http://localhost:4000"
  sh "bundle exec jekyll serve --livereload"
end

desc "Serve on custom port (usage: rake serve_port PORT=4001)"
task :serve_port do
  port = ENV['PORT'] || '4001'
  puts "Starting Jekyll server at http://localhost:#{port}"
  sh "bundle exec jekyll serve --port #{port}"
end

desc "Clean the build directory"
task :clean do
  puts "Cleaning _site directory..."
  sh "bundle exec jekyll clean"
end

desc "Build and serve"
task :dev => [:build, :serve]

desc "Clean, build, and serve"
task :fresh => [:clean, :build, :serve]

desc "Update dependencies"
task :update do
  puts "Updating Ruby dependencies..."
  sh "bundle update"
end

# Default task
task :default => :serve

# Helper tasks
namespace :site do
  desc "Check site health"
  task :check do
    puts "Checking Jekyll configuration..."
    sh "bundle exec jekyll doctor"
  end

  desc "Show Jekyll version"
  task :version do
    sh "bundle exec jekyll --version"
  end

  desc "Show site stats"
  task :stats do
    puts "\n=== Site Statistics ===\n"
    puts "Pages: #{Dir.glob('*.html').length}"
    puts "Layouts: #{Dir.glob('_layouts/*.html').length}"
    puts "Includes: #{Dir.glob('_includes/*.html').length}"
    puts "SCSS files: #{Dir.glob('_sass/*.scss').length}"
  end
end

puts "Available tasks:"
puts "  rake install      - Install dependencies"
puts "  rake build        - Build the site"
puts "  rake serve        - Start local server (port 4000)"
puts "  rake watch        - Start server with live reload"
puts "  rake serve_port   - Start on custom port (PORT=4001)"
puts "  rake clean        - Clean build directory"
puts "  rake update       - Update dependencies"
puts "  rake site:check   - Check site health"
puts "  rake site:stats   - Show site statistics"
