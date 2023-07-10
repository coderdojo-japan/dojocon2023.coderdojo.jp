#!/usr/bin/env ruby

require 'pry' unless ENV['JEKYLL_ENV'] == 'production'
require 'yaml'

# Remove existing files and re-generate them
Dir.glob("../exhibiton_md/*.md").each { |filename| File.delete(filename) }

projects = YAML.load_file("_data/exhibition.yml")
projects.each_with_index do |project, index|
  # Generate individual project page by data
  path = "../exhibitoon_md/2023-#{project["path_URL"]}.md"
  page = <<~PROJECT_PAGE
    ---
    layout: default
    title: "#{project[:title]}"
    permalink: /exhibition_md/2023-#{project["path_URL"]}
    ---
    {% assign pj = site.data.projects | where_exp: "pj", "pj.path_URL == '#{project["path_URL"]}'" | first %}

    <img class='top-img lazyload' src='../img/2023/exhibition/#{project["img"]}' alt='サムネイル画像' loading='lazy' style='margin-bottom: 10px; border-radius: 6px;' />

    {{ pj.description }}
    ### クリエータ {#creator}
    <p>
      #{project["creator"]}
    </p>

    {% if pj.URL %}
    <a href="pj.URL" target="_blank" rel="noopener" class="button">URL</a>
    {% endif %}

    <style type="text/css">
      .prev { display: table-cell; color: white; text-align: left;   }
      .toc  { display: table-cell; color: white; text-align: center; }
      .next { display: table-cell; color: white; text-align: right;  }
      .nav a:link, .nav a:visited { color: white; }
    </style>
    {% include project-navigation.html %}
  PROJECT_PAGE

  IO.write(path, page)
  puts "Upsert: #{path}"
end