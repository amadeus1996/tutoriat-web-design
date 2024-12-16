window.addEventListener("DOMContentLoaded", function() {
    const albums = [
        {id: "tribe",     artist: "A Tribe Called Quest", year: 1991, title: "The Low End Theory",  cover: "album-covers/tribe.jpg",           firstLeftQuote: "no shame in my game",                secondLeftQuote: "cause i'll always be the same",   firstRightQuote: "i never half-step cause",               secondRightQuote: "i'm not a half-stepper",                   firstDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar nisl id velit congue, sed tempor risus finibus. Nulla sit amet nibh sed libero semper malesuada sit amet non est. Duis rhoncus dapibus suscipit. Proin ut posuere nulla, quis viverra augue. Proin id purus vulputate, pellentesque velit in, vestibulum lorem.", secondDescription: "Maecenas iaculis mauris tellus, ut congue lectus lacinia sed. Quisque pulvinar laoreet erat eu aliquam. Sed et tristique dui. Nam et placerat nisi. Donec finibus lacus ac interdum tristique. Fusce aliquet at enim rutrum rhoncus. Morbi placerat, nunc eget iaculis gravida, mauris lacus fringilla sem, id vestibulum eros enim eget quam."},                                                                                                                                                                                                                                                                                                                                                   
        {id: "nas",       artist: "Nas",                  year: 1994, title: "Illmatic",            cover: "album-covers/illmatic.jpg",        firstLeftQuote: "nothing's equivalent to",            secondLeftQuote: "a new york state of mind",        firstRightQuote: "time is illmatic, keep",                secondRightQuote: "static like wool fabric",                  firstDescription: "Critically acclaimed for its authenticity and groundbreaking storytelling, Nas was only 20 years old when he released what would go down as one of the greatest hip-hop albums of all time, laying the groundwork for his peers.",                                                                                                       secondDescription: "With a flawless tracklist assisted by only 2 features throughout 9 songs, Nas smoothly demonstrates his lyrical prowess, accompanied by an immaculate delivery for every lyric written. With his vocals layered on top of instrumentals produced by some of the most talented DJs, such as Pete Rock, Q-Tip and DJ Premier, skipping any track would simply not do right by the album's legacy."},
        {id: "az",        artist: "AZ",                   year: 1995, title: "Doe or Die",          cover: "album-covers/doe-or-die.jpeg",     firstLeftQuote: "surgically nice with",               secondLeftQuote: "any verbal device",               firstRightQuote: "trife, breathing life into mics",       secondRightQuote: "my eyesight's beyond the twilight",        firstDescription: "A criminally underrated rapper who has secured himself a spot next to the greats, AZ introduced himself to the world by laying an unparalleled verse on Nas' Illmatic. They would both go on to frequently collaborate in the future, blessing ears and painting gritty images of New York.",                                            secondDescription: "Maecenas iaculis mauris tellus, ut congue lectus lacinia sed. Quisque pulvinar laoreet erat eu aliquam. Sed et tristique dui. Nam et placerat nisi. Donec finibus lacus ac interdum tristique. Fusce aliquet at enim rutrum rhoncus. Morbi placerat, nunc eget iaculis gravida, mauris lacus fringilla sem, id vestibulum eros enim eget quam."},
        {id: "eminem",    artist: "Eminem",               year: 1996, title: "Infinite",            cover: "album-covers/infinite.jpg",        firstLeftQuote: "cause you can be a star",            secondLeftQuote: "no matter wherever you are",      firstRightQuote: "one thought in my cerebral is",         secondRightQuote: "deeper than a jeep full of people",        firstDescription: "Having sold only about 1000 copies upon release and raising some eyebrows for the similarities to the styles of Nas and AZ, Eminem's debut album has aged like fine wine. It undeniably turned out to be a crucial first step in the rapper's rise to stardom, who used to have an entirely different outlook on life.",                 secondDescription: "A world where Eminem would've blown up with his laid-back style that he depicts on \"Infinite\", rather than his Slim Shady persona, is thought-provoking to say the least. Songs like \"Never 2 Far\" and \"It's O.K.\" detail his struggles and dreams while maintaining an elevated lyrical complexity, but he doesn't forget to show his relentless nature on \"313\", as well as his sentimental side on \"Searchin\"."},
        {id: "starr",     artist: "Gang Starr",           year: 1998, title: "Moment of Truth",     cover: "album-covers/moment-of-truth.jpg", firstLeftQuote: "seems that life is just a constant", secondLeftQuote: "war between good and evil",       firstRightQuote: "don't fear, things get severe",         secondRightQuote: "for everybody everywhere",                 firstDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar nisl id velit congue, sed tempor risus finibus. Nulla sit amet nibh sed libero semper malesuada sit amet non est. Duis rhoncus dapibus suscipit. Proin ut posuere nulla, quis viverra augue. Proin id purus vulputate, pellentesque velit in, vestibulum lorem.", secondDescription: "Maecenas iaculis mauris tellus, ut congue lectus lacinia sed. Quisque pulvinar laoreet erat eu aliquam. Sed et tristique dui. Nam et placerat nisi. Donec finibus lacus ac interdum tristique. Fusce aliquet at enim rutrum rhoncus. Morbi placerat, nunc eget iaculis gravida, mauris lacus fringilla sem, id vestibulum eros enim eget quam."},
        {id: "mfdoom",    artist: "MF Doom",              year: 1999, title: "Operation: Doomsday", cover: "album-covers/doomsday.jpeg",       firstLeftQuote: "the one who mostly keep cash",       secondLeftQuote: "but brag about the broker times", firstRightQuote: "feel like a number 26",                 secondRightQuote: "on a roulette wheel",                      firstDescription: "An avid lover of cartoons and a unique wordsmith, MF DOOM's inventiveness brought a style to the table that no one could ever replicate. It would not be far from the truth to classify his work as the sketch of a comic book, incorporating an absurd amount of multisyllabic rhymes over an assortment of exuberant instrumentals.",  secondDescription: "DOOM's inspiration has never been limited to strictly creating songs; his debut album comprises several skits, all in concordance with the recurring supervillain persona that he portrays throughout his songs. To top it off, DOOM has one-upped other producers by ingeniously sampling cartoons for his work, something that is not usually carried out."},
        {id: "d12",       artist: "D12",                  year: 2001, title: "Devil's Night",       cover: "album-covers/devils-night.jpg",    firstLeftQuote: "it's apparent that my",              secondLeftQuote: "parents weren't parents at all",  firstRightQuote: "it's only music, media",                secondRightQuote: "know it but they blind",                   firstDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar nisl id velit congue, sed tempor risus finibus. Nulla sit amet nibh sed libero semper malesuada sit amet non est. Duis rhoncus dapibus suscipit. Proin ut posuere nulla, quis viverra augue. Proin id purus vulputate, pellentesque velit in, vestibulum lorem.", secondDescription: "Maecenas iaculis mauris tellus, ut congue lectus lacinia sed. Quisque pulvinar laoreet erat eu aliquam. Sed et tristique dui. Nam et placerat nisi. Donec finibus lacus ac interdum tristique. Fusce aliquet at enim rutrum rhoncus. Morbi placerat, nunc eget iaculis gravida, mauris lacus fringilla sem, id vestibulum eros enim eget quam."},
        {id: "parazitii", artist: "Parazitii",            year: 2001, title: "Nici o problema",     cover: "album-covers/parazitii.jpg",       firstLeftQuote: "am nevoie doar de",                  secondLeftQuote: "tine, de lovele si de zile",      firstRightQuote: "am grija doar de",                      secondRightQuote: "numarul unu",                              firstDescription: "Quick-witted wordplays, twisted humor, politics bashing and the usual ingrained prejudice against women, Parazitii deliver a raw and unsympathetic message on their 4th studio album for listeners to take however they like.",                                                                                                          secondDescription: "The release of this material had officially marked another classic under their belt, and it definitely wasn't the last one to come. Their unapologetic authenticity and heedless attitudes, together with the outstanding versatility of each boom bap instrumental is exactly what put them on the map. It was never about the salary; the genuine passion that they had for hip-hop garnered them approval and a loyal fanbase."},
        {id: "bitza",     artist: "Bitza",                year: 2004, title: "Sevraj",              cover: "album-covers/sevraj.avif",         firstLeftQuote: "am trei degete pe care-mi",          secondLeftQuote: "numar prietenii in viata",        firstRightQuote: "sunt curios cate trebuie sa trag cand", secondRightQuote: "tovarasii sunt primii care-ti dau in cap", firstDescription: "After a succesful commencement in music with the help of Parazitii, Bitza would later interpolate the chorus from \"Fara Tine\" into the fan favorite hit song \"Vorbeste vinul\". His signature ability to fuse rapping with singing has produced numerous memorable choruses for his collaborations with Ombladon.",                   secondDescription: "Throughout the whole album, Bitza touches on various heartfelt and emotive themes, such as the grief of unrequited love, his resentment towards disloyal relationships and the overwhelming repercussions of inexorable solitude. Listeners would often be able to connect with his down-to-earth lyrics because they are relatable, and so he became one of the most cherised figures in Romanian hip-hop."},
        {id: "anonim",    artist: "Anonim",               year: 2005, title: "Hai sa vorbim",       cover: "album-covers/anonim.jpg",          firstLeftQuote: "astept degeaba ziua in care",        secondLeftQuote: "o sa va cultivati cultura",       firstRightQuote: "faptul ca maine pot sa",                secondRightQuote: "mor ramane valabil",                       firstDescription: "Noticed by Parazitii shortly after the release of their first album, Anonim began working on new material. Undoubtedly a striking classic, the release of \"Hai sa vorbim\" had to be postponed due to the duo not being old enough to legally perform explicit lyrics.",                                                                secondDescription: "Maecenas iaculis mauris tellus, ut congue lectus lacinia sed. Quisque pulvinar laoreet erat eu aliquam. Sed et tristique dui. Nam et placerat nisi. Donec finibus lacus ac interdum tristique. Fusce aliquet at enim rutrum rhoncus. Morbi placerat, nunc eget iaculis gravida, mauris lacus fringilla sem, id vestibulum eros enim eget quam."},
    ];

    const shuffleAlbums = function(t) {
        for (let i = t.length - 1; i > 0; --i) {
            const j = Math.floor(Math.random() * (i + 1));
            [t[i], t[j]] = [t[j], t[i]];
        }
        return t;
    }
    shuffleAlbums(albums);

    for (let i = 0; i < albums.length; ++i) {
        // main section
        const sectionAlbum = document.createElement("section");
        this.document.body.appendChild(sectionAlbum);
        sectionAlbum.classList.add("album");

        // top line
        const divLine = document.createElement("div");
        sectionAlbum.appendChild(divLine);
        divLine.classList.add("top-line");

        // album overview (album cover + title/year/artist)
        const sectionAlbumOverview = document.createElement("section");
        sectionAlbum.appendChild(sectionAlbumOverview);
        sectionAlbumOverview.classList.add("album-overview");

        // album cover
        const divImageContainer = document.createElement("div");
        sectionAlbumOverview.appendChild(divImageContainer);
        divImageContainer.classList.add("image-container");

        const imageAlbumCover = document.createElement("img");
        divImageContainer.appendChild(imageAlbumCover);
        imageAlbumCover.classList.add("album-cover");
        imageAlbumCover.src = albums[i].cover;
        imageAlbumCover.alt = albums[i].id;

        // title/year/artist
        const divAlbumDetails = document.createElement("div");
        sectionAlbumOverview.appendChild(divAlbumDetails);
        divAlbumDetails.classList.add("album-text-top");

        const pYear = document.createElement("p");
        divAlbumDetails.appendChild(pYear);
        pYear.classList.add("year");
        pYear.textContent  = albums[i].year;

        const pTitleArtist = document.createElement("p"); 
        divAlbumDetails.appendChild(pTitleArtist);
        pTitleArtist.textContent = albums[i].artist + ", '" + albums[i].title + "'";
        pTitleArtist.classList.add("title-artist");

        // album-text section
        const sectionText = document.createElement("section");
        sectionAlbum.appendChild(sectionText);
        sectionText.classList.add("album-text");

        // description
        const sectionDesc = document.createElement("section");
        sectionText.appendChild(sectionDesc);
        sectionDesc.classList.add("desc");

        const pFirstDesc = document.createElement("p");
        sectionDesc.appendChild(pFirstDesc);
        pFirstDesc.classList.add("desc-1");
        pFirstDesc.textContent = albums[i].firstDescription;

        const breakLine = document.createElement("br");
        sectionDesc.appendChild(breakLine);

        const pSecondDesc = document.createElement("p");
        sectionDesc.appendChild(pSecondDesc);
        pSecondDesc.classList.add("desc-2");
        pSecondDesc.textContent = albums[i].secondDescription;

        // quotes section
        const sectionQuotes = document.createElement("section");
        sectionText.appendChild(sectionQuotes);
        sectionQuotes.classList.add("quotes");
        
        // left quote
        const sectionLeftQuote = document.createElement("section");
        sectionQuotes.appendChild(sectionLeftQuote);
        sectionLeftQuote.classList.add("left-quote");

        const pLeftQuoteTop = document.createElement("p");
        sectionLeftQuote.appendChild(pLeftQuoteTop);
        pLeftQuoteTop.classList.add("left-quote-1");
        pLeftQuoteTop.textContent = "'" + albums[i].firstLeftQuote;

        const pLeftQuoteBottom = document.createElement("p");
        sectionLeftQuote.appendChild(pLeftQuoteBottom);
        pLeftQuoteBottom.classList.add("left-quote-2");
        pLeftQuoteBottom.textContent = albums[i].secondLeftQuote + "'";

        // right quote
        const sectionRightQuote = document.createElement("section");
        sectionQuotes.appendChild(sectionRightQuote);
        sectionRightQuote.classList.add("right-quote");

        const pRightQuoteTop = document.createElement("p");
        sectionRightQuote.appendChild(pRightQuoteTop);
        pRightQuoteTop.classList.add("right-quote-1");
        pRightQuoteTop.textContent = "'" + albums[i].firstRightQuote;

        const pRightQuoteBottom = document.createElement("p");
        sectionRightQuote.appendChild(pRightQuoteBottom);
        pRightQuoteBottom.classList.add("right-quote-2");
        pRightQuoteBottom.textContent = albums[i].secondRightQuote + "'";
    }
});