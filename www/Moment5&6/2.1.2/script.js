function init () {
    document.getElementById('parent').onclick = changeAllElements;
    var click = document.getElementsByTagName('p');
    for (var i = 0; i < click.length; i++) {
        click[i].onclick = style;
    }
}

function style (){
    this.style.backgroundColor = 'pink';
}

function changeAllElements() {
    var all = document.querySelectorAll ('#parent p');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = 'pink';
    }
    
}

window.onload = init;