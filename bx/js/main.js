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





        if(scrollTop >= 10){

            $('.title').addClass('on');
        }


        if(scrollTop >= 33400){

            $('.ft_title').addClass('on');
        }

        if(scrollTop >= 33550){

            $('.ft_title2').addClass('on');
        }





    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });

    gsap.to('#section02', {
        scrollTrigger: {
            trigger: "#section02",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section02').addClass('on');
            }        }
    });

    gsap.to('#section03', {
        scrollTrigger: {
            trigger: "#section03",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section03').addClass('on');
            }        }
    });

    gsap.to('#section04', {
        scrollTrigger: {
            trigger: "#section04",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section04').addClass('on');
            }        }
    });

    gsap.to('#section05', {
        scrollTrigger: {
            trigger: "#section05",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section05').addClass('on');
            }        }
    });
    gsap.to('#section06', {
        scrollTrigger: {
            trigger: "#section06",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section06').addClass('on');
            }        }
    });

    gsap.to('#section07', {
        scrollTrigger: {
            trigger: "#section07",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section07').addClass('on');
            }        }
    });


    gsap.to('#section08', {
        scrollTrigger: {
            trigger: "#section08",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section08').addClass('on');
            }        }
    });

    gsap.to('#section09', {
        scrollTrigger: {
            trigger: "#section09",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section09').addClass('on');
            }        }
    });

    gsap.to('#section10', {
        scrollTrigger: {
            trigger: "#section10",
            start: "-700 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section10').addClass('on');
            }        }
    });
    gsap.to('#section11', {
        scrollTrigger: {
            trigger: "#section11",
            start: "-700 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section11').addClass('on');
            }        }
    });

    gsap.to('#section12', {
        scrollTrigger: {
            trigger: "#section12",
            start: "-700 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section12').addClass('on');
            }        }
    });

    gsap.to('#section13', {
        scrollTrigger: {
            trigger: "#section13",
            start: "-300 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section13').addClass('on');
            }        }
    });

    gsap.to('#section14', {
        scrollTrigger: {
            trigger: "#section14",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section14').addClass('on');
            }        }
    });

    gsap.to('#section15', {
        scrollTrigger: {
            trigger: "#section15",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section15').addClass('on');
            }        }
    });

    gsap.to('#section16', {
        scrollTrigger: {
            trigger: "#section16",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section16').addClass('on');
            }        }
    });

    gsap.to('#section17', {
        scrollTrigger: {
            trigger: "#section17",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section17').addClass('on');
            }        }
    });


    gsap.to('#section18', {
        scrollTrigger: {
            trigger: "#section18",
            start: "-500 top",
            end: 'bottom bottom',
            scrub: true,
            onEnter:()=>{
                $('#section18').addClass('on');
            }        }
    });



    /*스크롤에 따라서 움직임*/
    gsap.to('#section03 .prevwtxt', {
        x:100,
        scrollTrigger: {
            trigger: "#vertical",
            start: "700 top",
            end: () => "+=" + 2000,
            // end: 'bottom bottom',
            scrub: true,

        }
    });
    gsap.to('#section03 .prevwtxt2', {
        x:100,
        scrollTrigger: {
            trigger: "#vertical",
            start: "1000 top",
            end: () => "+=" + 2500,
            // end: 'bottom bottom',
            scrub: true,

        }
    });
    gsap.to('#section03 .prevwtxt3', {
        x:50,
        scrollTrigger: {
            trigger: "#vertical",
            start: "1500 top",
            end: () => "+=" + 3000,
            // end: 'bottom bottom',
            scrub: true,

        }
    });

    gsap.to('#section12 .viewrm_img', {
        y:-700,
        scrollTrigger: {
            trigger: "#vertical",
            start: "300 top",
            end: () => "+=" - 500,
            // end: 'bottom bottom',
            scrub: true,

        }
    });

    gsap.to('#section14 .contact_mkup', {
        y:-700,
        scrollTrigger: {
            trigger: "#vertical",
            start: "300 top",
            end: () => "+=" +1200,
            // end: 'bottom bottom',
            scrub: true,

        }
    });


    gsap.to('#section12 .viewrm_img', {
        y:-500,
        scrollTrigger: {
            trigger: "#section12",
            start: "top top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,

        }
    });

    gsap.to('#section12 .viewrm_img2', {
        y:500,
        scrollTrigger: {
            trigger: "#section12",
            start: "top top",
            end: () => "+=" + 1200,
            // end: 'bottom bottom',
            scrub: true,

        }
    });



    gsap.to('#section14 .contact_mkup', {
        y:100,
        scrollTrigger: {
            trigger: "#section14",
            start: "top top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,

        }
    });





    (function () {


        setTimeout(()=>{
            $('.maintt').addClass('on');
        },10)

        setTimeout(()=>{
            $('.maintt02').addClass('on');
        },30)

        setTimeout(()=>{
            $('.maintt03').addClass('on');
        },50)

        setTimeout(()=>{
            $('.earth').addClass('on');
        },700)

        setTimeout(()=>{
            $('.mainpic').addClass('on');
        },1000)

        setTimeout(()=>{
            $('.mainpic02').addClass('on');
        },1150)

        setTimeout(()=>{
            $('.mainpic03').addClass('on');
        },1300)

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
