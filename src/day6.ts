import { defaultInput6 } from './inputs/day6_input.js';

const findMarker = (input: string = defaultInput6, msgLength = 4) => {
  let markerIdx = 0;
  for (let i = msgLength; i < input.length; i++) {
    const sub = input.substring(i - msgLength, i);
    let count = 0;
    for (const c of sub) {
      count++;
      const indices = [];
      let idx = sub.indexOf(c);
      while (idx !== -1) {
        indices.push(idx);
        idx = sub.indexOf(c, idx + 1);
      }
      if (indices.length > 1) break;
    }
    if (count === sub.length) {
      markerIdx = i;
      break;
    }
    count = 0;
  }
  return markerIdx;
};

const getFirstMarker = (input: string = defaultInput6) => {
  return findMarker(input, 4);
}

const getFirstMsgMarker = (input: string = defaultInput6) => {
  return findMarker(input, 14);
}

export default {getFirstMarker, getFirstMsgMarker};
