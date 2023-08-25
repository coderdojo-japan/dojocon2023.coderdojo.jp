---
layout: default
title: ニンジャ大博覧会
permalink: /exhibition
---
<div class="container mt-5 mb-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-12">
      <h1>ニンジャ大博覧会</h1>
      <p>各地のニンジャによる作品のオンライン展示です</p>
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
	{% if project.coderdojo_at %}（CoderDojo {{ project.coderdojo_at }}）{% endif %}
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
