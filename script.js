 

  
    const form=document.getElementById('submit-form')
    let namess=document.getElementById('names')
    const email=document.getElementById('email')
    const subject=document.getElementById('subject')
    const message=document.getElementById('message')
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    })

    function checkInputs(){
        // get the values from the imputs
        const nameValue=names.value.trim()
        const emailValue=email.value.trim()
        const subjectValue=subject.value.trim()
        const messageValue=message.value.trim()


        let formValid=false;

        if(nameValue.length>0 && emailValue.match(validRegex) && subjectValue.length>0 && messageValue.length>0){
            formValid=true;
        }else{
            formValid=false;
        }

        if(nameValue ==='' || nameValue === 'NULL'){
            // show error
            // add error class
            setErrorFor(names,"Subject field can't be empty")
            
        }

        
        if(subjectValue ==='' || subjectValue === 'NULL'){
            // show error
            // add error class
            setErrorFor(subject,"Subject field can't be empty")
            
        }
        if(messageValue ==='' || messageValue === 'NULL'){
            // show error
            // add error class
            setErrorFor(message,"Message field can't be empty")
        }

        if(!emailValue.match(validRegex)){
            // show error
            // add error class
            setErrorFor(email,"Invalid Mail")
        }




        if(formValid){
                // add success
                setSuccessFor(names,"Success");
                setSuccessFor(subject,"Success");
                setSuccessFor(message,"Success");
                setSuccessFor(email,"Success");

        }

    }
    function setErrorFor(input, message){

        const formControl = input.parentElement;  //*formcontrol*//
        const small = formControl.querySelector('small')

        //  add error message inside small

        small.innerText = message

        // add error class
        formControl.className='form-details error'


    }

    function setSuccessFor(input, message){

        const formControl = input.parentElement;
        const small= formControl.querySelector('small')
        

        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbyQY2K-1qz5bhpgKpUSHaPSnuSejdsZDIRu3BueVzOnZDmXEB1it_awmAtK6sYTKLY3kA/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    small.innerText = message
                    formControl.className='form-details success'
                    //window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })

        //  add error message inside small

       

        // add error class
        
    }



