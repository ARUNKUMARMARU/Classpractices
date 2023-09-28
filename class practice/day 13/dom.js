// let div1 = document.createElement("div")

// let h1 = document.createElement("h1")

// let p = document.createElement("p")

// p.textContent= "I am learning basic concept of dom"

// h1.textContent = "DOM test"

// div1.append(h1,p)

// document.body.appendChild(div1)

// let ancher = document.createElement("a")

// ancher.href = "www.bharat.com" 
//  (or) ancher.setAttribute("href", "www.bharat.com")

// ancher.textContent="visit hear"

// div1.appendChild(ancher)

// class task

//q1
let p = document.createElement("p")
p.textContent="Hello dom..!"
let firstdiv= document.createElement("div")
firstdiv.setAttribute("id", "output")
firstdiv.appendChild(p)
document.body.appendChild(firstdiv) 

//q2
let header = document.createElement("h1")
header.textContent="Welcome to our website..!!"
document.body.appendChild(header)

//q3
let secdiv=document.createElement("div")
secdiv.setAttribute("id", "imagecontainer")
let image = document.createElement("img")
image.setAttribute("src","image.png")
image.setAttribute("alt", "an image")
secdiv.appendChild(image)
document.body.appendChild(secdiv)

//q4
// let thrddiv=document.createElement("div")
// thrddiv.id="listcontainer"
let list=document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent= "item1";
list.appendChild(li1);
//ul.appendChild(li1)
//let li2 = document.createElement("li")
li1 = document.createElement("li");
li1.textContent= "item2";
list.appendChild(li1)
//ul.appendChild(li2)
//let li3 = document.createElement("li")
li1 = document.createElement("li")
li1.textContent= "item3";
list.appendChild(li1)
//thrddiv.appendChild("ul")
document.getElementById("container").appendChild(list);