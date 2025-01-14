window.addEventListener("DOMContentLoaded", function() {
    const checkbox = this.document.querySelector("input");
    const lista = this.document.getElementById("lista");
    let interval;

    let listaDinStorage = this.localStorage.getItem("ordineaListei");
    if (listaDinStorage) {
        this.document.body.removeChild(lista);  
        listaDinStorage = JSON.parse(listaDinStorage);
        console.log(listaDinStorage);
        const lista2 = this.document.createElement("ul");
        for (let i = 0; i < 10; ++i) {
            const elemLista2 = this.document.createElement("li");
            elemLista2.textContent = listaDinStorage[i];
            lista2.appendChild(elemLista2);
        };
        this.document.body.appendChild(lista2);
        interval = miscaLista(lista2);
    }
    else {
        interval = miscaLista(lista);
    }
    
    function miscaLista(t) {
        let interval = setInterval(function() {
            const primulElem = t.firstElementChild;
             if (primulElem) {
                t.removeChild(t.firstElementChild);
                t.appendChild(primulElem);
            };
        }, 2000);
        return interval;
    }

    checkbox.addEventListener("change", function() {
        clearInterval(interval);
        if (checkbox.checked) {
            const elementeLista = document.querySelectorAll("li");
            const elemente = [];
            elementeLista.forEach(elem => {
                elemente.push(elem.textContent);
            });
            // console.log(elemente);
            localStorage.setItem("ordineaListei", JSON.stringify(elemente));
        };
    });


});