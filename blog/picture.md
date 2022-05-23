---
title: Optimising images on the web
date: 2022-05-03
excerpt: It is easier than it look 
---
# Optimised image elements

I feel as though images are largely neglected, but there's a lot of benefits to be had by optimising images. They're a key factor to page loads and can decrease core web vitals significantly if used correctly.

Firstly, the img element is dead* <sup>Not really</sup>

We should be nesting it within a picture element.

The picture element allows us to configure multiple sources. This will enable us to reference different source images based on media queries.

We do this by creating multiple sources and a single im within picture element. Each source's media attribute is evaluated, and the first to match true will be used as a source for the picture

```html

<picture>
	<source
		type="image/webp"
		media="(min-width: 800px)"
		srcset="image.webp?w=100 100w, /image.webp?w=200 200w" 
	/>
	<img
		alt="A way you'd describe this image to someone over the phone"
		srcset="image.jpg?w=100 100w, /image.jpg?w=200 200w"
		sizes="(max-width: 400px), 95vw, 50vw"
		src="/image.jpg"
		style="width: 100%; aspect-ratio: 1/1"
		fetchpriority="high"
		loading="lazy"
		decoding="auto"
	/>
</picture>
		

```
