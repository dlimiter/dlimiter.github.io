task :default => [:server]

# Remove all generated files
task :clean do
  puts "cleaning _site directory..."
  system "rm -rf _site stylesheets"
end

# Install bundle
task :setup  => [:clean] do
  system "bundle install"
end

# Generate site
task :build  => [:setup] do
  system "bundle exec jekyll build"
end

task :server => [:build] do
  system "bundle exec jekyll serve"
end

task :deploy => [:build] do
  sh "rsync -av --rsh='ssh -p 2683' _site/ dlimiter@dlimiter.net:public_html/"
end

task :deploy_to_test => [:build] do
  sh "rsync -av --rsh='ssh -p 2683' _site/ dlimiter@dlimiter.net:public_html/test/"
end
