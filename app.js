let StudentName = prompt('Please enter your name');
if (StudentName=="") {
    alert(`you have to enter your name !! `);  
    StudentName=prompt('Please enter your name');
}

function isNumber(str) {
    return !!( 
      str && 
      str.match(/^\d+$/)); 
  }
  if (isNumber(StudentName)) {
    do {
      alert('wrong,plrase try again');
      StudentName=prompt('Please enter your name');
    }
    while (isNumber(StudentName));
  }


        StudentMark = prompt(`Welcome ${StudentName}.\nPlease enter your mark !`)
        result = Math.floor(StudentMark)
       


if (result<0) {
   
       
        alert(`The mark ${StudentMark} is less than zero !! `);  
     
        StudentMark = prompt(`Welcome ${StudentName}.\nPlease enter your mark again!`)
        result = Math.floor(StudentMark)
        
        
  
}   

if (result>100) {
    alert(`The mark ${StudentMark} is more than 100 !! `);  
    StudentMark = prompt(`Welcome ${StudentName}.\nPlease enter your mark again!`)
        result  = Math.floor(StudentMark)
       
 }


 if (result=="" && result !=0) {
    alert(`The mark field is empty mustn't be Null !! `);  
    StudentMark = prompt(`Welcome ${StudentName}.\nPlease enter your mark again!`)
        result =Math.floor(StudentMark)
       
 }



if (result>=0 && result<=49) {
    alert(`The mark ${StudentMark} is equal to the academic grade ( F )\n\n                             YOU FAILED \n\n                      Better luck next time!`);  
} else{

if (result>=50 && result<=60) {
    alert(`The mark ${StudentMark} is equal to the academic grade ( D )\n\n                             YOU PASSED \n\n                               Congrats!`);  
}
}


if (result>=61 && result<=70) {
    alert(`The mark ${StudentMark} is equal to the academic grade ( C )\n\n                             YOU PASSED \n\n                               Congrats!`);  
} else{

if (result>=71 && result<=80) {
    alert(`The mark ${StudentMark} is equal to the academic grade ( B )\n\n                             YOU PASSED \n\n                               Congrats!`);  
}
}



if (result>=81 && result<=90) {
    alert(`The mark ${StudentMark} is equal to the academic grade ( A )\n\n                             YOU PASSED \n\n                               Congrats!`);  
} else{

if (result>=91 && result<=100) {
    alert(`The mark ${StudentMark} is equal to the academic grade ( A+ )\n\n                             YOU PASSED \n\n                               Congrats!`);  
}
}