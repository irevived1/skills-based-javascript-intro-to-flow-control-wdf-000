function basicTeenager(age) {
  if ( age < 20 && age > 12 ) {
    return 'You are a teenager!';
  }
}

function teenager(age) {
  if ( age < 20 && age > 12 ) {
    return 'You are a teenager!';
  } else {
    return 'You are not a teenager';
  }
}

function ageChecker(age) {
  if ( age < 20 && age > 12 ) {
    return 'You are a teenager!';
  } else if ( age < 13 )  {
    return 'You are a kid';
  } else if ( age > 19 ) {
    return 'You are a grownup'
  }
  else{
    return 'You are not a teenager';
  }
}

function ternaryTeenager(age) {
  // if ( age < 20 && age > 12 ) {
  //   return 'You are a teenager';
  // } else if ( age < 13 )  {
  //   return 'You are kid';
  // }
  // else{
  //   return 'You are not a teenager';
  // }
  return ( age < 20 && age > 12 )  ? ( 'You are a teenager') : ( 'You are not a teenager') ;
}

function switchAge(age) {
  // if ( age < 20 && age > 12 ) {
  //   return 'You are a teenager';
  // } else if ( age < 13 )  {
  //   return 'You are kid';
  // } else if ( age > 19 ) {
  //   return 'You have an age'
  // }
  // else{
  //   return 'You are not a teenager';
  // }

  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return 'You are a teenager'; 
      break;
    
    default:
      return 'You have an age';
      break; 
  }
}
