---
layout: default
permalink: /news
---

<div class="container-fruid">
  <section class="section-gray">
    <div class="section-contents">
      <h2 class="text-center title-text">NEWS</h2>
      <p class="caption text-center">お知らせ</p>
      <div class="row mx-2 mx-md-0">
        {% for post in site.posts %}
        {% include articles.html %}
        {% endfor %}
      </div>
    </div>
    <div class="mt-4">
      {% include back-to-top.html %}
    </div>
  </section>
</div>