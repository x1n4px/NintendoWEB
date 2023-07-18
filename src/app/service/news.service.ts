import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }


  news = [
    {
      image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/articles/2023/a-new-pikmin-4-sticker-set-reward-is-here-find-out-how-to-pluck-it/MN_Pikmin_header',
      title: 'A new Pikmin 4 sticker set reward is here! Find out how to pluck it',
      description: 'You can redeem 200 My Nintendo Platinum Points* for a set of two 3" vinyl stickers that features a variety of Pikmin™, an explorer, and space pup Oatchi from the Pikmin 4 game! Add some plucky charm to surfaces like a water bottle, laptop, or Nintendo Switch™ dock.',
      date: '07/17/23',
      console: 'Nintendo Switch'
    },
    {
      image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/articles/2023/the-latest-splatfest-winner-is-team-vanilla/nillawins',
      title: 'And the latest Splatfest winner is…',
      description: 'The results are in, squiddos! The clout is tallied, the numbers are crunched, and a winner is crowned for the latest Splatfest* in-game event in the Splatoon™ 3 game. Congratulations to Team Vanilla on the win! The theme for this event was “Which flavor of ice cream is best?” with Vanilla, Strawberry, and Mint Chip splatting it out for the win. If you’d like to participate in future Splatfest events, you can buy the Splatoon 3 game from Nintendo.com or Nintendo eShop on your device. Catch ya later!',
      date: '07/17/23',
      console: 'Nintendo Switch'
    },
    {
      image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/articles/2023/mobilenews-wiggler-joins-mario-kart-tour-as-a-driver-in-the-pipe-tour/MKT_banner_Topics_v1-PipeTour',
      title: 'Wiggler joins Mario Kart Tour as a driver in the Pipe Tour',
      description: 'Warp into a whirlwind of racing fun with the Pipe Tour, the latest limited-time event in the Mario Kart Tour* game, happening now.Navigate an underground network of Warp Pipes and watch for Piranha Plants in new course Piranha Plant Pipeline! Wiggler joins Mario Kart Tour as a driver for the first time. Hit the road with the newly added Boo Pipes, Gold Pipes, Desert Rose Wagon, and Wiggler Egg karts; along with the Mosaic Starchute, Gold Piranha Plant Balloons, and Wiggler Parachute gliders.Looking to freshen up your in-game Mii™ wardrobe? Try the new Wiggler Mii Racing Suit!',
      date: '07/14/2023',
      console: 'Mobile'
    },
    {
      image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/articles/2023/i-scream-you-scream-we-all-scream-for-the-next-splatfest/1920x1080_Splatfest_July',
      title: 'I scream, you scream, we all scream for the next Splatfest!',
      description: 'Hello again, fellow researchers! The Squid Research Lab is dedicated to keeping you up to date with the latest in the Splatoon™ 3 game. This time, we’re bringing you the scoop on the latest Splatfest*! For those who may not know, Splatfests are special in-game events in Splatoon 3. They’re a time to experience a festive atmosphere while you give your opinion on themes that spark great debate and then fight for your side.',
      date: '07/14/23',
      console: 'Nintendo Switch'
    },
    {
      image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/articles/2023/ea-sports-fc-24-a-brand-new-soccer-experience-is-coming-to-nintendo-switch/1920x1080_Switch_News_FC24SEG4',
      title: 'EA SPORTS FC 24: A brand-new soccer experience is coming to Nintendo Switch!',
      description: 'EA SPORTS FC™ 24 comes out Sept. 29 and offers a new era for The World’s Game on the Nintendo Switch™ system—including 19,000+ fully licensed players, 700+ teams, and 30+ leagues. Here’s a bit more of what you can expect.',
      date: '07/13/2023',
      console: 'Nintendo Swtich'
    },
    {
      image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/articles/2023/nintendo-switch-sports-weekly-rewards/20230713/NSS_Header_Week13_Global',
      title: 'In-game rewards: Week of July 13, 2023',
      description: 'Here whats coming to the item section this week. This collection will be available from 10:00 p.m. PT on July 12, 2023, through 10:00 p.m. PT on August 2, 2023. Have fun out there!',
      date: '07/13/23',
      console: 'Nintendo Swtich'
    }
  ];

  devolverNews() {
    return this.news;
  }
}
