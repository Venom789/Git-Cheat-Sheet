const navbar = document.getElementById('navbar');


navbar.addEventListener('click',(e)=>{
    e.target.classList.add('active');
    
    let allChildren = navbar.children;
    for(let i=0;i<allChildren.length;i++){
        if(allChildren[i]!=e.target)
        allChildren[i].classList.remove('active');
    }

},false);