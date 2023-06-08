// "use strict";
window.onload = function (){

    let navbar = document.querySelector('.navbar');

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');

    }

    window.onscroll = () =>{
        navbar.classList.remove('active');
    }


    // hidden

    let bouton = document.getElementById("hide");
    let contenu = document.getElementById("contenu");



    bouton.addEventListener("click", function() {
        console.log('hide clicked');
        navbar.classList.remove('active');
        // bouton.textContent = "Moins";
        contenu.classList.toggle('active');
        // contenu.classList.remove('active');
        // if (contenu.style.display == "none") {
        //     contenu.style.display = "block";
        //     bouton.textContent = "Moins";
        // console.log('hide clicked ==> block');

        // } else {
        //     contenu.style.display = "none";
        //     bouton.textContent = "Plus";
        // console.log('hide clicked => hide');

        // }
    });


 

}
//  caroussel

$(document).ready(function() {
 
    $("#owl-example").owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        autoPlay: true,
        autoplayTimeout:1000,
        dots: true,
        items :2,
        singleItem : true,
        responsive: true,
        itemsScaleUp : true,
        stagePadding: 0,
 
        //Basic Speeds
        slideSpeed : 200,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
       
    });
   
});



//    send Email
function sendEmail(){
    Email.send({
        SecureToken : "5ee740eb-f8c0-4b6c-b90d-e3da5240c068",
        To : 'jeannotkamabu@gmail.com',
        From : 'nicleonic2.0@gmail.com',
        Subject : "NTI Site Message",
        Body : `
        Nom : ${document.getElementById("userName").value} <br> 
        Email : ${document.getElementById("userMail").value} <br> 
        Contact : ${document.getElementById("userNumber").value} <br> 
        Message : ${document.getElementById("userMessage").value}`
    }).then(
        () => alert("Message sent successfully <br> Message envoyé avec succès")
    );

}




// function mailSender(){
//     var params ={
//         name : document.getElementById("userName").value,
//         email : document.getElementById("userMail").value,
//         message : document.getElementById("userMessage").value,
//     };

//     const serviceID = "service_loouxw6";
//     const templateID = "template_ht2p3qy";

    // emailjs.send("service_loouxw6","template_ht2p3qy",{
    //     name: "heyTTT",
    //     mail: "Heynetlyfi@gmail.com",
    //     message: "Hey Jo",
    // });

    // emailjs.send(serviceID,templateID,params).then((res)=>{
    // document.getElementById("userName").value = "";
    // document.getElementById("userMail").value = "";
    // document.getElementById("userMessage").value = "";
//     console.log(res);
//     alert("Success");
//     }).catch((err)=> console.log(err));
// }