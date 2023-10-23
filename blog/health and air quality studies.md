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
<span class='text-g'>PROBLEM:</span> A dataset collected from low-income communities on human health had inconsistent response formats.
<br>
<span class='text-g'>GOAL:</span> Clean, standardise and analsze the data to find correlations between air quality measures and human health conditions.
<br>
<span class='text-g'>SOLUTION:</span> Data cleaning, data engineering and data analysis of the data was done.  Various data engineering techniques were applied, from cleaning to introducing dummy columns. Statistical and machine learning methods were explored, but unfortunately, the results were not promising. The dataset was heavily skewed, simply due to the parameters monitored, e.g. 1 in 100 people had asthma, it was difficult to statistically prove that there was a common feature (confounder) between the people that tested positive, such as using a coal stove within their dwelling. 
<br>
<span class='text-g'>RESULT:</span> The dataset was used for several studies, including my partner's PhD.

### OFC_study_2021 (Orofacial Cleft Palette) (Private)
<span class='text-g'>PROBLEM:</span> Data from 146 different stations was required. This was made difficult as the website only allowed a user to download one day. This was one of my first projects, and I could not get Selenium to work. Originally I wrote a script to click on each button based on its location on the screen. I discussed this with my friends and they taught me about POST requests, which ended up being much easier. 
<br>
<span class='text-g'>GOAL:</span> Download all 146 stations for the past 15 years. Place all data from a single station within a single spreadsheet.
<br>
<span class='text-g'>SOLUTION:</span> I used POST requests to download all SAAQIS data and performed extensive data cleaning and analysis. There were 146 stations, and every station needed to have it's own body for the POST request. I consulted with full-stack developers and we found that the POST requests for the site were very inefficient, with payloads of more than 12,000 characters, but this was still the simplest solution. I cleaned the data (e.g. 05 Jan 2022 00:00 was registered as 04 Jan 2022 24:00), performed some analysis (mean, std_dev, count, missingno plot) and made sure there was no data that was not downloaded due to too many requests, faulty network etc.
<br>
<span class='text-g'>RESULT:</span> This data was used in a published article, discussed in "Accomplishments in Data Science". As illustrated below, I employed a variety of visualisations to scrutinise the data:


<Lightbox transitionDuration={150}>
    <img src="AQ_msno_plot.png">
</Lightbox>


<br>

<Lightbox transitionDuration={150}>
    <img src="AQ_post_tracking.png">
</Lightbox>

<br>
A repository for all cleaned SAAQIS data to benefit other researchers can be accessed here:

[Github: SAAQIS_Environmental_Data](https://github.com/GarethMurray/SAAQIS_Environmental_Data)

I created an interactive Plotly plot of the average PM2.5 measured at all stations, highlighting any stations that are non-compliant with the annual South African National Ambient Air Quality standards:
<div class="lg:-mx-20">
    <iframe src="SA - Average PM2.5 (compliance)_2022.05.05.html" width="100%" height="500px" frameborder="0" />
</div>

### OFC_visualisation (Public)
The static geo-spatial plots used in reports from the abovementioned study can be found here:

[Github: OFC_visualisation](https://github.com/GarethMurray/OFC_visualisation)

### IndoorVsAmbient (Private)
A study which compared measured indoor PM2.5 data to outdoor PM2.5 data. An example of some of the data can be seen below.
<Lightbox transitionDuration={150}>
    <img src="output.png">
</Lightbox>