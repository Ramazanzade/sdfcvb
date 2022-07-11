














let for1=['An item']
let data=""

for(let i=0;i<for1.length;i++){
    data+=`<li>${for1[i]}</li>`
}
document.getElementById("list").innerHTML = data;








let for2=['An item','A second item']
let data2=""

for(let key in for2){
    data2+=`<li>${for2[key]}</li>`
}

document.getElementById("list").innerHTML = data2;




let for3=['An item','A second item','A third item']
let data3=""

for(let one of for3){
    data3+=`<li>${one}</li>`
}
document.getElementById("list").innerHTML = data3;



let for4=['An item','A second item','A third item','A fourth item']
let data4=""

for4.forEach( (one1)=>{
    data4+=`<li>${one1}</li>`

})

document.getElementById("list").innerHTML = data4;





function on(){
    let arr=[ ];
    let inp=document.getElementById("to");
arr.push(inp.value);
//console.log(arr);
document.getElementById("io").innerHTML=arr;
if( inp.value==arr.push){
    document.getElementById("io").innerHTML=arr;
}else{
    alert('Yazi daxil edin')
}
}
//document.getElementById("to").innerHTML=arr;