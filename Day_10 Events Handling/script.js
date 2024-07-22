//Activity 1

//  change text after clocking on button


 let b= document.getElementById("btn");
 let para = document.getElementById("p");
 b.addEventListener("click", function () {
   para.innerText = "I an Do it man!!";
 });
 
 /* task 2 -doubl click krne pr img ki visibility affect ho jaye */
 
 let i = document.getElementById("img");
 i.addEventListener("dblclick", function () {
   i.setAttribute("class", "visible");
 });
 
 //Activity 2

//  task 3-changes colour by hovering mouse

 //mouseover
 let box = document.getElementById("box1");
 box.addEventListener("mouseover", function () {
   box.style.backgroundColor = "red";
 });
 
 /*mouseout task 4*/
 box.addEventListener("mouseout", function () {
   box.style.backgroundColor = "";
 });
 
 //Activity 3

 //task 5
 let txt = document.getElementById("txt");
 txt.addEventListener("keypress", function (e) {
   console.log(e.key);
 });

 //task 6 

 let pa = document.createElement("p");
 let txt1 = document.getElementById("txt");
 let c = document.getElementById("cont");
 txt1.addEventListener("keyup", function (e) {
   pa.innerText += e.key;
   c.appendChild(pa);
 });
 
 //Activity 4
 //task 7
 
 let f = document.getElementById("form");
 f.addEventListener("submit", function (e) {
   e.preventDefault();
   const formdata = new FormData(form);
   let n = formdata.get("name");
   let ag = formdata.get("age");
   console.log(`my name is ${n} and age is ${ag}`);
 });
 //task 8
 let k = document.getElementById("box3");
 let pass = document.createElement("p");
 let slct = document.getElementById("select");
 slct.addEventListener("change", (e) => {
   if (e.target.value == "default") {
     return;
   }
   pass.textContent += e.target.value;
   k.appendChild(pass);
 });
 
 //Activity 5
 
 //task 9
 let ul = document.getElementById("list");
 ul.addEventListener("click", (e) => {
   if (e.target && e.target.nodeName == "LI") console.log(e.target.textContent);
 });
 
 //task 10
 
 let f2 = document.getElementById("form2");
 f2.addEventListener("submit", function (e) {
   e.preventDefault();
   const formdata = new FormData(form2);
   let n2 = formdata.get("list2");
   kl = `${n2}`;
   console.log(kl);
 });
 
 let btn2 = document.getElementById("btn2");
 btn2.addEventListener("click", function (e) {
   let nli = document.createElement("li");
   nli.textContent = kl;
   list.appendChild(nli);
 });