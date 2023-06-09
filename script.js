function abrirMenu(){
    let menu = document.getElementById('nav-mobile')

    if( menu.style.display == "flex" ){
        console
        menu.style.display = "none"
        return
    }
    menu.style.display = "flex"
}