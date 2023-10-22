---
title: Block Reveals in CSS
date: 2022-05-11
excerpt: An incredibly impressive block reveal
---

<script>
  import Blockreveal from '$components/blockreveal.svelte'
  let shouldShow = false
  const toggle = () => { 
    shouldShow = !shouldShow}
  let clip = true
  const toggleClip = () => {
    clip = !clip}
  let direction = "left"
  const toggleDir = () => { 
    if (direction === "left") {
      direction = "none"}
    else if (direction === "none") {
      direction = "right"}
    else if (direction === "right") {
      direction = "left"}
  }
</script>

### I stole this snippet from the fantastic <a href="https://github.com/jh3y">Jhey Tompkins</a>

I've seen a few block reveals in CSS, but none of them have impressed me like this one. There's a level of polish in this that really just brings happiness, so I thought I'd both store it for future use and play with it a little to see exactly what makes me like it so much. After fiddling a little, I believe it's the easing - it hits <em>just</em> right

What exactly am I talking about?

<div class="flex flex-col h-80 flex-shrink-0 items-start justify-between">
  <button on:click={toggle} class="px-4 py-2 shadow-md bg-dark-50 rounded min-w-[8rem]">
    {#if shouldShow}Hide
    {:else}Show me
    {/if}
  </button>

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
/* Here the lineheight controls the size of the block */
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

/* The clip path is the most important thing here */
/* Is hides anything that is more than 20% wider than the element */
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


/* Shift text 1 character to the left */
/* This causes a stagger effect which makes a huge impact */
@keyframes shimmy {
  0% {
    transform: translateX(-1ch);
  }
}

/* Start the text off as hidden and then reveal it */
@keyframes text-reveal {
  0% {
    color: transparent;
  }
  50%, 100% {
    color: var(--color);
  }
}

/* Inset causes the block to overlap 20% on the x axis */
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

/* initial position of the block starts ahead of the text,  */
/* drags slightly (10% of duration) */
/* and moves over text */
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
I find it especially interesting to see what this looks like without the clipping mask
<div class="flex flex-col h-80 flex-shrink-0 items-start justify-between">
<div>
  <button on:click={toggle} class="px-4 py-2 shadow-md bg-dark-50 rounded min-w-[8rem]">
    {#if shouldShow}Hide
    {:else}Show me
    {/if}
  </button>
  <button on:click={toggleClip} class="px-4 py-2 shadow-md bg-dark-50 rounded min-w-[8rem]">
    {#if clip}Disable Clip Mask
    {:else}Activate Clip Mask
    {/if}
  </button>
  <button on:click={toggleDir} class="px-4 py-2 shadow-md bg-dark-50 rounded min-w-[8rem]">
    {#if direction === "left"}Left
    {:else if direction === "none"}None
    {:else if direction === "right"}Right
    {/if}
  </button>
</div>

  {#if shouldShow}
    <Blockreveal clipPath="{clip}" stagger="{direction}" />
  {/if}
</div>

