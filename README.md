 a-blog cms Training Camp 2021 Autumn
 # API機能を使って、画面遷移なしで、エントリーのフィルタリングをしよう

 このリポジトリは2021年9月11日(土)開催のa-blog cms Training Camp 2021 Autumnのカスタマイズ講座「API機能を使って、画面遷移なしで、エントリーのフィルタリングをしよう」で使用されるサンプルコードです。

 ## 使用方法
このリポジトリをダウンロードします。
```sh
git clone
```

ダウンロードしたリポジトリで作業する前に a-blog cms でAPI機能を使用する事前準備として以下の6点の作業をご自分の a-blog cms の環境で行います。

1. assetディレクトリ内にある `field-hero.html` でエントリーのカスタムフィールドを作成する
2. assetディレクトリ内にある `heroes_info.csv`をcsvインポートの機能を用いてインポートする
3. コンフィグ > 一般設定 > API設定からAPI機能を有効にする
4. Allow-Origin に `localhost:8080` を追加して保存する
7. summary_hero_index というIDで Entry_Summary のモジュールIDを作成する。その際、URLコンテキストのフィールドとページにはチェックを付ける
6. `src/common.js` のHTTPリクエストを送信するURIを書き換える



必要なnpmモジュールのインストールを行います
```sh
npm ci
```

`.env` ファイルを作成します。
```sh
touch .env
```

`.env` ファイルに API-KEY を設定します。（API-KEY は a-blog cms 管理画面のコンフィグ > 一般設定 > API設定から確認できます。）
```env
API_KEY = 'ここにAPI-KEYを記載してください'
```

1度ビルドを行います。
```sh
npm run build
```

webpack-dev-serverによるwebサーバーの起動
```sh
npm start
```

http://localhost:8080 でブラウザが起動します。

![API機能のdemoがブラウザ上で動作している画像](/screenshots/api-demo.png)

画像のようなデモが表示されていたら準備完了です。

それではカスタマイズをお楽しみください。