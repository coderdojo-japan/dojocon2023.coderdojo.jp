---
layout: default
---

<div class="top-contents">
  <div class="top">
    <div class="main-visual-container">
      <div class="main-visual-left">
        <div class="decoration-wrapper">
          <div class="decoration">
            <p>The Annual Global CoderDojo</p>
            <p>Community Conference in Japan</p>
          </div>
        </div>
        <h1 class="theme-phrase">Be Cool</h1>
        <img src="/img/2023/logo_640x160.svg">
        <div class="event-date-and-location">
          <p>2023.8.27 Sun</p>
          <p>at 奈良女子大学 Nara Women's University</p>
        </div>
      </div>
      <div class="main-visual-right">
        <img src="/img/2023/mv-fumanara.png">
      </div>
    </div>
  </div>
  <img src="/img/2023/deco.svg">

  <div class="container-fruid">
    <div id="about">
      <h2 class="title-text text-center">Welcome To</h2>
      <div class="wrapper-block">
        <section class="first-section">
          <img src="/img/2023/52554972726_b2da260763_o.jpg" class="img">
          <div class="text-left description">
            <h3 class="my-5">日本最大の<br>CoderDojo の祭典</h3>
            <div class="text">
              <p>DojoCon とは CoderDojo コミュニティが全国から集まる、年に１度のカンファレンスイベント (CoderDojo Conference) です。</p>
              <p>「DojoCon Japan」はこの日本版という位置づけで、大阪 (2016, 2017)・東京 (2018)・名古屋 (2019)・オンライン (2020, 2021)・富山 (2022) で開催され、通算8回目となる2023年は、奈良県で開催します。</p>
            </div>
          </div>
        </section>

        <section class="second-section">
          <div class="text-left ml-4 description">
            <h3 class="mb-5">CoderDojo とは</h3>
            <p>子ども達にプログラミングを学ぶ場を提供する、ボランティア主導の世界的な非営利活動です。</p>
            <p>CoderDojo は2011年にアイルランドから始まり、現在は世界112カ国に2,200以上の道場があり、日本国内でも全国234以上の道場で毎年1,200回以上 (*1) 開催されています。CoderDojo はエンジニアやデザイナー、各地域の保護者や学生、研究者や経営者など（メンター）と子どもが出会える場にもなっています。
              <br><small>*1 統計情報: <a href='https://coderdojo.jp/stats' target="_blank">https://coderdojo.jp/stats</a></small></p>
          </div>
          <img src="/img/2023/coderdojo_logo.jpg">
        </section>

        <section class="third-section">
          <div class="text-left ml-4 description">
            <h3 class="mb-5">DojoCon Japan {{ site.year}} について</h3>
            <p>2012年に日本で最初のCoderDojoが始まって昨年で10年が経ち、現在では多くの企業や組織から支援を受けられるようになりました。これはCoderDojoが任意かつ自律的な活動であるにも関わらず信頼を得られている証だと考えられます。</p>
            <p>これからの10年もCoderDojoが信頼される"Cool"な活動であり続けられるように、DojoCon Japan 2023ではそのきっかけを作っていきます。</p>
          </div>
        </section>
      </div>
    </div>
  </div>

  <div id='ticket' class="container" style='margin-top: 50px; margin-bottom: 100px;'>
    <div class="row" id="outline">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center title-text">ABOUT</h2>
        <p class="caption">開催概要</p>
      </div>

      <div class="col-md-8 offset-md-2">
        <p class="about-title">開催日</p>
        <p class="about-text">{{ site.date_event }}</p>
      </div>

      <div class="col-md-8 offset-md-2">
        <p class="about-title">場所</p>
        <p class="about-text">{{ site.venue }}</p>
      </div>

      <div class="col-md-8 offset-md-2">
        <p class="about-title">参加費</p>
        <p class="about-text">{{ site.price }}</p>
      </div>

      <!-- <div class="col-md-8 offset-md-2">
        <p class="about-title">内容</p>
        <p class="about-text text-left">スピーカーセッション、ダイアログ（対話的）セッション、イベント企画などを予定しています。</p>
        <ul class="text-left list-style-none">
          <li><a href="/sessions"><i class="fas fa-link"></i> セッション情報を見る</a></li>
          <li><a href="/events"><i class="fas fa-link"></i> イベント企画を見る</a></li>
          <li><a href="/#news"><i class="fas fa-link"></i> お知らせ情報を見る</a></li>
        </ul>
      </div> -->
    </div>
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 mb-5">
          <a href="#" class="button" target="_blank" rel="noopener">申し込みをする</a>
        </div>
      </div>
    </div> -->
  </div>
  <img src="/img/2023/deco.svg">

  <div class="container-fruid">
    <section id="news" class="section-gray">
      <div class="section-contents">
        <h2 class="text-center title-text">NEWS</h2>
        <p class="caption text-center">お知らせ</p>
        <div class=" x-scroll row">
          {% for post in site.categories.news %}
            {% include articles.html %}
          {% endfor %}
        </div>
      </div>
    </section>
  </div>

  <!--
  <div id='countdown'></div>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h2 class="text-center title-text">Countdown DojoCon Japan</h2>
        <p class="text-center caption">DojoCon Japan {{ site.year }} の内容を紹介するライブ配信です。</p>
      </div>

      <div class="col-md-4 p-3">
        <a href='https://www.youtube.com/watch?v=2VIMymUsfiE'><img src='/img/countdown_session.png' alt='Countdown DojoCon Japan' width='100%'/></a>
        <p>各セッションの見どころ<br><a href='https://www.youtube.com/watch?v=2VIMymUsfiE'><i class="fab fa-youtube"></i> 視聴する</a></p>
      </div>

      <div class="col-md-4 p-3">
        <a href='https://www.youtube.com/watch?v=eyxSGb6zs54'><img src='/img/countdown_event.png' alt='Countdown DojoCon Japan' width='100%'/></a>
        <p>イベント企画などの紹介<br><a href='https://www.youtube.com/watch?v=eyxSGb6zs54'><i class="fab fa-youtube"></i> 視聴する</a></p>
      </div>

      <div class="col-md-4 p-3">
        <a href='https://www.youtube.com/watch?v=oPn8IWpBK3U'><img src='/img/countdown_dojocon.png' alt='Countdown DojoCon Japan' width='100%'/></a>
        <p>これまでの DojoCon Japan<br><a href='https://www.youtube.com/watch?v=oPn8IWpBK3U'><i class="fab fa-youtube"></i> 視聴する</a></p>
      </div>

      <div class="col-md-4 p-3">
        <a href='https://www.youtube.com/watch?v=zWIzR6_vnP0'><img src='/img/countdown_theme.png' alt='Countdown DojoCon Japan' width='100%'/></a>
        <p>2021年のテーマについて<br><a href='https://www.youtube.com/watch?v=zWIzR6_vnP0'><i class="fab fa-youtube"></i> 視聴する</a></p>
      </div>
    </div>
  </div>
  -->

  <section id="contact" class="bg-main">
    <div class="section-contents container">
      <h2 class="text-center title-text">CONTACT</h2>
      <p class="caption text-center">お問い合わせ</p>
      <p class="caption">気になる点などあればお気軽にご連絡ください。</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7CqFmVf4DOOpcXn0Z9ndLnnWq8jKIh9R5O-Zjq508uoP0Zw/viewform" class="button" target="_blank" rel="noopener">お問い合わせする</a>
    </div>
  </section>

  <section id="organizedBy" class="section-gray top-contents">
    <div class="section-contents">
      <h2 class="text-center title-text">Organized by</h2>
      <p class="text-center">DojoCon Japan 実行委員会</p>
      <p class="text-center"><a href="https://coderdojo.jp/" target="_blank" rel="noopener">一般社団法人 CoderDojo Japan</a></p>

      <div id='staff'>
        <h2 class="text-center title-text">STAFF</h2>
        <div class="flex">
          {% for member in site.data.members %}
          <div class="member">
            {% if member.site %}
            <a href="{{ member.site }}" target="_blank" rel="nofollow"  rel="noopener">
            {% endif %}
            <div class="member-image">
              {% if member.img %}<img src="/img/{{ site.year }}/members/{{ member.img }}" alt="{{ member.name }}" loading="lazy">
              {% else %}<img src="/img/{{ site.year }}/members/staff-dummy.png" alt="{{ member.name }}" loading="lazy">
              {% endif %}
            </div>
            <p>{{ member.name }}</p>{% if member.site %}</a>{% endif %}
          </div>
          {% endfor %}
        </div>
      </div>

      <h2 class="text-center title-text">Supported by</h2>
      <p class="caption text-center">後援</p>
      <p class="text-center"><a href="https://coderdojo.com/" target="_blank" rel="noopener">CoderDojo Foundation</a></p>
    </div>
  </section>
