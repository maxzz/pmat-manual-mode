const SVG = require('mini-svg-data-uri');

const cursorTarget = `url("${SVG(`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-linecap="round" width="64" height="64" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="8.04"/>
  <circle cx="12" cy="12" r="4.99"/>
  <path d="M12 1.5v8.13"/>
  <path d="M22.5 12h-8.13"/>
  <path d="M12 22.5v-8.13"/>
  <path d="M1.5 12h8.13"/>
</svg>
`)}") 32 32, auto`;

module.exports = {
    cursorTarget,
};
