let fnameNode,mobileNode,emailNode,countryNode,companyNode,messageNode;
let errorNode1,errorNode3,errorNode4,errorNode2,errorNode5,errorNode6;
$(function(){
     fnameNode=$("#fname");
     mobileNode=$("#contact");
     emailNode=$("#mail");
     countryNode=$("#country");
     companyNode=$("#company");
     messageNode=$("#message")
    
     errorNode1=$("#error1");
     errorNode2=$("#error2");
    
     errorNode3=$("#error3");
     errorNode4=$("#error4");
     errorNode5=$("#error5");
     errorNode6=$("#error6");
     
     let array=[errorNode1,errorNode3,errorNode4,errorNode2,errorNode5,errorNode6];
      for(let node of array){
      node.css({color:"red"});
    }
    fnameNode.blur(()=>validate1());
    mobileNode.blur(()=>validate3());
    emailNode.blur(()=>validate4());
    countryNode.blur(()=>validate2());
    companyNode.blur(()=>validate5());
    messageNode.blur(()=>validate6());
   
    $("#send").submit(()=>validateForm());
    
});


function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    let v5=validate5();
    let v6=validate6();
   
    if(v1 && v2 && v3 && v4 && v5 && v6 ){
        window.alert("message is sended !!!");
    }
    else {
        window.alert("Please fill the form according to Proper formate");
    }

}

function validate1(){
    let fname=fnameNode.val();
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.html("");
    if(fname===''){
        errorNode1.html("<small>First name is required</small>");
        fnameNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(fname)==false){
        errorNode1.html("<small>First name must have only letters</small>");
        fnameNode.css({border:"2px solid red"});
        return false;
    }
    else{
        fnameNode.css({border:"2px solid green"});
        return true;
    }
}
function validate2(){
    let cname=countryNode.val();
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode2.html("");
   
    if(regex.test(cname)==false){
        errorNode2.html("<small>Country Name must have only letters</small>");
        countryNode.css({border:"2px solid red"});
        return false;
    }
    else{
        countryNode.css({border:"2px solid green"});
        return true;
    }
}



function validate3(){
    let mobile=mobileNode.val();
    errorNode3.html("");
    let regex=new RegExp("^[0-9]{10}$");
    console.log(mobile);
    console.log(regex.test("mobile"));
    if(mobile===''){
        errorNode3.html("<small>Mobile number is required</small>");
        mobileNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(mobile)===false){
        errorNode3.html("<small>Mobile number must be 10 digits number</small>");
        mobileNode.css({border:"2px solid red"});
        return false;
    }
    else{
        mobileNode.css({border:"2px solid green"});
        return  true;
    }

}
function validate4(){
    let email=emailNode.val();
    errorNode4.html("");
    if(email===''){
        errorNode4.html("<small>Email is required</small>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode4.html("<small>Please enter valid email</small>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else{
        emailNode.css({border:"2px solid green"});
        return true;
    }
}

function validate5(){
    let cmpname=companyNode.val();
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode5.html("");
    if(cmpname===''){
        errorNode5.html("<small>Company name is required</small>");
        companyNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(cmpname)==false){
        errorNode5.html("<small>Company Name must have only letters</small>");
        companyNode.css({border:"2px solid red"});
        return false;
    }
    else{
        companyNode.css({border:"2px solid green"});
        return true;
    }
}
function validate6(){
    let mesg=messageNode.val();
    errorNode6.html("");
    if(mesg===''){
        errorNode6.html("<small>Some Message  is required</small>");
        messageNode.css({border:"2px solid red"});
        return false;
    }
   
    else{
        messageNode.css({border:"2px solid green"});
        return true;
    }}
