 

  
    // const form=document.getElementById('submit-form')
    // let namess=document.getElementById('names')
    // const email=document.getElementById('email')
    // const subject=document.getElementById('subject')
    // const message=document.getElementById('message')
    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     checkInputs();
    // })

    // function checkInputs(){
    //     // get the values from the imputs
    //     const nameValue=names.value.trim()
    //     const emailValue=email.value.trim()
    //     const subjectValue=subject.value.trim()
    //     const messageValue=message.value.trim()


    //     let formValid=false;

    //     if(nameValue.length>0 && emailValue.match(validRegex) && subjectValue.length>0 && messageValue.length>0){
    //         formValid=true;
    //     }else{
    //         formValid=false;
    //     }

    //     if(nameValue ==='' || nameValue === 'NULL'){
    //         // show error
    //         // add error class
    //         setErrorFor(names,"Subject field can't be empty")
            
    //     }

        
    //     if(subjectValue ==='' || subjectValue === 'NULL'){
    //         // show error
    //         // add error class
    //         setErrorFor(subject,"Subject field can't be empty")
            
    //     }
    //     if(messageValue ==='' || messageValue === 'NULL'){
    //         // show error
    //         // add error class
    //         setErrorFor(message,"Message field can't be empty")
    //     }

    //     if(!emailValue.match(validRegex)){
    //         // show error
    //         // add error class
    //         setErrorFor(email,"Invalid Mail")
    //     }




    //     if(formValid){
    //             // add success
    //             setSuccessFor(names,"Success");
    //             setSuccessFor(subject,"Success");
    //             setSuccessFor(message,"Success");
    //             setSuccessFor(email,"Success");

    //     }

    // }
    // function setErrorFor(input, message){

    //     const formControl = input.parentElement;  //*formcontrol*//
    //     const small = formControl.querySelector('small')

    //     //  add error message inside small

    //     small.innerText = message

    //     // add error class
    //     formControl.className='form-details error'


    // }

    // function setSuccessFor(input, message){

    //     const formControl = input.parentElement;
    //     const small= formControl.querySelector('small')
    //     small.innerText = message
    //     formControl.className='form-details success'
        

    //     // $("#submit-form").submit((e)=>{
    //     //     e.preventDefault()
    //     //     $.ajax({
    //     //         url:"https://script.google.com/macros/s/AKfycbyQY2K-1qz5bhpgKpUSHaPSnuSejdsZDIRu3BueVzOnZDmXEB1it_awmAtK6sYTKLY3kA/exec",
    //     //         data:$("#submit-form").serialize(),
    //     //         method:"post",
    //     //         success:function (response){

                   
    //     //             //window.location.reload()
    //     //             //window.location.href="https://google.com"
    //     //         },
    //     //         error:function (err){
    //     //             alert("Something Error")
    
    //     //         }
    //     //     })
    //     // })

    //     //  add error message inside small

       

    //     // add error class
        
    // }



let form=document.forms[0];
let nameForm=form.names;
let emailForm=form.email
let subjectForm=form.subject
let messageForm=form.message

let formButton=document.querySelector("#form-button");

formButton.disabled=true;
formButton.style.background="grey";


let haveName=false;
let haveEmail=false;
let haveSubject=false;
let haveMessage=false;

nameForm.addEventListener("keyup", e=>{
    let nameValue=e.target.value;
    let nameError=document.querySelector('#name-error')


    let nameRgx=/[0-9]/g;

    nameValue=nameValue.replace(nameRgx, e=>{
        return e='';
    })

    e.target.value=nameValue;

    if(nameValue==''){
        haveName=false;
        nameError.style.display="none"
    }else{
        haveName=true;
        nameError.style.display="none"

    }



})



emailForm.addEventListener("keyup", e=>{
    let emailValue=e.target.value;
    let emailError=document.querySelector("#email-error");

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    emailError.style.display="block";

    if(emailValue.match(validRegex)){
        haveEmail=true;
        emailError.style.display="none";
    }
    else if(emailValue==''){
        emailError.style.display="none";
        haveEmail=false;
    }else{
        haveEmail=false;
    emailError.style.display="block";
    }
}

)


subjectForm.addEventListener("keyup", e=>{
    let subjectValue=e.target.value;
    let subjectError=document.querySelector('#subject-error')

    if(subjectValue==''){
        haveSubject=false;
        subjectError.style.display="block"
    }else{
        haveSubject=true;
        subjectError.style.display="none"
    }
})


messageForm.addEventListener("keyup", e=>{
    let messageValue=e.target.value;
    let subjectError=document.querySelector('#message-error')


    if(messageValue==''){
        haveMessage=false;
        subjectError.style.display="block"
    }else{
        haveMessage=true;
        subjectError.style.display="none"

    }
})


document.addEventListener("keyup", e=>{
    if(haveName && haveMessage && haveEmail && haveSubject){
        formButton.disabled=false;
        formButton.style.background="blue";

    }else{
        formButton.disabled=true;
        formButton.style.background="grey";

    }
})