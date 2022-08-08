const panels = document.querySelectorAll(".panel");

function closeAllPanel() {
    for(let i = 0 ; i < panels.length; i++){
        panels[i].classList.remove("open");
    }
}

function toggleOpen() {
    // if current panel is open, we will close it when clicked
    if(this.classList.contains("open")){
        this.classList.toggle("open");
        return;
    }
    // close all Panels first to open the current Panel
    closeAllPanel();
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));