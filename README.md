[![Test & Deploy](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/workflows/Test%20&%20Deploy/badge.svg)](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/actions?query=workflow%3A%22Test+%26+Deploy%22)

# DojoCon Japan 2023 公式サイト

本ページは DojoCon Japan 公式Webサイトの公開リポジトリです。   
本READMEでは、公式Webサイトの更新方法を目的別にまとめています。

<br>


## :white_check_mark: （共通）ブラウザで情報修正を提案できます

どこを更新するにせよ **Webブラウザが一番簡単** だと思います...!! 😆

1. 下記の『[更新方法](#memo-webサイトの更新方法)』を参考に、修正を提案したい YAML ファイルをクリックする
2. 画面右にある ✎ アイコン (Fork this project and edit this file) をクリックする
3. 気になる箇所を修正し、修正内容にタイトルと説明文を付け、Propose file change をクリックする
4. 修正内容を確認し、問題なければ Create pull request をクリックする

以上で完了です。提案された修正内容は運営チームによって再確認され、問題なければ提案された内容が反映されます。もし修正内容に不具合があっても運営側で気付いて修正するので、まずはお気軽に提案してみてください :wink:

<br>


## :memo: Webサイトの更新方法

[`_data`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/tree/main/_data) フォルダ内に `ファイル名.yml` という YAML ファイルがあり、このファイルを修正すると Session 情報や Member 情報などを更新できます。

なおそれぞれの YAML ファイルは次のような形式で書かれています。

```yml
# events.yml のデータ例

- title: ニンジャ大博覧会
  text: ニンジャ大博覧会は、CoderDojoに参加する子どもたち（ニンジャ）によるオンラインと現地の2箇所で開催する作品展示会です。プログラミング作品はもちろん、マインクラフト作品もOK。ぜひみんなの作品を見せてください、楽しみにまってます！
  img: /img/2023/event/ninja-big-expo.jpg
  time: オンライン＆現地
  tag: 要申し込み
  url: /expo/
```

追加・修正したい箇所に応じて、下記リンク先を[上記の修正手順](#white_check_mark-共通ブラウザで情報修正を提案できます)に沿って更新できます。

- [`events.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/_data/events.yml): イベント情報を更新したい
- [`members.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/_data/members.yml): スタッフ情報を更新したい
- [`sessions.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/_data/sessions.yml): セッション情報を更新したい
- [`sponsor/*.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/tree/main/_data/sponsor): スポンサー情報を更新したい
- [`workshops.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/_data/workshops.yml): ワークショップ情報を更新したい
- [`exhibition.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/_data/exhibition.yml): ニンジャ大博覧会の作品情報を更新したい

<br>


## :hammer_and_wrench: Webサイトを制作したい

ローカル環境でWebサイトを修正・確認したい場合は **以下のいずれかの方法** でローカルサーバーを立ち上げてください。

### A. Docker 上で構築する方法

```shell
# 下記コマンドでローカル環境にWebサーバーが立ち上がります
$ docker-compose up
```

無事にローカルサーバーが立ち上がったら、[http://localhost:4000/](http://localhost:4000/) にアクセスしてWebサイトを修正・確認します。

### B. Docker イメージをローカルで作成する方法

```shell
# Dockefile から dojocon-japan-2023 イメージを作成する
$ docker build -t dojocon-japan-2023 -f Dockerfile .

# 下記コマンドでローカル環境にWebサーバーが立ち上がります
$ docker-compose up
```

無事にローカルサーバーが立ち上がったら、[http://localhost:4000/](http://localhost:4000/) にアクセスしてWebサイトを修正・確認します。

### C. Ruby をインストールして構築する方法

エラーなどで困ったら [Rails Girls インストール・レシピ](https://railsgirls.jp/install)を見るのがオススメです。  
Ruby がインストールできれば十分で、 **Rails のインストールは不要** です。

```shell
# macOS の場合: Homebrew ( https://brew.sh/index_ja ) 経由がオススメ
$ brew install rbenv ruby-build

# Linux の場合: https://github.com/rbenv/rbenv#readme に沿って rbenv をインストール
$ sudo apt install rbenv   # Debian, Ubuntu 系のディストリビューションの場合

# Windows の場合: 以下の Rails Girls インストール・レシピに沿ってインストール
# https://railsgirls.jp/install 

# Ruby 3.2.x をインストール
$ rbenv install 3.2.0

# Ruby が入っていることを確認
$ ruby --version

# 必要なライブラリをインストール
$ bundle install

# ローカルサーバーを立ち上げる
$ bundle exec jekyll server
```

無事にローカルサーバーが立ち上がったら、[http://localhost:4000/](http://localhost:4000/) にアクセスしてWebサイトを修正・確認します。


<br>


### :robot: リンク切れはテストで検知できます

内部リンクのミスや `alt` 属性の記入忘れなどは次のコマンドでテストできます。([修正例を見る](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/pull/105))

```shell
# ローカルサーバーの立ち上げは不要です
$ bundle exec rake test
```

テスト内容の詳細は [`Rakefile`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/Rakefile) をご参照ください。

上記テストは [GitHub Actions](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/actions) 上でも動いています。GitHub Actionsで動かしているタスクは [`.github/workflows`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/tree/main/.github/workflows) ディレクトリから確認できます :eyes: :white_check_mark: 

<br>


## :octocat: 関連リポジトリ

- [coderdojo-japan/dojocon2023.coderdojo.jp](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp)
- :memo: 2022年は [WordPress で構築](https://dojocon2022.coderdojo.jp/)されているため GitHub リポジトリは無し
- [coderdojo-japan/dojocon2021.coderdojo.jp](https://github.com/coderdojo-japan/dojocon2021.coderdojo.jp)
- [coderdojo-japan/dojocon2020.coderdojo.jp](https://github.com/coderdojo-japan/dojocon2020.coderdojo.jp)
- [coderdojo-japan/dojocon2019.coderdojo.jp](https://github.com/coderdojo-japan/dojocon2019.coderdojo.jp)
- [coderdojo-japan/dojocon2018.coderdojo.jp](https://github.com/coderdojo-japan/dojocon2018.coderdojo.jp)
- [dojocon-japan/dojocon2017.coderdojo.jp](https://github.com/dojocon-japan/dojocon2017.coderdojo.jp)
- [dojocon-japan/dojocon2016.coderdojo.jp](https://github.com/dojocon-japan/dojocon2016.coderdojo.jp)

<br>

## ♻️ License

<details>
  <summary><strong>Check out each license</strong></summary>

This web application is developed with many other brilliant works!   
Check out the followings if you are interested in. :wink:

<h3>📝️ Texts, Logos, and Photos</h3>

The texts and images, such as descriptions and thumbnails, company logos and staff photos, are owned by its content holder. Contact its owner, like the maintainer of linked external website or social account, before using them. 🔐

<h3>💎 Libraries and Codes</h3>

The libraries like [RubyGems](https://rubygems.org/) used in this website have their own licenses. Say, this website uses [Jekyll](https://jekyllrb.com/), created by [The Jekyll Team](https://jekyllrb.com/team/) licensed under [The MIT License](https://github.com/jekyll/jekyll/blob/master/LICENSE). Thanks for their great works to make this website published! 💖

The source codes, such as HTML/CSS/JavaScript and Ruby codes not declared before, are published under [The MIT License](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/LICENSE.md). Feel free to refer, copy, or share them. And contact us if you find something unclear.

<hr>
         
<a href='https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/LICENSE.md'>The MIT License</a>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details>

<br>


## ☯️️ Copyright

DojoCon Japan 2023 実行委員会 & 一般社団法人 CoderDojo Japan
