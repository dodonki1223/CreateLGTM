# LGTM自動生成

## 概要

LGTMする時、自分の好きな画像でLGTM用の文言を自動生成してくれるツールです。  
Googleスプレッドシートに設定した画像からランダムでLGTM用の文言を自動生成しクリップボードにコピーします。

![sample_create_LGTM](/image/sample_create_LGTM.gif)

実行するとクリップボードに下記のようなものがコピーされます。

```markdown
# LGTM

![LGTM](https://media2.giphy.com/media/EtFNtaj8sQKuA/giphy.gif?cid=e1bb72ff5c9057fd6276716c552fafa2)
```

## 使い方

### GoogleスプレッドシートにLGTMで使用する画像の設定

新規でGoogleスプレッドシートを作成します。
GoogleスプレッドシートにLGTMで使用したい画像のURLを設定します。

![sample_spreadsheet](/image/sample_spreadsheet.png)

下記のような感じでGoogleスプレッドシートを埋めます。

| ID  |  URL             | description       |
|:----|:----------------:|:-----------------:|
| 1   |  LGTM画像１のURL |  LGTM画像１の説明 |
| 2   |  LGTM画像２のURL |  LGTM画像２の説明 |
| 3   |  LGTM画像３のURL |  LGTM画像３の説明 |
| 4   |  LGTM画像４のURL |  LGTM画像４の説明 |

### Googleスプレッドシートの内容をJSONで取得できるようにする

Googleスプレッドシートからスクリプトエディタを開きます。

![sample_spreadsheet](/image/sample_script_editor.png)

スクリプトエディタに下記のソースをコピーし貼り付け保存します。
[https://github.com/dodonki1223/CreateLGTM/blob/master/LGTM.gs](https://github.com/dodonki1223/CreateLGTM/blob/master/LGTM.gs)

![sample_paste_source](/image/sample_paste_source.png)

Webアプリケーションとして公開する

![sample_release](/image/sample_release.png)

![sample_release_setting](/image/sample_release_setting.png)

`現在のウェブアプリケーションのURL`に表示されているURLをコピーしてブラウザで叩くと下記のようにJSONを取得できていれば大丈夫です。

![sample_get_json](/image/sample_get_json.png)

### 自動生成用のブックマークレットを作成する

[https://github.com/dodonki1223/CreateLGTM/blob/master/bookmarklet.js](https://github.com/dodonki1223/CreateLGTM/blob/master/bookmarklet.js)のソースをコピーし[２行目](https://github.com/dodonki1223/CreateLGTM/blob/2a6c9c8718ab620ac78bc34884947dbe92b7bf62/bookmarklet.js#L2)のURLの部分を先程コピーした`現在のウェブアプリケーションのURL`に書き換えたのちブックマークレットとして保存すれば設定完了です。

## その他

githubだと下記のようなエラーが出て使用できません。
github以外でブックマークレットを使用して下さい。

```
VM154:1 Refused to load the script 'https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxx/exec?callback=copyLgtm' because it violates the following Content Security Policy directive: "script-src github.githubassets.com". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.
```
