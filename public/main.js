// @ts-check

import { APIWrapper } from "./api.js";
import {
  addMessage,
  animateGift,
  isPossiblyAnimatingGift,
  isAnimatingGiftUI,
} from "./dom_updates.js";

const api = new APIWrapper();

api.setEventHandler((events) => {
  if (events.length) {
    events.forEach((event) => {
      addMessage(event);

      if (isPossiblyAnimatingGift && !isAnimatingGiftUI()) {
        animateGift(event);
      }
    });
  }
});
