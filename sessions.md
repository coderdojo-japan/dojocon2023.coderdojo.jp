---
layout: default
title: セッション
thumbnail: timetable.png
---

<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-12">
      <h1>セッション</h1>
      <p>セッションの内容や登壇者を紹介するページです。</p>
    </div>
  </div>

  <div id='timetable'></div>
  <br>
  <h5>当日のタイムテーブル</h5>
  <img src='/img/timetable.png' alt='タイムテーブル' width='100%' />
  <ul class="text-center list-style-none">
    <li><a href="https://dojocon-japan.doorkeeper.jp/events/129895"><i class="fas fa-link"></i> 入場チケットを申し込む</a></li>
  </ul>
  <br>
  <br>
  <br>

  <div class="row text-left">
    {% for session in site.data.sessions %}
    <div class="col-md-6 col-12 p-3" id="{{data.title}}">
      <h4 class="ws-title">{{ session.title }}</h4>
      <p>
        {{ session.time }}
        {% if session.tag %}
        <span class="badge badge-ws">{{ session.tag }}</span>
        {% endif %}
      </p>

      {% if session.profile-img %}
      <div class="my-3">
        <img src="img/session/{{ session.profile-img }}" class="w-100 px-5" alt="プロフィール画像">
      </div>
      {% endif %}

      <p class="session-speaker-name">{{ session.speaker}} {% if session.affiliation %}（{{ session.affiliation }}）{%endif%}</p>
      <p>{{ session.text }}</p>

      {% if session.slides %}
      <p>
	<a href="{{ session.slides }}" target="_blank" rel="noopener" class="btn btn-main btn-sm"><i class="fas fa-scroll"></i> スライド資料を見る</a>
      </p>
      {% endif %}

      {% if session.profile-text or session.speakers %}
      <a href="#{{ session.profile-id }}" role="button" data-toggle="collapse" class="btn btn-main btn-sm"><i class="fas fa-angle-down"></i> 登壇者情報を見る</a>
      {% endif %}
      {% if session.archive-link %}
      　<a href="{{ session.archive-link }}" target="_blank" rel="noopener" class="btn btn-sm btn-secondary"><i class="fab fa-youtube"></i> セッションアーカイブ</a>
      {% endif %}

      <div class="collapse mt-3" id="{{ session.profile-id }}">
        {% if session.tag == "パネルディスカッション" %}
        {% for speaker in session.speakers %}
        <p class="session-speaker-name">{{ speaker.name }}（{{ speaker.affiliation }}）<span class="badge badge-main">{{ speaker.role }}</span></p>
        <p>{{ speaker.text }}</p>
        <ul>
          {% for link in speaker.sns %}
          <li><a href="{{ link }}">{{ link }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %}

        {% else %}
        <p>{{ session.profile-text }}</p>
        <ul>
          {% for link in session.sns %}
          <li><a href="{{ link }}">{{ link }}</a></li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>
