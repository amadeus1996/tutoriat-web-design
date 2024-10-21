# Tutoriat 1

### Table of contents
- [Scopul tutoriatului](#scopul-tutoriatului)
- [Introducere in HTML](#html---hypertext-markup-language)
- [Introducere in CSS](#css---cascading-style-sheets)

### Scopul tutoriatului
Acest fisier este o tratare sumara a conceptelor care vor fi discutate si implementate la tutoriat, unde vom avea in vedere urmatoarele lucruri:
1. Introducerea materiei si prezentarea unor exemple concrete de proiecte.
2. Intelegerea unor elemente si notiuni de baza din HTML si CSS.
3. Lucrul cu fisiere .html si .css, legarea fisierelor.
4. Niste exercitii de antrenament pentru reproducerea anumitor designuri, utile in special pentru realizarea proiectului.

### HTML - HyperText Markup Language
Descrie continutul unei pagini web. Toate documentele HTML au o anumita structura.

Documentele HTML contin elemente (taguri) care descriu diferite tipuri de continut: paragrafe, imagini, videouri, etc. Un browser interpreteaza elementele si afiseaza documentele HTML intr-o forma grafica. Acestea trebuie sa fie corect imbricate.

Tagurile pot avea atribute globale (se pot asocia oricarui element - <b>id, class</b>, etc.), sau specifice unor elemente (<b>href</b> pentru <b>a</b> si <b>link</b>, <b>src</b> pentru <b>img</b> si <b>iframe</b>, etc.)

Elementele semantice (<b>header, section</b>, etc.) sunt folosite pentru claritatea codului si pentru a structura mai bine o pagina, ca sa fie inteleasa de catre diverse aplicatii (ex: text-to-speech). In locul utilizarii in exces a divurilor, se pot folosi <b>section, article, header, footer</b>, etc.

### CSS - Cascading Style Sheets
Utilizat pentru stilizare, asezare, vizibilitate, animatii.

Se poate introduce in 3 moduri: inline, in file, in fisier separat (recomandat). Exista o precedenta: mai intai se aplica CSS extern, CSS in file si apoi CSS inline.

Distante si marimi: absolute (<b>mm, cm, px, in, pt</b>), relative (<b>em, %, vw, vh, rem</b>).

Box model-ul este un concept fundamental care descrie modul in care elementele HTML sunt reprezentate si gestionate pe pagina; acest model cuprinde urmatoarele componente - <b>content, padding, border, margin</b>.

Exista diverse moduri de a expune elementele HTML: <b>block, inline-block, inline, grid, flex.</b>
