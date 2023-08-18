#!/usr/bin/env ruby

# require 'pry' unless ENV['JEKYLL_ENV'] == 'production'
require 'yaml'

# Remove existing files and re-generate them
# NOTE: もしファイルパスを変更して過去ファイルを消したい場面があれば使う
#Dir.glob("_posts/exhibition/*.md").each { |filename| File.delete(filename) }

projects = YAML.load_file("_data/exhibition.yml", symbolize_names: true)
projects.each_with_index do |project, index|
  # Generate individual project page by data
  path = "./_pages/exhibition/2023-#{project[:path_URL]}.md"
  page = <<~PROJECT_PAGE
    ---
    layout: default
    title: "#{project[:title]}"
    permalink: /expo/#{project[:path_URL]}
    ---
    <h1 style="padding-top: 100px; padding-bottom: 30px; ">#{project[:title]}</h1>
    <div class="main_content">

    {% comment %}
    /*スクラッチの埋め込みをしたい場合に用いる。*/
    {% if "#{project[:tag]}" contains "Scratch" %}
    {% if "#{project[:URL]}" contains "https://scratch.mit.edu/projects/" %}
    <div class="scratch-wrapper">
    <iframe src="#{project[:URL]}embed" allowtransparency="true" width="542" height="450" frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
    {%else%}
    <img class='top-img lazyload' src='../img/2023/exhibition/#{project[:img]}' alt='サムネイル画像' loading='lazy'  style='margin-bottom: 10px; border-radius: 6px;width: 100%;' />
    {% endif %}
    {% else %}
    <img class='top-img lazyload' src='../img/2023/exhibition/#{project[:img]}' alt='サムネイル画像' loading='lazy'  style='margin-bottom: 10px; border-radius: 6px;width: 100%;' />
    {% endif %}
    {% endcomment %}
    
    <a href="#{project[:URL]}" target="_blank" rel="noopener" >
      <img class='top-img lazyload' loading='lazy' alt='サムネイル画像'
           style='margin-bottom: 10px; border-radius: 6px;width: 100%;'
           src='../img/2023/exhibition/#{project[:img]}' />
    </a>
    <p>クリエイター: #{project[:creator]}(CoderDojo #{project[:affiliation]})</p>
    <div class="contents">
      <div class="box">
        <h5>作品の説明</h5>
        <p>#{project[:text]}</p>
      </div>
      <div class="box">
        <h5>参考・参照元、工夫したところ</h5>
        <p>#{project[:description]}</p>
      </div>
    </div>
    </div>
    <a href="#{project[:URL]}" target="_blank" rel="noopener" class="button air">
      <i class="fas fa-scroll"></i>
      作品を見る
    </a>
    
    <style type="text/css">
      /* 使っていないスタイルのため一時的にコメントアウト
      .prev { display: table-cell; color: white; text-align: left;   }
      .toc  { display: table-cell; color: white; text-align: center; }
      .next { display: table-cell; color: white; text-align: right;  }
      .nav a:link, .nav a:visited { color: white; }
      */
      iframe{margin: 0 auto}
      .box{width:auto; margin: 0 auto;padding-bottom:20px;}
      .box h5{text-align: left;}
      .box p{text-align: left;}
      a.air{margin-bottom:100px;}
      a.air{text-decoration: none;}
      .contents{width:auto; margin: 0 auto;padding:5px;}
      /*content*/
      .main_content{
        display: block;
        margin: 0 auto 12px;
        text-align: center;
        text-decoration: none;
        width: 40%;
      }
      @media screen and (max-width: 1000px) {
        .main_content {
         padding: 8px 0;
         width: 80%;
       }
      }
      /* scratch wrapper */
      @media screen and (max-width: 570px){
        div.scratch-wrapper > iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        div.scratch-wrapper {
          position: relative;
          padding-bottom: 79%;
          height: 0;
          overflow: hidden;
          margin: 10px 20px;
        }
      }
    </style>
  PROJECT_PAGE

  IO.write(path, page)
  puts "Upsert: #{path}"
end
