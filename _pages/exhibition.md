---
layout: default
title: ニンジャ大博覧会
permalink: /exhibition
---
<div class="container mt-5 mb-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-12" style='margin: 70px auto 30px;'>
      <h1>ニンジャ大博覧会</h1>
      <p>各地の<a href='https://nara-coderdojo.github.io/#coderdojo%E3%81%A7%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%E3%81%A1%E3%83%8B%E3%83%B3%E3%82%B8%E3%83%A3%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8:~:text=%E3%80%8C%E3%83%8B%E3%83%B3%E3%82%B8%E3%83%A3%E3%80%8D' style='color: #7e2639;'>ニンジャ</a>による作品のオンライン展示です</p>
    </div>
  </div>

  <div class="air"></div>
  <div class="row text-left">
    {% for project in site.data.projects %}
    <div class="col-md-6 col-12 p-3 mb-5" id={{ project.id }}>
      <h4 class="ws-title">{{ project.title }}</h4>
      <p>
        {% if project.tag   %}<span class="badge badge-ws">{{ project.tag   }}</span>{% endif %}
        {% if project.local %}<span class="badge badge-ws">{{ project.local }}</span>{% endif %}
      </p>
      <div class="my-3">
        <a href="/expo/{{ project.id }}">
          <img class="w-100 px-5" alt="サムネイル"
	       {% if project.thumbnail %}
	       src="/img/2023/exhibition/{{ project.thumbnail }}" {% else  %}
	       src="/img/2023/dummy.jpg"
               {% endif %}
	  >
        </a>
      </div>
      <p class="exhibition-speaker-name">
	{{ project.creator }}
	{% if project.coderdojo_at %}<small>（CoderDojo {{ project.coderdojo_at }}）</small>{% endif %}
      </p>

      <p>
	<a href='/expo/{{ project.id }}' class='btn btn-main btn-sm'>
	  <i class='fas fa-scroll'></i> 詳細を見る
	</a>
      </p>
    </div>
    {% endfor %}
  </div>
</div>
