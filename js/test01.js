
  /* function myFunc(){
  
  var age =prompt("please enter your age");

   if (age > 18) {
 document.write("you can drive ") ;
}else if(age < 18) {
   document.write("sorry you are very joung , you can't drive") ;
}else if(age < 70){
   document.write (" sorry you are very old , you can't drive ");
}else{
   document.write("please write age again ");
}


}

myFunc(); */

var age =prompt("please enter your age");

 class checkAge{
     constructor(){
         this.age = age;
     }
     myFunc(){
  
        
         if (age > 18) {
       document.write("you can drive ") ;
      }else if(age < 18) {
         document.write("sorry you are very joung , you can't drive") ;
      }else if(age < 70){
         document.write (" sorry you are very old , you can't drive ");
      }else{
         document.write("please write age again ");
      }
      
      
      }
 }
 
 let newAge = new checkAge();
 newAge.myFunc();
