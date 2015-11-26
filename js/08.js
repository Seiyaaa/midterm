ffunction isLeapYear(yr){
  if (yr %4==0 && yr %100 !=0){
    return true;
  }else if (yr %4 ==0 && yr %100 ==0 && yr %400 != 0){
    return false;
  }else if (yr %4 ==0 && yr %400 == 0){
    return true;
  }else{
    return false;
  }
}
