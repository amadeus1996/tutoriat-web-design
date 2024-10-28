window.onload = function() {
    // EX 1
    const album = {
        title: "Illmatic",
        artist: "Nas",
        year: 1994
    }

    for (attribute in album) {
        console.log(`${attribute}: ${album[attribute]}`)
    }
    console.log("\n")


    // EX 2
    const book = new Object()
    book.title   = "Can't Hurt Me"
    book.author  = "David Goggins"
    book.year    = 2018
    book.pages   = 364

    function printBook(t) {
        if (!t) return
        console.log(`title: ${t.title}\n\nauthor: ${t.author}\n\nyear:${t.year}\n\npages:${t.pages}`)
    }

    printBook(book)
    console.log("\n")


    // EX 3
    const paragraphs      = document.querySelectorAll("p")
    const randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)] 
    if (randomParagraph)
        console.log(`${randomParagraph.textContent} || ${randomParagraph.textContent.toUpperCase()}`)
    

    // EX 4
    function f() {
        const input = parseInt(prompt("Enter a number"))

        let result   = ""
        const square = (num) => num * num 

        if (input) {
            for (let i = 0; i <= Math.floor(Math.sqrt(input)); ++i)
                ((num) => result += String(square(num)) + " ")(i)
        }

        alert(result)
    }
    f()


    // EX 5
    const images = []
    for (let i = 1; i <= 5; ++i)
        images.push(`poze/cat_${i}.jpg`)
    
    const n         = images.length
    const firstPath = images[Math.floor(Math.random() * n)]

    let secondPath
    do {
        secondPath = images[Math.floor(Math.random() * n)]
    } while (firstPath === secondPath)

    const firstImage              = document.createElement("img")
    firstImage.src                = firstPath
    firstImage.alt                = `pisica ${firstPath[9]}`
    firstImage.style.width        = "350px";
    firstImage.style.borderWidth  = "1px";
    firstImage.style.borderStyle  = "solid";
    firstImage.style.borderColor  = "black";
    firstImage.style.borderRadius = "10px";

    const secondImage              = document.createElement("img")
    secondImage.src                = secondPath
    secondImage.alt                = `pisica ${secondPath[9]}`
    secondImage.style.width        = "350px";
    secondImage.style.borderWidth  = "1px";
    secondImage.style.borderStyle  = "solid";
    secondImage.style.borderColor  = "black";
    secondImage.style.borderRadius = "10px";

    const imageContainer = document.getElementById("imagini")
    imageContainer.appendChild(firstImage)
    imageContainer.appendChild(secondImage)
}
