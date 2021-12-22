var isNavBarHidden = false

function toogleNav() {
    isNavBarHidden = isNavBarHidden ? false : true
    document.getElementById("mySidebar").style.width = isNavBarHidden ? "250px" : "0";
    document.getElementById("main").style.marginLeft = isNavBarHidden ? "250px" : "0";
}

function setLoadTime() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart
}
