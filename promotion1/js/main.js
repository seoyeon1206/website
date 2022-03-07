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



        if(scrollTop >= 800){

            $('.mainct').addClass('on');
        }

        if(scrollTop >= 1700){

            $('.mainct2').addClass('on');
        }
        if(scrollTop >= 2000){

            $('.mainct3').addClass('on');
        }

        if(scrollTop >= 2700){

            $('.overvw').addClass('on');
        }
        if(scrollTop >= 2900){

            $('.overvw2').addClass('on');
        }

        if(scrollTop >= 3200){

            $('.analysis').addClass('on');
        }
        if(scrollTop >= 3600){

            $('.analysis2').addClass('on');
        }
        if(scrollTop >= 3800){

            $('.analysis3').addClass('on');
        }
        if(scrollTop >= 4800){

            $('.asistobe').addClass('on');
        }
        if(scrollTop >= 5000){

            $('.asistobe2').addClass('on');
        }
        if(scrollTop >= 5600){

            $('.stylegd').addClass('on');
        }

        if(scrollTop >= 5800){

            $('.stylegd2').addClass('on');
        }

        if(scrollTop >= 5920){

            $('.stylegd3').addClass('on');
        }

        if(scrollTop >= 6040){

            $('.stylegd4').addClass('on');
        }

        if(scrollTop >= 6160){

            $('.stylegd5').addClass('on');
        }
        if(scrollTop >= 6500){

            $('.contents').addClass('on');
        }
        if(scrollTop >= 8700){

            $('.contents2').addClass('on');
        }

        if(scrollTop >= 9700){

            $('.contents3').addClass('on');
        }
        if(scrollTop >= 10000){

            $('.contents4').addClass('on');
        }
        if(scrollTop >= 11000){

            $('.contents5').addClass('on');
        }
        if(scrollTop >= 12500){

            $('.layout').addClass('on');
        }
        if(scrollTop >= 1000){

            $('.layout2').addClass('on');
        }

        if(scrollTop >= 12000){

            $('.movie').addClass('on');
        }
        if(scrollTop >= 16000){

            $('.product0').addClass('on');
        }
        if(scrollTop >= 13500){

            $('.product').addClass('on');
        }
        if(scrollTop >= 13500){

            $('.product2').addClass('on');
        }
        if(scrollTop >= 15400){

            $('.product3').addClass('on');
        }


        if(scrollTop >= 19700){

            $('.ft_title').addClass('on');
        }

        if(scrollTop >= 19850){

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
        },500)

        setTimeout(()=>{
            $('.main2').addClass('on');
        },700)

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
