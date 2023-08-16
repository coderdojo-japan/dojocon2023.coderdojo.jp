---
layout: default
---
<div class="top">
  <div class="tagline-box">
    <div class='tagline'>The Annual CoderDojo<br>Community Conference in Japan</div>
  </div>
  <div class='information'>
    <div class="theme">Be Cool</div>
    <img src="/img/2023/logo_640x160.svg" alt='Cover Photo'>
    <div class="event-date-and-location">
      <p>2023.8.27 Sun<br>at 奈良女子大学 Nara Women's University</p>
    </div>
  </div>
  <div class="character">
    <img src="/img/2023/mv-fumanara.png" alt='Icon Character FUMA Nara'>
  </div>
</div>


<img src="/img/2023/deco.svg" alt='Transition from Cover to Contents'>
<div id='colored_zone'>
  <h2 class="title-welcome">WELCOME TO</h2>
  <div></div>
  <div class='dojocon-image'>
    <img src="/img/2023/52554972726_b2da260763_o.jpg" alt='DojoCon Japan 2022 の様子（写真）'>
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
      <p>CoderDojo は2011年にアイルランドから始まり、現在は世界100カ国に2,000以上の道場があり、日本国内でも全国215以上の道場で毎年1,000回以上 (*1) 開催されています。CoderDojo はエンジニアやデザイナー、各地域の保護者や学生、研究者や経営者など（メンター）と子どもが出会える場にもなっています。</p>
      <div class='annotation'>
          *1 統計情報: <a href='https://coderdojo.jp/stats' target='_blank'>https://coderdojo.jp/stats</a>
      </div>
    </div>
  </div>
  <div class='coderdojo-logo'>
    <img src="/img/2023/coderdojo_logo.jpg" alt='CoderDojo の公式ロゴ画像'>
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
        <p class="about-text">{{ site.venue }} （<a href='{{ site.map }}' target='blank'>Google Maps</a> )</p>
        <div class='map'>
          <img src='/img/{{ site.year }}/top/map.png' alt='最寄駅から会場へのアクセス方法'>
        </div>
      </div>
      <div class="col-md-8 offset-md-2">
        <p class="about-title">参加費</p>
        <p class="about-text">{{ site.price }}</p>
          {% if site.registration %}
          <a class="nav-item nav-link active link_button" href="/registration/" style="padding-left:30px;padding-right: 30px;color:white;font-weight: normal;">参加申し込み</a>
          {% endif %}
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
    <section class="section-gray">
      <img src="/img/2023/deco.svg" alt='Transition from Contents to News'>
      <div class="section-contents">
        <h2 class="text-center title-text">NEWS</h2>
        <p class="caption text-center">お知らせ</p>
        <div class="row mx-2 mx-md-0">
          {% for post in site.posts limit:6 %}
            {% include articles.html %}
          {% endfor %}
        </div>
      </div>
      <a href="/news"
        class="nav-item nav-link active link_button mt-4"
        style="padding-left:30px;padding-right: 30px;color:white;font-weight: normal;"
        >
        もっと見る
      </a>
    </section>
  </div>

  <div id='countdown'></div>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h2 class="text-center title-text">Countdown <br class='ignore-pc'>DojoCon Japan</h2>
        <p class="text-center caption">DojoCon Japan {{ site.year }} の内容を紹介するライブ配信です。</p>
      </div>
      {% for cd in site.data.countdown %}
        <div class="col-md-4 p-3">
          <iframe width="100%" height="250" src="https://www.youtube-nocookie.com/embed/{{ cd.id}}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>{{ cd.title }}<br>{{ cd.date }} ONAIR</p>
        </div>
      {% endfor %}
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

<div id="sponsors_index">
  <h2 class="text-center title-text">SPONSORS</h2>

  {% if site.data.sponsor.platinum and site.data.sponsor.platinum.size != 0 %}
    <div class="sponsors-container">
      <h3 class="text-center caption">Platinum Sponsor</h3>
      <div class="sponsor-logo-container">
        <div id="platinum-sponsors">
        {% for sponsor in site.data.sponsor.platinum %}
          <a href="{{ sponsor.link }}" target="_blank">
            <img class="sponsor-logo" src="/img/{{ site.year }}/sponsor/{{ sponsor.logo }}" alt="{{ sponsor.name }}" />
          </a>
        {% endfor %}
        </div>
      </div>
    </div>
  {% endif %}

  {% if site.data.sponsor.gold and site.data.sponsor.gold.size != 0 %}
    <div class="sponsors-container">
      <h3 class="text-center caption">Gold Sponsor</h3>
      <div class="sponsor-logo-container">
        <div id="gold-sponsors">
        {% for sponsor in site.data.sponsor.gold %}
          <a href="{{ sponsor.link }}" target="_blank">
            <img class="sponsor-logo" src="/img/{{ site.year }}/sponsor/{{ sponsor.logo }}" alt="{{ sponsor.name }}" />
          </a>
        {% endfor %}
        </div>
      </div>
    </div>
  {% endif %}

  {% if site.data.sponsor.silver and site.data.sponsor.silver.size != 0 %}
    <div class="sponsors-container">
      <h3 class="text-center caption">Silver Sponsor</h3>
      <div class="sponsor-logo-container">
        <div id="silver-sponsors">
        {% for sponsor in site.data.sponsor.silver %}
          <a href="{{ sponsor.link }}" target="_blank">
            <img class="sponsor-logo" src="/img/{{ site.year }}/sponsor/{{ sponsor.logo }}" alt="{{ sponsor.name }}" />
          </a>
        {% endfor %}
        </div>
      </div>
    </div>
  {% endif %}

  {% if site.data.sponsor.bronze and site.data.sponsor.bronze.size != 0 %}
    <div class="sponsors-container">
      <h3 class="text-center caption">Bronze Sponsor</h3>
      <div class="sponsor-logo-container">
        <div id="bronze-sponsors">
        {% for sponsor in site.data.sponsor.bronze %}
          <a href="{{ sponsor.link }}" target="_blank">
            <img class="sponsor-logo" src="/img/{{ site.year }}/sponsor/{{ sponsor.logo }}" alt="{{ sponsor.name }}" />
          </a>
        {% endfor %}
        </div>
      </div>
    </div>
  {% endif %}

  {% if site.data.sponsor.in-kind and site.data.sponsor.in-kind.size != 0 %}
    <div class="sponsors-container">
      <h3 class="text-center caption">In-kind Sponsor</h3>
      <div class="sponsor-logo-container">
        <div id="in-kind-sponsors">
        {% for sponsor in site.data.sponsor.in-kind %}
          <div>
            <a href="{{ sponsor.link }}" target="_blank">
              <img class="sponsor-logo" src="/img/{{ site.year }}/sponsor/{{ sponsor.logo }}" alt="{{ sponsor.name }}" />
            </a>
            <p style="margin-top:0.5em; font-size:0.8em;">{{ sponsor.description }}</p>
          </div>
        {% endfor %}
        </div>
      </div>
    </div>
  {% endif %}

  {% if site.data.sponsor.individual and site.data.sponsor.individual.size != 0 %}
    <div class="sponsors-container">
      <h3 class="text-center caption">Individual Sponsor</h3>
      <div class="sponsor-logo-container">
        <div id="individual-sponsors">
        {% for sponsor in site.data.sponsor.individual %}
          <div class="individual-sponsor-name">
            {% if sponsor.link %}
            <a href="{{ sponsor.link }}" target="_blank">
            {% endif %}
              {{ sponsor.name }}
            {% if sponsor.link %}
            </a>
            {% endif %}
          </div>
        {% endfor %}
        </div>
      </div>
    </div>
  {% endif %}

</div>

  <section id="organizedBy" class="section-gray top-contents">
    <div class="section-contents">
      <h2 class="text-center title-text">Organized by</h2>
      <p class="text-center">DojoCon Japan {{ site.year }} 実行委員会</p>
      <p class="text-center"><a href="https://coderdojo.jp/" target="_blank" rel="noopener">一般社団法人 CoderDojo Japan</a></p>

      <div id='staff'>
        <h2 class="text-center title-text">STAFF</h2>
        <ul>
          {% for member in site.data.members %}
          <li class="member">
            {% if member.site %}
            <a href="{{ member.site }}" target="_blank" rel="nofollow"  rel="noopener">
            {% endif %}
            <div class="member-image">
              {% if member.img %}<img src="/img/{{ site.year }}/members/{{ member.img }}" alt="{{ member.name }}" loading="lazy">
              {% else %}<img src="/img/{{ site.year }}/members/staff-dummy.png" alt="{{ member.name }}" loading="lazy">
              {% endif %}
            </div>
            <p>{{ member.name }}</p>{% if member.site %}</a>{% endif %}
          </li>
          {% endfor %}
          <li class="member"></li>
          <li class="member"></li>
          <li class="member"></li>
          <li class="member"></li>
          <li class="member"></li>
        </ul>
      </div>

      <h2 class="text-center title-text">Supported by</h2>
      <p class="caption text-center">後援</p>
      <p class="text-center"><a href="https://coderdojo.com/" target="_blank" rel="noopener">CoderDojo Foundation</a></p>
    </div>
  </section>
