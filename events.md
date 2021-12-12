---
layout: default
title:  イベント企画
thumbnail: event.jpg
---

<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-12">
      <h1>イベント企画</h1>
      <p>どなたでもご参加いただける企画をご用意しています<br><span class="small">(*時間は一部変更になる場合があります)</span></p>
    </div>
  </div>

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
      <img src="img/event/{{ event.img }}" class="w-100" alt="イベント画像">
      <p>{{ event.text }}</p>
    </div>
    {% endfor %}
  </div>
</div>
