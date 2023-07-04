let DATA = [
    {
        fname: `tandz`,
        desc: `10-12 տարեկանի, բամբակյա, հայկական`,
        img: `download.jpg`
        
    },
    {
        fname: `gndak`,
        desc: `10-12 տարեկանի, բամբակյա, հայկական`,
        img: `download.jpg`
    },
    {
        fname: `HAKOB`,
        desc: `10-12 տարեկանի, բամբակյա, հայկական`,
        img: `download.jpg`
    },
    {
        fname: `SHUN`,
        desc: `10-12 տարեկանի, բամբակյա, հայկական`,
        img: `download.jpg`
        
    },
    {
        fname: `kapik`,
        desc: `10-12 տարեկանի, բամբակյա, հայկական`,
        img: `download.jpg`
        
    },
    {
        fname: `j`,
        desc: `10-12 տարեկանի, բամբակյա, հայկական`,
        img: `download.jpg`
        
    }





]
const productsDiv = document.querySelector('#div-products')
function products(){
    
    for(let i of DATA){
    const product = document.createElement(`DIV`)
    product.className = `div-product`
    productsDiv.appendChild(product)
    const h1Text = document.createElement(`h1`)
    h1Text.className = `h1-text`
    const pText = document.createElement(`p`)
    pText.className = `p-text`
    product.appendChild(h1Text)
    product.appendChild(pText)
    const divImg = document.createElement(`DIV`)
    divImg.className = `div-img`
    product.appendChild(divImg)
    const imgDiv = new Image(400, 170)
    imgDiv.src = `img/`+ i.img
    imgDiv.className = `img-div`
    divImg.appendChild(imgDiv)
    h1Text.textContent = i.fname
    pText.textContent = i.desc

    product.addEventListener(`click`, ()=>{
        location.href = `info.html`
    })
}


}






function result(){
    products()
}
result()

