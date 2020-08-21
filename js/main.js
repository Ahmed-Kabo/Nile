

//start search 

let search = document.getElementById("search");
let search_content =  document.getElementById("search_content");
let exit_search  = document.getElementById("exit-search")

search.addEventListener('click',()=>{
    search_content.classList.add('slid');
});

exit_search.addEventListener('click',()=>{
    search_content.classList.remove('slid');
});


//start button to top 

let mybutton = document.getElementById("toTop")

window.onscroll = ()=> {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop >400){
        mybutton.style.visibility = "visible";
    }else{
        mybutton.style.visibility = "hidden";
    }
}

mybutton.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});  








//start the animation when scroll 


gsap.timeline({
    scrollTrigger:{
        trigger:"#about_us",
        start:'top center ',
        end:"bottom top",
    
        
    }
})

.from(".main-heading",{scale: .9, opacity:0,duration:.5}) 
.from(".about-content",{y:100, opacity:0,duration:.5})

gsap.timeline({
    scrollTrigger:{
        trigger:"#supporting",
        start:'top center ',
        end:"bottom top",
     

        
    }
})
.from("#support_heading",{x: 100, opacity:0,duration:.5})
.from("#support_pragraph",{x:-100, opacity:0,duration:.5})
.from("#support_button",{y:40, opacity:0,duration:.3})

gsap.timeline({
    scrollTrigger:{
        trigger:"#service",
        start:'top center ',
        end:"+=1200",
        
   

        
    }
})
.from("#service_heading",{scale:0.9, opacity:0 ,duration:.5})
.from("#service_pragraph",{y:100, opacity:0,duration:.5})
.from("#service_services",{y:100, opacity:0,duration:.5})



gsap.timeline({
    scrollTrigger:{
        trigger:"#our_team",
        start:'top center ',
        end:"+=1200", 
    }
})
.from("#team_content",{scale:0.9, opacity:0,duration:.5},"+=1")

gsap.timeline({
    scrollTrigger:{
        trigger:"#testimonials",
        start:'top center ',
        end:"bottom top",

        
    }
})
.from("#testimonials_heading",{scale:0.9, opacity:0,duration:.4})
.from("#testimonials_carousel",{x:-100, opacity:0,duration:.4})




gsap.timeline({
    scrollTrigger:{
        trigger:"#wellness",
        start:'top center ',
        end:"bottom top",


        
    }
})
.from("#wellness_heading",{x: -100, opacity:0,duration:.3})
.from("#wellness_pragraph",{x:100, opacity:0,duration:.3})
.from("#wellness_button",{y:100, opacity:0,duration:.3},"+=.5")



gsap.timeline({
    scrollTrigger:{
        trigger:"#blog",
        start:'top center ',
        end:"bottom center",

        
    }
})
.from("#blog_heading",{scale:0.8, opacity:0,duration:.2})
.from("#blog_content",{scale:0.8, opacity:0,duration:.8})
.from("#blog_button",{y:50, opacity:0,duration:.3})



