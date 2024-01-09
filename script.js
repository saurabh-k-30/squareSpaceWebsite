let tl = gsap.timeline()

tl.from(('#nav img,#nav h3,#nav button'),{


    y:-100,
    duration:0.5,
    delay:1,
    stagger:0.1
})


tl.from(('#main h1'),{
    y:100,
    opacity:0,
    stagger:0.1

})

tl.from(("#main>img"),{
    scale:0,
    opacity:0,
    stagger:0.1
})

tl.from(("h5"),{
    scale:0,
    opacity:0
})

tl.to(('h5'),{
    y:20,
    repeat:-1,
    yoyo:true
})