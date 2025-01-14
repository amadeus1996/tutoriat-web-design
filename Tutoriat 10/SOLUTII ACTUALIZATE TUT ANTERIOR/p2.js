window.addEventListener("DOMContentLoaded", function() {
    const colors = ["yellow", "green", "blue", "red", "pink"];
    this.document.body.style.height = "1000px";

    this.document.addEventListener("keydown", function(event) {
        if (event.key >= "0" && event.key <= "9") {
            const square = document.createElement("div");
            square.style.height = "50px";
            square.style.width = "50px";
            square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            square.style.display = "inline-block";
            square.style.marginRight = "5px";
            square.textContent = event.key; 

            square.addEventListener("click", function(e) {
                e.stopPropagation();
                const squares = document.querySelectorAll("div");
                squares.forEach((elem) => {
                    if (elem.textContent === square.textContent)
                        elem.classList.add("click");
                });
            });

            document.body.appendChild(square);
        };
    });

    this.document.body.addEventListener("click", function() {
        const squares = document.querySelectorAll(".click");
        squares.forEach(square => {
            square.remove();            
        });
    });

    console.log(0 == false);
});


