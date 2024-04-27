const createRequestPurchasePage = () =>{
    const mainContent = document.querySelector('#mainContent')
    let page = new PurchaseRequestPage()
    mainContent.appendChild(page.HTMLElement)
    page.insertDropdowns()
}

class PurchaseRequestPage{
    constructor(loadedData){
        this._UUID = createUUID(this)
        this._data = loadedData ? loadedData : null
        this._inputGroupUUIDs = []
        this._dropDowns = {}
        this._html = this.createHTML()  
    }

    get HTMLElement(){
        return this._html
    }

    insertDropdowns(){
        const keys = Object.keys(this._dropDowns)
        for(const key of keys){
            let dd = new Dropdown(this._dropDowns[key].location, "nodata", true)
            dd.setJSONData(this._dropDowns[key].data)
            dd.delayedInit()
            dd.setMode('single')
            dd.setTitle('Make Selection')
            dd.setDefaultTitle('Make Selection')
            dd.setColors("#ef767a", "#696773")
            dd.setTextColor("#080705")
            dd.setLimit(10)

            this._dropDowns[key].ref = dd
        }

    }

    createHTML(){
        const children = []

        children.push(createPageTitle('Request For Purchase'))

        children.push(this.purchaseDatesAndType())

        children.push(this.requestorInfo())

        const page = {
            type: 'div',
            class: 'page',
            children: children
        }

        return createHTMLElement(page)
    }

    purchaseDatesAndType(){
        const children = []

        children.push(this.typeYearControl())

        const html = {
            type: 'div',
            class: 'section vertical',
            children: children
        }

        return createHTMLElement(html)
    }

    typeYearControl(){
        const children = []

        children.push(this.dropdownWithLabel('Purchase Type:', 'purchaseTypeDDWrapper', 'purchaseType', purchaseTypes.type))
        children.push(this.dropdownWithLabel('Fiscal Year:', 'fiscalYearDDWrapper', 'fiscalYear', fiscalYear.year))

        let controlNumber = new Util_Input('Control Number:', 'controlNumber', null, null)
        children.push(controlNumber.HTMLElement)
        this._inputGroupUUIDs.push(controlNumber.uuid)

        let requestDate = new Util_Input('Request Date:', 'requestDate', null, null)
        children.push(requestDate.HTMLElement)
        this._inputGroupUUIDs.push(requestDate.uuid)
        
        const html = {
            type: 'div',
            class: 'section horizontal',
            children: children
        }

        return createHTMLElement(html)
    }

    requestorInfo(){
        const children = []

        children.push(this.divisionRequestorState())

        const html = {
            type: 'div',
            class: 'section vertical',
            children: children
        }

        return createHTMLElement(html)
    }

    divisionRequestorState(){
        const children = []

        children.push(this.dropdownWithLabel('Division:', 'divisionDDWrapper', 'requestingDivision', requestingDivision.division))

        children.push(this.dropdownWithLabel('Requestor:', 'requestorDDWrapper', 'requestingEmployee', employees.employees))

        let stateAPD = new Util_Input('State APD Number:', 'stateAPD', null, null)
        children.push(stateAPD.HTMLElement)
        this._inputGroupUUIDs.push(stateAPD.uuid)
        
        const html = {
            type: 'div',
            class: 'section horizontal',
            children: children
        }

        return createHTMLElement(html)
    }

    dropdownWithLabel(label, location, key, data){
        this._dropDowns[key] = {location, data}
        const children = []
    
        const ddLabel = {
            type: 'div', 
            class: 'ddLabel', 
            innerText: label
        }
        children.push(createHTMLElement(ddLabel))
    
        const ddWrapper = {
            type: 'div',
            class: 'ddWrapper', 
            id: location
        }
        children.push(createHTMLElement(ddWrapper))
    
        const ddAndLabelWrapper = {
            type: 'div',
            class: 'ddAndLabelWrapper vertical',
            children: children
        }
        return createHTMLElement(ddAndLabelWrapper)
    }
}
