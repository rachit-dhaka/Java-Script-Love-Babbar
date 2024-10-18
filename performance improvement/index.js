// code 1
const t1=performance.now();

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is "+i+" para";
    document.body.appendChild(para);

}

const t2=performance.now();

console.log("time taken for code 1 is : "+(t2-t1));



// code 2
const t3=performance.now();


let mydiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let paras=document.createElement('p');
    paras.textContent="This is para no. "+i;
    mydiv.appendChild(paras);
}
document.body.appendChild(mydiv);

const t4=performance.now();

console.log("time taken for code 2 is : "+(t4-t3));


// best code 

const bct1=performance.now();

let fragment = document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let paraa=document.createElement('p');
    paraa.textContent="Best code para no ."+ i;
    fragment.appendChild(paraa);

}

document.body.appendChild(fragment);


const bct2=performance.now();
console.log("the best code time taken is : "+(bct2-bct1));


