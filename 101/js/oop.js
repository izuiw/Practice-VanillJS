//일반 함수형태
function song(){
    const title = "All I want is christmas";
    const singer = "Mariah Carrey";
}


//생성자 함수 constructor function
function Song(artist, main_song, year) {
   this.artist = artist;
   this.main_song = main_song;
   this.year = new Date(year);
   
   console.log(this.artist);

   this.getInfo = function(){
    return `${this.main_song} 는(은) ${this.year} 년에 발매된 노래이고 가수는 ${this.artist} 입니다.`;
   }
   
   this.getYear = function(){
    return this.year.getFullYear();
   }


   //console.log(this) 
   // Song {artist: 'tamin', main_song: 'guilty'} artist   :    "tamin"   main_song  :    "guilty"
}

const sing_info = new Song("TAMIN", "guilty", "2023-10-30");

console.log(sing_info.getInfo(), sing_info);


//프로토타입 __proto__ 
    //constructor function 안에 펑션 선언한 거랑 뭐가 다를까.. 
    //기능은 같음..?
    // -> 내부에 별도의 기능을 추가해 사용하고 싶은 경우에 사용하게 된다. 
    //       :: 부분적으로 필요한 기능이나, 코드 재사용 시에 프로토타입으로 써먹을 수는 있을 듯..
    
Song.prototype.getInfo = function(){
    return `${this.main_song} 는(은) ${this.year} 년에 발매된 노래이고 가수는 ${this.artist} 입니다.`;
}

Song.prototype.getYear = function(){
    return this.year.getFullYear();
}

//클래스로 작성할 경우 
class Design {
    constructor(designner, product, pre_date){
        this.designner = designner;
        this.product = product;
        this.pre_date = pre_date;
    }
    getInfo() {
        return `${this.product}은 ${this.pre_date}에 제작된 ${this.designner}의 작품이다.`;
    }
}

const desing_info = new Design("고흐", "별이 빛나는 밤", "1889");

console.log(desing_info.getInfo()); // 이 빛나는 밤은 1889에 제작된 고흐의 작품이다.