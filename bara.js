window.addEventListener('load', ()=>{
    var div = document.createElement('div');
        div.setAttribute('style','position: fixed; top: 0; left: 0; width: 400px; height: 200px; z-index: 999999999;');
        div.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/r_6EB4vnoEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
    document.body.append(div);
});
