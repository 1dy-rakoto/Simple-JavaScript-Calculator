class Calculator{
    constructor(previousOutputButtons,currentOutputButtons){
        this.previousOutputButtons=previousOutputButtons;
        this.currentOutputButtons=currentOutputButtons;
        this.clear()
    }
    delete(){
        this.currentOutput=this.currentOutput.toString().slice(0,-1)
    }
    clear(){
        this.previousOutput="";
        this.currentOutput="";
        this.operation=undefined;
    }
    numberAppend(number){
        if(number==='.'&& this.currentOutput.includes('.')) return
        this.currentOutput=this.currentOutput.toString()+number.toString()

    }
    chooseOperation(operation){
        if(this.currentOutput==='')return
        if(this.previousOutput!==''){
            this.compute()
        }        
        this.operation=operation
        this.previousOutput=this.currentOutput
        this.currentOutput=''
    }
    compute(){
        let computation
        const prev= parseFloat(this.previousOutput)
        const current=parseFloat(this.currentOutput)
        if(isNaN(prev)||isNaN(current)) return
        switch(this.operation){
            case'+':
                computation=prev+current
                break
            case '-':
                computation=prev -current
                break
            case '*':
                computation=prev*current
                break
            case '/':
                computation=prev/current
                break
            default:
                return
        }
        this.currentOutput=computation
        this.operation=undefined
        this.previousOutput=''
    }
    updateDisplay(){
        this.currentOutputButtons.innerText=this.currentOutput
        if(this.operation!=null){
            this.previousOutputButtons.innerText=
                this.previousOutput.concat("",this.operation) 
        }
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButtons = document.querySelector('[data-delete]')
const equalsButtons = document.querySelector('[data-equals]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOutputButtons = document.querySelector('.previous-output')
const currentOutputButtons = document.querySelector('.current-output')

const calculator= new Calculator(previousOutputButtons,currentOutputButtons)

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.numberAppend(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButtons.addEventListener('click',button =>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButtons.addEventListener('click', button=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButtons.addEventListener('click', button=>{
    calculator.delete()
    calculator.updateDisplay()
})