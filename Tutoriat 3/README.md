# Tutoriat 3

## Table of contents
- [Scopul tutoriatului](#scopul-tutoriatului)
- [JavaScript](#javascript)
- [Exercitii](#exercitii)

## Scopul tutoriatului
Acest fisier este o tratare sumara a conceptelor care vor fi discutate si implementate la tutoriat, unde vom avea in vedere urmatoarele lucruri:

## JavaScript
In al doilea tutoriat, facusem o scurta introducere in JavaScript, mentionand niste concepte primare; puteti citi [aici](https://github.com/amadeus1996/tutoriat-web-design/tree/main/Tutoriat%202), la sectiunea <b>Introducere in JavaScript</b>.

___

### Array
* Array-urile din JavaScript vor fi familiare, deoarece sunt similare cu listele din Python:

        const t = [1, 2, "sir", [3, 4]]
        console.log(t.length) // 4
        t.push(0, 2, 4, 6) // adauga la final elementele 0, 2, 4, 6
        t.pop() // il sterge pe 6 (ultimul element)
        t.shift() // il sterge pe 1 (primul element)
        t.unshift(-1, -2) // adauga la inceput elementele -1, -2
        // t = [-1, -2, 2, "sir", [3, 4], 0, 2, 4]
        
        const nums = [4, 8, 0, 5]
        nums.sort() // nums devine [0, 4, 5, 8]
        nums.reverse() // nums devine [8, 5, 4, 0]
        
        const sir = "un sir de caractere"
        const aux_1 = sir.split(" ") // ["un", "sir", "de", "caractere"]
        const aux_2 = aux_1.join("-") // "un-sir-de-caractere"
        console.log(aux_2)
        
* Alte cateva utilitati - <b>map</b>, <b>forEach</b>, <b>filter</b>, <b>reduce</b>:

        // map() returneaza un array nou, nu il modifica pe cel initial
        const nums = [1, 2, 3, 4]
        const aux_1 = nums.map( (x) => (x ** 2) )
        console.log(...aux_1) // 1 4 9 16
    
        // forEach() aplica o functie pe elemente, nu returneaza nimic
        const aux = []
        nums.forEach( (x) => aux.push(x ** 3) )
        console.log(...aux) // 1 8 27 74
    
        // filter() returneaza un array nou, nu il modifica pe cel initial
        const cuvinte = ["un", "text", "mai", "scurt"]
        const aux_2 = cuvinte.filter( (cuv) => cuv.length <= 3 )
        console.log(aux_2.join(" ")) // un mai
    
        // reduce() "calculeaza valoarea" unui array
        // mai jos am implementat un fel de "product" pentru un array
        // returneaza o valoare de iesire, nu modifica array-ul initial
        const t = [-2, -1, 3, 4, -1]
        const aux_3 = t.reduce( (accumulator, x) => accumulator * x, 1 )
        console.log(aux_3) // -24
___

### Obiecte

Un <b>obiect</b> este o colectie de proprietati cu anumite valori. Un exemplu practic - daca vrem sa retinem date despre un numar complex, am avea nevoie de partea reala si cea imaginara; ar fi util sa putem initializa variabile de tip "Complex" si sa putem umbla la campuri, folosind o sintaxa in stilul "<b>Complex y</b>" si "<b>y.real = 2; y.imaginar = 3</b>". Alt exemplu - date despre o melodie: <b>titlu</b>, <b>album</b>, <b>durata</b>, etc. In acest caz, intervin obiectele, pentru a putea retine mai multe date intr-o variabila. Veti studia <b>programare orientata pe obiecte</b> mult mai in detaliu in semestrul 2.

Exista 3 moduri principale de a crea obiecte in JavaScript: folosind <b>constructorul</b>, <b>obiectul generic</b> si <b>obiectul literal</b>.

1. <b>Constructor</b>:

        class Complex {
            constructor(a = 0, b = 0) {
                this.real = a
                this.imaginar = b
            }
        }

        const x = new Complex
        const y = new Complex(1, 3)
        const z = new Complex(2)
        console.log(x.real, x.imaginar) // 0 0
        console.log(y.real, y.imaginar) // 1 3
        console.log(z.real, z.imaginar) // 2 0
    
2. <b>Obiect generic</b>:

        const magazin = new Object
        magazin.nume   = "Magazin"
        magazin.strada = "Strada ..."
        magazin.id     = 113
        console.log("Nume: " + magazin.nume + "\nStrada: " + magazin.strada + "\nID: " + magazin.id)
        // Nume: Magazin
        // Strada: Strada ...
        // ID: 113
        
3. <b>Obiect literal</b> (doar pe acesta l-am utilizat in proiectul meu):

        const elev = {
        nume: "Andrei",
        varsta: "18",
        note: [10, 9]
        }
        console.log(`Nume: ${elev.nume}\nVarsta: ${elev.varsta}\nNote: ${(elev.note)}`)
        // Nume: Andrei
        // Varsta: 18
        // Note: 10,9

    #### Atentie (2 observatii)!

        const x = new Complex(1, 1)
        const y = x
        console.log(x.real, x.imaginar) // 1 1
        console.log(y.real, y.imaginar) // 1 1
        x.real = -10 // modificam proprietatile unui const?
        y.imaginar = 52
        console.log(x.real, x.imaginar) // -10 52
        console.log(y.real, y.imaginar) // -10 52
        
Obiectele sunt <b>transmise prin referinta</b>: cand scriem <b>y = x</b>, NU se face un obiect nou pentru y identic cu x; ci il face pe y sa pointeze in memorie catre obiectul la care pointeaza x. Astfel, daca acel obiect din memorie isi modifica valorile, se vor modifica si x, si y. De asemenea, chiar daca l-am declarat pe y cu <b>const</b>, tot ne permitem sa modificam valorile proprietatilor. Am fi primit eroare in cazul in care am fi incercat sa il schimbam pe y de tot, de exemplu sa facem iar <b>y = x</b> (error - assignment to constant variable).


___

## Exercitii
1. Folosind sintaxa pentru obiectul literal, sa se creeze un nou obiect <b>album</b>, avand 3 campuri (initializate) ce descriu un album. Apoi, sa se afiseze (utilizand o structura repetitiva) campurile si valorile lor.
2. Folosind sintaxa pentru obiectul generic, sa se creeze un nou obiect <b>carte</b>, avand 4 campuri (initializate) adecvate. Apoi, sa se afiseze (utilizand o functie) campurile si valorile lor.
3. Sa se selecteze, la intamplare, un paragraf dintr-un document HTML si sa se afiseze in consola textul original, apoi cu majuscule.
4. Scrieti o functie care transmite un prompt, ce solicita un numar natural. In cazul in care inputul primit este corect, sa se afiseze cu un alert (folosind si o functie anonima) patratele perfecte intre 1 si numarul primit (inclusiv). Apelati functia.
5. Creati un document HTML care sa contina un <b>div</b> cu id-ul <b>imagini</b>. Dintr-un folder cu cateva imagini, selectati la intamplare 2 imagini <b>diferite</b>. Selectati div-ul si puneti imaginile in el (cu atributele <b>src</b> si <b>alt</b>). Specificati niste valori adecvate pentru cateva proprietati CSS: <b>width</b> si <b>border (color, size, style, radius)</b>. Ar trebui ca cele 2 imagini sa apara pe pagina.