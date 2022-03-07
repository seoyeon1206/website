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
            $('.maintt_name').addClass('on');
        },100)


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
