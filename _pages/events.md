---
layout: page
title:  EVENT
subtitle: イベント
permalink: /events
---
  <div class="row text-left">
    {% assign count = 0 %}
    {% for event in site.data.events %}
    {% assign count = count | plus: 1 %}
    {% endfor %}
    {% if count == 0 %}
      <div class="col-12 text-center">
        <div class='wait-for-a-moment'>まもなくご案内します</div>
    {% else %}
      {% for event in site.data.events %}
      <div class="col-md-6 col-12 p-3" id="{{ event.title }}">
        <h4 class="ws-title">{{ event.title }}</h4>
        <p>
          {{ event.time }}
          {% if event.tag %}
          <span class="badge badge-ws">{{ event.tag }}</span>
          {% endif %}
        </p>
        <img src="/img/{{ site.year }}/event/{{ event.img }}" class="w-100" alt="イベント画像">
        <p>{{ event.text }}</p>
        {% if event.url %}
        <p class="text-left"><a class="btn btn-main session_btn" href="{{ event.url}}">参加・詳細</a></p>
        {% endif %}
      </div>
      {% endfor %}
    {% endif %}
  </div>