/**
 * GETリクエストが送られた時、Webアプリにアクセスした時に実行される関数
 * URLパラメータにcallbackが指定されている時は「JSONP」を返し、それ以
 * 外は「JSON」を返す
 * @param {JSON} [e] - リクエストの詳細データ
 * @return {JSON} JSON、JSONPを返す
 */
function doGet(e) {
  // シート情報を取得する
  var targetSheet = (!e.parameter.sheet) ? 'LGTM' : e.parameter.sheet;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheet);
  
  // 対象行の取得
  // idの指定がある時はidから取得する（idの時は+1する）
  var targetRow = (!e.parameter.id) ? createRandomValue(sheet.getLastRow()) : (parseInt(e.parameter.id, 10) + 1);

  // LGTM画像のURL、説明情報を取得する
  var lgtmImageUrl = sheet.getRange("B" + targetRow).getValue(),
      description = sheet.getRange("C" + targetRow).getValue();
      
  // プログラマが知るべき９９のコトの情報を取得する
  var thankYouWord = buildThankYouWord();
  
  // レスポンス用のデータを作成する
  var response = {
    data: { lgtm_url: lgtmImageUrl,
            lgtm: createLgtm(lgtmImageUrl, description, thankYouWord),
            description: description},
    meta: { status: 'success' }
  };
  
  // JSONP、JSONを返す
  var callback = e.parameter.callback;
  if (!callback) {
    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
  } else {
    return ContentService.createTextOutput(callback+'('+ JSON.stringify(response)+')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
}

/**
 * ランダム値を作成する
 * １行目はヘッダーのため、２行目から最終行までのランダムの値を作成し返す
 * @param {Integer} [lastRow] - 最終行
 * @return {Integer} ２行目から最終行までのランダム値
 */
function createRandomValue(lastRow) {
  // 1行目はヘッダー行のため2行目から開始する
  var min = 2,
      max = lastRow;
  
  // randomの値を作成
  var randomValue = Math.floor(Math.random() * (max + 1 - min)) + min;
  Logger.log(randomValue);
  
  return randomValue;
}

/**
 * MarkDown用のLGTM文字列を作成する
 * 見出しとLGTM画像の表示のみの文章を作成し返す
 * @param {String} [imageUrl] - LGTM画像のURL
 * @param {String} [description] - 画像の説明
 * @param {String} [thankYouWord] - プログラマが知るべき９９のコト情報
 * @return {String} LGTM用のマークダウン文字列
 */
function createLgtm(imageUrl, description, thankYouWord) {
  return '# LGTM' + '\n' +
         '' + '\n' + 
         '[プログラマが知るべき97のこと](' + 'https://xn--97-273ae6a4irb6e2hsoiozc2g4b8082p.com/' + ') - ' + thankYouWord +
         '\n' + '\n' +
         '![' + description + '](' + imageUrl + ')';
}

/**
 * プログラマが知るべき97のことをランダムで生成する
 * MarkDown用のURLを生成して返す
 * @return {String} URLのマークダウン文字列
 */
function buildThankYouWord() {  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('プログラマが知るべき97のこと');
  var targetRow = createRandomValue(sheet.getLastRow());
  var url         = sheet.getRange("C" + targetRow).getValue();
  var description = sheet.getRange("B" + targetRow).getValue();
  
  return "[" + description + "](" + url + ")";
}

/**
 * デバッグ用メソッド
 * 動作が正しいか確認するようのデバッグメソッド
 * ログを確認し正しい価を取得できているか確認できます
 */
function debug() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LGTM'),
      lastRow = sheet.getLastRow(),
      randomValue = createRandomValue(lastRow);
  Logger.log('最終行：' + lastRow);

  var lgtmImageUrl = sheet.getRange("B" + randomValue).getValue(),
      description  = sheet.getRange("C" + randomValue).getValue();
  
  var response = {
    data: { lgtm_url: lgtmImageUrl,
            lgtm: createLgtm(lgtmImageUrl),
            description: description},
    meta: { status: 'success' }
  };
  Logger.log('レスポンス（LGTM_URL）：' + response.data.lgtm_url);
  Logger.log('レスポンス（LGTM）：' + response.data.lgtm);
  Logger.log('レスポンス（説明）：' + response.data.description);
}
