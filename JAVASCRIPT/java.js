
   var intervalId = null;
   var isRunning =false;
   

function generatenumber(){
   if(!isRunning){
   //start loop
   intervalId=setInterval(()=>{
      for(let i=1; i<=5;i++){



         var random = Math.floor(Math.random() * 100)+1;
          document.getElementById("n"+i).innerHTML=random;
      }
   },100);
   document.getElementById("btn").innerHTML="Start";
   isRunning = true ;
   }else{
      //stop loop
      clearInterval(intervalId);
      document.getElementById("btn").innerHTML = "Stop";
      isRunning = false;
   }
   
}