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