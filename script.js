var cover2= document.querySelector("#cover2");
var cursor= document.querySelector("#cursor");
console.log(cursor)

document.addEventListener("mousemove",function(dets){
    cursor.style.top=dets.y+10+"px"
    cursor.style.left=dets.x+10+"px"
    
})




// GSAP 
gsap.from("#cover2 nav",{
    z:-20,
    opacity:0,
    delay:1.8,
});
gsap.from(".cover .container span",{
    x:-200,
    opacity:0,
    delay:0.5,
    stagger:.5,
    rorate:60,
});
gsap.from(".cover .button",{
    y:-10,
    opacity:1,
    duration:2,
    delay:2.5,
    // stagger:.5,
    // rorate:60,
});


//page2 img code

gsap.from(".page2 .left img",{
    y:150,
        opacity:1,
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top -100%",
        // pin:true,
        scrub:3
    }

})

//page6 image 
gsap.from("#btm #image",{
    y:150,
        opacity:1,
    scrollTrigger:{
        trigger:"#btm ",
        scroller:"body",
        // markers:true,
        start:"top 5%",
        end:"top -120%",
        // pin:true,
        scrub:3
    }

})



//last email 

gsap.from("#page8 #center ",{
x:-70,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page8 ",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -80%",
        // pin:true,
        scrub:2
    }

})

gsap.from("#page8 #bottom ",{
    x:70,
    // stagger:.5,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:"#page8 ",
            scroller:"body",
            // markers:true,
            start:"top 0%",
            end:"top -80%",
            // pin:true,
            scrub:2
        }
    
    })


// gsap.from(".page2 .left img",{
//     y:40,
//     opacity:1,
//     duration:1.5,
//     // delay:1.8,
// });


// gsap.from(".page2 .right h1",{
//     x:20,
//     opacity:0,
//     delay:.5,
// });

gsap.from(".page2 .right h1",{
    x:20,
    opacity:0,
    duration:1.5,
    
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top -50%",
        // pin:true,
        // scrub:2
    }

})



// gsap.from(".page2 .right p",{
//     x:20,
//     opacity:0,
//     delay:.9,
// });


gsap.from(".page2 .right p",{
    x:20,
    opacity:0,
    duration:1.5,
    
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        // markers:true,
        start:"top 35%",
        end:"top 0%",
        // pin:true,
        // scrub:2
    }

})


gsap.from(".page3 #img",{
    x:20,
    opacity:1,
    duration:1.5,
    width:"15%",
    // borderRaduis:"0%",
    
    scrollTrigger:{
        trigger:".page3 ",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -80%",
        pin:true,
        scrub:2
    }

})



