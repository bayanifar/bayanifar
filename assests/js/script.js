let activeLinks = document.querySelectorAll('.tabs nav .nav-link');
let btnToggle = document.querySelector('.btn-toggle');
let menu = document.querySelector('#menu');
let tabContent = document.querySelectorAll('.tab-content');
// ================ Menu active links ================
    function alireza(e){
        for(let i of activeLinks){
            i.classList.remove("active-link")
        }
        if(e.currentTarget.classList.contains("active-link")) {
            return;
        }else {
            e.currentTarget.classList.add("active-link");
        }
        menu.classList.remove("show");
    }
    
    // Very Important
    function show(e , id){
        let j = new Array();
        for(let i of tabContent){
            id = i.id;
            j.push(id);
        }
        console.log(j)
        for(let i of j){
            document.getElementById(i).classList.remove("show-tabs");
            if(e.currentTarget.classList.contains(i)){
                document.getElementById(i).classList.toggle("show-tabs")
            }
        }
    }

    for(let i of activeLinks){
        i.addEventListener('click' , alireza);
        i.addEventListener('click' , show);
    }

    
    for(let i of tabContent) {
        i.style.display = "none";
    }
    
// ================ Menu Sidebar ================
    btnToggle.addEventListener('click' , function(){
        menu.classList.toggle('show');
    });
// ==============================================

$('.owl-carousel').owlCarousel({
    rtl: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
            loop:false
        }
    }
})  


    


