---
layout: default
title:  イベント企画
thumbnail: event.jpg
permalink: /events
---

<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-12">
      <h1>イベント企画</h1>
    </div>
  </div>
  <div class="air">ただいま、準備中</div>
  <div class="row text-left">
    {% for event in site.data.events %}
    <div class="col-md-6 col-12 p-3" id="{{ event.title }}">
      <h4 class="ws-title">{{ event.title }}</h4>
      <p>
        {{ event.time }}
        {% if event.tag %}
        <span class="badge badge-ws">{{ event.tag }}</span>
        {% endif %}
      </p>
      <img src="img/{{ site.year }}/event/{{ event.img }}" class="w-100" alt="イベント画像">
      <p>{{ event.text }}</p>
      {% if event.url %}
      <p class="text-left"><a class="btn btn-main session_btn" href="{{ site.url }}/{{ event.url}}">参加・詳細</a></p>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>
