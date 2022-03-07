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
        //
        //
        // if(scrollTop >= 10){
        //
        //     $('.title').addClass('on');
        // }
        //
        //
        //
        // if(scrollTop >= 67){
        //
        //     $('.title2').addClass('on');
        // }
        //
        //
        //
        //
        // if(scrollTop >= 600){
        //
        //     $('.box').addClass('on');
        // }
        //
        //
        // if(scrollTop >= 1400){
        //
        //     $('.block').addClass('on');
        // }
        //


    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });

    //
    // $(document).on('mouseover', '.gnb-container span', function () {
    //     $('.slidesub').slideDown(200);
    // });
    // $(document).on('mouseover', 'div', function () {
    //     if (!$(this).hasClass('gnb-container')) {
    //         $('.slidesub').slideUp(200);
    //     }
    // });






    (function () {

        setTimeout(()=>{
            $('.pfwindow-container').addClass('on');
        },500)

        setTimeout(()=>{
            $('.chawd01').addClass('on');
        },1000)


        setTimeout(()=>{
            $('.chawd02').addClass('on');
        },1100)


        setTimeout(()=>{
            $('.chawd03').addClass('on');
        },1200)


        setTimeout(()=>{
            $('.chawd04').addClass('on');
        },1300)


        setTimeout(()=>{
            $('.chawd05').addClass('on');
        },1400)


        setTimeout(()=>{
            $('.character').addClass('on');
        },1700)


        setTimeout(()=>{
            $('.profiletxt01').addClass('on');
        },2000)

        setTimeout(()=>{
            $('.profiletxt02').addClass('on');
        },2200)

        setTimeout(()=>{
            $('.profiletxt03').addClass('on');
        },2400)

        setTimeout(()=>{
            $('.profiletxt04').addClass('on');
        },2600)

        setTimeout(()=>{
            $('.profiletxt05').addClass('on');
        },2200)

        setTimeout(()=>{
            $('.profiletxt06').addClass('on');
        },2400)

        setTimeout(()=>{
            $('.profiletxt07').addClass('on');
        },2600)






        setTimeout(()=>{
            $('.skills_all').addClass('on');
        },2500)





        setTimeout(()=>{
            $('.skillsline_container').addClass('on');
        },2500)


        setTimeout(()=>{
            $('.skillsline01').addClass('on');
        },2500)


        setTimeout(()=>{
            $('.skillsline02').addClass('on');
        },2700)


        setTimeout(()=>{
            $('.skillsline03').addClass('on');
        },2900)


        setTimeout(()=>{
            $('.skillsline04').addClass('on');
        },3100)


        setTimeout(()=>{
            $('.skillsline05').addClass('on');
        },3300)


        setTimeout(()=>{
            $('.skillsline06').addClass('on');
        },3500)



        setTimeout(()=>{
            $('.skillsline07').addClass('on');
        },3700)


        setTimeout(()=>{
            $('.button02').addClass('on');
        },2500)









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
