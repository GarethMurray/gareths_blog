---
title: Calculations and Investigations
date: 2023-10-22 23:54
excerpt: A short summary of some of the Process Engineering tasks and calculations that I have done in Python
---
## Hydraulics and control valve sizing
I generated a tool to check the Reynolds number and estimate pressure drop across the line for incompressible flow. It would also allow you to size a control valve (output the correct CV given the upstream and downstream conditions) and would output the correct line size based on rules of thumb (as well as one line size up and one line size down).

## Compressible flow
Compressible flow pressure drops are notoriously labourious due to the iterative nature. Fortunately, this is where Python excels. 

## PSV (API 520/521/526)
Using API 520/521/526, I was able to automate some of the calculations for PSV sizing. It obviously requires a lot of judgement so I did not automate everything, and I would select the correct calculation based on the scenario.

## Desuperheater
Calculation that calculates the amount of water that needs to be injected to desuperheat the steam appropriately, and sizes the line correctly.

## Heat and mass balances
I have developed calculations for heat and mass balances over the entire steam network. 

## PI datalink data download
Downloading data through PI would sometimes take very long in Excel. Instead, I downloaded it directly using and API request and processed the data accordingly. My favourite tool takes a tag (UID), duration and time interval and automatically prints either a histogram or a time series trend.

## Consolidation of morning meetings into a single report, separated by unit
We have one Google sheet per week, with five tabs per sheet. Our operations team reports any faults or maintenance in this sheet, and the engineers report and optimisation. To find any recurring issue with a certain piece of equipment, one has to browse through every sheet, opening one at a time. I wrote a script that read all of the sheets and tabs and placed it all into a single database. Once there, I could filter by equipment name and easily find the issues as well as the dates of the issues.

## Animation of SMR tube temperature changes over time
I was curious about my SMR and wanted to know if there were consistently hotter or colder tubes (any fouling results in a higher dP, meaning uneven and lower flow. This then results in a hotter tube as the cooling effect provided from incoming gas is not sufficient). I wrote a script to download hourly data for the past year and created a gif of a top view of all the tubes with each tube colour coded by temperature. This way it was very easy to visualise any changes or consisint deviations on the tubes. on  

## Daily plant support and highlight of deviations
We had a plant monitoring spreadsheet that was nearly 400 rows long. One should always start with any deviations before starting with optimisation. When going through the sheet to find any deviations, I found it quite cumbersome. I instead used my PI downloading tool to download the last 24h data, and using the agreed-upon minimums and maximums, I output only the deviations to a spreadsheet (also printed to the Jupyter Notebook) so that I could quickly go through the issues for the day.

## Comparison of boiler operation modes
During the design of an Air Preheater, I was comparing the boilers on two different trains. I found that a side-by-side histogram plot of numerous process conditions, on the same scale, was the best was to compare and evaluate whether the design for one train could be copied to the other. 

## Comparison of ambient temperatures over the past 15 years
During the air preheater design, I was looking at the general trend of the ambient temperature and humidity for a "normal" operating mode, and to verify the existing minimum and maximum. I also plotted a KDE plot to visualise the prevailing wind direction.

## Air preheater acid condensation
Another issue that came up during my design was the acid condensation point of the flue gas that I was cooling in the Air Preheater. I found some academic literature that gave guidelines to calculate the acid dewpoint. I then used this calculation to calculate the acid dewpoint and various H2S compositions to plot a graph so that I had a better feel for the design. I saw this as a visualised sensitivity analysis.
