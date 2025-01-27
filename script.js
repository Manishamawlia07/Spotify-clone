console.log("spotify clone");
let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let bottomSongName = document.getElementById('bottomSongName');
let myProgressBar= document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');

let songs = [
    { songName: 'Mai Yaad Auga', filePath: 'songs/song1.mp3', coverPath:'01.jpg' },
    { songName: 'Halki-Halki Si', filePath: 'songs/song2.mp3', coverPath:'1.jpg' },
    { songName: 'Mere Mehboob', filePath: 'songs/song3.mp3', coverPath:'1.jpg' },
    { songName: 'Tasveer-Old-Bollywood', filePath: 'songs/song4.mp3', coverPath:'1.jpg' },
    { songName: 'Tera Roothna', filePath: 'songs/song5.mp3', coverPath:'1.jpg' },
    { songName: 'Tere- Sang', filePath: 'songs/song6.mp3', coverPath:'1.jpg' },
    { songName: 'Soulful-Hindi-Song', filePath: 'songs/song7.mp3', coverPath:'1.jpg' },
    { songName: 'Toote-Hum-Ese', filePath: 'songs/song8.mp3', coverPath:'1.jpg' },
    { songName: ' tere bin', filePath: 'songs/song9.mp3', coverPath:'1.jpg' },
    { songName: ' Sathi', filePath: 'songs/song9.mp3', coverPath:'1.jpg' },
   
]

// song names
songItems.forEach((element,i) => {
    element.getElementsByTagName('span')[0].innerText = songs[i].songName;

    
});


// handle play/pause button

masterPlay.addEventListener('click',() =>{
    if (audioElement.paused || audioElement.currentTime<=0) {
         audioElement.play();    
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    } else {
        audioElement.pause();    
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

        
    }

});

// update seekbar

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =  ((myProgressBar.value*audioElement.duration)/100);
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        
            
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
    
        })
    
    }
    



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        let songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        bottomSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })

});
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex = 0;
        
    }else{
        songIndex += 1
    }
    audioElement.src = songs[songIndex].filePath;
    bottomSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
    gif.style.opacity = 1;


});

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex = 0;
        
    }else{
        songIndex -= 1
    }
    audioElement.src = songs[songIndex].filePath;
    bottomSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;


})









