document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("lista");
    const checkbox = document.getElementById("stop-checkbox");
    let interval;

    function moveFirstToLast() {
        document.body.removeChild(list);
        const first = list.firstElementChild;
        if (first) {
            list.removeChild(first);
            list.appendChild(first);
        }
        document.body.appendChild(list);
    }
    
    function saveListOrder() {
        const items = [];
        list.querySelectorAll("li").forEach(item => {
            items.push(item.textContent);
        });
        localStorage.setItem("listOrder", JSON.stringify(items));
    }

    function restoreListOrder() {
        const order = localStorage.getItem("listOrder");
        if (order) {
            const items = JSON.parse(order);
            list.innerHTML = "";
            items.forEach(text => {
                const li = document.createElement("li");
                li.textContent = text;
                list.appendChild(li);
            });
        }
    };

    function moveElements() {
        interval = setInterval(() => {
            if (!checkbox.checked)
                moveFirstToLast();
        }, 3000);
    };

    saveListOrder();
    moveElements();

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            clearInterval(interval);
        } else {
            startMoving();
        }
    });

    restoreListOrder();
    startMoving();
});