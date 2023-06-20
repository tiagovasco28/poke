import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  darkmode = "assets/sun.png"
  gifDefault = "assets/bulbasaur.gif"
  pokemonLightGif = "assets/bulbasaur.gif"
  pokemonDarkGif = "assets/charmander.gif"
  currentCss = "containerLogin"
  backgroundImage = "https://wallpaperaccess.com/full/2892497.jpg"
  constructor() { }

  ngOnInit(): void {
  }

  changeMode(){
    if(this.darkmode === "assets/sun.png"){
    this.darkmode = "assets/moon.png"
    this.gifDefault = this.pokemonDarkGif
    this.backgroundImage = "https://wallpapers.com/images/hd/purple-sky-anime-city-jfyl3kuulzsbh0oa.jpg"
    
  }else{
    this.darkmode = "assets/sun.png"
    this.gifDefault = this.pokemonLightGif
    this.backgroundImage = "https://wallpaperaccess.com/full/2892497.jpg"
  }
}

}
