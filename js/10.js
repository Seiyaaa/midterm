function toOrdinalNumber(n){
 if(4<=n && n<=20)
  return n+"th";
 switch(n-Math.floor(n/10)*10){
  case 1:
   return n+"st";
   break;
  case 2:
   return n+"nd";
   break;
  case 3:
   return n+"rd";
   break;
  default:
   return n+"th";
 }
}
