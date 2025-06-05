declare module './assets/backgrounds.js' {
    const backgrounds: { [key: string]: string };
    export default backgrounds;
  }

import background1 from "../assets/backgrounds/BG.gif";
import background2 from "../assets/backgrounds/BG2.gif";
import background3 from "../assets/backgrounds/BG3.gif";
import background4 from "../assets/backgrounds/BG4.gif";
import background5 from "../assets/backgrounds/BG5.gif";
import background6 from "../assets/backgrounds/BG6.gif";

export default {
    'background1':background1,
    'background2':background2,
    'background3':background3,
    'background4':background4,
    'background5':background5,
    'background6':background6,
};