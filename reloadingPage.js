function chaoticBehavior() {
    var condition = Math.floor(Math.random() * 30);
    
    if (condition < 10) {
        // Reload the page
        window.scrollTo(0,0);
    } 
    else if (condition > 20) {
        // Scroll up or down randomly
        window.scrollBy({
            top: 400,
            behavior: "smooth"
        });
    }
}

setInterval(chaoticBehavior, 100);
