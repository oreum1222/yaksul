/* 방문 분석: 구글 애널리틱스([오름] 약술형 논술 허브). 실제 사이트 주소에서만 켜진다. */
(function () {
  var GA_ID = 'G-CD2R2YSD4R';
  var NAVER_ID = '';  // 네이버 애널리틱스 사이트 ID (발급 후 채우기)
  var HOSTS = ["oreumyak.com", "www.oreumyak.com"];
  if (HOSTS.indexOf(location.hostname) < 0) return;
  function load(src, onload) {
    var s = document.createElement('script'); s.async = true; s.src = src;
    if (onload) s.onload = onload; document.head.appendChild(s);
  }
  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date()); window.gtag('config', GA_ID);
    load('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID));
  }
  if (NAVER_ID) {
    load('https://wcs.naver.net/wcslog.js', function () {
      window.wcs_add = window.wcs_add || {}; window.wcs_add.wa = NAVER_ID; if (window.wcs) window.wcs_do();
    });
  }
})();
