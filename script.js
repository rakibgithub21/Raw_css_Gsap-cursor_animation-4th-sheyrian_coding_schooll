let main = document.querySelector('#main')
let cursor = document.querySelector('#cursor')
let image = document.querySelector('#image')

main.addEventListener('mousemove', function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 1,
        ease:'back.out'
   })
})

image.addEventListener('mouseenter', function (e) {
    cursor.innerHTML = 'view more'
    gsap.to(cursor, {
        scale:4
    })
})
image.addEventListener('mouseleave', function (e) {
    cursor.innerHTML = ''
    gsap.to(cursor, {
        scale:1
    })
})