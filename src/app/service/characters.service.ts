import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }



  characters = [
    {
      background: 'https://e1.pxfuel.com/desktop-wallpaper/91/488/desktop-wallpaper-mario-bros-backgrounds-group-mario-background.jpg',
      front: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario',
      name: 'Super Mario',
      url: ''
    },
    {
      background: 'https://images2.alphacoders.com/130/1301855.jpg',
      front: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_character',
      name: 'The legend of Zelda',
      url: ''
    },
    {
      background: 'https://www.xtrafondos.com/wallpapers/manchas-de-pintura-en-textura-4268.jpg',
      front: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_character_v2',
      name: 'Splatoon',
      url: ''
    },
    {
      background: 'https://c4.wallpaperflare.com/wallpaper/303/343/805/kirby-kirby-s-adventure-king-dedede-hd-wallpaper-preview.jpg',
      front: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby',
      name: 'Kirby',
      url: ''
    }
  ];


  returnCharacters() {
    return this.characters;
  }
}
