$('.ft_map_wrp_adL li').on('mouseenter', function() {
    var text_ = $(this).children('p').html();
    //alert($(this).children().html())
    $('.ftaddress').children('p').html(text_);
})

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $('.header').addClass('head_fix');
        //$('.banner').css('margin-top',hedheight);
    } else {
        $('.header').removeClass('head_fix');
        //$('.banner').css('margin-top','0');
    }
});
/*
$( window ).scroll(function() {
	var headers = $('.header').height();
	var scroll = $(window).scrollTop();
	if(scroll >= (headers)){
		$('.header').addClass('headFix');
		$('.banner').css('margin-top',headers);
	}else{
		$('.header').removeClass('headFix');
		$('.banner').css('margin-top','0');
	}			
});*/

/*$(".accordion_serv .accordion-item  .accordion-button").on("click",function(b){
	var a=$(this).attr("data-bs-target");$("html, body").animate({scrollTop:$(a).offset().top},"slow")
});*/
var $animation_elements = $('.animateX-left, .animateX-right, .animate,.hm_abt_cols_row, .hm_serv_wrp_list,.giving_edge_list');
var $window = $(window);
$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
    var window_height = $window.height() / 1.2;
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        //var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        //var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if (element_top_position <= window_bottom_position) {
            $element.addClass('active');
        } else {
            $element.removeClass('active');
        }
    });
}

// function handleFileSelect(event) {
//     const fileInput = event.target;
//     const filenameDisplay = document.getElementById("filename");

//     if (fileInput.files && fileInput.files.length > 0) {
//         const filename = fileInput.files[0].name;
//         filenameDisplay.textContent = "Selected file: " + filename;
//     } else {
//         filenameDisplay.textContent = "";
//     }
// }

// window.addEventListener("load", function(){
//     this.setTimeout(
//         function open(event){
//             document.querySelector(".popup").style.display = "block"; 
//         },
//         2000
//     )
// });

// document.querySelector("#close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display ="none"
// });




// window.addEventListener("load", function(){
//     this.setTimeout(
//         function open(event){
//             var popup = document.querySelector(".popup");
//             popup.style.display = "block";

//             // Set a timeout to close the popup after 5 seconds
//             setTimeout(function(){
//                 popup.style.display = "none";
//             }, 5000);
//         },
//         2000
//     );
// });

// document.querySelector("#close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// });

window.addEventListener("load", function(){
    setTimeout(function open(event){
        var popup = document.querySelector(".popup");
        popup.style.display = "block";
        popup.style.opacity = 1;

        // Set a timeout to close the popup after 5 seconds
        setTimeout(function(){
            popup.style.opacity = 0;
            // Use another timeout to change display property after opacity transition
            setTimeout(function() {
                popup.style.display = "none";
            }, 500); // Match this duration with the CSS transition duration
        }, 5000);
    }, 2000);
});

document.querySelector("#close").addEventListener("click", function(){
    var popup = document.querySelector(".popup");
    popup.style.opacity = 0;
    setTimeout(function() {
        popup.style.display = "none";
    }, 500); // Match this duration with the CSS transition duration
});









  
