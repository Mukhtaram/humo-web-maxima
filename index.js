// const header = document.querySelector("header");
// const body = document.querySelector("body")

// const options = {

// }

// const observer = new IntersectionObserver( entries => {
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             header.classList.remove("changeColor")
//         }   else{
//             header.classList.add("changeColor")
//         }
//     })
// }, options)
// observer.observe(header)

// .header-light

// .header-dark {
//     dasfad
// }
// const header = document.querySelector("header");
// if(data-section-header-color == light){
//     header setBackground [UIColor ]
// }

// var top1 = $('#section1').offset().top;
// var top2 = $('#section2').offset().top;

// $(document).scroll(function() {
//     var scrollPos = $(document).scrollTop();
//     if (scrollPos >= top1 && scrollPos < top2) {
//       $('#change').css('background-color', '#f00');
//     } else {
//         $('#change').css('background-color', 'black');
//       }});

    var top1 = $('#section1').offset().top;
    var top2 = $('#section2').offset().top;
    var top3 = $('#toolssection').offset().top;

      $(document).scroll(function() {
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= top1 && scrollPos < top2) {
          $('#change').css('background-color', '#000');
        } else if (scrollPos >= top2 && scrollPos < top3) {
          $('#change').css('background-color', '#0f0');
        } else if (scrollPos >= top3) {
          $('#change').css('background-color', '#00f');
        }
      });