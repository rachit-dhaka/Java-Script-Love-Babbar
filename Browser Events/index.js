

//  ADDING EVENT LISTENER -----------------------------


// function changeText(){
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="Rachit Dhaka";
// }


// let fpara=document.getElementById('fpara');

// fpara.addEventListener('click',changeText);


// CHANGING THE DEFAULT BEHAIVOUR 

// let anchorElement=document.getElementById('fanchor');

// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent="click hogaya  bhai";


// });
// function alertPara(){
//     alert("You Clicked on para : " + event.target.textContent);
// }
// let Paras=document.querySelectorAll('p');
// for(let i=0;i<Paras.length;i++){
//     let Para=Paras[i];
//     Para.addEventListener('click',alertPara );
// }

function alertPara(){
    if(event.target.nodeName === 'SPAN'){
        alert("You Clicked on para : " + event.target.textContent);
    }
    
}

let myDiv=document.getElementById('pdiv');
myDiv.addEventListener('click',alertPara);





