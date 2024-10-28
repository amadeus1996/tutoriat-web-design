# Tutoriat 1

## Table of contents
- [Scopul tutoriatului](#scopul-tutoriatului)
- [Design responsiv in CSS](#design-responsiv-in-css)
- [Introducere in JavaScript](#introducere-in-javascript)
- [Exercitii](#exercitii)

## Scopul tutoriatului
Acest fisier este o tratare sumara a conceptelor care vor fi discutate si implementate la tutoriat, unde vom avea in vedere urmatoarele lucruri:
1. Intelegerea elementelor de baza pentru lucrul cu design responsiv in CSS.
2. Introducere in limbajul JavaScript, prezentarea unor notiuni primare.
3. Rezolvarea unor exercitii practice, necesare pentru proiect si examen, utilizand JavaScript.
4. Un exercitiu final de antrenament pentru consolidarea cunostintelor, ce include reproducerea unor designuri si concepte utile pentru proiect.

## Design responsiv in CSS

Sunt foarte multe proprietati CSS pentru animatii, tranzitii, responsivitatea unui website, etc. Cateva exemple ar fi <b>translate</b>, <b>rotate</b>, <b>skew</b>, <b>matrix</b>, <b>scale</b>, <b>translateZ</b>, <b>perspective</b>, <b>transition-delay</b>, <b>animation-iteration-count</b> si altele.

Este important de tinut minte faptul ca aceste proprietati sunt in numar foarte mare; ar fi elucubrant sa le listez pe toate si sa le explic pe fiecare in parte, cu toate detaliile, functionalitatile lor, exemple practice, etc. Nu acesta este scopul tutoriatului (nici eu nu le stiu pe toate, ci doar cateva pe care le-am mai folosit). In schimb, voi prezenta cateva proprietati mai practice, dar mai ales <b>cum</b> puteti sa invatati eficient si cum sa treceti prin explicatiile de pe net; performantele la web design provin din <b>adaptabilitate si abilitatea de a cauta</b>.

La examen vor fi cerinte legate de responsivitate in numar limitat, si ar trebui sa aveti voie cu documentatie. De asta nu recomand memorarea tuturor proprietatilor si functionalitatilor (mai ales daca nu mergeti pe o cariera bazata pe web design).

La finalul tutoriatului, vom rezolva ultimul exercitiu (rezolvarea o gasiti si aici, pe GitHub) utilizand o animatie cu <b>@keyframes</b>, niste <b>tranzitii</b>, un <b>gradient</b> si un <b>media query</b>. Am inclus si un exemplu de dropdown menu (asta fiind una din cerintele proiectului). Nu este un exemplu impopotonat cu toate proprietatile posibile, dar este corespunzator cerintelor pentru proiect, e adecvat pentru niste cultura generala si este o introducere compacta in responsivitate.

## Introducere in JavaScript

JavaScript este un limbaj care poate interactiona cu documentul HTML (prin intermediul DOM-ului = Document Object Model). Acesta poate fi inclus direct in document folosind tagul <b>script</b>, sau printr-un fisier extern (de recomandat).

Tipurile de data seamana cu cele din alte limbaje: number, string, boolean, <b>null</b>, <b>undefined</b>, Array, Date, Set, obiecte, etc. Totusi, nu este necesara precizarea tipului de date: se realizeaza automat identificarea acestuia.

Variabilele pot fi declarate explicit utilizand cuvintele cheie <b>let</b>, <b>var</b> si <b>const</b>. Exista diverse diferente subtile intre tipurile <b>let</b> si <b>var</b>, dar regula de baza este de a utiliza mereu <b>const</b> si, in cazurile in care o variabila isi schimba valoarea, de a folosi <b>let</b>. Evident, o variabila <b>const</b> trebuie sa fie initializata la declarare si nu se mai poate modifica pe parcursul executiei programului.

Scopurile variabilelor (<b>global</b>, <b>local</b>, <b>bloc</b>) functioneaza dupa regulile uzuale din majoritatea limbajelor (asta in cazul in care se folosesc <b>const</b> si <b>let</b>, acesta fiind un motiv pentru care se evita <b>var</b>).

Exista numeroase metode pentru lucrul cu stringuri, cum ar fi <b>length</b>, <b>charAt</b>, <b>replace</b>, <b>split</b>, <b>toLowerCase</b> si altele; unele mai uzuale vor fi discutate si utilizate in exercitii la tutoriat.

<b>Obiectele</b> se vor folosi frecvent la aceasta materie. Aici intervin unele notiuni de <b>programare orientata de obiecte</b> (care, de asemenea, este o materie pe care o veti studia in semestrul 2), cum ar fi crearea obiectelor (folosind constructori, obiectul generic sau obiectul literal).

Instructiunile <b>while</b>, <b>do while</b>, <b>if</b>, <b>switch</b> au acelasi comportament ca si in alte limbaje, dar instructiunea <b>for</b> aduce 3 moduri de utilizare. De asemenea, exista si operatorul conditional.

Functiile pot fi apelate cu un numar variabil de parametri si pot accesa un obiect <b>arguments</b> care contine valorile argumentelor cu care se apeleaza functia; aceste detalii de functionare vor fi explicate in detaliu la exercitiile din tutoriat. Obiectul <b>arguments</b> este folositor pentru a generaliza utilitatea functiilor, permitand apelul cu orice numar de parametri.

<b>Functiile anonime</b> sunt des intalnite, iar ele seamana cu <b>functiile lambda</b> din Python si C++. Acestea se mai numesc si <b>arrow functions</b>.

## Exercitii

1. Folosind sintaxa pentru obiectul literal, sa se creeze un nou obiect <b>album</b>, avand 3 campuri (initializate) ce descriu un album. Apoi, sa se afiseze (utilizand o structura repetitiva) campurile si valorile lor.
2. Folosind sintaxa pentru obiectul generic, sa se creeze un nou obiect <b>carte</b>, avand 4 campuri (initializate) adecvate. Apoi, sa se afiseze (utilizand o functie) campurile si valorile lor.
3. Sa se selecteze, la intamplare, un paragraf dintr-un document HTML si sa se afiseze in consola textul original, apoi cu majuscule.
4. Scrieti o functie care transmite un prompt, ce solicita un numar natural. In cazul in care inputul primit este corect, sa se afiseze cu un alert (folosind si o functie anonima) patratele perfecte intre 1 si numarul primit (inclusiv). Apelati functia.
5. Creati un document HTML care sa contina un <b>div</b> cu id-ul <b>imagini</b>. Dintr-un folder cu cateva imagini, selectati la intamplare 2 imagini <b>diferite</b>. Selectati div-ul si puneti imaginile in el (cu atributele <b>src</b> si <b>alt</b>). Specificati niste valori adecvate pentru cateva proprietati CSS: <b>width</b> si <b>border (color, size, style, radius)</b>. Ar trebui ca cele 2 imagini sa apara pe pagina.
6. Sa se creeze cu HTML si CSS un <b>nav</b> responsiv (transformari, animatii, media queries, gradient). 