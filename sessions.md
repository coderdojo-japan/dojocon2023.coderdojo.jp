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
  <div class="col-md-8 offset-md-2 mb-5">
  <ul class="list-style-none">
    <li><a href="https://youtu.be/YzSutW3ibrE?t=885" target="_blank" rel="noopener"><i class="fab fa-youtube"></i> 午前のアーカイブ配信を見る</a></li>
    <li><a href="https://youtu.be/u81WfIKxTpw?t=888" target="_blank" rel="noopener"><i class="fab fa-youtube"></i> 午後のアーカイブ配信を見る</a></li>
  </ul>
  </div>
  <br>
  <br>
  <br>

  <div class="row text-left">
    {% for session in site.data.sessions %}
      {% assign profile_id = 'profile-' | append: forloop.index %}
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

      <p class="session-speaker-name">{{ session.speaker }} {% if session.affiliation %}（{{ session.affiliation }}）{% endif %}</p>
      <p>{{ session.text }}</p>

      {% if session.archive-link %}
      <p>
	<a href="{{ session.archive-link }}" target="_blank" rel="noopener" class="btn btn-main btn-sm"><i class="fab fa-youtube"></i> YouTube で見る</a>
      </p>
      {% endif %}

      {% if session.slides %}
      <p>
	<a href="{{ session.slides }}" target="_blank" rel="noopener" class="btn btn-main btn-sm"><i class="fas fa-scroll"></i> スライド資料を見る</a>
      </p>
      {% endif %}

      {% if session.profile-text or session.speakers %}
      <p>
	<a href="#{{ profile_id }}" role="button" data-toggle="collapse" class="btn btn-main btn-sm"><i class="fas fa-angle-down"></i> 登壇者情報を見る</a>
      </p>
      {% endif %}

      <div class="collapse mt-3" id="{{ profile_id }}">
        {% if session.tag == "パネルディスカッション" %}
        {% for speaker in session.speakers %}
        <p class="session-speaker-name">{{ speaker.name }}（{{ speaker.affiliation }}）<span class="badge badge-main">{{ speaker.role }}</span></p>
        <p>{{ speaker.text }}</p>
        <ul>
          {% for link in speaker.links %}
          <li><a href="{{ link }}" target="_blank" rel="noopener external">{{ link | remove_first: 'https://' | remove_first: 'http://' }}</a></li>
          {% endfor %}
        </ul>
        {% endfor %}

        {% else %}
        <p>{{ session.profile-text }}</p>
        <ul>
          {% for link in session.links %}
          <li><a href="{{ link }}" target="_blank" rel="noopener external">{{ link | remove_first: 'https://' | remove_first: 'http://' }}</a></li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>
