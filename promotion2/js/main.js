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


        if(scrollTop >= 600){

            $('.maintop2').addClass('on');
        }
        if(scrollTop >= 800){

            $('.maintop3').addClass('on');
        }

        if(scrollTop >= 1500){

            $('.maintop5').addClass('on');
        }



        if(scrollTop >= 2000){

            $('.overvw').addClass('on');
        }



        if(scrollTop >= 2200){

            $('.overvw2').addClass('on');
        }

        if(scrollTop >= 2300){

            $('.analysis').addClass('on');
        }

        if(scrollTop >= 2500){

            $('.analysis2').addClass('on');
        }

        if(scrollTop >= 2700){

            $('.analysis3').addClass('on');
        }

        if(scrollTop >= 2900){

            $('.analysis4').addClass('on');
        }

        if(scrollTop >= 3100){

            $('.analysis5').addClass('on');
        }

        if(scrollTop >= 3100){

            $('.user').addClass('on');
        }

        if(scrollTop >= 3500){

            $('.user2').addClass('on');
        }

        if(scrollTop >= 3800){

            $('.user3').addClass('on');
        }

        if(scrollTop >= 4100){

            $('.user4').addClass('on');
        }

        if(scrollTop >= 4600){

            $('.user5').addClass('on');
        }

        if(scrollTop >= 5200){

            $('.illust').addClass('on');
        }

        if(scrollTop >= 5600){

            $('.illust2').addClass('on');
        }

        if(scrollTop >= 6000){

            $('.illust3').addClass('on');
        }

        if(scrollTop >= 6300){

            $('.illust4').addClass('on');
        }

        if(scrollTop >= 6400){

            $('.illust5').addClass('on');
        }

        if(scrollTop >= 6600){

            $('.illust6').addClass('on');
        }

        if(scrollTop >= 6800){

            $('.illust7').addClass('on');
        }
        if(scrollTop >= 7000){

            $('.illust8').addClass('on');
        }
        if(scrollTop >= 6500){

            $('.illust9').addClass('on');
        }

        if(scrollTop >= 7200){

            $('.styledg').addClass('on');
        }

        if(scrollTop >= 7600){

            $('.styledg2').addClass('on');
        }

        if(scrollTop >= 7800){

            $('.styledg3').addClass('on');
        }

        if(scrollTop >= 8000){

            $('.styledg4').addClass('on');
        }
        if(scrollTop >= 8200){

            $('.styledg5').addClass('on');
        }

        if(scrollTop >= 8400){

            $('.styledg6').addClass('on');
        }
        if(scrollTop >= 9200){

            $('.main').addClass('on');
        }
        if(scrollTop >= 9700){

            $('.main2').addClass('on');
        }

        if(scrollTop >= 12100){

            $('.contents5-1').addClass('on');
        }

        if(scrollTop >= 15300){

            $('.contents11').addClass('on');
        }

        if(scrollTop >= 15500){

            $('.contents12').addClass('on');
        }

        if(scrollTop >= 15000){

            $('.contents13').addClass('on');
        }


        if(scrollTop >= 17500){

            $('.ft_title').addClass('on');
        }

        if(scrollTop >= 17650){

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
            $('.maintop').addClass('on');
        },200)

    })();



})


// setTimeout(()=>{
        //     $('.maintop2').addClass('on');
        // },1100)
        //
        // setTimeout(()=>{
        //     $('.maintop3').addClass('on');
        // },1200)
        //
        // setTimeout(()=>{
        //     $('.maintop4').addClass('on');
        // },1700)

        // setTimeout(()=>{
        //     $('.maintop5').addClass('on');
        // },1700)

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

