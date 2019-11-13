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

// create input form div element 
const createInputElement = (name,placeholder,size) => {
    const inputElement = document.createElement('input')
    inputElement.type = 'text'
    inputElement.setAttribute('name',name)
    inputElement.setAttribute('placeholder', placeholder)
    inputElement.setAttribute('size',size)
    inputElement.setAttribute('required','true')
    inputElement.classList.add('form-control')
    return inputElement;
}

// form element 
const createFormElement = () => {
    const authorInput = createInputElement("author","Enter Author Name",20)
    const titleInput = createInputElement("title","Enter Link Title",40)
    const urlInput = createInputElement("url","Enter link url",40)

    // create submit element
    const submitElement = document.createElement('input')
    submitElement.type = 'submit'
    submitElement.classList.add('btn')
    submitElement.classList.add('btn-primary')
    submitElement.value = 'Add Link'

    // create link submission form
    const linkFormElement = document.createElement('form')
    linkFormElement.classList.add("linkForm");
    linkFormElement.classList.add("form-inline");
    linkFormElement.appendChild(authorInput);
    linkFormElement.appendChild(titleInput);
    linkFormElement.appendChild(urlInput);
    linkFormElement.appendChild(submitElement);

    // Handle form submission
    linkFormElement.addEventListener("submit", e => {
        // Cancel default form behavior
        e.preventDefault();

        // Create new link object from field values
        const newLink = new Link(
            titleInput.value,
            urlInput.value,
            authorInput.value
        );

        // Add new link to page, replacing form
        const newLinkElement = createLinkElement(newLink);
        content.replaceChild(newLinkElement, e.target);

        // Create info message indicating success
        const infoElement = document.createElement("div");
        infoElement.classList.add("alert");
        infoElement.classList.add("alert-success");
        infoElement.textContent = `The link ${newLink.title} has been succesfully added!`;
        content.insertBefore(infoElement, newLinkElement);
        // Remove info message after 2 seconds
        setTimeout(() => {
            content.removeChild(infoElement);
        }, 2000);
    });

    return linkFormElement;
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

// Handle click on link submit button
document.getElementById("submitButton").addEventListener("click", () => {
    // Create link submission form
    const formElement = createFormElement();
    // Add form on page before the first link
    content.insertBefore(formElement, document.querySelector(".link"));
});