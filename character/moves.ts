// Kit's moves — small pure helpers over Remotion's interpolate/spring.
// Every move is a function of (frame, timing) so the director can script a
// beat as: position + arm angles + expression + head tilt, all keyed to frames.
// RULE: Kit must never be static for more than ~1s. idleBob + blinkAt run
// underneath every pose, so even a "standing still" beat is alive.
import { interpolate } from "remotion";

// Idle bob: gentle vertical breathing, continuous. amp in px, period in frames.
export const idleBob = (frame: number, amp = 3, period = 48): number =>
  Math.sin(((frame % period) / period) * Math.PI * 2) * amp;

// Walk swing: legs alternate ±amp degrees while walking. period in frames.
export const walkSwing = (frame: number, amp = 8, period = 16): number =>
  Math.sin(((frame % period) / period) * Math.PI * 2) * amp;

// Blink: eye scaleY, 1 = open. Blinks every `every` frames for `dur` frames.
export const blinkScale = (frame: number, every = 96, dur = 6): number => {
  const p = frame % every;
  if (p >= dur) return 1;
  return 1 - Math.sin((p / dur) * Math.PI) * 0.92;
};

// Keyframed value: piecewise-linear over [frames] -> [values], clamped.
export const keyframes = (
  frame: number,
  frames: number[],
  values: number[],
): number =>
  interpolate(frame, frames, values, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

// Arm angles (degrees, SVG rotate about the shoulder pivot, clockwise +).
// Arm hangs straight down at 0. Right arm: -90 = pointing right (horizontal),
// -45 = raised to hold a card, -140 = thumbs-up. Left arm mirrors: +90 =
// pointing left, +45 = hold, +140 = thumbs-up.
// Gesture variants from the "TECH PRESENTER - MAX" sheet (2026-10-27):
// present = arm raised with the open-palm hand (sheet gestures 1/4 — use with
// the palmLeft/palmRight props on Kit); together = both arms angled inward so
// the hands meet in front of the chest (sheet gesture 3 — use left +55 with
// right -55 in the same beat).
export const ARM = {
  rest: 0,
  pointRight: -90,
  pointLeft: 90,
  holdRight: -45,
  holdLeft: 45,
  thumbsUpRight: -140,
  thumbsUpLeft: 140,
  presentRight: -45,
  presentLeft: 45,
  togetherRight: -55,
  togetherLeft: 55,
} as const;
