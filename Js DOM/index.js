let mydiv=document.querySelector('#mydiv');

let newElement=document.createElement('span');
newElement.textContent="love babbar ki line hai"

mydiv.insertAdjacentElement('afterbegin',newElement);

let parent=document.querySelector('#mydiv')
let child=document.querySelector('#fh2')

parent.removeChild(child);

