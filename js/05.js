function fizzbuzz(fizbuz){
    if (fizbuz %15 ==0){
      return "fizzbuzz";
    }else if (fizbuz%5==0){
     return "buzz";
   }else if(fizbuz%3==0){
     return "fizz";
}else{
   return fizbuz;
  }
}
