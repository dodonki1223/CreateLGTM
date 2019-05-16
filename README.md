# LGTM自動生成ツール

## 概要

LGTMする時、自分の好きな画像でLGTM用の文言をブックマークレットとGASを使用し自動生成してくれるツールです。   
Googleスプレッドシートに設定した画像からランダムでLGTM用の文言を自動生成しクリップボードにコピーします。
実行すると右下にクリップボードにコピーされた画像を表示してくれます。  

![sample_create_LGTM](/image/sample_create_LGTM.gif)

実行するとクリップボードに下記のようなものがコピーされますのでそのまま貼り付けて使用します。

```markdown
# LGTM

![ポプテピピック（俺だ俺だ俺だ）](https://media2.giphy.com/media/EtFNtaj8sQKuA/giphy.gif?cid=e1bb72ff5c9057fd6276716c552fafa2)
```

## 使い方

### GoogleスプレッドシートにLGTMで使用する画像の設定

新規でGoogleスプレッドシートを作成します。
シート名は`LGTM`にしてください。
GoogleスプレッドシートにLGTMで使用したい画像のURLを設定します。

![sample_spreadsheet](/image/sample_spreadsheet.png)

下記のような感じでGoogleスプレッドシートを埋めます。
image列は別に設定しなくても良いです。必要なのはID〜description列までです。

| ID  |  URL             | description       | image       |
|:----|:----------------:|:-----------------:|:-----------:|
| 1   |  LGTM画像１のURL |  LGTM画像１の説明 | =IMAGE(B2)  |
| 2   |  LGTM画像２のURL |  LGTM画像２の説明 | =IMAGE(B3)  |
| 3   |  LGTM画像３のURL |  LGTM画像３の説明 | =IMAGE(B4)  |
| 4   |  LGTM画像４のURL |  LGTM画像４の説明 | =IMAGE(B5)  |

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

```JavaScript
javascript:(function(){
  const GAS_API_URL = 'https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec';

  let script = document.createElement('script');
  script.src = GAS_API_URL + '?callback=copyLgtm';
  document.body.appendChild(script);
  document.body.removeChild(script);

  window.copyLgtm = function(data) {
    let json = JSON.stringify(data);
    let jsonParse = JSON.parse(json);

    execCopy(jsonParse.data.lgtm);
    displayCopyImg(jsonParse.data.lgtm_url, jsonParse.data.description);
  };

  window.execCopy = function(string) {
    let copyElement = document.createElement('div');
    copyElement.style.cssText = 'position: fixed; right: 200%;';

    let pre = document.createElement('pre');
    pre.style.cssText = '-webkit-user-select: auto; user-select: auto;';

    copyElement.appendChild(pre).textContent = string;

    document.body.appendChild(copyElement);
    document.getSelection().selectAllChildren(copyElement);
    document.execCommand('copy');

    document.body.removeChild(copyElement);
  };

  window.displayCopyImg = function(lgtmImgUrl, description) {
    let displayElement = document.createElement('div');
    displayElement.style.cssText = 'position: fixed; bottom: 1%; right: 1%; z-index: 9999;';

    let p = document.createElement('p');
    p.textContent = description;
    p.style.cssText = 'position: absolute; top: 0; left: 0.5em; margin: 0; color :white; font-weight: bold;';
    displayElement.appendChild(p);

    let img = document.createElement('img');
    img.src = lgtmImgUrl;
    img.style.width = (window.parent.screen.width * 0.2) + 'px';
    displayElement.appendChild(img);

    document.body.appendChild(displayElement);

    setTimeout(function() {
      document.body.removeChild(displayElement);
    }, 3000);
  };
})();
```

### 特定の画像を指定する

URLパラメータにシート名やIDを指定することで特定の画像を指定してLGTMの文言を作成することができます。  

[https://github.com/dodonki1223/CreateLGTM/blob/bc64d09d7997d17117878362dfea4409336432d8/bookmarklet.js#L5](https://github.com/dodonki1223/CreateLGTM/blob/bc64d09d7997d17117878362dfea4409336432d8/bookmarklet.js#L5)の箇所にURLパラメータを追加することで特定の画像を指定することができます。

修正前

```JavaScript
  script.src = GAS_API_URL + '?callback=copyLgtm';
```

修正後

```JavaScript
  script.src = GAS_API_URL + '?callback=copyLgtm&sheet=interesting&id=2';
```

この場合ですと、`interesting`シートの`id`が２の画像でLGTMの文言を作成してくれます。
sheetの指定が無いと`LGTM`のシートが選択されます。また`id`の指定が無いとランダムに選択される仕様になっています。

## その他

githubだと下記のようなエラーが出て使用できません。
github以外でブックマークレットを使用して下さい。

```
VM154:1 Refused to load the script 'https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxx/exec?callback=copyLgtm' because it violates the following Content Security Policy directive: "script-src github.githubassets.com". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.
```

これはどうしたら良いのだろうか……🤔  
githubはブックマークレットを実行できないようだ
