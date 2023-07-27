---
layout: default
title: 展示
thumbnail: timetable.png
permalink: /exhibition
---
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-12">
      <h1>大博覧会</h1>
      <p>忍者の作品のオンラインの展示です</p>
    </div>
  </div>

  <div class="air"></div>
  <div class="row text-left">
    {% for exhibition in site.data.exhibition %}
      {% assign profile_id = 'profile-' | append: forloop.index %}
    <div class="col-md-6 col-12 p-3" id="{{data.title}}">
      <h4 class="ws-title">{{ exhibition.title }}</h4>
      <p>
        {{ exhibition.time }}
        {% if exhibition.tag %}
        <span class="badge badge-ws">{{ exhibition.tag }}</span>
        {% endif %}
      </p>
      {% if exhibition.img %}
      <div class="my-3">
        <img src="../img/{{ site.year }}/exhibition/{{ exhibition.img }}" class="w-100 px-5" alt="サムネイル">
      </div>
      {% endif %}
      <p class="exhibition-speaker-name">{{ exhibition.creator }} {% if exhibition.affiliation %}（{{ exhibition.affiliation }}）{% endif %}</p>
      {% if exhibition.URL %}
      <p>
	<a href="./{{ exhibition.path_URL }}" rel="noopener" class="btn btn-main btn-sm"><i class="fas fa-scroll"></i> 詳しくはこちら</a>
      </p>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>
