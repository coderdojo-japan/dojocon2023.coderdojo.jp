[![Test & Deploy](https://github.com/coderdojo-japan/dojocon2021.coderdojo.jp/workflows/Test%20&%20Deploy/badge.svg)](https://github.com/coderdojo-japan/dojocon2021.coderdojo.jp/actions?query=workflow%3A%22Test+%26+Deploy%22)

# DojoCon Japan 2021 公式サイト

本ページは DojoCon Japan 公式Webサイトの公開リポジトリです。   
本READMEでは、公式Webサイトの更新方法を目的別にまとめています。

<br>


## :white_check_mark: （共通）ブラウザで情報修正を提案できます

どこを更新するにせよ **Webブラウザが一番簡単** だと思います...!! 😆

1. 下記の『更新方法』を参考に、修正を提案したい yml ファイルをクリックする
2. 画面右にある ✎ アイコン (Fork this project and edit this file) をクリックする
3. 気になる箇所を修正し、修正内容にタイトルと説明文を付け、Propose file change をクリックする
4. 修正内容を確認し、問題なければ Create pull request をクリックする

以上で完了です。提案された修正内容は運営チームによって再確認され、問題なければ提案された内容が反映されます。もし修正内容に不具合があっても運営側で気付いて修正するので、まずはお気軽に提案してみてください :wink:

<br>


## :memo: Webサイトの更新方法

[`_data`](https://github.com/coderdojo-japan/dojocon2021.coderdojo.jp/tree/main/_data) 内に `ファイル名.yaml` という YAML ファイルがあり、この YAML ファイルで Session 情報や Speaker 情報を更新できます。

それぞれの YAML ファイルの冒頭に次のようなコメントがあるので、   
コメントを参考にして項目は以下のような内容です。

```yml
# - title: ワークショップタイトル（例: Dojo日本地図-日本全国のCoderDojoを探してみよう- ）
#   stime: 開始時間。例: 10:00
#   etime: 終了時間。例: 12:40
#   tag: スペース区切りタグ。例: 忍者向け
#   column: 列。0~2で指定。例:0
#   url: URL。例: /session/dojo_report
```

<br>


## :hammer_and_wrench: Webサイトの仕組みを改善したい

ローカル環境のブラウザで確認したい場合は、次の手順でローカルサーバーを立ち上げてください。

```shell
# Ruby が入っていることを確認
$ ruby --version

# 必要なライブラリをインストール
$ bundle install

# ローカルサーバーを立ち上げる
$ bundle exec jekyll server
```

無事にローカルサーバーが立ち上がったら [http://localhost:4000/](http://localhost:4000/) でアクセスできます。

<br>


### :robot: リンク切れはテストで検知できます

内部リンク (アンカー含む) や `alt` 属性の空欄などは次のコマンドでテストできます。

```shell
# ローカルサーバーの立ち上げは不要です
$ bundle exec rake test
```

テスト内容の詳細は [Rakefile](https://github.com/coderdojo-japan/dojocon2021.coderdojo.jp/blob/main/Rakefile) をご参照ください。

上記テストは [GitHub Actions](https://github.com/coderdojo-japan/dojocon2021.coderdojo.jp/actions) 上でも動いています。GitHub Actionsで動かしているタスクは [.github/workflows](https://github.com/coderdojo-japan/dojocon2021.coderdojo.jp/tree/main/.github/workflows) ディレクトリから確認できます :eyes: :white_check_mark: 

<br>


## :yin_yang: 関連リポジトリ

- :octocat: [coderdojo-japan/dojocon2020.coderdojo.jp](https://github.com/coderdojo-japan/dojocon2020.coderdojo.jp)
- :octocat: [coderdojo-japan/dojocon2019.coderdojo.jp](https://github.com/coderdojo-japan/dojocon2019.coderdojo.jp)
- :octocat: [coderdojo-japan/dojocon2018.coderdojo.jp](https://github.com/coderdojo-japan/dojocon2018.coderdojo.jp)

<br>


## :copyright: クレジット

Copyright &copy; DojoCon Japan 実行委員会
