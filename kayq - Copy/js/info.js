function info(){
       
    const infoMain = document.getElementById(`main`)
            const infoDiv = document.createElement(`DIV`)
            infoDiv.className = `info-div`
            infoMain.appendChild(infoDiv)
            const h1Text = document.createElement(`h1`)
            const pText = document.createElement(`p`)
            const hr = document.createElement(`hr`)
            h1Text.className = `h1-text`
            pText.className = `p-text`
            infoDiv.append(h1Text,hr,pText)
            h1Text.textContent = `tema`
            pText.textContent = `tema`
    
    }
    info()
