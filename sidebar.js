function markActivePage() {
    let pathname = document.location.pathname
    let sidebarButtons = document.getElementById("mySidebar").querySelectorAll("a")
    if (pathname === "/selfpage.html") {
        configureActiveElement(sidebarButtons[1])
    } else if (pathname === "/iOS.html") {
        configureActiveElement(sidebarButtons[2])
    } else if (pathname === "/todo.html") {
        configureActiveElement(sidebarButtons[3])
    } else if (pathname == "/gallery.html") {
        configureActiveElement(sidebarButtons[4])
    }
}

function configureActiveElement(element) {
    element.style.color = "black"
    element.style.borderLeft = "medium solid black"
}

markActivePage()