task default: 'test'

# HTML Proofer helps to detect broken links.
# https://github.com/gjtorikian/html-proofer
require 'html-proofer'
task test: [:build] do
  options = {
    allow_hash_href:  false,
    assume_extension: true,
    check_opengraph:  true,
    check_favicon:    true,
    check_html:       true,
    disable_external: true,
    # checks_to_ignore: %w(ImageCheck), # for debugging

    # NOTE: You can ignore file, URL, and response as follows
    file_ignore: [
      /404\.html/,
      /google(.*)\.html/,
    ],
    #url_ignore:  %w(coderdojo.com linkedin.com),
    #http_status_ignore: [0, 500, 999],
  }

  HTMLProofer.check_directory('./_site', options).run
end

# Enable 'build' to flush cache files via 'clean'
task build: [:clean] do
  system 'bundle exec jekyll build' unless ENV['SKIP_BUILD'] == 'true'
end

task :clean do
  system 'bundle exec jekyll clean' unless ENV['SKIP_BUILD'] == 'true'
end
