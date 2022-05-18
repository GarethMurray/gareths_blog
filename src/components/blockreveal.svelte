<h1>
  <span>Let's</span>
  <span>Build</span>
  <span>Stuuuuff!</span>
</h1>

<style global>

* {
  box-sizing: border-box;
}

body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 1rem + 10vmin, 10rem);
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  line-height: 0.8;
}

:root {
  --primary: hsl(173, 80%, 40%);
  --secondary: hsl(189, 94%, 43%);
  --tertiary: hsl(239, 84%, 67%);
  --speed: 0.65s;
}

h1 span {
  --color: var(--primary);
  color: var(--color);
  position: relative;
  clip-path: inset(-20% 0);
  animation-name: text-reveal, shimmy;
  animation-duration: var(--speed);
  animation-delay: calc((0.5 + var(--index)) * (var(--speed) / 3));
  animation-fill-mode: both;
  animation-timing-function: steps(1), ease-out;
}

@keyframes shimmy {
  0% {
    transform: translateX(-1ch);
  }
}

@keyframes text-reveal {
  0% {
    color: transparent;
  }
  50%, 100% {
    color: var(--color);
  }
}

h1 span:after {
  content: "";
  position: absolute;
  inset: -20% 0;
  background-color: var(--color);
  animation-name: block-reveal;
  animation-duration: var(--speed);
  animation-delay: calc((0.5 + var(--index)) * (var(--speed) / 3));
  animation-fill-mode: both;
}

@keyframes block-reveal {
  0% {
    transform: translateX(-110%);
  }
  45%, 55% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(110%);
  }
}

h1 span:nth-of-type(1) {
  --color: var(--primary);
  --index: 0;
}
h1 span:nth-of-type(2) {
  --color: var(--secondary);
  --index: 1;
}
h1 span:nth-of-type(3) {
  --color: var(--tertiary);
  --index: 2;
}
</style>
