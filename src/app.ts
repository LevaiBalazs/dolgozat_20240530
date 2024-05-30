/*
* File: app.ts
* Author: Lévai Balázs
* Copyright: 2024, Lévai Balázs
* Group: Szoft I/1/N
* Date: 2024-05-30
* Github: https://github.com/levaibalazs/
* Licenc: GNU GPL
*/

class Ellip{

    tengelyAInput?:HTMLInputElement | null
    tengelyBInput?:HTMLInputElement | null
    tengelyCInput?:HTMLInputElement | null
    terfogInput?:HTMLInputElement | null
    calcButton?:HTMLButtonElement | null


    constructor(){
        this.bindHTML()
        this.handleEvent()
    }
    
    
    bindHTML(){
        this.tengelyAInput = document.querySelector("#tengelyA")
        this.tengelyBInput = document.querySelector("#tengelyB")
        this.tengelyCInput = document.querySelector("#tengelyC")
        this.terfogInput = document.querySelector("#terfog")
        this.calcButton = document.querySelector("#calcButton")




    }

    handleEvent(){
        this.calcButton?.addEventListener('click',()=>{
                this.startCalc()
        })
    }


    startCalc(){
        const tengelyA = Number(this.tengelyAInput?.value)
        const tengelyB = Number(this.tengelyBInput?.value)
        const tengelyC = Number(this.tengelyCInput?.value)
        const terfog = this.calcTerfog(tengelyA, tengelyB, tengelyC)
        this.renderResult(terfog)
    }
    

    calcTerfog(tengelyA: number,tengelyB:number, tengelyC:number):number{
        const szorz = 4/3
        return (Math.PI*tengelyA*tengelyB*tengelyC)*szorz
    }

  

    renderResult(terfog:number){
        if(this.terfogInput){
            this.terfogInput.value =String(terfog) 

        }
    }


}
new Ellip()
