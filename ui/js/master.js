let employees = null

const init = async () =>{
    // createRequestPurchasePage()
    // let dataURL = `${path}json/employees.php`
    // employees =  await JSONRequest("GET", dataURL)
    // createRequestPurchasePage()
    const a = 12.57
    console.log(Math.sqrt(a/Math.PI))
}

const createPageTitle = (title) =>{
    const html = {
        type: 'div',
        class: 'pageTitle',
        innerText: title
    }
    return createHTMLElement(html)
}
 
window.addEventListener("DOMContentLoaded", init, true)