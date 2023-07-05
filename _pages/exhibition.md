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

      {% if exhibition.profile-img %}
      <div class="my-3">
        <img src="img/{{ site.year }}/exhibition/{{ exhibition.profile-img }}" class="w-100 px-5" alt="プロフィール画像">
      </div>
      {% endif %}

      <p class="exhibition-speaker-name">{{ exhibition.creator }} {% if exhibition.affiliation %}（{{ exhibition.affiliation }}）{% endif %}</p>
      <p>{{ exhibition.text }}</p>

<!--       {% if exhibition.archive-link %}
      <p>
	<a href="{{ exhibition.archive-link }}" target="_blank" rel="noopener" class="btn btn-main btn-sm"><i class="fab fa-youtube"></i> YouTube で見る</a>
      </p>
      {% endif %} -->

      {% if exhibition.URL %}
      <p>
	<a href="{{ exhibition.URL }}" target="_blank" rel="noopener" class="btn btn-main btn-sm"><i class="fas fa-scroll"></i> 作品URLまたは動画URL</a>
      </p>
      {% endif %}

      {% if exhibition.profile-text or exhibition.creators %}
      <p>
	<a href="#{{ profile_id }}" role="button" data-toggle="collapse" class="btn btn-main btn-sm"><i class="fas fa-angle-down"></i>参考・参照元、工夫したところ</a>
      </p>
      {% endif %}

      <div class="collapse mt-3" id="{{ profile_id }}">
        {% for creator in exhibition.creators %}
<!--         <p class="exhibition-speaker-name">{{ creator.name }}（{{ creator.affiliation }}）<span class="badge badge-main">{{ creator.role }}</span></p> -->
        <p>{{ creator.text }}</p>
<!--         <ul>
          {% for link in creator.links %}
          <li><a href="{{ link }}" target="_blank" rel="noopener external">{{ link | remove_first: 'https://' | remove_first: 'http://' }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %} -->

<!--         {% else %}
        <p>{{ exhibition.profile-text }}</p>
        <ul>
          {% for link in exhibition.links %}
          <li><a href="{{ link }}" target="_blank" rel="noopener external">{{ link | remove_first: 'https://' | remove_first: 'http://' }}</a></li>
          {% endfor %}
        </ul>
        {% endif %} -->
      </div>
    </div>
    {% endfor %}
  </div>
</div>
