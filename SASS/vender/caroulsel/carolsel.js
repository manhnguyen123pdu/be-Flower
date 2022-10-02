
$('.owl-carousel').owlCarousel({
  loop: true,
  nav:true,    //dấu điều hướng
  margin: 20,
  dots:true, // tắt dấu tròn đi
  responsive: {
    0: {
      items: 1
    },
    500: {
        items: 2
      },
    800: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

