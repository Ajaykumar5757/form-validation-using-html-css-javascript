function validationform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var pnumber=document.validateform.pnumber.value;
    var address=document.validateform.address.value;

    if(fname=="" || fname==null){
        alert("first name should not be blank");
        return false;
    }
    else if(lname=="" || lname==null){
        alert("last name should not be blank");
        return false;
    }
    else if(city=="" || city==null){
        alert("city should not be blank");
        return false;
    }
    else if(pnumber=="" || pnumber==null){
        alert("cphone number should not be blank");
        return false;
    }
    else if(pnumber.length!=10){
        alert("Number should contain 10 digits");
        return false;
    }
    else if(address=="" || address==null){
        alert("address should not be blank");
        return false;
    }
    else{
        alert("Form is submitted");
    }
}