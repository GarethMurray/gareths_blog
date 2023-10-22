---
title: Gareth Murray's Online CV
date: 2023-10-22 23:59
excerpt: A space to talk about the things that I love to do
---

<em class='text-g'>Thank you for taking the time to follow this link. I really love automation, Python, Data Science and Machine learning, and am happy that I can share some of my favourite things with you below!</em>

### Data for WHO database 
I wrote a script that would scrape data from a website using POST requests and I cleaned the data. My data helped to create one of the largest coherent ambient air quality datasets in Africa, which has been/ is being used in a number of environmental health studies. This work resulted in an acknowledgement in the World Health Organisation (WHO) ambient air quality database, 2022 update - Status report.
https://iris.who.int/bitstream/handle/10665/368432/9789240047693-eng.pdf?sequence=1
![[Pasted image 20231019211910.png]]

### Orofacial Cleft Study 
#Published
After I scraped and cleaned the data above, it was used in the article below, which was published in "Annals of Global Health
2023-01 | Journal article" (Impact factor: 3.64.)
 *"The Risk of Orofacial Cleft Lip/Palate Due to Maternal Ambient Air Pollution Exposure: A Call for Further Research in South Africa"*
https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9881443/ 


## Calculations and Investigations

### Process_Engineering (Private)
In my process engineering repository, I have several calcualtions:

### Hydraulics and control valve sizing
I generated a tool to check the Reynolds number and estimate pressure drop across the line for incompressible flow. It would also allow you to size a control valve (output the correct CV given the upstream and downstream conditions) and would output the correct line size based on rules of thumb (as well as one line size up and one line size down).

### Compressible flow
Compressible flow pressure drops are notoriously labourious due to the iterative nature. Fortunately, this is where Python excels. 

### PSV (API 520/521/526)
Using API 520/521/526, I was able to automate some of the calculations for PSV sizing. It obviously requires a lot of judgement so I did not automate everything, and I would select the correct calculation based on the scenario.

### Desuperheater
Calculation that calculates the amount of water that needs to be injected to desuperheat the steam appropriately, and sizes the line correctly.

### Heat and mass balances
I have developed calculations for heat and mass balances over the entire steam network. 

### PI datalink data download
Downloading data through PI would sometimes take very long in Excel. Instead, I downloaded it directly using and API request and processed the data accordingly. My favourite tool takes a tag (UID), duration and time interval and automatically prints either a histogram or a time series trend.

### Consolidation of morning meetings into a single report, separated by unit
We have one Google sheet per week, with five tabs per sheet. Our operations team reports any faults or maintenance in this sheet, and the engineers report and optimisation. To find any recurring issue with a certain piece of equipment, one has to browse through every sheet, opening one at a time. I wrote a script that read all of the sheets and tabs and placed it all into a single database. Once there, I could filter by equipment name and easily find the issues as well as the dates of the issues.

### Animation of SMR tube temperature changes over time
I was curious about my SMR and wanted to know if there were consistently hotter or colder tubes (any fouling results in a higher dP, meaning uneven and lower flow. This then results in a hotter tube as the cooling effect provided from incoming gas is not sufficient). I wrote a script to download hourly data for the past year and created a gif of a top view of all the tubes with each tube colour coded by temperature. This way it was very easy to visualise any changes or consisint deviations on the tubes. on  

### Daily plant support and highlight of deviations
We had a plant monitoring spreadsheet that was nearly 400 rows long. One should always start with any deviations before starting with optimisation. When going through the sheet to find any deviations, I found it quite cumbersome. I instead used my PI downloading tool to download the last 24h data, and using the agreed-upon minimums and maximums, I output only the deviations to a spreadsheet (also printed to the Jupyter Notebook) so that I could quickly go through the issues for the day.

### Comparison of boiler operation modes
During the design of an Air Preheater, I was comparing the boilers on two different trains. I found that a side-by-side histogram plot of numerous process conditions, on the same scale, was the best was to compare and evaluate whether the design for one train could be copied to the other. 

### Comparison of ambient temperatures over the past 15 years
During the air preheater design, I was looking at the general trend of the ambient temperature and humidity for a "normal" operating mode, and to verify the existing minimum and maximum. I also plotted a KDE plot to visualise the prevailing wind direction.

### Air preheater acid condensation
Another issue that came up during my design was the acid condensation point of the flue gas that I was cooling in the Air Preheater. I found some academic literature that gave guidelines to calculate the acid dewpoint. I then used this calculation to calculate the acid dewpoint and various H2S compositions to plot a graph so that I had a better feel for the design. I saw this as a visualised sensitivity analysis.

## Problem solving tools that I have made

### Datasheet populator
<br>
<span class='text-g'>PROBLEM:</span> I had 16 control valve datasheets that had to be populated. Every time there would be a small change, all datasheets would had to be updated. This took some time as I had to wait for each datasheet to open, I'd have to navigate to the correct cell and make the same change. This manual action also introduces the possibility of making mistakes.
<br>
<span class='text-g'>GOAL:</span> To have all the process data in a single spreadsheet. I make all the changes from here, and the script runs through each datasheet and populates it accordingly.
<br>
<span class='text-g'>SOLUTION:</span> I automated population of separate datasheets from a table using pandas.
<br>
<span class='text-g'>RESULT:</span> We were still in the early design phases so there were many changes and I ended up with saving more time than it took to write the code.

### Find large files (for harddrive sorting)
<br>
<span class='text-g'>PROBLEM:</span> I didn't like how long the windows search took, and how it wasn't really customisable.
<br>
<span class='text-g'>GOAL:</span> Make a customisable searching tool that will print all files larger than a certain size within a certain folder. 
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script that did this. It outputs to terminal as I did not need anything fancy.
<br>
<span class='text-g'>RESULT:</span> The script works well, and fulfilled my needs. I now use it frequently when sorting through my harddrive.

### Find specific files based on keywords (better than Windows search)
<br>
<span class='text-g'>PROBLEM:</span> Windows search doesn't allow a whitelist of keywords, and I wanted to search for many separate terms at once.
<br>
<span class='text-g'>GOAL:</span> Make a customisable searching tool that will print all files with filenames containing the phrases within a whitelist within a certain folder. 
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script that did exactly this.
<br>
<span class='text-g'>RESULT:</span> I was really happy with this script. It made it so much easier to search for datasheets that document control did not place in the correct folder, or name correctly.

### Download flight prices for a specific flight 
<br>
<span class='text-g'>PROBLEM:</span> A friend of mine was going to Canada from the Netherlands and found that the price of flights fluctuated from day-to-day. He wanted to buy the tickets at the cheapest price, but this also meant that he was open to landing at different airports. He wanted to check 16 different routes, daily, and monitor the trend so that he could buy the right route at the right time.
<br>
<span class='text-g'>GOAL:</span> Write a script to scrape flight data from (a website). 
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script to scrape the flight data and append this data to an existing table in Excel. It was then easy for him to plot the trends and keep an eye on it. 
<br>
<span class='text-g'>RESULT:</span> I could not find anything in the terms of use that disallowed it, but to be safe, I told him to run the code no more than once a day. He managed to see when the price was low, and bought the tickets from one of the selected routes. 

## Things to improve my personal life


### Warframe (Private)
<br>
<span class='text-g'>PROBLEM:</span> I played a game online that has an in-game currency. A person can sell items that they have collected for this currency, on a type of auction. One would constantly need to check the price of certain items to see if someone was selling it for a price below what I wanted to spend.
<br>
<span class='text-g'>GOAL:</span> Create a script that would run though a whitelist of items and tell me if any of them were selling for a price lower than my stipulated target.
<br>
<span class='text-g'>SOLUTION:</span> I would create a list of all the items that I was shopping for, and the script would iterate through each and find every instance of that item using a fuzzy search that is still for sale. I kept track of median and minimum prices, as well as the age of the item on the market. 
<br>
<span class='text-g'>RESULT:</span> I managed to get all my items for a good price, and used the same app to estimate what I should sell my items for.

An example of a certain piece of equipment can be found below:
![[Pasted image 20231019121508.png]]
![[Pasted image 20231019121459.png]]

### Payslip_check (Private)
I created a Jupyter Notebook to work through my payslips and extract all the values using regex (as I was paid an hourly rate, my pay differed from week to week). I exported this to a spreadsheet for further analysis, and to compare to a new offer that I had received.
<br>
<span class='text-g'>PROBLEM:</span> I received a new job offer and I needed to compare the new offer to my current offer (actual cost to company). Unfortunately, my (then) current job paid by the hour so the monthly rates differed. 
<br>
<span class='text-g'>GOAL:</span> Look at the past year's data, and average all incomes and deductions.
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script to walk through the folder with all my payslips and to use regex to extract each item. It would then place everything in a dataframe, and would output an xlsx file.
<br>
<span class='text-g'>RESULT:</span> I managed to properly analyse my current salary and all benefits and make an informed decision about the job offer.

### Bat_installer (Public)
<br>
<span class='text-g'>PROBLEM:</span> Every time that I format my computer, I have to manually reinstall all of my apps.
<br>
<span class='text-g'>GOAL:</span> Automatically install all apps within a folder, even if they are a slightly older version (the app will update itself automatically)
<br>
<span class='text-g'>SOLUTION:</span> I eventually wrote a small script to run all files in a specified folder. 
<br>
<span class='text-g'>RESULT:</span>The script still required me to press the "Next" button but I intend to find a workaround for this some day.

### Drivers_Licence (Private)
<br>
<span class='text-g'>PROBLEM:</span> In South Africa, they realease slots for you to renew your driver's license every couple of hours. I had tried refreshing the page every now and then but I was not finding a slot. 
<br>
<span class='text-g'>GOAL:</span> Write a script to monitor the website for me and tell me when I can book an appointment.
<br>
<span class='text-g'>SOLUTION:</span> I then wrote a script that would monitor the site and send me a message to my phone (on Pushbullet) informing me of the available time slots (filtered by when I was available).
<br>
<span class='text-g'>RESULT:</span> I received a message on my phone about the driver's license appointment time available and I booked my appointment in the same day that I completed the program.

### Appointment for biometrics (Private)
<br>
<span class='text-g'>PROBLEM:</span> In the Netherlands, I needed to make an appointment to take my biometrics. There were few appointme
<br>
<span class='text-g'>GOAL:</span> Write a script to monitor the website for me and tell me when I can book an appointment.
<br>
<span class='text-g'>SOLUTION:</span> I then wrote a script that would monitor the site and send me a message to my phone (on Pushbullet) informing me of the available time slots
<br>
<span class='text-g'>RESULT:</span> I printed the results every 30 seconds to a simple GUI. While I continued working, I left it in the corner on my second screen, and it would refresh. If an appropriate slot was found, the line would turn red to catch my attention. An appropriate appointment was made that same week.

### dog_tags (Public)
<br>
<span class='text-g'>PROBLEM:</span> My brother helped me with this repo. We wanted to get new dog tags for the dogs with our contact details on, but we weren't sure how soon we would move to a new house. We still wanted the person who found our missing dog to be able to return the dog to our house, even if we moved, without having to buy new dog tags every time.
<br>
<span class='text-g'>GOAL:</span> Devise a system to allow us to reuse the dog tags when we move.
<br>
<span class='text-g'>SOLUTION:</span> We decided to only include our phone numbers on the dog tag and on the reverse side, we had a QR code printed, which was to be used if we were not reachable via our phone. We did not want our home address on the internet with our associated phone numbers and email addresses, so the QR code would take the user to a site,hosted on Vercel, where they can input their contact details so that we could contact them. 
<br>
<span class='text-g'>RESULT:</span> I hope to never need this app, but we tested it and it works well.

### gmail_sorter (Private)
<br>
<span class='text-g'>PROBLEM:</span> I found that my gmail inbox starts getting full when I am too busy to look at my emails. A lot of the time, it is due to newsletters, which I read when I have time, but are not a priority. I found gmail filters to not suit my needs. I had also got into the habit of sending myself quick messages as reminders - whether it was movies and series to watch, books to read, ideas to investigate, things I wanted to buy. 
<br>
<span class='text-g'>GOAL:</span>  Archive all emails from a whitelist of email addresses that are more than 14 days old. All the email reminders should have their information extracted and be neatly stored somewhere.
<br>
<span class='text-g'>SOLUTION:</span> I had to work in a Google Cloud project to do the authentication. Youtube videos and ChatGPT helped me with this a bit, as I was completely unaware that any of this existed. I created a whitelist of 300 emails addresses, and I run the code using windows scheduler daily. I made another script that would extract the body of each of the emails and add them all to a dataframe, which would be exported to a xlsx file.
<br>
<span class='text-g'>RESULT:</span>  I managed to get to a zero inbox, after having more than 1000 unread mails. I feel like my emails are finally under control.

### telegram_db (Private)
<br>
<span class='text-g'>PROBLEM:</span> Initially, I stored all my ideas on my e-mail, as an unread email to myself. These started getting lost so I decided to start storing these in a different way. I decided to find a better to store my quick notes. 
<br>
<span class='text-g'>GOAL:</span> Find some way to log my thoughts on-the-go without having a cumbersome process. Bonus points if I can also include the category so that it is easier to find at a later stage.
<br>
<span class='text-g'>SOLUTION:</span> Initially, I created a bot that would just store any new emails in a xlsx file. It was a bit cumbersome, as I needed to create a bat file to run the script, and run the bat file as a scheduled task from Windows Task Scheduler. The unfortunate thing was that it would only run if my computer was switched on. I decided to go another route - I tried to run the script on my HomeAssistant Raspberry Pi but I couldn't get this working. I decided to try and store it as a SQL using Heroku, but their free license offer has been discontinued. I then tried to run it on GCP (Google Cloud). I set up a virtual machine but could not get it to save my instance of my database.
<br>
<span class='text-g'>RESULT:</span> This is still a work in progress!

### Banking (Private)
<br>
<span class='text-g'>PROBLEM:</span> My partner and I have separate bank accounts. I want to split the costs fairly, but ometimes she buys groceries, and sometimes I do.
<br>
<span class='text-g'>GOAL:</span> Develop a script to combine her banking transaction data with my  banking transaction data, categorise it, sort it, and display it.
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script that consolidates all transactions from my account (ABN Amro) and my partner's account (ING). It then categorises the transactions by keywords and outputs to a Dash dashboard, with dropdowns to filter for each user and for each category to analyse monthly spends.
<br>
<span class='text-g'>RESULT:</span> I use the app regularly, and it has helped us to compare our monthly spends, both to make sure we spend evenly, but also to make sure that we are overall within budget.

## Other

### Statistics (Public)
General statistics - this needs an update

### Engineering (Private)
This is where I keep some of the engineering tools that I have developed. 

### DataScienceFunctions (Private)
This is where I keep some of the Data Science tools that I have developed. 

### Kaggle_Titanic (Private)
This is a repository of data cleaning, data analysis and machine learning on the Titanic disaster data.

### Tutorials (Private)
A repository for all of my tutorials.

### qmk_firmware (Public)
A repository that I forked for the firmware for my mechanical keyboard.

## Courses
I have completed the following courses:
[Python for Data Science and Machine Learning Bootcamp](https://www.udemy.com/course-dashboard-redirect/?course_id=903744)
[The Complete SQL Bootcamp: Go from Zero to Hero](https://www.udemy.com/course-dashboard-redirect/?course_id=762616)
[Automate the Boring Stuff with Python Programming](https://www.udemy.com/course-dashboard-redirect/?course_id=543600)

I am busy with the following courses:
[Statistics for Business Analytics and Data Science A-Z™](https://www.udemy.com/course/data-statistics/)
[Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus](https://www.udemy.com/course/machinelearning/)

I am planning to do the following courses:
[Python and Django Full Stack Web Developer Bootcamp](https://www.udemy.com/course-dashboard-redirect/?course_id=822444)
[TensorFlow Developer Certificate in 2023: Zero to Mastery](https://www.udemy.com/course-dashboard-redirect/?course_id=3693164)
[Deep Learning: Advanced Natural Language Processing and RNNs](https://www.udemy.com/course-dashboard-redirect/?course_id=1647976)
[Data Science: Deep Learning and Neural Networks in Python](https://www.udemy.com/course-dashboard-redirect/?course_id=713104)
[Bootcamp of Data Science with Python (+250 exercises)](https://www.udemy.com/course-dashboard-redirect/?course_id=3716948)

Additionally, I am working on my Dutch: in-person classes, Duolingo, watching Dutch videos on Youtube and listening to Dutch podcasts.
[Learn Dutch -The Fast, Easy & Fun Speaking Dutch Method 14hr](https://www.udemy.com/course-dashboard-redirect/?course_id=2306430)


## Non-Data Science activities
I've recently been playing with home automation. It is difficult at times as we are still renting so I can't really install anything permanent. My automations include:
1. Automated message to my partner when I leave work stating the duration of my trip based on current traffic and the time I will arrive home.
2. Turn on my coffee machine when I am 10 minutes from home.
3. My rice cooker would burn the rice when on the "stay warm" setting, so as soon as the rice cooker draws below 50W of power, it turn cut the power.



