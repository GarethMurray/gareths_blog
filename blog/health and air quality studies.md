---
title: Health and Air Quality Studies 
date: 2023-10-22 23:55
excerpt: An Insight into Data-Driven Research Studies
---
<script>
    import { Lightbox } from 'svelte-lightbox'
</script>

## Health and Air Quality Studies 

### PhD-2022 (Private)
<div class="flex flex-col no-gap gap-2">

<div class='text-g -mb-1 pt-2'>PROBLEM: </div>
<p>A dataset collected from low-income communities on human health had inconsistent response formats.</p>

<div class='text-g -mb-1 pt-2'>GOAL:</div>
<p>Clean, standardise and analsze the data to find correlations between air quality measures and human health conditions.</p>

<div class='text-g -mb-1 pt-2'>SOLUTION:</div> 
<p>Data cleaning, data engineering and data analysis of the data was done.  Various data engineering techniques were applied, from cleaning to introducing dummy columns. Statistical and machine learning methods were explored, but unfortunately, the results were not promising. The dataset was heavily skewed, simply due to the parameters monitored, e.g. 1 in 100 people had asthma, it was difficult to statistically prove that there was a common feature (confounder) between the people that tested positive, such as using a coal stove within their dwelling.</p>

<div class='text-g -mb-1 pt-2'>RESULT:</div> 
<p>The dataset was used for several studies, including my partner's PhD.</p>

</div>

### OFC_study_2021 (Orofacial Cleft Palette) (Private)

<div class="flex flex-col no-gap gap-2">
<div class='text-g -mb-1 pt-2'>PROBLEM:</div> Data from 146 different stations was required. This was made difficult as the website only allowed a user to download one day. This was one of my first projects, and I could not get Selenium to work. Originally I wrote a script to click on each button based on its location on the screen. I discussed this with my friends and they taught me about POST requests, which ended up being much easier. 

<div class='text-g -mb-1 pt-2'>GOAL:</div> Download all 146 stations for the past 15 years. Place all data from a single station within a single spreadsheet.

<div class='text-g -mb-1 pt-2'>SOLUTION:</div> I used POST requests to download all SAAQIS data and performed extensive data cleaning and analysis. There were 146 stations, and every station needed to have it's own body for the POST request. I consulted with full-stack developers and we found that the POST requests for the site were very inefficient, with payloads of more than 12,000 characters, but this was still the simplest solution. I cleaned the data (e.g. 05 Jan 2022 00:00 was registered as 04 Jan 2022 24:00), performed some analysis (mean, std_dev, count, missingno plot) and made sure there was no data that was not downloaded due to too many requests, faulty network etc.

<div class='text-g -mb-1 pt-2'>RESULT:</div> This data was used in a published article, discussed in "Accomplishments in Data Science". As illustrated below, I employed a variety of visualisations to scrutinise the data:
</div>

<Lightbox transitionDuration={150}>
    <img src="AQ_msno_plot.png">
</Lightbox>



<Lightbox transitionDuration={150}>
    <img src="AQ_post_tracking.png">
</Lightbox>


A repository for all cleaned SAAQIS data to benefit other researchers can be accessed here:

<a class="mt-2" href="https://github.com/GarethMurray/SAAQIS_Environmental_Data">Github: SAAQIS_Environmental_Data</a>

I created an interactive Plotly plot of the average PM2.5 measured at all stations, highlighting any stations that are non-compliant with the annual South African National Ambient Air Quality standards:

<div class="relative flex justify-center">
    <div class="lg:min-w-[825px] max-w-[825px] xl:min-w-[825px] max-w-[825px]">
        <iframe src="SA - Averge PM2.5 (compliance) 2023.html" width="825px" height="525px" frameborder="0" />
    </div>
</div>

### OFC_visualisation (Public)
The static geo-spatial plots used in reports from the abovementioned study can be found here:

[Github: OFC_visualisation](https://github.com/GarethMurray/OFC_visualisation)

### IndoorVsAmbient (Private)
A study which compared measured indoor PM2.5 data to outdoor PM2.5 data. An example of some of the data can be seen below.

<Lightbox transitionDuration={150}>
    <img src="output.png">
</Lightbox>