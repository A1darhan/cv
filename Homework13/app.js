// Задание№1
let inputFac=document.getElementById('inputFac');
let enter=document.querySelector('.enter');
function factorial(){
    let inputFacValue=Number (inputFac.value);    
    let i=1;
    let a=1;
    while(i<=inputFacValue) {
        a *= i    
        ++i
    }
    let Paragraph = document.createElement('p');
    Paragraph.textContent=a; 
    enter.append(Paragraph); 
}
buttonFac.addEventListener('click', factorial);

// Задание№2
let inputStepen=document.getElementById('Stepen');
let res=document.getElementById('res2');
function stepen(){
    let StepenValue=Number(inputStepen.value);
    let i=2;
    let result=2;
    while(i<=StepenValue){
        result*=2;
        ++i;
    }
    let stepenParag=document.createElement('p')
    stepenParag.textContent=result; 
    res.append(stepenParag);
}
buttonSt.addEventListener('click', stepen);

// Задание№3
let inputDelitel=document.getElementById('inputDelitel');
let res3=document.getElementById('res3');
function delitel(){
    let inputDelitelValue=Number(inputDelitel.value);
    let elementParagraph=document.createElement('p'); 
    if(inputDelitelValue<2||isNaN(inputDelitelValue)){
        elementParagraph.textContent='Неверное значение';
    } else {
        let i=2;
        while(i<=inputDelitelValue){
            if(inputDelitelValue%i===0){
                break;
            }
            ++i;
        }
        elementParagraph.textContent=i; 
    }
    res3.append(elementParagraph);
}
button3.addEventListener('click', delitel);

// Задание№4
let inputDividers=document.getElementById('inputDividers');
let res4 = document.getElementById('res4');
function dividers(){
    let inputDividersValue=Number(inputDividers.value);
    let elementParagraph=document.createElement('p'); 
    let i=1;
    let a=0; 
    let arr=[]; 
    while (i<inputDividersValue-1){ 
        ++i; 
        if(inputDividersValue%i===0){
            arr[0+a]=i;
            ++a;
        }
    }
    let str = arr.join(', '); 
    if(arr.length===0){
        elementParagraph.textContent='Простое число'; 
    } else{    
        elementParagraph.textContent=str; 
    }
    res4.append(elementParagraph); 
}
button4.addEventListener('click', dividers);

// Задание№5
let inputSumma=document.getElementById('inputChislo');
let res5 = document.getElementById('res5');
function summa(){
    let inputSummaValue=Number(inputSumma.value);
    let elementParagraph=document.createElement('p');
    let i=1;
    let a=0;
    while (i<=inputSummaValue){
        a+=i; 
        ++i;
    }   
    elementParagraph.textContent=a;      
    res5.append(elementParagraph); 
}
button5.addEventListener('click', summa);

// Задание№6
let inputSumma2 = document.getElementById('inputSumma2');
let res6 = document.getElementById('res6');
function SummaKv(){
    let inputSumma2Value=Number(inputSumma2.value);
    let elementParagraph = document.createElement('p'); 
    let a=0;   
    let b;
    let i=1;      
    while(i<=inputSumma2Value){
        b = i*i; 
        a += b; 
        ++i;
    }
    elementParagraph.textContent=a;      
    res6.append(elementParagraph); 
}
button6.addEventListener('click',SummaKv);

// Задание№7

let inputProst = document.querySelector('#inputChislo3');
let res7 = document.querySelector('#res7');
function prostota(){ 
    let inputProstValue=Number(inputProst.value);
    let elementParagraph = document.createElement('p'); 
    let i=1;
    while(i<inputProstValue){
        ++i;
        if(inputProstValue%i!==0 || inputProstValue===i ){
            elementParagraph.textContent= inputProstValue + ' - это простое число'; 
        } else{
            elementParagraph.textContent=inputProstValue + ' - это непростое число'; 
            break;
        }
    }    
    res7.append(elementParagraph); 
}
button7.addEventListener('click', prostota);
