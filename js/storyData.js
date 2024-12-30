/** @format */

import { gameItem } from "./gameItems.js";
export const chapter_1 = {
  // Waking up in the dark

  1: {
    text: "My head hurts, i am opening my eyes, but everything is pitch black. The last thing i remember was the dessert being served. I have my back against a wall, the floor here is cold and it feels like it is made of stone tiles, am i in some kind of cellar?",
    //Option 2: Move to the left
    //Option 3: Move to the  right
    //Option 4: Search through your pockets
    options: [
      { node: 2, choice: "Move to the left" },
      { node: 3, choice: "Move to the right" },
      { node: 4, choice: "Search through pockets" },
    ],
  },

  2: {
    text: "This is a small room.. I can feel the cold stone wall against my hand",
    //Option 3: Move to the  right
    //Option 4: Search through your pockets
    options: [
      { node: 3, choice: "Move to the right" },
      { node: 4, choice: "Search through pockets" },
    ],
  },

  3: {
    text: "it is not far to the other side of the room, i guess it is three or four square feet. I can feel the wall, but i cant see anything",
    options: [{ node: 4, choice: "Search through pockets" }],
    //Option 4: Search through your pockets
  },

  4: {
    text: "As i search through my pockets i notice that i dont have my phone on me, but in my jacketpocket i find a old zippo lighter that was a gift from Elise, i dont smoke anymore, but i need vision, so this is exactly what i need",
    // Option 5: use zippo lighter

    options: [{ node: 5, image: gameItem.lighter }],
  },

  5: {
    text: "the flame from the lighter reveals the small room made of stone and concret, in front of me i see an old wooden door, but it is not fully closed",
    // Option 6: exit the room through the wooden door
    options: [{ node: 6, choice: "Exit the room through the wooden door" }],
  },

  6: {
    text: "I slowly open the old wooden door infront of me, i cant hear my thoughts because my heart is beating so fast",
  },
};

export const chapter_2 = {
  // The wispers in the hallway

  1: {
    text: "I cant see more than 3 feet ahead due to the small light radius of the lighter, it seems like this might be a narrow hallway. The walls are white painted concret. why am i here? where am i?",
    // Option 2: put the lighter back in your pocket and move forward (save some gass)
    // Option 3: Leave the lighter on so you have some vision as you keep moving
    options: [
      {
        node: 2,
        choice:
          "put the lighter back in your pocket and move forward (save some gass)",
      },
      {
        node: 3,
        choice:
          "Leave the lighter on so you have some vision as you keep moving",
      },
    ],
  },

  2: {
    text: "I turn of the lighter to save some of the gas since i dont know when and how i am getting out of here, i start moving forwards in the dark",
    options: { node: 4, choice: "Keep moving" },
  },

  3: {
    text: "I keep the lighter litt as i slowly move through the hallway, as i get further away from the rom I realize that i might be a prisoner here.. Suddenly i get a felling that someone is watching me..",
    // Option 5: move as fast as possible through the hall
    // Option 6: examine the walls
    options: [
      { node: 5, choice: "Move as fast as possible through the hall" },
      { node: 6, choice: "Examine the walls" },
    ],
  },

  4: {
    text: "It is picth black, i cant see anything, but far away in the distace I can hear someone wispering",
  },
};
