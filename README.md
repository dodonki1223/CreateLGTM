# LGTM自動生成ツール

## 概要

LGTMする時、自分の好きな画像でLGTM用の文言をブックマークレットとGASを使用し自動生成してくれるツールです。   
Googleスプレッドシートに設定した画像からランダムでLGTM用の文言を自動生成しクリップボードにコピーします。
実行すると右下にクリップボードにコピーされた画像を表示してくれます。  

![sample_create_LGTM](/image/sample_create_LGTM.gif)

実行するとクリップボードに下記のようなものがコピーされますのでそのまま貼り付けて使用します。

```markdown
# LGTM

[プログラマが知るべき97のこと](https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/) - [学び続ける姿勢](https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/%E5%AD%A6%E3%81%B3%E7%B6%9A%E3%81%91%E3%82%8B%E5%A7%BF%E5%8B%A2)

![盾の勇者の成り上がり（ラフタリア）](https://66.media.tumblr.com/f03d632c1f0177d666258d4bfe8f9376/tumblr_pm94ffVtZU1th206io1_640.gif)
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

### Googleスプレッドシートに「プログラマが知るべき９７のこと」の設定

新規でシートを作成しシート名を `プログラマが知るべき97のこと` にします。  
下記のような感じでGoogleスプレッドシートを埋めます。

| ID  | TITLE                                                | URL                                                                                                                     |
|----:|:-----------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------:|
| 1   | 分別のある行動                                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B2))   |
| 2   | 関数型プログラミングを学ぶことの重要性               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B3))   |
| 3   | ユーザが何をするかを観察する-あなたはユーザではない  | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B4))   |
| 4   | コーディング規約を自動化する                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B5))   |
| 5   | 美はシンプルさに宿る                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B6))   |
| 6   | リファクタリングの際に注意すべきこと                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B7))   |
| 7   | 共有は慎重に                                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B8))   |
| 8   | ボーイスカウト-ルール                                | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B9))   |
| 9   | 他人よりまず自分を疑う                               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B10))  |
| 10  | ツールの選択は慎重に                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B11))  |
| 11  | ドメインの言葉を使ったコード                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B12))  |
| 12  | コードは設計である                                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B13))  |
| 13  | コードレイアウトの重要性                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B14))  |
| 14  | コードレビュー                                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B15))  |
| 15  | コードの論理的検証                                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B16))  |
| 16  | コメントについてのコメント                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B17))  |
| 17  | コードに書けないことのみをコメントにする             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B18))  |
| 18  | 学び続ける姿勢                                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B19))  |
| 19  | 誰にとっての「利便性」か                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B20))  |
| 20  | すばやくデプロイ-こまめにデプロイ                    | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B21))  |
| 21  | 技術的例外とビジネス例外を明確に区別する             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B22))  |
| 22  | 1万時間の訓練                                        | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B23))  |
| 23  | ドメイン特化言語                                     | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B24))  |
| 24  | 変更を恐れない                                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B25))  |
| 25  | 見られて恥ずかしいデータは使わないこと               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B26))  |
| 26  | 言語だけでなく文化も学ぶ                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B27))  |
| 27  | 死ぬはずのプログラムを無理に生かしておいてはいけない | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B28))  |
| 28  | 「魔法」に頼りすぎてはいけない                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B29))  |
| 29  | DRY原則                                              | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B30))  |
| 30  | そのコードに触れてはならない                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B31))  |
| 31  | 状態だけでなく-ふるまい-もカプセル化する             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B32))  |
| 32  | 浮動小数点数は実数ではない                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B33))  |
| 33  | オープンソースプロジェクトで夢を実現する             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B34))  |
| 34  | API設計の黄金律                                      | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B35))  |
| 35  | 超人の神話                                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B36))  |
| 36  | ハードワークは報われない                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B37))  |
| 37  | バグレポートの使い方                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B38))  |
| 38  | 余分なコードは決して書かない                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B39))  |
| 39  | 最初が肝心                                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B40))  |
| 40  | プロセス間通信とアプリケーションの応答時間の関係     | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B41))  |
| 41  | 無駄な警告を排除する                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B42))  |
| 42  | コマンドラインツールを使う                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B43))  |
| 43  | プログラミング言語は複数習得すべき                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B44))  |
| 44  | IDEを知る                                            | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B45))  |
| 45  | 限界を知る                                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B46))  |
| 46  | すべきことは常に明確に                               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B47))  |
| 47  | 大量のデータはデータベースで                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B48))  |
| 48  | いろいろな言葉を学ぶ                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B49))  |
| 49  | 見積りとは何か                                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B50))  |
| 50  | Hello,-Worldから始めよう                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B51))  |
| 51  | プロジェクト自身にしゃべらせる                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B52))  |
| 52  | その場しのぎ-が長生きしてしまう                      | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B53))  |
| 53  | 正しい使い方を簡単に-誤った使い方を困難に            | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B54))  |
| 54  | 見えないものを見えるように                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B55))  |
| 55  | 並行処理に有効なメッセージパッシング                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B56))  |
| 56  | 未来へのメッセージ                                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B57))  |
| 57  | ポリモーフィズムの利用機会を見逃さない               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B58))  |
| 58  | テスト担当者はプログラマの友人                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B59))  |
| 59  | バイナリは常に1つ                                    | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B60))  |
| 60  | 真実を語るはコードのみ                               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B61))  |
| 61  | ビルドをおろそかにしない                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B62))  |
| 62  | プリミティブ型よりドメイン固有の型を                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B63))  |
| 63  | ユーザの操作ミスを防止する                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B64))  |
| 64  | プロのプログラマとは                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B65))  |
| 65  | バージョン管理システムを有効に使う                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B66))  |
| 66  | いったんコンピュータから離れてみる                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B67))  |
| 67  | コードを読む                                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B68))  |
| 68  | 人間-を知る                                          | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B69))  |
| 69  | 車輪の再発明の効用                                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B70))  |
| 70  | シングルトンパターンの誘惑に負けない                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B71))  |
| 71  | パフォーマンスへの道は地雷コードで敷き詰められている | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B72))  |
| 72  | シンプルさは捨てることによって得られる               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B73))  |
| 73  | 単一責任原則                                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B74))  |
| 74  | イエス-から始める                                    | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B75))  |
| 75  | 面倒でも自動化できることは自動化する                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B76))  |
| 76  | コード分析ツールを利用する                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B77))  |
| 77  | 偶然の仕様ではなく本物の仕様のためのテストを書く     | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B78))  |
| 78  | テストは夜間と週末に                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B79))  |
| 79  | テストのないソフトウェア開発はあり得ない             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B80))  |
| 80  | 1人より2人                                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B81))  |
| 81  | エラーがエラーを相殺してしまう                       | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B82))  |
| 82  | 他者への思いやりを意識したコーディング               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B83))  |
| 83  | UNIXツールを友にする                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B84))  |
| 84  | 正しいアルゴリズムとデータ構造を選ぶ                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B85))  |
| 85  | 冗長なログは眠りを妨げる                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B86))  |
| 86  | WETなシステムはボトルネックが見つかりにくい          | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B87))  |
| 87  | プログラマとテスターが協力してできること             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B88))  |
| 88  | コードは生涯サポートするつもりで書く                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B89))  |
| 89  | 関数の-サイズ-を小さくする                           | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B90))  |
| 90  | コードを見る人のためにテストを書く                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B91))  |
| 91  | 良いプログラマになるには                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B92))  |
| 92  | 顧客の言葉はそのまま受け取らない                     | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B93))  |
| 93  | エラーを無視するな                                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B94))  |
| 94  | リンカは魔法のプログラムではない                     | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B95))  |
| 95  | ペアプログラミングと-フロー                          | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B96))  |
| 96  | テストは正確に-具体的に                              | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B97))  |
| 97  | ステートに注目する                                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B98))  |
| 98  | 命を吹き込む魔法                                     | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B99))  |
| 99  | ロールプレイングゲーム                               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B100)) |
| 100 | ルーチンワークをフローのきっかけに                   | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B101)) |
| 101 | プログラマが持つべき3つのスキル                      | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B102)) |
| 102 | 快適な環境を追求する                                 | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B103)) |
| 103 | 見知らぬ人ともうまくやるには                         | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B104)) |
| 104 | 不具合にテストを書いて立ち向かう                     | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B105)) |
| 105 | 育ちのよいコード                                     | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B106)) |
| 106 | Noといえることの大事さ                               | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B107)) |
| 107 | 名前重要                                             | =CONCATENATE("https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/",ENCODEURL(B108)) |
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

  window.execCopy = string => {
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

  window.displayCopyImg = (lgtmImgUrl, description) => {
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
    setTimeout(() => document.body.removeChild(displayElement), 3000);
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
