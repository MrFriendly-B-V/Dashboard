import { handleLogin } from "./auth";

interface Widget {
    name:   string,
    link:   string,
    img:    string
}

export async function loadWidgets() {
    await handleLogin()

    fetch('widgets.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(r => {
        switch(r.status) {
            case 200:
                r.json().then(j => {
                    const widgets = <Widget[]> j
                    const widgetHolder = document.getElementById("widgetHolder")

                    for(let i = 0; i < widgets.length; i++) {
                        let widget = widgets[i]
        
                        let widgetDiv = document.createElement("div")
                        widgetDiv.classList.value = "widget"
            
                        let widgetImageHolder = document.createElement("div")
                        widgetImageHolder.classList.value = "widgetImage"
            
                        let widgetImage = document.createElement("img")
                        widgetImage.src = widget.img
                        widgetImage.alt = widget.name + " Logo"
            
                        widgetImageHolder.appendChild(widgetImage)
                        widgetDiv.appendChild(widgetImageHolder)
            
                        let widgetName = document.createElement("p")
                        widgetName.innerHTML = widget.name
            
                        widgetDiv.appendChild(widgetName)
            
                        widgetDiv.addEventListener("click", _e => {
                            window.location.href = widget.link
                        });
            
                        widgetHolder.appendChild(widgetDiv)
                    }
                }) 
                break
            default:
                alert('Failed to load widgets')
                throw new Error('Failed to load widgets')
        }
    })
}