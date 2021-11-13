---
layout: default
---

<div class="top-contents">
  <div class="top">
    <div class="top-texts">
      <h1>DojoCon Japan <br>{{ site.year }}</h1>
      <h2 class="text-center">見渡す <br class='ignore-pc'>- the 10th anniversary -</h2>
      <h3 class="text-center">December 18th / ONLINE</h3>
    </div>
  </div>

  <div class="container-fruid">
    <div class="row bg-main p-5">
      <div id="about" class="col-md-6 offset-md-3">
        <div class="text-left text-white">
          <h2 class="title-text text-center text-white">DojoCon Japan {{ site.year }}</h2>
          <div class="mt-4">
            <h4 class="my-4 text-center">日本最大の CoderDojo の祭典</h4>
          </div>

          <div class="text">
            <p>DojoCon とは CoderDojo コミュニティが全国から集まる、年に１度のカンファレンスイベント (CoderDojo Conference) です。</p>
            <p>「DojoCon Japan」はこの日本版という位置づけで、2016年〜2017年は大阪、2018年は東京、2019年は名古屋で開催され、2020年は初のフルオンライン開催となりました。</p>
	    <p>2021年は通算6回目となり、昨年と同じくフルオンラインで開催します。</p>
          </div>

          <div class="text mt-4">
            <h3>CoderDojo とは</h3>
            <p>子ども達にプログラミングを学ぶ場を提供する、ボランティア主導の世界的な非営利活動です。</p>
            <p>CoderDojo は2011年にアイルランドから始まり、現在は世界112カ国に2,200以上の道場があり、日本国内でも全国234以上の道場で毎年1,200回以上 (*1) 開催されています。CoderDojo はエンジニアやデザイナー、各地域の保護者や学生、研究者や経営者など（メンター）と子どもが出会える場にもなっています。
              <br><small>*1 統計情報: <a href='https://coderdojo.jp/stats' class="text-white" target="_blank">https://coderdojo.jp/stats</a></small></p>
          </div>

          <div class="text mt-4">
            <h3>DojoCon Japan {{ site.year}} について</h3>
            <p>2021年はCoderDojoが10周年を迎え、DojoCon Japanも昨年の開催で通算5回目を数えました。とてもめでたいので皆で集まってお祝いしましょう。</p>
	    <p>長くCoderDojoを続けている方も、今年始めたばかりの方も、ちょっと休止中の方も、新しい道に進んだ方も、メンター・Ninjaにかかわらず、これまで各地で行ってきた取り組みを振り返り、オンラインでここに持ち寄ってください。</p>
	    <p>ここまでの長い道のりをCoderDojo10周年とともに振り返りながら、次の10年を一緒に見渡してみませんか。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container" style='margin-top: 50px; margin-bottom: 100px;'>
    <div class="row" id="outline">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center title-text">ABOUT</h2>
        <p class="caption">開催概要</p>
      </div>

      <div class="col-md-6 offset-md-3">
        <p class="about-title">開催日</p>
        <p class="about-text">{{ site.date_event }}</p>
      </div>

      <div class="col-md-6 offset-md-3">
        <p class="about-title">場所</p>
        <p class="about-text">{{ site.venue }}</p>
      </div>

      <div class="col-md-6 offset-md-3">
        <p class="about-title">参加費</p>
        <p class="about-text">{{ site.price }}</p>
      </div>

      <div class="col-md-6 offset-md-3">
        <p class="about-title">内容</p>
        <p class="about-text text-left">全国の CoderDojo 関係者によるセッション、交流会、懇親会など。</p>
	<!--
        <ul class="text-left list-style-none">
          <li><a href="/sessions" ><i class="fas fa-link"></i> セッションの詳細を見る</a></li>
          <li><a href="/events"   ><i class="fas fa-link"></i> イベント企画の詳細を見る</a></li>
          <li><a href="/workshops"><i class="fas fa-link"></i> ワークショップの詳細を見る</a></li>
        </ul>
	-->
      </div>
    </div>

    <!-- NOTE: 開催後の公開する
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 mb-5">
          <h2 class="text-center title-text">今年のDojoCon Japan は終了しました！！</h2>
          <h4 class="text-center title-text mt-0">当日のアーカイブはこちら！</h4>
          <a href="https://www.youtube.com/playlist?list=PL_XgRvFvKBPZOwlkFq89AzWYsyp8tMD4s"  class="button" target="_blank" rel="noopener">Youtubeプレイリストを開く</a>
        </div>
      </div>
    </div>
    -->
  </div>

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
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h2 class="text-center title-text">Countdown DojoCon Japan</h2>
        <p class="text-center caption">DojoCon Japan 2020の内容を紹介するライブ配信、毎週日曜日18:00-放送中</p>
      </div>

      <div class="col-md-4 p-3">
        <iframe width="100%" height="250" src="https://www.youtube-nocookie.com/embed/mO9mto4Rv4E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>セッションについて<br>2020.12.06 ONAIR</p>
      </div>

      <div class="col-md-4 p-3">
        <iframe width="100%" height="250" src="https://www.youtube-nocookie.com/embed/0KMBgvpy4i4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>ワークショップについて<br>2020.11.29 ONAIR</p>
      </div>

      <div class="col-md-4 p-3">
        <iframe width="100%" height="250" src="https://www.youtube-nocookie.com/embed/CYm6h8gxoYs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>コンテストについて<br>2020.11.22 ONAIR</p>
      </div>
    </div>
  </div>
  -->

</div>



<section id="contact" class="bg-main">
  <div class="section-contents">
    <h2 class="text-white">CONTACT</h2>
    <p class="caption text-white">気になる点などあればお気軽にご連絡ください。</p>
    <p class="caption text-white">{{ site.email }}</p>
    <!--<a href="mailto:{{ site.email }}" class="button" target="_blank" rel="noopener">メールを送る</a>-->
  </div>
</section>

<!--
<div class="container" id="sponsor">
  <div class="row">
    <div class="col-12">
      <h2>SPONSORED</h2>
    </div>
  </div>

  <div class="row">
    <div class="col-6 offset-3">
      <h3 class="title-sponsor">GOLD SPONSOR</h3>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <div class="text-center my-3">
        <a href="https://grow.google/intl/ALL_jp/program/future-gen/#?education_activeEl=education-computer-science&modal_active=none">
          <img src="img/sponsor/gold-google.png" class="w-100" alt="Google">
        </a>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-6 offset-3 mt-5">
      <h3 class="title-sponsor">SILVER SPONSOR</h3>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <a href="https://dotinstall.com/">
        <img src="img/sponsor/silver-dotinstall.png" class="w-100" alt="dotinstall">
      </a>  
    </div>
  </div>

  <div class="row">
    <div class="col-6 offset-3 mt-5">
      <h3 class="title-sponsor">BRONZE SPONSOR</h3>
    </div>
  </div>
  <div class="row mt-5">  
    <div class="col-md-3 col-6">
      <a href="https://afrel.co.jp/">
        <img src="img/sponsor/bronze-afrel.png" class="w-100" alt="Afrel">
      </a>
    </div>
    <div class="col-md-3 col-6">
      <a href="https://innovation-power.jp/">
        <img src="img/sponsor/bronze-inpw.png" class="w-100" alt="Innovation Power">
      </a>
    </div>
    <div class="col-md-3 col-6">
      <a href="https://www.a-tm.co.jp/">
        <img src="img/sponsor/bronze-ateam.png" class="w-100" alt="エイチーム">
      </a>
    </div>
    <div class="col-md-3 col-6">
      <a href="https://grips.co.jp/">
        <img src="img/sponsor/bronze-grips.png" class="w-100" alt="GRIPS">
      </a>
    </div>
    <div class="col-md-3 col-6">
      <a href="https://www.sailboat.co.jp/">
        <img src="img/sponsor/bronze-sailboat.png" class="w-100" alt="Sailboat">
      </a>
    </div>
    <div class="col-md-3 col-6">
      <a href="https://www.unique-inet.co.jp/">
        <img src="img/sponsor/bronze-unique-inet.png" class="w-100" alt="アイネット">
      </a>
    </div>
  </div>

  <div class="row">
    <div class="col-6 offset-3 mt-5">
      <h3 class="title-sponsor">INKIND SPONSOR</h3>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-md-3 col-6 offset-md-3">
      <a href="https://nulab.com/ja/">
        <img src="img/sponsor/inkind-nulab.png" class="w-100" alt="nulab">
        <p>backlog のご提供</p>
      </a>
    </div>

    <div class="col-md-3 col-6">
      <a href="https://yasslab.jp/ja/">
        <img src="img/sponsor/inkind-yasslab.png" class="w-100" alt="YassLab">
        <p>Doorkeeper スポンサーシップのご提供</p>
      </a>
    </div>
  </div>
</div>
-->

<!--
<div class="row">
  <div class="col-6 offset-3">
    <h3 class="title-sponsor">ワークショップ協力</h3>
  </div>
</div>

<div class="row mt-5">
  <div class="col-md-6 offset-md-3">
    <div class="text-center my-3">
      <a href="https://corporate.pokemon.co.jp/">
        <img src="img/post/ws-pokemon.png" class="w-100" alt="Pokémon">
      </a>
      <p class="text-center"><a href="https://corporate.pokemon.co.jp/">株式会社ポケモン</a></p>
    </div>
  </div>
</div>
-->

<section id="organizedBy" class="section-gray">
  <div class="section-contents">
    <h2>Organized by</h2>
    <!--<p class="caption">主催</p>-->
    <p class="text-center">DojoCon Japan {{ site.year }} 実行委員会</p>
    <p class="text-center"><a href="https://coderdojo.jp/" target="_blank" rel="noopener">一般社団法人 CoderDojo Japan</a></p>
    <!--
    <p class="caption">後援</p>
    <p class="text-center"><a href="https://coderdojo.com/" target="_blank" rel="noopener">CoderDojo Foundation</a></p>
    -->
  </div>
</section>