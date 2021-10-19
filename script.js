console.log("heloo world");
const main=document.getElementById('main');
const adduserbtn=document.getElementById('adduser');
const doublebtn=document.getElementById('double');
const Showmillionairesbtn=document.getElementById('Showmillionaires');
const sortbtn=document.getElementById('sort');
const calculatebtn=document.getElementById('calculate');
randomuser();
randomuser();
randomuser();
let data=[];
//fetch random user and add money
async function randomuser(){
    let res=await fetch('https://randomuser.me/api/');
    let data=await res.json();
 const user=data.results[0];
 
const newuser={
    name:`${user.name.first} ${user.name.last}`,
    money:Math.floor(Math.random()*1000000)
};
addData(newuser);
};
//add new obj to new array
function addData(obj){
data.push(obj);
updateDOM();
};

//updating dom
function updateDOM(providedData=data){
//clear div
main.innerHTML='<h2><strong>Person</strong>wealth</h2>';
}
providedData.forEach((item) => {
    const element=document.createElement('div');
    element.classList.add('person');
    element.innerHTML='<strong>${item.name} </strong>${item.money}`;
});

