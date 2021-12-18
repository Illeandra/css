window.addEventListener('load', ()=>{
    var div = document.createElement('div');
        div.className = 'position-sticky';
        div.style.left = '0';
        div.style.top = '0';
        div.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/r_6EB4vnoEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
    document.body.append(div);
});