// Soft Catppuccin Frappé colour blobs drifting slowly over base.
// Each blob rests in place in the plain markup, so reduced motion still looks finished.
const blob = (id: string, color: string, alpha: number) =>
  `<radialGradient id="${id}" cx="50%" cy="50%" r="50%">` +
  `<stop offset="0" stop-color="${color}" stop-opacity="${alpha}"/>` +
  `<stop offset="0.55" stop-color="${color}" stop-opacity="${(alpha * 0.45).toFixed(3)}"/>` +
  `<stop offset="1" stop-color="${color}" stop-opacity="0"/>` +
  `</radialGradient>`

export const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
${blob('mauve', '#ca9ee6', 0.42)}
${blob('blue', '#8caaee', 0.38)}
${blob('pink', '#f4b8e4', 0.30)}
${blob('teal', '#81c8be', 0.30)}
${blob('peach', '#ef9f76', 0.26)}
${blob('lavender', '#babbf1', 0.28)}
</defs>
<style>
  .b { transform-box: fill-box; transform-origin: center; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  .b1 { animation-name: d1; animation-duration: 47s; }
  .b2 { animation-name: d2; animation-duration: 53s; }
  .b3 { animation-name: d3; animation-duration: 61s; }
  .b4 { animation-name: d4; animation-duration: 43s; }
  .b5 { animation-name: d5; animation-duration: 57s; }
  .b6 { animation-name: d6; animation-duration: 67s; }
  @keyframes d1 { from { transform: translate(0, 0) scale(1); } to { transform: translate(140px, 90px) scale(1.12); } }
  @keyframes d2 { from { transform: translate(0, 0) scale(1); } to { transform: translate(-160px, 70px) scale(0.92); } }
  @keyframes d3 { from { transform: translate(0, 0) scale(1); } to { transform: translate(110px, -120px) scale(1.08); } }
  @keyframes d4 { from { transform: translate(0, 0) scale(1); } to { transform: translate(-90px, -100px) scale(1.1); } }
  @keyframes d5 { from { transform: translate(0, 0) scale(1); } to { transform: translate(120px, -60px) scale(0.9); } }
  @keyframes d6 { from { transform: translate(0, 0) scale(1); } to { transform: translate(-130px, 110px) scale(1.06); } }
</style>
<rect width="1600" height="1000" fill="#303446"/>
<ellipse class="b b1" cx="230" cy="190" rx="520" ry="420" fill="url(#mauve)"/>
<ellipse class="b b2" cx="1380" cy="240" rx="560" ry="440" fill="url(#blue)"/>
<ellipse class="b b3" cx="1220" cy="860" rx="500" ry="400" fill="url(#pink)"/>
<ellipse class="b b4" cx="300" cy="880" rx="520" ry="380" fill="url(#teal)"/>
<ellipse class="b b5" cx="820" cy="1040" rx="460" ry="300" fill="url(#peach)"/>
<ellipse class="b b6" cx="860" cy="-60" rx="480" ry="300" fill="url(#lavender)"/>
</svg>`
