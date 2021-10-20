const rnt = '<div class="marquee__inner"><p class="marquee__line">HALAMAN INI TELAH DI MODIFIKASI, JANGAN RISAU KARENA SAYA TIDAK AKAN MELAKUKAN LEBIH DARI INI !!</p><p class="marquee__line">HALAMAN INI TELAH DI MODIFIKASI, JANGAN RISAU KARENA SAYA TIDAK AKAN MELAKUKAN LEBIH DARI INI !!</p></div>';
var stArr = [
    '.marquee {position: fixed; top: 0; left: 0; overflow: hidden; z-index: 99999999999; padding-right: 10px; font-family: "Pridi", sans-serif;font-weight: 600;font-size: 25px;text-transform: uppercase;background-color: #FF0000;}',
    '.marquee__inner {display: flex;}',
    '.marquee__line {flex-shrink: 0;margin: 0;padding: 10px 15px;min-width: 100%;white-space: nowrap;animation-name: marqueeLine;animation-duration: 5s;animation-timing-function: ease-in-out;animation-iteration-count: infinite;}',
    '@keyframes marqueeLine {from {transform: translateX(0);}to {transform: translateX(-100%);}}',
    '.ajyfly-ct{ z-index: 999999999; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; border: 1px solid #b8daff; text-align: center; color: #004085; font-weight: 800; background: #9ECEFF; padding: 8px; border-radius: 0.3em; }'
];
var soundId = [
   '1cCMovMZ1-EwrPj-S39KAhOfqSLaoyKLX',
   '1EkL39ZdQRkI1MWsAWOiCMqvIRyKWfo9f',
   '1DMq7uL174hXTeY3NI7_WdCyKnrv9Lt6t',
   '1mARMJa1ac5bmHEDk-jgwuukmUHNB45ve',
   '1KD9215VNWh0vuqKzNOgLBsVsAhzKCNK0',
   '1aQK2QanI0syBqdkHWQk4YZOwPNLrBO6r'
];

 var soundUrl = [];
 for(i = 0; i < soundId.length; i++){
   soundUrl.push("https://docs.google.com/uc?export=download&id=" + soundId[i]);
 }
var randSoundUrl = soundUrl[Math.floor(Math.random() * soundUrl.length)];
var aud = document.createElement('audio');
    aud.controls = false;
var sourc = document.createElement('source');
    sourc.src = randSoundUrl;
    aud.append(sourc);
 
var headElement = document.querySelectorAll('head');
var cssS = document.createElement('style');
    cssS.setAttribute('type', 'text/css');
var marquee = document.createElement('div');
    marquee.className = "marquee";
    marquee.innerHTML = rnt;

for(i = 0; i < stArr.length; i++){
   cssS.append(stArr[i]);
}
   
setTimeout(()=>{
   headElement[0].append(cssS);
   document.body.prepend(marquee, aud);
   Alert('USE HEADPHONE FOR BETTER EXPERIENCE !');
},500);

aud.onloadeddata = ()=>{
   setInterval(()=>{ aud.play(); }, 200);
};

function Alert(prop){
 var al = document.createElement('div');
     al.className = "ajyfly-ct";
     al.innerHTML = prop;
     document.body.prepend(al);
 setTimeout(()=>{ al.remove(); }, 5000);
}
