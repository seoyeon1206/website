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
        //     $('.main').addClass('on');
        // }
        //
        //
        //
        // if(scrollTop >= 67){
        //
        //     $('.main2').addClass('on');
        // }
        //



        if(scrollTop >= 400){

            $('.overview').addClass('on');
        }


        if(scrollTop >= 200){

            $('.overview2').addClass('on');
        }

        if(scrollTop >= 200){

            $('.overview3').addClass('on');
        }

        if(scrollTop >= 600){

            $('.overview4').addClass('on');
        }

     if(scrollTop >= 700){

            $('.overview5').addClass('on');
        }

    if(scrollTop >= 900){

            $('.overview6').addClass('on');
        }

    if(scrollTop >= 1500){

            $('.keyword').addClass('on');
        }

    if(scrollTop >= 1900){

            $('.keyword2').addClass('on');
        }

    if(scrollTop >= 2100){

            $('.keyword3').addClass('on');
        }

    if(scrollTop >= 2000){

            $('.keyword4').addClass('on');
        }

    if(scrollTop >= 1700){

            $('.keyword5').addClass('on');
        }

    if(scrollTop >= 2300){

            $('.asistobe').addClass('on');
        }

    if(scrollTop >= 2500){

            $('.asistobe2').addClass('on');
        }

    if(scrollTop >= 1400){

            $('.asistobe0').addClass('on');
        }


      if(scrollTop >= 3000){

            $('.persona').addClass('on');
        }


      if(scrollTop >= 3000){

            $('.persona2').addClass('on');
        }


      if(scrollTop >= 3300){

            $('.persona3').addClass('on');
        }

      if(scrollTop >= 3300){

            $('.persona4').addClass('on');
        }

      if(scrollTop >= 3500){

            $('.persona5').addClass('on');
        }

      if(scrollTop >= 3500){

            $('.persona6').addClass('on');
        }

      if(scrollTop >= 4500){

            $('.jnmap').addClass('on');
        }

      if(scrollTop >= 4700){

            $('.jnmap2').addClass('on');
        }

      if(scrollTop >= 4800){

            $('.jnmap3').addClass('on');
        }

      if(scrollTop >= 4900){

            $('.jnmap4').addClass('on');
        }

      if(scrollTop >= 5000){

            $('.jnmap5').addClass('on');
        }


      if(scrollTop >= 4800){

            $('.imgrd').addClass('on');
        }

      if(scrollTop >= 4800){

            $('.imgrd2').addClass('on');
        }


      if(scrollTop >= 6300){

            $('.preview0').addClass('on');
        }

      if(scrollTop >= 6500){

            $('.preview').addClass('on');
        }

      if(scrollTop >= 6800){

            $('.preview2').addClass('on');
        }

      if(scrollTop >= 7200){

            $('.preview3').addClass('on');
        }

      if(scrollTop >= 7500){

            $('.preview4').addClass('on');
        }

      if(scrollTop >= 8000){

            $('.preview5').addClass('on');
        }

      if(scrollTop >= 8500){

            $('.stylegd').addClass('on');
        }

      if(scrollTop >= 8500){

            $('.stylegd2').addClass('on');
        }
      if(scrollTop >= 8900){

            $('.stylegd3').addClass('on');
        }

      if(scrollTop >= 9300){

            $('.stylegd4').addClass('on');
        }
      if(scrollTop >= 9800){

            $('.stylegd5').addClass('on');
        }

        if(scrollTop >= 9800){

            $('.stylegd6').addClass('on');
        }
        if(scrollTop >= 10000){

            $('.stylegd7').addClass('on');
        }

        if(scrollTop >= 10200){

            $('.stylegd8').addClass('on');
        }

        if(scrollTop >= 10400){

            $('.stylegd9').addClass('on');
        }

        if(scrollTop >= 9800){

            $('.stylegd10').addClass('on');
        }
        if(scrollTop >= 10000){

            $('.stylegd11').addClass('on');
        }

        if(scrollTop >= 10200){

            $('.stylegd12').addClass('on');
        }

        if(scrollTop >= 10400){

            $('.stylegd13').addClass('on');
        }

        if(scrollTop >= 11200){

            $('.flowct').addClass('on');
        }


        if(scrollTop >= 12500){

            $('.wirefm').addClass('on');
        }
        if(scrollTop >= 12000){

            $('.wirefm2').addClass('on');
        }

        if(scrollTop >= 14000){

            $('.imgrd2-0').addClass('on');
        }

        if(scrollTop >= 14200){

            $('.imgrd2-1').addClass('on');
        }

        if(scrollTop >= 14400){

            $('.imgrd2-2').addClass('on');
        }

        if(scrollTop >= 15000){

            $('.splash').addClass('on');
        }

        if(scrollTop >= 15200){

            $('.splash2').addClass('on');
        }

        if(scrollTop >= 15400){

            $('.splash3').addClass('on');
        }

        if(scrollTop >= 16300){

            $('.login').addClass('on');
        }

        if(scrollTop >= 16800){

            $('.login2').addClass('on');
        }

        if(scrollTop >= 16500){

            $('.login3').addClass('on');
        }

        if(scrollTop >= 16500){

            $('.login4').addClass('on');
        }

        if(scrollTop >= 16600){

            $('.login5').addClass('on');
        }

        if(scrollTop >= 16700){

            $('.login6').addClass('on');
        }

        if(scrollTop >= 16800){

            $('.login7').addClass('on');
        }

        if(scrollTop >= 16900){

            $('.login8').addClass('on');
        }

        if(scrollTop >= 17000){

            $('.login9').addClass('on');
        }

        if(scrollTop >= 17600){

            $('.checkpt').addClass('on');
        }

        if(scrollTop >= 17800){

            $('.checkpt2').addClass('on');
        }

        if(scrollTop >= 18000){

            $('.checkpt3').addClass('on');
        }

        if(scrollTop >= 18200){

            $('.checkpt4').addClass('on');
        }

        if(scrollTop >= 19000){

            $('.mainhm').addClass('on');
        }

        if(scrollTop >= 19700){

            $('.mainhm2').addClass('on');
        }

        if(scrollTop >= 19600){

            $('.mainhm3').addClass('on');
        }

        if(scrollTop >= 19500){

            $('.mainhm4').addClass('on');
        }
        if(scrollTop >= 19400){

            $('.mainhm5').addClass('on');
        }
        if(scrollTop >= 19300){

            $('.mainhm6').addClass('on');
        }

        if(scrollTop >= 19900){

            $('.mainhm7').addClass('on');
        }

        if(scrollTop >= 20000){

            $('.mainhm8').addClass('on');
        }

        if(scrollTop >= 20100){

            $('.mainhm9').addClass('on');
        }

        if(scrollTop >= 21600){

            $('.category_cc').addClass('on');
        }

        if(scrollTop >= 21500){

            $('.category_cc2').addClass('on');
        }

        if(scrollTop >= 21600){

            $('.category_cc3').addClass('on');
        }

        if(scrollTop >= 21800){

            $('.category_cc4').addClass('on');
        }

        if(scrollTop >= 21100){

            $('.category').addClass('on');
        }

        if(scrollTop >= 21400){

            $('.category2').addClass('on');
        }
        if(scrollTop >= 20100){

            $('.category3').addClass('on');
        }

        if(scrollTop >= 23500){

            $('.intervw0').addClass('on');
        }
        if(scrollTop >= 20000){

            $('.intervw').addClass('on');
        }
        if(scrollTop >= 23500){

            $('.intervw2').addClass('on');
        }
        if(scrollTop >= 23600){

            $('.intervw3').addClass('on');
        }
        if(scrollTop >= 23700){

            $('.intervw4').addClass('on');
        }
        if(scrollTop >= 20000){

            $('.intervw5').addClass('on');
        }
        if(scrollTop >= 24000){

            $('.intervw6').addClass('on');
        }
        if(scrollTop >= 24100){

            $('.intervw7').addClass('on');
        }

        if(scrollTop >= 24200){

            $('.intervw8').addClass('on');
        }

        if(scrollTop >= 24200){

            $('.intervw9').addClass('on');
        }


        if(scrollTop >= 20000){

            $('.intervw10').addClass('on');
        }
        if(scrollTop >= 25400){

            $('.intervw11').addClass('on');
        }
        if(scrollTop >= 25300){

            $('.intervw12').addClass('on');
        }

        if(scrollTop >= 26900){

            $('.analysis').addClass('on');
        }

        if(scrollTop >= 20000){

            $('.analysis2').addClass('on');
        }
        if(scrollTop >= 26500){

            $('.analysis3').addClass('on');
        }
        if(scrollTop >= 26600){

            $('.analysis4').addClass('on');
        }
        if(scrollTop >= 26700){

            $('.analysis5').addClass('on');
        }
        if(scrollTop >= 26800){

            $('.analysis6').addClass('on');
        }
        if(scrollTop >= 26800){

            $('.analysis7').addClass('on');
        }
        if(scrollTop >= 27600){

            $('.cmnity').addClass('on');
        }

        if(scrollTop >= 27700){

            $('.cmnity2').addClass('on');
        }
        if(scrollTop >= 27800){

            $('.cmnity3').addClass('on');
        }
        if(scrollTop >= 27900){

            $('.cmnity4').addClass('on');
        }

        if(scrollTop >= 28000){

            $('.cmnity5').addClass('on');
        }
        if(scrollTop >= 28500){

            $('.cmnity6').addClass('on');
        }

        if(scrollTop >= 29100){

            $('.end').addClass('on');
        }

        if(scrollTop >= 29000){

            $('.end2').addClass('on');
        }

        if(scrollTop >= 29200){

            $('.end3').addClass('on');
        }

        if(scrollTop >= 29300){

            $('.end4').addClass('on');
        }


        if(scrollTop >= 2940){

            $('.ft_title').addClass('on');
        }

        if(scrollTop >= 29520){

            $('.ft_title2').addClass('on');
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
            $('.main').addClass('on');
        },1000)

        setTimeout(()=>{
            $('.main2').addClass('on');
        },1200)


        setTimeout(()=>{
            $('.main4').addClass('on');
        },-1000)

        setTimeout(()=>{
            $('.main3').addClass('on');
        },1500)


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
