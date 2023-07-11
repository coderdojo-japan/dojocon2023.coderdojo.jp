#!/usr/bin/env ruby

# require 'pry' unless ENV['JEKYLL_ENV'] == 'production'
require 'yaml'

# Remove existing files and re-generate them
Dir.glob("./_posts/*.md").each { |filename| File.delete(filename) }

projects = YAML.load_file("../_data/exhibition.yml")
projects.each_with_index do |project, index|
  # Generate individual project page by data
  path = "../_pages/exhibiton/2023-#{project["path_URL"]}.md"
  page = <<~PROJECT_PAGE
    ---
    layout: default
    title: "#{project["title"]}"
    permalink: /exhibition/#{project["path_URL"]}
    ---
    <h1 style="padding-top: 100px;">#{project["title"]}</h1>
    <img class='top-img lazyload' src='../img/2023/exhibition/#{project["img"]}' alt='サムネイル画像' loading='lazy'  style='margin-bottom: 10px; border-radius: 6px;width: 400px;' />

     
    ### クリエータ {#creator}
    <p>
      #{project["creator"]}
    </p>
    <p>#{project["description"]}</p>
    <a href="#{project["URL"]}" target="_blank" rel="noopener" class="button">URL</a>

    <style type="text/css">
      .prev { display: table-cell; color: white; text-align: left;   }
      .toc  { display: table-cell; color: white; text-align: center; }
      .next { display: table-cell; color: white; text-align: right;  }
      .nav a:link, .nav a:visited { color: white; }
    </style>
  PROJECT_PAGE

  IO.write(path, page)
  puts "Upsert: #{path}"
end