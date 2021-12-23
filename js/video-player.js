const stream = document.querySelectorAll(".video-stream")
for(let i = 0; i< stream.length; i++){
    const str = stream[i];
    str.addEventListener("click", ()=>{
        video.pause();
        for(let j = 0; j< stream.length; j++){
            stream[j].pause()
        }
        str.play()
    })
}

const progress = document.querySelector('.video-progress');
const progress2 = document.querySelector('.video-progress2');
progress.addEventListener('input', function() {
  const value = this.value;
    video.currentTime = video.duration * (value / 100)
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})
 
progress2.addEventListener('input', function() {
    const value = this.value;
    
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
  })

const video = document.querySelector("#video-for-player")
const vplay = document.querySelector(".gray-play")
const videoProgress = document.querySelector(".video-progress")
const volume = document.querySelector(".volume")
const volumeProgress = document.querySelector(".video-progress2")
const fullScreen = document.querySelector(".full-screen")
const whiteplay = document.querySelector(".white-play")


fullScreen.addEventListener("click", ()=>{
    video.requestFullscreen()
})

video.ontimeupdate = progressUpdate
volumeProgress.addEventListener("input", volumeUpdate)

volume.addEventListener("click", ()=>{
    console.log(video.volume)
    if(video.volume == 0){
        video.volume = 0.5;
        volumeProgress.value = 50;
        volume.style.backgroundImage = "url(./assets/img/svg/volume.svg)"
     
    }else{
        video.volume = 0;
        volume.style.backgroundImage = "url(./assets/img/svg/mute.svg)"
        volumeProgress.value = 0;
    }
})

function volumeUpdate () {
    video.volume = volumeProgress.value / 100
    if(video.volume == 0){
        volume.style.backgroundImage = "url(./assets/img/svg/mute.svg)"
    }else{
        volume.style.backgroundImage = "url(./assets/img/svg/volume.svg)"
    }
    console.log(video.volume)
}


function progressUpdate(){
    videoProgress.value = ( video.currentTime / video.duration ) * 100
    videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoProgress.value}%, #C4C4C4 ${videoProgress.value}%, #C4C4C4 100%)`
    volumeProgress.value = video.volume * 100;
    volumeProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeProgress.value}%, #C4C4C4 ${volumeProgress.value}%, #C4C4C4 100%)`
    document.addEventListener('keydown', function(event) {
        if (event.code == 'Space') {
          video.pause()
        }
      });
}

vplay.addEventListener("click", ()=>{
    let time = video.currentTime;
    setTimeout(() => {

    if(video.currentTime == time ){
        play()
    }else{
        pause()
    }
    }, 1);
  
})
video.addEventListener("click", ()=>{
    let time = video.currentTime;
    setTimeout(() => {

    if(video.currentTime == time ){
        play()
    }else{
        pause()
    }
    }, 1);
  
})
whiteplay.addEventListener("click", ()=>{
    let time = video.currentTime;
    setTimeout(() => {

    if(video.currentTime == time ){
        play()
    }else{
        pause()
    }
    }, 1);
  
})


volume.addEventListener("click", play)
fullScreen.addEventListener("click", play)


function play(){
    video.play()
    whiteplay.style.display = "none"
    vplay.style.background = "url(./assets/img/svg/pause.svg)"

    

}

function pause(){
    video.pause()
    whiteplay.style.display = "flex"
    vplay.style.background = "url(./assets/img/svg/gray-play.svg)"

}


