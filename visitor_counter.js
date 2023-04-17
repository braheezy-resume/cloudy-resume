const cookies = document.cookie
if (!cookies) {
    console.log("No cookies :(", cookies)
    document.cookie = "visited=yes; SameSite=lax"
    //TODO: Call AWS to update count
}

const API_URL = ""

async function getCount() {
    const response = await fetch(API_URL)
    return JSON.parse(response)
}

const visitor_count = await getCount()

const visitorCounterView = `
Visitor Counter: <span class="count">${visitor_count}</span>
`.trim()
document.addEventListener('DOMContentLoaded', () => {
    const visitorView = document.createElement("div")
    visitorView.setAttribute("class", "count-text")
    visitorView.innerHTML = visitorCounterView

    const solidLine = document.createElement("hr")
    solidLine.setAttribute("id", "count-divider")

    element = document.querySelector('#resume')
    element.appendChild(solidLine)
    element.appendChild(visitorView)
}, false);
