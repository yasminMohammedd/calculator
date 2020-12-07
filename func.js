let elements=document.getElementsByTagName('button');
let result=document.getElementById('result');

for (let element of elements) {
  if(element.getAttribute("id")==="resultnumber" || element.getAttribute("id")==="clear_result" )
  {
  continue;
  }
  element.addEventListener('click',(event)=>{

// limit the number of digits to 25 digit
if(result.innerText.length<25){
result.innerText+=element.dataset.id;
}
});

}
resultnumber.addEventListener('click',()=>{
try{
  result.innerText=eval(result.innerText);
}catch(error){
    result.innerText="Error";
}
});
clear_result.addEventListener('click',()=>{
result.innerText="";
});
