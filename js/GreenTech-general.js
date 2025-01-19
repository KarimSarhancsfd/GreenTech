// green tech-home-page-home-page starts here
//green tech-home-page-pause and play video and etc starts here
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bgVideo');
    const muteButton = document.getElementById('muteButton');
    const playPauseButton = document.getElementById('playPauseButton');

    muteButton.style.transform = 'translateX(0)';
    playPauseButton.style.transform = 'translateX(0)';

    muteButton.addEventListener('click', toggleMute);
    playPauseButton.addEventListener('click', togglePlayPause);

    function toggleMute() {
        if (video.muted) {
            video.muted = false;
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    }

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
});

// green tech-home-page ends here
//green tech-home-page-pause and play video and etc ends here


//green tech-aboutus-page starts here
//green tech-aboutus-page-header starts here

let currentImage = 1;
setInterval(() => {
  if (currentImage === 1) {
    document.getElementById('image1').style.opacity = 0;
    document.getElementById('image2').style.opacity = 1;
    currentImage = 2;
  } else {
    document.getElementById('image1').style.opacity = 1;
    document.getElementById('image2').style.opacity = 0;
    currentImage = 1;
  }
}, 5000);
//green tech-aboutus-page ends here


// greentech-service pages starts here
var main = function () {
    $('.push-bar').on('click', function(event){
      if (!isClicked){
        event.preventDefault();
        $('.arrow').trigger('click');
        isClicked = true;
      }
    });
  
    $('.arrow').css({
      'animation': 'bounce 2s infinite'
    });
    $('.arrow').on("mouseenter", function(){
        $('.arrow').css({
                'animation': '',
                'transform': 'rotate(180deg)',
                'background-color': 'black'
           });
    });
     $('.arrow').on("mouseleave", function(){
        if (!isClicked){
            $('.arrow').css({
                    'transform': 'rotate(0deg)',
                    'background-color': 'black'
               });
        }
    });

    var isClicked = false;

    $('.arrow').on("click", function(){
        if (!isClicked){
            isClicked = true;
            $('.arrow').css({
                'transform': 'rotate(180deg)',
                'background-color': 'black',
           });

            $('.bar-cont').animate({
                top: "-15px"
            }, 300);
            $('.main-cont').animate({
                top: "0px"
            }, 300);
            // $('.news-block').css({'border': '0'});
            // $('.underlay').slideDown(1000);

        }
        else if (isClicked){
            isClicked = false;
            $('.arrow').css({
                'transform': 'rotate(0deg)',       'background-color': 'black'
           });

            $('.bar-cont').animate({
                top: "-215px"
            }, 300);
            $('.main-cont').animate({
                top: "-215px"
            }, 300);
        }
    console.log('isClicked= '+isClicked);
    });
  
    $('.card').on('mouseenter', function() {
      $(this).find('.card-text').slideDown(300);
    });
  
    $('.card').on('mouseleave', function(event) {
       $(this).find('.card-text').css({
         'display': 'none'
       });
     });
};

$(document).ready(main);
// greentech-service pages ends here
