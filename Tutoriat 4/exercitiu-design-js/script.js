document.addEventListener('DOMContentLoaded', function() {
    const albums = [
        {id: "tribe",     artist: "A Tribe Called Quest", year: 1991, title: "The Low End Theory",  cover: "album-covers/tribe.jpg"          , description: "Critically acclaimed for its authenticity and groundbreaking storytelling, Nas was only 20 years old when he released what would go down as one of the greatest hip-hop albums of all time, laying the groundwork for his peers."},
        {id: "nas",       artist: "Nas",                  year: 1994, title: "Illmatic",            cover: "album-covers/illmatic.jpg"       , description: "Critically acclaimed for its authenticity and groundbreaking storytelling, Nas was only 20 years old when he released what would go down as one of the greatest hip-hop albums of all time, laying the groundwork for his peers."},
        {id: "az",        artist: "AZ",                   year: 1995, title: "Doe or Die",          cover: "album-covers/doe-or-die.jpeg"    , description: "A criminally underrated rapper who has secured himself a spot next to the greats, AZ introduced himself to the world by laying an unparalleled verse on Nas' Illmatic. They would both go on to frequently collaborate in the future, blessing ears and painting gritty images of New York."},
        {id: "eminem",    artist: "Eminem",               year: 1996, title: "Infinite",            cover: "album-covers/infinite.jpg"       , description: "Having sold only about 1000 copies upon release and raising some eyebrows for the similarities to the styles of Nas and AZ, Eminem's debut album has aged like fine wine. It undeniably turned out to be a crucial first step in the rapper's rise to stardom, who used to have an entirely different outlook on life. "},
        {id: "starr",     artist: "Gang Starr",           year: 1998, title: "Moment of Truth",     cover: "album-covers/moment-of-truth.jpg", description: "Critically acclaimed for its authenticity and groundbreaking storytelling, Nas was only 20 years old when he released what would go down as one of the greatest hip-hop albums of all time, laying the groundwork for his peers."},
        {id: "mfdoom",    artist: "MF DOOM",              year: 1999, title: "Operation: Doomsday", cover: "album-covers/doomsday.jpeg"      , description: "An avid lover of cartoons and a unique wordsmith, MF DOOM's inventiveness brought a style to the table that no one could ever replicate. It would not be far from the truth to classify his work as the sketch of a comic book, incorporating an absurd amount of multisyllabic rhymes over an assortment of exuberant instrumentals."},
        {id: "parazitii", artist: "Parazitii",            year: 1999, title: "Nici o problema",     cover: "album-covers/parazitii.jpg"      , description: "Quick-witted wordplays, twisted humor, politics bashing and the usual ingrained prejudice against women, Parazitii deliver a raw and unsympathetic message on their 6th studio album for listeners to take however they like."},
        {id: "d12",       artist: "D12",                  year: 2001, title: "Devil's Night",       cover: "album-covers/devils-night.jpg"   , description: "Critically acclaimed for its authenticity and groundbreaking storytelling, Nas was only 20 years old when he released what would go down as one of the greatest hip-hop albums of all time, laying the groundwork for his peers."},
        {id: "bitza",     artist: "Bitza",                year: 2004, title: "Sevraj",              cover: "album-covers/sevraj.avif"        , description: "After a succesful commencement in music with the help of Parazitii, Bitza would later interpolate the chorus from \"Fara Tine\" into the fan favorite hit song \"Vorbeste vinul\". His signature ability to fuse rapping with singing has produced numerous memorable choruses for his collaborations with Ombladon."},
        {id: "anonim",    artist: "Anonim",               year: 2005, title: "Hai sa vorbim",       cover: "album-covers/anonim.jpg"         , description: "Noticed by Parazitii shortly after the release of their first album, Anonim began working on new material. Undoubtedly a striking classic, the release of \"Hai sa vorbim\" had to be postponed due to the duo not being old enough to legally perform explicit lyrics."}
    ]

    // get 6 random albums from "albums"
    const shuffleAlbums = (t) => {
        for (let i = t.length - 1; i > 0; --i) {
            const j = Math.floor(Math.random() * (i + 1));
            [t[i], t[j]] = [t[j], t[i]]
        }
        return t
    }
    const randomAlbums = shuffleAlbums(albums).slice(0, 6)
    
    // create <section id="albums"></section>
    // create <section id="albums-left"></section>
    // create <section id="albums-right"></section>
    const sectionAlbums      = document.createElement("section")
    sectionAlbums.id         = "albums"
    const sectionAlbumsLeft  = document.createElement("section")
    sectionAlbumsLeft.id     = "albums-left"
    const sectionAlbumsRight = document.createElement("section") 
    sectionAlbumsRight.id    = "albums-right"

    sectionAlbums.appendChild(sectionAlbumsLeft)
    sectionAlbums.appendChild(sectionAlbumsRight)

    // create the 3 album divs on the left and append them to sectionAlbumsLeft
    // album container: a <div> that contains 2 smaller <div> elements
    // 1st smaller <div>: contains an <img> element
    // 2nd smaller <div>: contains 2 <p> elements
    for (let i = 0; i < 3; ++i) {
        // this is the album container
        const divMain = document.createElement("div")
        divMain.classList.add("album-container-left")
        divMain.style.width = "600px"
        divMain.style.height = "125px"

        // the image container + the image itself
        const divImageContainer = document.createElement("div")
        const imgAlbumCover = document.createElement("img")
        imgAlbumCover.classList.add("album-cover-left")
        imgAlbumCover.src = randomAlbums[i].cover
        imgAlbumCover.style.width = "125px"
        imgAlbumCover.style.height = "125px"
        divImageContainer.appendChild(imgAlbumCover)

        // the text container
        const divTextContainer = document.createElement("div")
        divTextContainer.classList.add("album-text-left")
        // title
        const divTitle         = document.createElement("p")
        divTitle.classList.add("album-title-left")
        divTitle.textContent  = randomAlbums[i].artist + " - " + randomAlbums[i].title + " (" + randomAlbums[i].year + ")"
        // line (between title and description)
        const divLine = document.createElement("div")
        divLine.style.width = "100%"
        divLine.style.borderStyle = "solid"
        divLine.style.borderWidth = "1px"
        divLine.style.borderColor = "black"
        divLine.style.margin = "3px 0"
        // description
        const divDescription   = document.createElement("p")
        divDescription.classList.add("album-description-left")
        divDescription.textContent = randomAlbums[i].description
        // append everything to the text container
        divTextContainer.appendChild(divTitle)
        divTextContainer.appendChild(divLine)
        divTextContainer.appendChild(divDescription)

        // append everything
        divMain.appendChild(divImageContainer)
        divMain.appendChild(divTextContainer)
        sectionAlbumsLeft.appendChild(divMain)
    }

    // create the 3 album divs on the right and append them to sectionAlbumsRight
    // album container: a <div> that contains 2 smaller <div> elements
    // 1st smaller <div>: contains an <img> element
    // 2nd smaller <div>: contains 2 <p> elements
    for (let i = 3; i < 6; ++i) {
        // this is the album container
        const divMain = document.createElement("div")
        divMain.classList.add("album-container-right")
        divMain.style.width = "600px"
        divMain.style.height = "125px"

        // the image container + the image itself
        const divImageContainer = document.createElement("div")
        const imgAlbumCover = document.createElement("img")
        imgAlbumCover.classList.add("album-cover-right")
        imgAlbumCover.src = randomAlbums[i].cover
        imgAlbumCover.style.width = "125px"
        imgAlbumCover.style.height = "125px"
        divImageContainer.appendChild(imgAlbumCover)

        // the text container
        const divTextContainer = document.createElement("div")
        divTextContainer.classList.add("album-text-right")
        // title
        const divTitle         = document.createElement("p")
        divTitle.classList.add("album-title-right")
        divTitle.textContent  = randomAlbums[i].artist + " - " + randomAlbums[i].title + " (" + randomAlbums[i].year + ")"
        // line (between title and description)
        const divLine = document.createElement("div")
        divLine.style.width = "100%"
        divLine.style.borderStyle = "solid"
        divLine.style.borderWidth = "1px"
        divLine.style.borderColor = "black"
        divLine.style.margin = "3px 0"
        // description
        const divDescription   = document.createElement("p")
        divDescription.classList.add("album-description-right")
        divDescription.textContent = randomAlbums[i].description
        // append everything to the text container
        divTextContainer.appendChild(divTitle)
        divTextContainer.appendChild(divLine)
        divTextContainer.appendChild(divDescription)

        // append everything
        divMain.appendChild(divTextContainer)
        divMain.appendChild(divImageContainer)
        sectionAlbumsRight.appendChild(divMain)
    }

    this.body.appendChild(sectionAlbums)
})
