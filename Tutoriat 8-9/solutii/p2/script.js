window.addEventListener("DOMContentLoaded", function() {
    const colors = ["blue", "purple", "green", "red", "orange"];
    this.document.addEventListener("keydown", function(event) {
        if (event.key >= "0" && event.key <= "9") {
            const square = document.createElement("div");
            square.style.width = "50px";
            square.style.height = "50px";
            square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            square.textContent = event.key;
            document.body.appendChild(square);

            square.addEventListener("click", function(e) {
                e.stopPropagation();
                const allDivs = document.querySelectorAll("div");
                allDivs.forEach(d => {
                    if (d.textContent === square.textContent)
                        d.classList.add("click");
                });
            });
        };
    });

    this.document.body.addEventListener("click", function() {
        const clickedDivs = document.querySelectorAll(".click");
        clickedDivs.forEach(div => div.remove())
    });
});