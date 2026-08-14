import type { Member } from "../types/Member";
import zoeImg from "../assets/members/Zoe/Screenshot_2026-08-13_004847.png";
import embryImg from "../assets/members/Embry/ffxiv_dx11_2026-08-13_09-21-04.png";
import oyuunImg from "../assets/members/Oyyun/IMG_1890.jpg";
import twilightImg from "../assets/members/Twilight/ffxiv_08132026_092816_536.png";
import vanaImg from "../assets/members/Vana/image.png";

export const members: Member[] = [
  {
    id: 1,
    name: "Kitrinu Satrinu",
    rank: "The Returned (Leader)",
    playingSince: "1.0",
    preferredRole: ["DPS", "Tank"],
    mainJob: ["Reaper", "Warrior"],
    favoriteContent: ["Savage", "Extremes", "PvP", "Social Events"],
    playstyles: ["Hardcore with Midcore mentality"],
    shortDescription: "Hello, my name is Kitrinu. I am a Husband, father, and all around weirdo. Leader of Wayward Returned and King of elbow tickling.",
    bio: "I started playing FFXIV because I have always enjoyed playing Final Fantasy games and loved playing FFXI back in its prime, even if I wasn't good at it. I enjoy the story and social connection I get from the game and enjoy the harder content when I get to dip my toes into it. I use to run the FC Wayward Legion back in the day and I have ran other guild like communities in the passed. I like being able to like minded people together to enjoy an activity we all enjoy. I have a lot of memorable experiences when it comes playing MMOs regardless if they are good or bad, I always find myself playing them. I love the comradery of sitting in a guild hall with all my guild mates cutting up or running fun content together just giving each other a hard time while having a good time.",
    imageUrl: "",
    stats: [
      { label: "Favorite Expansion", value: "Endwalker" },
      { label: "Favorite Raid/Trial", value: "Titania EX" },
      { label: "Favorite Mount/Minion", value: "None" },
      { label: "Favorite Character", value: "Sadu" },
      { label: "Favorite Quote", value: "Trades a cloth and sleeping potion to someone. Hey.. Could you smell this for me?" }
    ]
  },
  {
    id: 2,
    name: "Zoe Ashvale",
    rank: "Wayfinder",
    playingSince: "1.0",
    preferredRole: ["Healer"],
    mainJob: ["Sage"],
    favoriteContent: ["MSQ", "Hildibrand", "Society Quests", "PvP", "Deep Dungeons", "Mount Farm"],
    playstyles: ["Midcore", "Collector"],
    shortDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: zoeImg,
    stats: [
      { label: "Favorite Expansion", value: "Endwalker" },
      { label: "Favorite Raid/Trial", value: "Alpha Omega" },
      { label: "Favorite Mount/Minion", value: "Fenrir" },
      { label: "Favorite Character", value: "Urianger" },
      { label: "Favorite Quote", value: "Yours is a long road, my friend, and it stretches on to places beyond imagining... That no matter how far your journey may take you, you stand where you stand by virtue of the road you walked to get there." },
    ],
  },
  {
    id: 3,
    name: "Embry Silvertongue",
    rank: "Wayfinder",
    playingSince: "08/16/2013",
    preferredRole: ["Healer", "Flex"],
    mainJob: ["White Mage"],
    favoriteContent: ["MSQ", "Crafting", "Gathering", "Housing", "Glamour", "Treasure Maps", "PvP", "Mount Farming", "Social Events"],
    playstyles: ["Casual/Midcore", "Social", "Collector", "Semi-Completionist"],
    shortDescription: "Just a veteran with permanent raid PTSD (The White Raven's ghost still haunts me). I hoard mounts and minions I'll never use, housing items I have no room for, and please... don't look at my inventory.",
    bio: "I originally got into the game because an ex had played a bit during 1.0 and showed me the End of an Era cutscene after the servers had already shut down. When closed beta signups started, we jumped in together and stayed through open beta, early access, and the 2.0 launch. We broke up shortly before Heavensward, but I just kept right on playing. I've actually kept the same character from day one! Albeit with several Fantasias, lol. My routine never really changes: log in, knock out expert roulette, cap tomestones, weekly custom deliveries. Once the chores are done, it's just hanging out with the Wayward Returned crew, running maps or mount farms, and always being down to help out with crafting, gathering, or catching up on duties. My history goes back to the old FC, Wayward Legion (WwL), which I originally joined after following a friend over. Things eventually died down, and many of us either went our separate ways or took a break from the game. Eventually, Kit came back and told me he was planning to reform, so I returned with him and several others to help create WwR. Some of my most memorable experiences go all the way back to clearing high-end raid content in ARR. My first time clearing T5 in Binding Coils was wild, and I'll forever be traumatized by the T9 wall. But my absolute favorite memories will always be the ones made with everyone in the FC, from endless nights of chaotic mount farming to running treasure maps together and sharing all the laughs week after week.",
    imageUrl: embryImg,
    stats: [
      { label: "Favorite Expansion", value: "Endwalker" },
      { label: "Favorite Raid/Trial", value: "Raid: The Orbonne Monastery, Trial: The Mothercrystal" },
      { label: "Favorite Mount/Minion", value: "Mount: Ancient Airship (currently), Minion: Copycat Bulb (currently)" },
      { label: "Favorite Character", value: "Too many to choose!" },
      { label: "Favorite Quote", value: "I can't choose, everything I say in Discord is ridiculous" }
    ]
  },
  {
    id: 4,
    name: "Oyuun Noykin",
    rank: "Wanderer",
    playingSince: "3 years",
    preferredRole: ["Melee DPS", "Tank"],
    mainJob: ["Viper", "Gunbreaker"],
    favoriteContent: ["Glamour", "Crafting", "Gathering", "Extremes", "PvP"],
    playstyles: ["Midcore", "Crafter", "Completionist"],
    shortDescription: "Outside of FFXIV, I enjoy writing, digital art, and photography. I also love playing DnD and watching anime.",
    bio: "I started playing FFXIV about three years ago with my partner. What I enjoy about FFXIV is how in-depth it is. There's so much to do between PvE, PvP, crafting, gathering, glamour, the list goes on! I joined the FC when I received an invite from Kitrinu, and found everyone so welcoming and kind!",
    imageUrl: oyuunImg,
    stats: [
      { label: "Favorite Expansion", value: "Shadowbringers" },
      { label: "Favorite Raid/Trial", value: "Anabaseios: The Eleventh Circle & The Royal Menagerie" },
      { label: "Favorite Character", value: "Emet-Selch" },
      { label: "Favorite Quote", value: "\"The rains have ceased, and we are blessed with another beautiful day... But you are not here to see it.\" -Elidibus" }
    ]
  },
  {
    id: 5,
    name: "Twilight Glaringway",
    rank: "The Wayfinders",
    playingSince: "Around 2.1–2.2",
    preferredRole: ["Healer", "Ranged DPS"],
    mainJob: ["White Mage", "Bard"],
    favoriteContent: ["MSQ", "Treasure Maps", "Mount Farming", "General Content"],
    playstyles: ["Super Casual"],
    shortDescription: "Hi, name's Twilight. Mostly just hanging around posting memes and stupid videos. I love playing tabletop games like RPGs, board games, and Warhammer. I'm usually up for helping with stuff in-game, so if you need help, hit me up and I can see what I can do.",
    bio: "I got into the game after seeing my roommate at the time, Velidri, playing and thinking it looked cool. Outside of FFXIV, I dabble in Yu-Gi-Oh!, play Pathfinder, and Warhammer 40K. I've got a few armies for that now.",
    imageUrl: twilightImg,
    stats: [
      { label: "Favorite Expansion", value: "Endwalker" },
      { label: "Favorite Raid/Trial", value: "The Pool of Tribute EX" },
      { label: "Favorite Mount/Minion", value: "Mount: Miw Miisv — because it makes you so tiny it's silly. Minion: Heavy Hatchling — because it's bigger than my character." },
      { label: "Favorite Character", value: "Random unnamed Lalafell NPC in Ul'dah" },
      { label: "Favorite Quote", value: "\"If I can't talk my way into his heart, I'll poison my way into it.\"" }
    ]
  },
  {
    id: 6,
    name: "Vana Du'haen",
    rank: "Not in the FC",
    playingSince: "2017",
    preferredRole: ["Flex"],
    mainJob: ["Dancer"],
    favoriteContent: ["Ultimates"],
    playstyles: ["Midcore", "Hardcore"],
    shortDescription: "You may know me as the Hroth that was once called a 'glitch in the game.' You may know me as an anxiety-filled anarchist. Or maybe you don't know me.",
    bio: "I refuse to do this right now. I'm fucking terrible at bios.",
    imageUrl: vanaImg,
    stats: []
  },
]
