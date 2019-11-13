class Link {
    constructor(title,url,author) {
        let absoluteUrl = url
        if(!absoluteUrl.startsWith('https://') 
        && !absoluteUrl.startsWith('http://')) {
            absoluteUrl = `http://${absoluteUrl}`
        }

        this.title = title
        this.url = absoluteUrl
        this.author = author
    }

    toString() {
        return `${this.title} (${this.url}). Author: ${this.author}`
    }
}

// get content div
const content = document.getElementById('content')

// create and return dom element showing a link
const createLinkElement = link => {
    // create dom element for link title
    const titleElement = document.createElement('a')
    titleElement.href = link.url
    titleElement.classList.add('linkTitle')
    titleElement.appendChild(document.createTextNode(link.title))

    // create dom element for link url 
    const linkUrl = document.createElement('span')
    linkUrl.classList.add('linkUrl')
    linkUrl.appendChild(document.createTextNode(link.url))

    // create dom element foe link author
    const linkAuthor = document.createElement('span')
    linkAuthor.classList.add('linkAuthor')
    linkAuthor.appendChild(document.createTextNode(`Submitted by ${link.author}`))

    // dom element headline contain title and url
    const headlineElement = document.createElement('h4')
    headlineElement.classList.add('linkHeadline')
    headlineElement.appendChild(titleElement)
    headlineElement.appendChild(linkUrl)

    // create dom element for link
    const linkElement = document.createElement('div')
    linkElement.classList.add('link')
    linkElement.appendChild(headlineElement)
    linkElement.appendChild(linkAuthor)

    return linkElement;
}

// add to content 
let links = []
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

links.forEach(link => {
    const linkElement = createLinkElement(link)
    content.appendChild(linkElement)
})