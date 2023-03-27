const cookies = document.cookie
if (cookies) {
    console.log("There are cookies!", cookies)
} else {
    console.log("No cookies :(", cookies)
    document.cookie = "visited=yes; SameSite=lax"
}

const visitor_count = 1

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
