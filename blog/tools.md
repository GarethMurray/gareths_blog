---
title: Problem solving tools
date: 2023-10-22 23:53
excerpt: Problem solving tools that I have made
---
## Datasheet populator
<br>
<span class='text-g'>PROBLEM:</span> I had 16 control valve datasheets that had to be populated. Every time there would be a small change, all datasheets would had to be updated. This took some time as I had to wait for each datasheet to open, I'd have to navigate to the correct cell and make the same change. This manual action also introduces the possibility of making mistakes.
<br>
<span class='text-g'>GOAL:</span> To have all the process data in a single spreadsheet. I make all the changes from here, and the script runs through each datasheet and populates it accordingly.
<br>
<span class='text-g'>SOLUTION:</span> I automated population of separate datasheets from a table using pandas.
<br>
<span class='text-g'>RESULT:</span> We were still in the early design phases so there were many changes and I ended up with saving more time than it took to write the code.

## Find large files (for harddrive sorting)
<br>
<span class='text-g'>PROBLEM:</span> I didn't like how long the windows search took, and how it wasn't really customisable.
<br>
<span class='text-g'>GOAL:</span> Make a customisable searching tool that will print all files larger than a certain size within a certain folder. 
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script that did this. It outputs to terminal as I did not need anything fancy.
<br>
<span class='text-g'>RESULT:</span> The script works well, and fulfilled my needs. I now use it frequently when sorting through my harddrive.

## Find specific files based on keywords (better than Windows search)
<br>
<span class='text-g'>PROBLEM:</span> Windows search doesn't allow a whitelist of keywords, and I wanted to search for many separate terms at once.
<br>
<span class='text-g'>GOAL:</span> Make a customisable searching tool that will print all files with filenames containing the phrases within a whitelist within a certain folder. 
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script that did exactly this.
<br>
<span class='text-g'>RESULT:</span> I was really happy with this script. It made it so much easier to search for datasheets that document control did not place in the correct folder, or name correctly.

## Download flight prices for a specific flight 
<br>
<span class='text-g'>PROBLEM:</span> A friend of mine was going to Canada from the Netherlands and found that the price of flights fluctuated from day-to-day. He wanted to buy the tickets at the cheapest price, but this also meant that he was open to landing at different airports. He wanted to check 16 different routes, daily, and monitor the trend so that he could buy the right route at the right time.
<br>
<span class='text-g'>GOAL:</span> Write a script to scrape flight data from (a website). 
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script to scrape the flight data and append this data to an existing table in Excel. It was then easy for him to plot the trends and keep an eye on it. 
<br>
<span class='text-g'>RESULT:</span> I could not find anything in the terms of use that disallowed it, but to be safe, I told him to run the code no more than once a day. He managed to see when the price was low, and bought the tickets from one of the selected routes. 