window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)




        //
        // if(scrollTop >= 10){
        //
        //     $('.title').addClass('on');
        // }


        //
        // if(scrollTop >= 67){
        //
        //     $('.title2').addClass('on');
        // }
        //
        //
        //
        // if(scrollTop >= 150){
        //
        //     $('.title3').addClass('on');
        // }
        //
        //
        // if(scrollTop >= 5){
        //
        //     $('.title4').addClass('on');
        // }


        if(scrollTop >= 100){

            $('.title5').addClass('on');
        }

    if(scrollTop >= 200){

            $('.title6').addClass('on');
        }




        if(scrollTop >= 700){

            $('.contents').addClass('on');
        }

        if(scrollTop >= 700){

            $('.contents2').addClass('on');
        }

        if(scrollTop >= 800){

            $('.contents3').addClass('on');
        }

    if(scrollTop >= 800){

            $('.contents4').addClass('on');
        }

    if(scrollTop >= 1000){

            $('.contents5').addClass('on');
        }

  if(scrollTop >= 1100){

            $('.contents6').addClass('on');
        }

  if(scrollTop >= 1000){

            $('.contents7').addClass('on');
        }

  if(scrollTop >= 1200){

            $('.contents8').addClass('on');
        }

  if(scrollTop >= 1200){

            $('.contents9').addClass('on');
        }

  if(scrollTop >= 1500){

            $('.contents10').addClass('on');
        }

 if(scrollTop >= 1800){

            $('.contents11').addClass('on');
        }

 if(scrollTop >= 2500){

            $('.contents12').addClass('on');
        }

 if(scrollTop >= 2000){

            $('.contents13').addClass('on');
        }

 if(scrollTop >= 3000){

            $('.contents14').addClass('on');
        }



 if(scrollTop >= 3000){

            $('.mainpage').addClass('on');
        }

 if(scrollTop >= 3200){

            $('.mainpage2').addClass('on');
        }

 if(scrollTop >= 3500){

            $('.mainpage3').addClass('on');
        }

 if(scrollTop >= 4000){

            $('.mainpage4').addClass('on');
        }

 if(scrollTop >= 4200){

            $('.mainpage5').addClass('on');
        }

 if(scrollTop >= 4500){

            $('.mainpage6').addClass('on');
        }

 if(scrollTop >= 4800){

            $('.mainpage7').addClass('on');
        }




 if(scrollTop >= 5200){

            $('.contents2-2').addClass('on');
        }

 if(scrollTop >= 5300){

            $('.contents2-3').addClass('on');
        }

 if(scrollTop >= 5300){

            $('.contents2-4').addClass('on');
        }

 if(scrollTop >= 5700){

            $('.contents2-5').addClass('on');
        }

 if(scrollTop >= 5700){

            $('.contents2-6').addClass('on');
        }

 if(scrollTop >= 5700){

            $('.contents2-7').addClass('on');
        }

 if(scrollTop >= 7200){

            $('.analvsis2').addClass('on');
        }

 if(scrollTop >= 7400){

            $('.analvsis3').addClass('on');
        }

 if(scrollTop >= 7600){

            $('.analvsis4').addClass('on');
        }

 if(scrollTop >= 7800){

            $('.analvsis5').addClass('on');
        }

 if(scrollTop >= 7300){

            $('.analvsis6').addClass('on');
        }

 if(scrollTop >= 7000){

            $('.analvsis7').addClass('on');
        }


 if(scrollTop >= 7000){

            $('.asistobe2').addClass('on');
        }

 if(scrollTop >= 7400){

            $('.asistobe3').addClass('on');
        }

 if(scrollTop >= 7700){

            $('.asistobe4').addClass('on');
        }

 if(scrollTop >= 7500){

            $('.asistobe5').addClass('on');
        }

 if(scrollTop >= 7000){

            $('.asistobe6').addClass('on');
        }

 if(scrollTop >= 7300){

            $('.asistobe7').addClass('on');
        }

 if(scrollTop >= 7600){

            $('.asistobe8').addClass('on');
        }

 if(scrollTop >= 7800){

            $('.asistobe9').addClass('on');
        }

 if(scrollTop >= 8000){

            $('.asistobe10').addClass('on');
        }


 if(scrollTop >= 8300){

            $('.asistobe11').addClass('on');
        }

 if(scrollTop >= 8600){

            $('.asistobe12').addClass('on');
        }


 if(scrollTop >= 8900){

            $('.keyword2').addClass('on');
        }

if(scrollTop >= 8900){

            $('.keyword3').addClass('on');
        }

if(scrollTop >= 9300){

            $('.keyword4').addClass('on');
        }

if(scrollTop >= 9300){

            $('.keyword5').addClass('on');
        }

if(scrollTop >= 9600){

            $('.keyword6').addClass('on');
        }























 if(scrollTop >= 10000){

            $('.mainpage2-1').addClass('on');
        }

 if(scrollTop >= 10050){

            $('.mainpage2-2').addClass('on');
        }

 if(scrollTop >= 11000){

            $('.mainpage2-3').addClass('on');
        }

 if(scrollTop >= 11500){

            $('.mainpage2-4').addClass('on');
        }

 if(scrollTop >= 11800){

            $('.mainpage2-5').addClass('on');
        }

 if(scrollTop >= 12200){

            $('.mainpage2-6').addClass('on');
        }

 if(scrollTop >= 14000){

            $('.mainpage2-7').addClass('on');
        }


 if(scrollTop >= 14500){

            $('.mainpage2-8').addClass('on');
        }

 if(scrollTop >= 14800){

            $('.mainpage2-9').addClass('on');
        }

 if(scrollTop >= 15000){

            $('.mainpage2-10').addClass('on');
        }

 if(scrollTop >= 13000){

            $('.mainpage2-11').addClass('on');
        }

 if(scrollTop >= 17000){

            $('.rayout').addClass('on');
        }

 if(scrollTop >= 17200){

            $('.rayout2').addClass('on');
        }

 if(scrollTop >= 17000){

            $('.rayout3').addClass('on');
        }

 if(scrollTop >= 17500){

            $('.rayout4').addClass('on');
        }


 if(scrollTop >= 17500){

            $('.rayout2-1').addClass('on');
        }

 if(scrollTop >= 17500){

            $('.rayout2-2').addClass('on');
        }

 if(scrollTop >= 19000){

            $('.rayout2-3').addClass('on');
        }

 if(scrollTop >= 19000){

            $('.rayout2-4').addClass('on');
        }

 if(scrollTop >= 19000){

            $('.rayout2-5').addClass('on');
        }

 if(scrollTop >= 19000){

            $('.rayout2-6').addClass('on');
        }

 if(scrollTop >= 19000){

            $('.rayout2-7').addClass('on');
        }

 if(scrollTop >= 19000){

            $('.sub_about').addClass('on');
        }

 if(scrollTop >= 21000){

            $('.sub_about2').addClass('on');
        }

 if(scrollTop >= 19000){

            $('.marquee').addClass('on');
        }

if(scrollTop >= 23000){

            $('.sub_about3').addClass('on');
        }

if(scrollTop >= 23500){

            $('.sub_about4').addClass('on');
        }

if(scrollTop >= 23700){

            $('.sub_about5').addClass('on');
        }






 if(scrollTop >= 25000){

            $('.rayout3-1').addClass('on');
        }


if(scrollTop >= 26000){

        $('.rayout3-2').addClass('on');
    }

if(scrollTop >= 27000){

        $('.rayout3-3').addClass('on');
    }
if(scrollTop >= 27500){

        $('.rayout3-4').addClass('on');
    }
if(scrollTop >= 28000){

        $('.rayout3-5').addClass('on');
    }
if(scrollTop >= 28500){

        $('.rayout3-6').addClass('on');
    }



 if(scrollTop >= 29000){

        $('.products2').addClass('on');
    }

if(scrollTop >= 30000){

         $('.products3').addClass('on');
    }
 if(scrollTop >= 31000){

         $('.products4').addClass('on');
   }
 if(scrollTop >= 31000){

        $('.products5').addClass('on');
    }


 if(scrollTop >= 32000){

      $('.rayout4-2').addClass('on');
   }

 if(scrollTop >= 33000){

      $('.rayout4-3').addClass('on');
   }

 if(scrollTop >= 34000){

      $('.rayout4-4').addClass('on');
   }

 if(scrollTop >= 33000){

      $('.rayout4-5').addClass('on');
   }

 if(scrollTop >= 35000){

      $('.collection2').addClass('on');
   }
 if(scrollTop >= 35600){

      $('.collection3').addClass('on');
   }
 if(scrollTop >= 36300){

      $('.collection4').addClass('on');
   }

 if(scrollTop >= 37200){

      $('.collection5').addClass('on');
   }

 if(scrollTop >= 40700){

      $('.news2').addClass('on');
   }

 if(scrollTop >= 40700){

      $('.news3').addClass('on');
   }

 if(scrollTop >= 41200){

      $('.news4').addClass('on');
   }

 if(scrollTop >= 42500){

      $('.news5').addClass('on');
   }

 if(scrollTop >= 44600){

      $('.end_txt01').addClass('on');
   }

 if(scrollTop >= 44800){

      $('.end_txt02').addClass('on');
   }

 if(scrollTop >= 45000){

      $('.end_txt03').addClass('on');
   }



 if(scrollTop >= 44000){

      $('.end2').addClass('on');
   }
 if(scrollTop >= 42500){

      $('.end3').addClass('on');
   }

 if(scrollTop >= 45000){

      $('.end4').addClass('on');
   }

 if(scrollTop >= 46500){

      $('.end5').addClass('on');
   }


 if(scrollTop >= 47000){

      $('.end6').addClass('on');
   }

 if(scrollTop >= 47500){

      $('.end7').addClass('on');
   }

 if(scrollTop >= 49600){

      $('.ft_title').addClass('on');
   }

 if(scrollTop >= 49900){

      $('.ft_title2').addClass('on');
   }























        if(scrollTop >= 1400){

            $('.block').addClass('on');
        }


    
    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


        setTimeout(()=>{
            $('.title').addClass('on');
        },10)

        setTimeout(()=>{
            $('.title2').addClass('on');
        },200)

        setTimeout(()=>{
            $('.title3').addClass('on');
        },300)

        setTimeout(()=>{
            $('.title4').addClass('on');
        },300)

/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
