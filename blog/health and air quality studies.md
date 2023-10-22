---
title: Health and Air Quality Studies 
date: 2023-10-22 23:55
excerpt: An Insight into Data-Driven Research Studies
---
## Health and Air Quality Studies 

### PhD-2022 (Private)
<span class='text-g'>PROBLEM:</span> My partner had received data from a study where two different groups that had interviewed a low-income community regarding human health. Unfortunately, a lot of the responses differed in format.
<br>
<span class='text-g'>GOAL:</span> Clean the data, analyse it and see if correlations can be found between several air quality measures and human health conditions.
<br>
<span class='text-g'>SOLUTION:</span> Data cleaning, data engineering and data analysis of the data was done.  Some of the column values had to be standardised, and dummy columns created. Based on various conditions, new columns were also created. 
Some statistical evaluations were run on the data, and we also tried some machine learning models.  I tried a Random Forest model, but unfortunately, the results were not promising. The dataset was heavily skewed, simply due to the parameters monitored, e.g. 1 in 100 people had asthma, it was difficult to statistically prove that there was a common feature (confounder) between the people that tested positive, such as using a coal stove within their dwelling. 
<br>
<span class='text-g'>RESULT:</span> The dataset was used for several studies, as well as the basis for her PhD.

### OFC_study_2021 (Orofacial Cleft Palette) (Private)
<span class='text-g'>PROBLEM:</span> We needed to get data from 146 different stations. This was difficult as the website only allowed a user to download one day. This was one of my first projects, and I couldn't get Selenium to work. Originally I wrote a script to click on each button based on location on the screen. I spoke to my friends and they taught me about POST requests, which ended up being much easier. 
<br>
<span class='text-g'>GOAL:</span> Download all 146 stations for the past 15 years. Place all data from a single station within a single spreadsheet.
<br>
<span class='text-g'>SOLUTION:</span> I downloaded all the SAAQIS data using POST requests. I cleaned the data (e.g. 05 Jan 2022 00:00 was registered as 04 Jan 2022 24:00), performed some analysis (mean, std_dev, count, missingno plot) and made sure there was no data that was not downloaded due to too many requests, faulty network etc.
<br>
<span class='text-g'>RESULT:</span> This data was used in a published article, discussed in "Accomplishments". Some of the results can be found below.

<a href="AQ_msno_plot.png" target="_blank"> 
    <img src="AQ_msno_plot.png">
</a>
<br>
There were 146 stations, and every station needed to have it's own body for the POST request. I consulted with full-stack developers and we found that the POST requests for the site were very inefficient, with payloads of more than 12,000 characters. 
<a href="AQ_post_tracking.png" target="_blank"> 
    <img src="AQ_post_tracking.png">
</a>
<br>
All data (2005-2021) can be found here:
https://github.com/GarethMurray/SAAQIS_Environmental_Data

Plotly plot of any stations measuring PM that is non-compliant with WHO standards:
![[SA - Average PM2.5 (compliance)_2022.05.05.html]]


### OFC_visualisation (Public)
Geo-spatial plots from the abovementioned study can be found here:
https://github.com/GarethMurray/OFC_visualisation

### IndoorVsAmbient (Private)
Compared measured indoor PM2.5 data to outdoor PM2.5 data. An example of some of the data can be seen below.
<a href="output.png" target="_blank"> 
    <img src="output.png">
</a>


### SAAQIS_Environmental_Data (Public)
This is a repository where I have stored all the cleaned data from SAAQIS so that researchers can use this without having to go through what I went through.
