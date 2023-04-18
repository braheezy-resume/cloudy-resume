// The URL-template string below gets replaced during "build time" by a sed command.
const API_URL = "{URL}/count"

// If the user does not have any cookies from us, they are a new visitor.
const cookies = document.cookie
if (!cookies) {
    document.cookie = "visited=yes; SameSite=lax"
    // PUT request to our API updates the count by 1
    const update = (async () => {
        const response = await fetch(API_URL, {
            method: "PUT"
        })
        if (!response.ok) {
            throw new Error("network failed")
        }
        result = await response.json()
    })
    update()
}

async function getCount() {
    try {
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error("network failed")
        }
        result = await response.json()
    } catch (error) {
        console.error(error)
        result = { "count": "N/A" }
    }
    // We awaited for the final data, now render it
    show(result)
}

function show(data) {

    const visitorCounterView = `
Visitor Counter: <span class="count">${data.count}</span>
`.trim()

    const visitorView = document.createElement("div")
    visitorView.setAttribute("class", "count-text")
    visitorView.innerHTML = visitorCounterView

    const solidLine = document.createElement("hr")
    solidLine.setAttribute("id", "count-divider")

    element = document.querySelector('#resume')
    element.appendChild(solidLine)
    element.appendChild(visitorView)
}

getCount()