// Kit — the page host for your.ai.toolkit. Flat illustrated 2D character,
// drawn once as clean vector shapes (SVG) and code-animated in Remotion.
// NEVER AI-generated as an image: a generator would redraw him differently
// every time and could draw readable text. These shapes are identical in
// every reel by construction.
//
// Name "Kit" CONFIRMED by Vishnu 2026-10-27 (not Max).
// Look per the "TECH PRESENTER - MAX" reference sheet he shared the same
// day: brown hair, modern glasses, dark grey hoodie with NO logo (the
// sheet's blue "N" is not ours), blue jeans, white/grey sneakers with
// orange accents. The warm accent moved with the restyle: it is now his
// orange sneaker accents (and the amber hook text / numbers / CTA), NOT
// his shirt — the hoodie is grey.
// viewBox 0 0 320 x 440. Feet at y=426, head top at y~76.
import { ORANGE, TEAL } from "../toolkit/theme";

export type KitExpression = "neutral" | "excited" | "thinking";

export interface KitProps {
  x?: number; // left offset in frame px
  y?: number; // top offset in frame px (feet land at y + 440*scale)
  scale?: number;
  bob?: number; // idle vertical bob, px
  leftArmDeg?: number;
  rightArmDeg?: number;
  leftLegDeg?: number;
  rightLegDeg?: number;
  headTilt?: number; // degrees, rotate about the neck (160, 205)
  expression?: KitExpression;
  blink?: number; // eye scaleY: 1 open .. 0.08 closed
  thumbsUp?: boolean; // thumb bump on the raised right hand
  palmLeft?: boolean; // open-palm hand on the left (presenting gesture)
  palmRight?: boolean; // open-palm hand on the right (presenting gesture)
}

const SKIN = "#F6C89A";
const HAIR = "#5C3A21"; // brown, per the reference sheet
const HOODIE = "#6E7683"; // mid grey — lightened from the sheet's dark grey
// so the torso still reads against the navy MovingBackdrop (the sheet's
// character is on white, where dark grey pops; on navy it would vanish).
// A soft teal glow behind the figure (see below) adds the rest of the
// separation. If he still blends in, lighten HOODIE toward #7A828E.
const HOODIE_DARK = "#525A66"; // hood inner, pocket, cuffs, hem
const JEANS = "#2F5D8A"; // medium denim blue, per the sheet
const JEANS_DARK = "#274B70";
const SNEAKER = "#EDEFF2"; // white/light-grey upper
const SNEAKER_GREY = "#9CA3AF";
const OUTLINE = "#1F2937"; // dark slate (not navy #0B1F3A) so the silhouette
// separates from the navy background while the face details stay dark.
const MOUTH = "#3A2A22";

type HandShape = "fist" | "palm" | "thumb";

export const Kit: React.FC<KitProps> = ({
  x = 0,
  y = 0,
  scale = 1,
  bob = 0,
  leftArmDeg = 0,
  rightArmDeg = 0,
  leftLegDeg = 0,
  rightLegDeg = 0,
  headTilt = 0,
  expression = "neutral",
  blink = 1,
  thumbsUp = false,
  palmLeft = false,
  palmRight = false,
}) => {
  // Eyes: pupils shift with expression (thinking looks up-left).
  const pupilDX = expression === "thinking" ? -3 : 0;
  const pupilDY = expression === "thinking" ? -4 : 0;
  const pupilR = expression === "excited" ? 6 : 5;
  // Brows: excited = raised, thinking = left raised.
  const browDY = expression === "excited" ? -5 : 0;
  const browLRot = expression === "thinking" ? -14 : expression === "excited" ? -6 : 0;
  const browRRot = expression === "excited" ? 6 : 0;

  const eye = (cx: number, cy: number) => (
    <g transform={`translate(${cx} ${cy}) scale(1 ${blink}) translate(${-cx} ${-cy})`}>
      <ellipse cx={cx} cy={cy} rx={10} ry={12} fill="#FFFFFF" />
      <circle cx={cx + pupilDX} cy={cy + pupilDY} r={pupilR} fill="#1F2937" />
      <circle cx={cx + pupilDX + 2} cy={cy + pupilDY - 2} r={1.8} fill="#FFFFFF" />
    </g>
  );

  // Glasses: modern rectangular frames, drawn AFTER the eyes so the frame
  // stroke stays visible over the eye-white edge. Frames sit at y 125–155;
  // brows (y ~112–117) clear them. Lenses are near-transparent so the eyes
  // and the blink stay visible behind them.
  const glasses = (cx: number) => (
    <rect x={cx - 17} y={125} width={34} height={30} rx={9} fill="rgba(255,255,255,0.10)" stroke={OUTLINE} strokeWidth={3} />
  );

  const mouth =
    expression === "excited" ? (
      <path d="M 141 168 Q 160 196 179 168 Q 160 177 141 168 Z" fill="#7C2D12" />
    ) : expression === "thinking" ? (
      <line x1={146} y1={177} x2={174} y2={173} stroke={MOUTH} strokeWidth={4} strokeLinecap="round" />
    ) : (
      <path d="M 142 172 Q 160 184 178 172" fill="none" stroke={MOUTH} strokeWidth={4} strokeLinecap="round" />
    );

  const arm = (sx: number, sy: number, deg: number, hand: HandShape) => (
    <g transform={`rotate(${deg} ${sx} ${sy})`}>
      {/* grey hoodie sleeve */}
      <rect x={sx - 11} y={sy} width={22} height={76} rx={11} fill={HOODIE} stroke={OUTLINE} strokeWidth={2.5} />
      {/* darker cuff at the wrist */}
      <rect x={sx - 11} y={sy + 60} width={22} height={16} rx={7} fill={HOODIE_DARK} />
      {hand === "fist" && <circle cx={sx} cy={sy + 84} r={13} fill={SKIN} stroke={OUTLINE} strokeWidth={2.5} />}
      {hand === "thumb" && (
        <>
          <circle cx={sx} cy={sy + 84} r={13} fill={SKIN} stroke={OUTLINE} strokeWidth={2.5} />
          <rect x={sx - 4} y={sy + 84 - 24} width={8} height={18} rx={4} fill={SKIN} stroke={OUTLINE} strokeWidth={2} />
        </>
      )}
      {hand === "palm" && (
        <g>
          {/* open palm: flattened hand + four finger ticks (sheet gesture 1/4) */}
          <ellipse cx={sx} cy={sy + 86} rx={15} ry={11} fill={SKIN} stroke={OUTLINE} strokeWidth={2.5} />
          <line x1={sx - 9} y1={sy + 94} x2={sx - 11} y2={sy + 104} stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />
          <line x1={sx - 3} y1={sy + 96} x2={sx - 3} y2={sy + 106} stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />
          <line x1={sx + 3} y1={sy + 96} x2={sx + 4} y2={sy + 106} stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />
          <line x1={sx + 9} y1={sy + 94} x2={sx + 11} y2={sy + 103} stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />
        </g>
      )}
    </g>
  );

  const leftHand: HandShape = palmLeft ? "palm" : "fist";
  const rightHand: HandShape = thumbsUp ? "thumb" : palmRight ? "palm" : "fist";

  return (
    <div style={{ position: "absolute", left: x, top: y + bob, width: 320 * scale, height: 440 * scale }}>
      <svg width="100%" height="100%" viewBox="0 0 320 440">
        <defs>
          <radialGradient id="kitGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(20,184,166,0.20)" />
            <stop offset="60%" stopColor="rgba(56,120,200,0.12)" />
            <stop offset="100%" stopColor="rgba(20,184,166,0)" />
          </radialGradient>
        </defs>
        {/* soft light behind the figure — separates the grey hoodie from the
            navy backdrop. (One Kit per composition, so the gradient id is unique.) */}
        <ellipse cx={160} cy={240} rx={155} ry={205} fill="url(#kitGlow)" />

        {/* ground shadow */}
        <ellipse cx={160} cy={428} rx={88} ry={11} fill="rgba(3,10,20,0.45)" />

        {/* left arm — behind the torso */}
        {arm(110, 232, leftArmDeg, leftHand)}

        {/* legs — jeans, rotate about the hips */}
        <g transform={`rotate(${leftLegDeg} 140 332)`}>
          <rect x={126} y={330} width={28} height={78} rx={12} fill={JEANS} stroke={OUTLINE} strokeWidth={2.5} />
          <path d="M 130 336 Q 140 342 150 336" fill="none" stroke={JEANS_DARK} strokeWidth={2} strokeLinecap="round" />
          {/* sneaker: white upper, grey heel panel, orange sole accent */}
          <ellipse cx={140} cy={412} rx={21} ry={10} fill={SNEAKER} stroke={OUTLINE} strokeWidth={2.5} />
          <rect x={121} y={406} width={10} height={12} rx={3} fill={SNEAKER_GREY} />
          <rect x={121} y={414} width={38} height={5} rx={2.5} fill={ORANGE} />
        </g>
        <g transform={`rotate(${rightLegDeg} 180 332)`}>
          <rect x={166} y={330} width={28} height={78} rx={12} fill={JEANS} stroke={OUTLINE} strokeWidth={2.5} />
          <path d="M 170 336 Q 180 342 190 336" fill="none" stroke={JEANS_DARK} strokeWidth={2} strokeLinecap="round" />
          <ellipse cx={180} cy={412} rx={21} ry={10} fill={SNEAKER} stroke={OUTLINE} strokeWidth={2.5} />
          <rect x={161} y={406} width={10} height={12} rx={3} fill={SNEAKER_GREY} />
          <rect x={161} y={414} width={38} height={5} rx={2.5} fill={ORANGE} />
        </g>

        {/* torso — grey hoodie, NO logo (Vishnu 2026-10-27) */}
        <rect x={108} y={208} width={104} height={132} rx={26} fill={HOODIE} stroke={OUTLINE} strokeWidth={3} />
        {/* kangaroo pocket */}
        <rect x={124} y={284} width={72} height={40} rx={10} fill={HOODIE_DARK} />
        <line x1={124} y1={290} x2={136} y2={284} stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />
        <line x1={196} y1={290} x2={184} y2={284} stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />
        {/* ribbed hem */}
        <rect x={108} y={326} width={104} height={14} rx={7} fill={HOODIE_DARK} />
        {/* drawstrings */}
        <line x1={150} y1={214} x2={147} y2={256} stroke="#E8EAED" strokeWidth={3} strokeLinecap="round" />
        <line x1={170} y1={214} x2={173} y2={256} stroke="#E8EAED" strokeWidth={3} strokeLinecap="round" />
        <circle cx={147} cy={258} r={2.5} fill="#E8EAED" />
        <circle cx={173} cy={258} r={2.5} fill="#E8EAED" />
        {/* striped tee peeking at the neck (white + teal, per the sheet) */}
        <path d="M 148 204 L 160 218 L 172 204 Z" fill="#FFFFFF" />
        <line x1={152} y1={209} x2={168} y2={209} stroke={TEAL} strokeWidth={2} />
        <line x1={155} y1={213} x2={165} y2={213} stroke={TEAL} strokeWidth={2} />

        {/* hood bunched behind the neck */}
        <ellipse cx={160} cy={208} rx={56} ry={26} fill={HOODIE_DARK} />

        {/* head — tilts about the neck */}
        <g transform={`rotate(${headTilt} 160 205)`}>
          <circle cx={98} cy={142} r={9} fill={SKIN} />
          <circle cx={222} cy={142} r={9} fill={SKIN} />
          <circle cx={160} cy={140} r={62} fill={SKIN} stroke={OUTLINE} strokeWidth={3} />
          {/* hair cap: arc sweep 1 goes OVER the top of the head (in SVG's
              y-down coords, increasing angle = clockwise on screen, so from
              the left point sweep 1 passes the top). Bottom edge curves up
              to a y~112 hairline so the eyes stay clear. (Two earlier shapes
              failed: sweep 1 + Q top edge enclosed only a ~2px sliver — bald;
              sweep 0 bulged under and covered the whole face — dark mask.)
              Restyle kept the proven path; only the fill changed to brown. */}
          <path d="M 98 142 A 62 62 0 0 1 222 142 Q 190 112 160 112 Q 130 112 98 142 Z" fill={HAIR} />
          {/* brows */}
          <g transform={`rotate(${browLRot} 136 116)`}>
            <rect x={125} y={112 + browDY} width={22} height={5} rx={2.5} fill={HAIR} />
          </g>
          <g transform={`rotate(${browRRot} 184 116)`}>
            <rect x={173} y={112 + browDY} width={22} height={5} rx={2.5} fill={HAIR} />
          </g>
          {eye(136, 140)}
          {eye(184, 140)}
          {/* modern glasses — frames + bridge + temples */}
          {glasses(136)}
          {glasses(184)}
          <line x1={153} y1={138} x2={167} y2={138} stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
          <line x1={119} y1={138} x2={102} y2={136} stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
          <line x1={201} y1={138} x2={218} y2={136} stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
          {/* nose */}
          <path d="M 160 152 Q 164 160 158 162" fill="none" stroke="#D9A06C" strokeWidth={3} strokeLinecap="round" />
          {mouth}
        </g>

        {/* right arm — in front of the torso */}
        {arm(210, 232, rightArmDeg, rightHand)}
      </svg>
    </div>
  );
};
