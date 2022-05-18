---
title: Block Reveals in CSS
date: 2022-05-11
excerpt: An incredibly impressive block reveal
---

<script>
  import Blockreveal from '$components/blockreveal.svelte'
  let shouldShow = false
  const toggle = () => { 
    console.log(shouldShow)
    shouldShow = !shouldShow}
</script>

### I stole this snippet from the fantastic <a href="https://github.com/jh3y">Jhey Tompkins</a>

I've seen a few block reveals in CSS, but none of them have impressed me like this one. There's a level of polish in this that really just brings happiness, so I thought I'd both store it for future use and play with it a little to see exactly what makes me like it so much. After fiddling a little, I believe it's the easing - it hits <em>just</em> right

What exactly am I talking about?

<div class="flex flex-col h-80 flex-shrink-0 items-start justify-between">
<button on:click={toggle} class="px-4 py-2 shadow-md bg-dark-50 rounded min-w-[8rem]">Show me</button>

{#if shouldShow}
  <Blockreveal />
{/if}
</div>


```html
<h1>
  <span>Let's</span>
  <span>Build</span>
  <span>Stuuuuff!</span>
</h1>
```
```css
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
```

