---
layout: default
---
<div id="top">
  <div class="tagline-box">
    <div class='tagline'>The Annual CoderDojo<br>Community Conference in Japan</div>
  </div>
  <div class='information'>
    <div class="theme">Be Cool</div>
    <img src="/img/2023/logo_640x160.svg">
    <div class="event-date-and-location">
      <p>2023.8.27 Sun<br>at 奈良女子大学 Nara Women's University</p>
    </div>
  </div>
  <div class="character">
    <img src="/img/2023/mv-fumanara.png">
  </div>
</div>


<img src="/img/2023/deco.svg">
<div id='colored_zone'>
  <h2 class="title-welcome">WELCOME TO</h2>
  <div></div>
  <div class='dojocon-image'>
    <img src="/img/2023/52554972726_b2da260763_o.jpg">
  </div>
  <div class="about-dojocon">
    <div class='short'>
      CoderDojoコミュニティの<br class='ignore-sp'>カンファレンスイベント
    </div>
    <div class='long'>
      <p>DojoCon Japanとは日本の CoderDojo コミュニティメンバーが全国から集まる、年に1度のカンファレンスイベント (CoderDojo Conference) です。</p>
      <p>2016年に始まり、2023年は奈良女子大学にて開催します。</p>
    </div>
  </div>
  <div class='spacing1'></div>

  <div class='about-coderdojo'>
    <div class='short'>CoderDojoとは</div>
    <div class='long'>
      <p>子ども達にプログラミングを学ぶ場を提供する、ボランティア主導の世界的な非営利活動です。</p>
      <p>CoderDojo は2011年にアイルランドから始まり、現在は世界112カ国に2,200以上の道場があり、日本国内でも全国234以上の道場で毎年1,200回以上 (*1) 開催されています。CoderDojo はエンジニアやデザイナー、各地域の保護者や学生、研究者や経営者など（メンター）と子どもが出会える場にもなっています。</p>
      <div class='annotation'>
          *1 統計情報: <a href='https://coderdojo.jp/stats' target='_blank'>https://coderdojo.jp/stats</a>
      </div>
    </div>
  </div>
  <div class='coderdojo-logo'>
    <img src="/img/2023/coderdojo_logo.jpg">
  </div>
  <div class='spacing2'></div>
  <div class='about-dojocon-this-year'>
      <div class='short'>
        DojoCon Japan 2023について
      </div>
      <div class='long'>
        <p>2012年に日本で最初のCoderDojoが始まって昨年で10年が経ち、現在では多くの企業や組織から支援を受けられるようになりました。これはCoderDojoが任意かつ自律的な活動であるにも関わらず信頼を得られている証だと考えられます。</p>
        <p>これからの10年もCoderDojoが信頼される"Cool"な活動であり続けられるように、DojoCon Japan 2023ではそのきっかけを作っていきます。</p>
      </div>
  </div>
  <div class='spacing3'></div>
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
        <div class='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.685005056214!2d135.82684151130331!3d34.68789867281133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f50!3m3!1m2!1s0x600139809cdec24d%3A0xed8d143c9c10d005!2z5aWI6Imv5aWz5a2Q5aSn5a2m!5e0!3m2!1sja!2sjp!4v1687062455461!5m2!1sja!2sjp" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="col-md-8 offset-md-2">
        <p class="about-title">参加費</p>
        <p class="about-text">{{ site.price }}</p>
      </div>
    </div>
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 mb-5">
          <a href="#" class="button" target="_blank" rel="noopener">申し込みをする</a>
        </div>
      </div>
    </div> -->
  </div>

  <div class="container-fruid">
    <section id="news" class="section-gray">
      <img src="/img/2023/deco.svg">
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

  <div id='countdown'></div>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h2 class="text-center title-text">Countdown DojoCon Japan</h2>
        <p class="text-center caption">DojoCon Japan {{ site.year }} の内容を紹介するライブ配信です。</p>
        <div class='comming-soon'>ただいま、準備中</div>
      </div>
    </div>
  </div>

  <section id="contact" class="bg-main">
    <div class="section-contents container">
      <h2 class="text-center title-text">CONTACT</h2>
      <p class="caption text-center">お問い合わせ</p>
      <p class="caption">DojoCon Japan {{ site.year }} についてのお問い合わせは以下のリンク先（Googleフォーム）よりお願いいたします。</p>
      <a href="{{ site.contact }}" class="button" target="_blank" rel="noopener">お問い合わせする</a>
    </div>
  </section>

  <section id="organizedBy" class="section-gray top-contents">
    <div class="section-contents">
      <h2 class="text-center title-text">Organized by</h2>
      <p class="text-center">DojoCon Japan {{ site.year }} 実行委員会</p>
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
