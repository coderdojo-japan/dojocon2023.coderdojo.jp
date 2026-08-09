[![Test & Deploy](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/workflows/Test%20&%20Deploy/badge.svg)](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/actions?query=workflow%3A%22Test+%26+Deploy%22)

# DojoCon Japan 2023 公式サイト

本ページは DojoCon Japan 公式Webサイトの公開リポジトリです。   
本READMEでは、公式Webサイトの更新方法を目的別にまとめています。

本サイトは [Astro](https://astro.build/) で構築された静的サイトです。

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

[`src/data`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/tree/main/src/data) フォルダ内に `ファイル名.yml` という YAML ファイルがあり、このファイルを修正すると Session 情報や Member 情報などを更新できます。

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

- [`events.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/src/data/events.yml): イベント情報を更新したい
- [`members.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/src/data/members.yml): スタッフ情報を更新したい
- [`sessions.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/src/data/sessions.yml): セッション情報を更新したい
- [`sponsors.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/src/data/sponsors.yml): スポンサー情報を更新したい
- [`workshops.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/src/data/workshops.yml): ワークショップ情報を更新したい
- [`projects.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/src/data/projects.yml): ニンジャ大博覧会の作品情報を更新したい
- [`countdown.yml`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/src/data/countdown.yml): カウントダウン配信の情報を更新したい

YAML の書式に誤りがあると、ビルド時にどの項目が問題なのかがエラーとして表示されます。項目の定義は [`src/content.config.ts`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/src/content.config.ts) にまとまっています。

### お知らせ記事を追加したい

[`src/content/posts`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/tree/main/src/content/posts) に Markdown ファイルを追加します。ファイル先頭の設定は次のとおりです。

```yml
---
title: 記事のタイトル
date: 2023-08-27T10:00:00+09:00
category: news              # news / event / session のいずれか
thumbnail: /img/2023/post/example.jpg   # 一覧のサムネイル兼 OGP 画像（任意）
permalink: /posts/example/  # 公開される URL
---
```

行動規範やプライバシーポリシーなどの固定文書は [`src/content/docs`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/tree/main/src/content/docs) にあります。

<br>


## :hammer_and_wrench: Webサイトを制作したい

[Node.js](https://nodejs.org/) 22.12 以上が必要です。

```shell
# 必要なライブラリをインストール
$ npm ci

# ローカルサーバーを立ち上げる
$ npm run dev
```

無事にローカルサーバーが立ち上がったら、[http://localhost:4321/](http://localhost:4321/) にアクセスしてWebサイトを修正・確認します。

本番と同じ静的ファイルを生成して確認したい場合は次のコマンドを使います。

```shell
# dist/ に静的ファイルを書き出す
$ npm run build

# 書き出した内容をローカルで表示する
$ npm run preview
```

### ディレクトリ構成

```
src/
├── assets/images/ # 最適化される画像（<Image /> 経由で読み込む）
├── components/   # ヘッダー・フッター・カードなどの部品
├── content/      # 記事（posts）と固定文書（docs）の Markdown
├── data/         # YAML で管理する参照データ
├── layouts/      # ページの骨格
├── pages/        # ここのファイル構成がそのまま URL になる
├── styles/       # デザイントークンとグローバル CSS
├── utils/        # 日付整形や画像解決などの補助関数
└── consts.ts     # サイト名・URL・ナビゲーションなどの共通設定
public/           # そのまま配信されるファイル（favicon, OGP画像, PDF など）
```

<br>


### :robot: リンク切れはテストで検知できます

内部リンクのミスや型の誤りは次のコマンドでテストできます。

```shell
# 型チェック → ビルド → 内部リンク検査 をまとめて実行
$ npm test

# 個別に実行したい場合
$ npm run check       # 型チェック
$ npm run test:links  # 内部リンクの検査（要 npm run build）
```

外部リンクも含めて検査したい場合は `npm run test:links:external` を使います（実行に時間がかかり、外部サイト側の事情で失敗することもあります）。

上記テストは [GitHub Actions](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/actions) 上でも動いています。GitHub Actionsで動かしているタスクは [`.github/workflows`](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/tree/main/.github/workflows) ディレクトリから確認できます :eyes: :white_check_mark:

### :rocket: デプロイ

`main` ブランチへの push をトリガーに GitHub Actions がビルドし、GitHub Pages へ公開します。リポジトリの **Settings > Pages > Source** は `GitHub Actions` に設定しておく必要があります。

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

<h3>🎨 Icons</h3>

The icons in this website are from [Font Awesome Free](https://fontawesome.com/), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). They are inlined as SVG at build time.

<h3>📦 Libraries and Codes</h3>

The libraries like [npm packages](https://www.npmjs.com/) used in this website have their own licenses. Say, this website is built with [Astro](https://astro.build/), created by [The Astro Technology Company and contributors](https://github.com/withastro/astro/graphs/contributors), licensed under [The MIT License](https://github.com/withastro/astro/blob/main/LICENSE). Thanks for their great works to make this website published! 💖

The source codes, such as HTML/CSS/JavaScript and TypeScript codes not declared before, are published under [The MIT License](https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/LICENSE.md). Feel free to refer, copy, or share them. And contact us if you find something unclear.

<hr>

<a href='https://github.com/coderdojo-japan/dojocon2023.coderdojo.jp/blob/main/LICENSE.md'>The MIT License</a>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details>

<br>


## ☯️️ Copyright

DojoCon Japan 2023 実行委員会 & 一般社団法人 CoderDojo Japan ([@coderdojo-japan](https://github.com/coderdojo-japan)).
