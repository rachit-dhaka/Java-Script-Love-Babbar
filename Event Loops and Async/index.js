// setTimeout(function() {
//     console.log("This message is shown after 3 seconds");
//   },6000);
  
  let display=document.createElement('div');
  display.textContent="hello ji";
  document.body.appendChild(display);

  let Dekha=document.createElement('div');
  Dekha.textContent="kese chalega ";
  // document.body.appendChild(Dekha);

  let button=document.querySelector('clickbutton');

  button.addEventListener('click',Dekha);  
  document.body.appendChild(button);