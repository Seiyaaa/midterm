function isPrimeNumber(n){
   if(n==1) return false;
   for(i=2;i<n;i++){
      if(n%i==0){
         return false;
         break;
      }
   }
   return true;
}
