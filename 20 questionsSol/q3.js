let accord = document.querySelector('.accordion-homepage');
let content = document.createElement('h3')
let text = document.createTextNode("My New Faq")
 content.appendChild(text);
 let sec = document.createElement('section')
 sec.classList.add("parent")
 sec.appendChild(content)
accord.appendChild(sec)