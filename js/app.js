
let myLeads=["www.google.com", "www.linkedin.com", "www.facebook.com"];
const inputEl=document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

function renderLeads(leads){
    let listItems="";
    for(let i=0; i<leads.length; i++){
        listItems += `<li>
                         <a target='_blank' href='${leads[i]}'> ${leads[i]} 
                     </li>`
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads=[];
    renderLeads(myLeads);
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
})



