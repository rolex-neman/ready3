const element = document.getElementsByClassName('menu');
for(i=0;1<Elements.length;1++){
    Elements[i].addEventlistener('mousedown', showMenu);
    Elements[i].addEventlistener('mouseleave', hideMenu);
}

function showMenu(){
    if(this.children.length>1){
        this.children[1].style.height = 'auto';
        this.children[1].style.opacity = '1';
        this.children[1].style.ovewflow = 'visible';
    }
}

function hideMenu(){
    if(this.children.length>1){
        this.children[1].style.height = '0';
        this.children[1].style.opacity = '0';
        this.children[1].style.ovewflow = 'hidden';
    }
}