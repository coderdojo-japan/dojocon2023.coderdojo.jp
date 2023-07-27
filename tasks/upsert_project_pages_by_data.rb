#!/usr/bin/env ruby

# require 'pry' unless ENV['JEKYLL_ENV'] == 'production'
require 'yaml'

# Remove existing files and re-generate them
# NOTE: もしファイルパスを変更して過去ファイルを消したい場面があれば使う
#Dir.glob("_posts/exhibition/*.md").each { |filename| File.delete(filename) }

projects = YAML.load_file("_data/exhibition.yml")
projects.each_with_index do |project, index|
  # Generate individual project page by data
  path = "./_pages/exhibition/2023-#{project["path_URL"]}.md"
  page = <<~PROJECT_PAGE
    ---
    layout: default
    title: "#{project["title"]}"
    permalink: /exhibition/#{project["path_URL"]}
    ---
    <h1 style="padding-top: 100px; padding-bottom: 30px; ">#{project["title"]}</h1>
    {% if "#{project["tag"]}" contains "Scratch（ゲーム、アニメーションなど）" %}
    {% if "#{project["URL"]}" contains "https://scratch.mit.edu/projects/" %}
    <iframe src="#{project["URL"]}embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
    {%else%}
    <img class='top-img lazyload' src='../img/2023/exhibition/#{project["img"]}' alt='サムネイル画像' loading='lazy'  style='margin-bottom: 10px; border-radius: 6px;width: 400px;' />    
    {% endif %}
    {% else %}
    <img class='top-img lazyload' src='../img/2023/exhibition/#{project["img"]}' alt='サムネイル画像' loading='lazy'  style='margin-bottom: 10px; border-radius: 6px;width: 400px;' />
    {% endif %}
    <p>クリエイター:#{project["creator"]}(#{project["affiliation"]})</p>
    <div class="box">
      <h5>作品の説明</h5>
      <p>#{project["text"]}</p>
    </div>
    <div class="box">
      <h5>参考・参照元、工夫したところ</h5>
      <p>#{project["description"]}</p>
    </div>


    <a href="#{project["URL"]}" target="_blank" rel="noopener" class="button air">作品URL</a>
    
    <style type="text/css">
      .prev { display: table-cell; color: white; text-align: left;   }
      .toc  { display: table-cell; color: white; text-align: center; }
      .next { display: table-cell; color: white; text-align: right;  }
      .nav a:link, .nav a:visited { color: white; }
      iframe{margin: 0 auto}
      .box{width:450px; margin: 0 auto}
      .box h5{text-align: left;}
      .air{margin-bottom:60px;}
    </style>
  PROJECT_PAGE

  IO.write(path, page)
  puts "Upsert: #{path}"
end
