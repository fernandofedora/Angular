interface AudioPlayer{
    audioVolume:number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;

}
const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "mess",
    details: {
        author: "ed sheeran",
        year: 2015
    }
}

const song = 'New Song';

const {song:anotherSong, songDuration:duration, details} = audioPlayer;

const {author}=details;

//console.log('Song:', anotherSong);
//console.log('Duration:', duration);
//console.log('Author:', author)
const [, , trunk= 'not found'] = ['goku','vegeta','trunk'];

console.error('personaje 3:', trunk);


export{};