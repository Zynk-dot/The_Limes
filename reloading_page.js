var condition = Math.floor(Math.random() * 30);
while (true){
    if (condition < 10){
        // reload
        location.reload();
    }
    else if (condition > 20){
        // Scroll up or popup
        window.scrollBy(0, 100);
    }
}