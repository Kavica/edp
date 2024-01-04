const init = async () =>{
    createToggles()
    setDate()
}

const setDate = () =>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = mm + '/' + dd + '/' + yyyy;

    document.getElementById('theDate').value = formattedToday
}

const doNothing = () =>{
    console.log('nothing')
}
const toggleWords = ['Check If Void', 'SAM Verified', 'Credit Card', 'Purchase Order']
const createToggles = () =>{
    let checks = document.querySelector('#checks')
    let settings = {
        "wrapper": {
            "active": 'rgb(82, 100, 174)',
            "inactive": 'rgb(25,25,25)'
        },
        "thumb": {
            "color": 'rgb(245, 245, 247)'
        }
    }
    for(let i = 0; i < toggleWords.length; i++){
        let children = []
        let toggle = new Util_Toggle(false, settings, doNothing)
        children.push(toggle.HTMLElement)

        let checkLabel = {
            type: 'div',
            class: 'checkLabel',
            innerText: toggleWords[i]
        }
        children.push(createHTMLElement(checkLabel))

        let checkWrapper = createHTMLElement({
            type: 'div',
            class: 'checkWrapper',
            children: children
        })
        
        checks.appendChild(checkWrapper)
    }

    
}
 
window.addEventListener("DOMContentLoaded", init, true)