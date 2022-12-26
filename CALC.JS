
    

let Result;


    

    










 document.getElementById("Plusbtn").onclick = function (){
 let first =   document.getElementById("First").value;
 let second =  document.getElementById("Second").value;
 first = Number(first);
 second = Number(second);
 Result = first + second;
 document.getElementById("Result").innerHTML = `The result is ${Result}`
 
 


    
}

    
























document.getElementById("Minusbtn").onclick = function (){
    let first =   document.getElementById("First").value;
    let second = document.getElementById("Second").value;
    first = Number(first);
    second = Number(second);
    Result = first - second;
    document.getElementById("Result").innerHTML = `The result is ${Result}`
    

   
       
   
}
document.getElementById("Dial").onclick = function (){
    let first =   document.getElementById("First").value;
    let second = document.getElementById("Second").value;
    first = Number(first);
    second = Number(second);
    Result = first / second;
    document.getElementById("Result").innerHTML = `The result is ${Result}`
    if (second === 0){
        
        document.getElementById("Result").innerHTML = `You are a cheater`;
        
    }
    
   
       
   }
document.getElementById("Epi").onclick = function (){
    let first =   document.getElementById("First").value;
    let second = document.getElementById("Second").value;
    first = Number(first);
    second = Number(second);
    Result = first * second;
    document.getElementById("Result").innerHTML = `The result is ${Result}`


   
       
   }
   


