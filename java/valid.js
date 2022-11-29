const FirstName = document.getElementById (fname)


function checkifLetters(field){
    if(/^[a-zA-Z]+$/.test(field.value)){
    setValid(field);
    return true;
}else{
    setInvalid(field, '${field.name} must contain letters') 
}
}
