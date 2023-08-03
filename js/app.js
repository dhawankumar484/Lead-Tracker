
let myLeads=["www.google.com", "www.linkedin.com", "www.facebook.com"];
const inputEl=document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

for(let i=0; i<myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
