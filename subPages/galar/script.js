$('.carousel').carousel({
    interval: 550 
})

$(".img_item").click(function (e) { 
    console.log($(".img_item"));
    let imgArr = $(".img_item");
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i] ==e.target) {
            $('.carousel').carousel(i)
        }
    }
    
});