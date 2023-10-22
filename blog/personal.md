---
title: Personal
date: 2023-10-22 23:52
excerpt: Things to improve my personal life
---
## Warframe (Private)
<br>
<span class='text-g'>PROBLEM:</span> I played a game online that has an in-game currency. A person can sell items that they have collected for this currency, on a type of auction. One would constantly need to check the price of certain items to see if someone was selling it for a price below what I wanted to spend.
<br>
<span class='text-g'>GOAL:</span> Create a script that would run though a whitelist of items and tell me if any of them were selling for a price lower than my stipulated target.
<br>
<span class='text-g'>SOLUTION:</span> I would create a list of all the items that I was shopping for, and the script would iterate through each and find every instance of that item using a fuzzy search that is still for sale. I kept track of median and minimum prices, as well as the age of the item on the market. 
<br>
<span class='text-g'>RESULT:</span> I managed to get all my items for a good price, and used the same app to estimate what I should sell my items for.

An example of a certain piece of equipment can be found below:
<a href="Warframe_box.png" target="_blank"> 
    <img src="Warframe_box.png">
</a><a href="Warframe_price.png" target="_blank"> 
    <img src="Warframe_price.png">
</a>

## Payslip_check (Private)
I created a Jupyter Notebook to work through my payslips and extract all the values using regex (as I was paid an hourly rate, my pay differed from week to week). I exported this to a spreadsheet for further analysis, and to compare to a new offer that I had received.
<br>
<span class='text-g'>PROBLEM:</span> I received a new job offer and I needed to compare the new offer to my current offer (actual cost to company). Unfortunately, my (then) current job paid by the hour so the monthly rates differed. 
<br>
<span class='text-g'>GOAL:</span> Look at the past year's data, and average all incomes and deductions.
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script to walk through the folder with all my payslips and to use regex to extract each item. It would then place everything in a dataframe, and would output an xlsx file.
<br>
<span class='text-g'>RESULT:</span> I managed to properly analyse my current salary and all benefits and make an informed decision about the job offer.

## Bat_installer (Public)
<br>
<span class='text-g'>PROBLEM:</span> Every time that I format my computer, I have to manually reinstall all of my apps.
<br>
<span class='text-g'>GOAL:</span> Automatically install all apps within a folder, even if they are a slightly older version (the app will update itself automatically)
<br>
<span class='text-g'>SOLUTION:</span> I eventually wrote a small script to run all files in a specified folder. 
<br>
<span class='text-g'>RESULT:</span>The script still required me to press the "Next" button but I intend to find a workaround for this some day.

## Drivers_Licence (Private)
<br>
<span class='text-g'>PROBLEM:</span> In South Africa, they realease slots for you to renew your driver's license every couple of hours. I had tried refreshing the page every now and then but I was not finding a slot. 
<br>
<span class='text-g'>GOAL:</span> Write a script to monitor the website for me and tell me when I can book an appointment.
<br>
<span class='text-g'>SOLUTION:</span> I then wrote a script that would monitor the site and send me a message to my phone (on Pushbullet) informing me of the available time slots (filtered by when I was available).
<br>
<span class='text-g'>RESULT:</span> I received a message on my phone about the driver's license appointment time available and I booked my appointment in the same day that I completed the program.

## Appointment for biometrics (Private)
<br>
<span class='text-g'>PROBLEM:</span> In the Netherlands, I needed to make an appointment to take my biometrics. There were few appointme
<br>
<span class='text-g'>GOAL:</span> Write a script to monitor the website for me and tell me when I can book an appointment.
<br>
<span class='text-g'>SOLUTION:</span> I then wrote a script that would monitor the site and send me a message to my phone (on Pushbullet) informing me of the available time slots
<br>
<span class='text-g'>RESULT:</span> I printed the results every 30 seconds to a simple GUI. While I continued working, I left it in the corner on my second screen, and it would refresh. If an appropriate slot was found, the line would turn red to catch my attention. An appropriate appointment was made that same week.

## dog_tags (Public)
<br>
<span class='text-g'>PROBLEM:</span> My brother helped me with this repo. We wanted to get new dog tags for the dogs with our contact details on, but we weren't sure how soon we would move to a new house. We still wanted the person who found our missing dog to be able to return the dog to our house, even if we moved, without having to buy new dog tags every time.
<br>
<span class='text-g'>GOAL:</span> Devise a system to allow us to reuse the dog tags when we move.
<br>
<span class='text-g'>SOLUTION:</span> We decided to only include our phone numbers on the dog tag and on the reverse side, we had a QR code printed, which was to be used if we were not reachable via our phone. We did not want our home address on the internet with our associated phone numbers and email addresses, so the QR code would take the user to a site,hosted on Vercel, where they can input their contact details so that we could contact them. 
<br>
<span class='text-g'>RESULT:</span> I hope to never need this app, but we tested it and it works well.

## gmail_sorter (Private)
<br>
<span class='text-g'>PROBLEM:</span> I found that my gmail inbox starts getting full when I am too busy to look at my emails. A lot of the time, it is due to newsletters, which I read when I have time, but are not a priority. I found gmail filters to not suit my needs. I had also got into the habit of sending myself quick messages as reminders - whether it was movies and series to watch, books to read, ideas to investigate, things I wanted to buy. 
<br>
<span class='text-g'>GOAL:</span>  Archive all emails from a whitelist of email addresses that are more than 14 days old. All the email reminders should have their information extracted and be neatly stored somewhere.
<br>
<span class='text-g'>SOLUTION:</span> I had to work in a Google Cloud project to do the authentication. Youtube videos and ChatGPT helped me with this a bit, as I was completely unaware that any of this existed. I created a whitelist of 300 emails addresses, and I run the code using windows scheduler daily. I made another script that would extract the body of each of the emails and add them all to a dataframe, which would be exported to a xlsx file.
<br>
<span class='text-g'>RESULT:</span>  I managed to get to a zero inbox, after having more than 1000 unread mails. I feel like my emails are finally under control.

## telegram_db (Private)
<br>
<span class='text-g'>PROBLEM:</span> Initially, I stored all my ideas on my e-mail, as an unread email to myself. These started getting lost so I decided to start storing these in a different way. I decided to find a better to store my quick notes. 
<br>
<span class='text-g'>GOAL:</span> Find some way to log my thoughts on-the-go without having a cumbersome process. Bonus points if I can also include the category so that it is easier to find at a later stage.
<br>
<span class='text-g'>SOLUTION:</span> Initially, I created a bot that would just store any new emails in a xlsx file. It was a bit cumbersome, as I needed to create a bat file to run the script, and run the bat file as a scheduled task from Windows Task Scheduler. The unfortunate thing was that it would only run if my computer was switched on. I decided to go another route - I tried to run the script on my HomeAssistant Raspberry Pi but I couldn't get this working. I decided to try and store it as a SQL using Heroku, but their free license offer has been discontinued. I then tried to run it on GCP (Google Cloud). I set up a virtual machine but could not get it to save my instance of my database.
<br>
<span class='text-g'>RESULT:</span> This is still a work in progress!

## Banking (Private)
<br>
<span class='text-g'>PROBLEM:</span> My partner and I have separate bank accounts. I want to split the costs fairly, but ometimes she buys groceries, and sometimes I do.
<br>
<span class='text-g'>GOAL:</span> Develop a script to combine her banking transaction data with my  banking transaction data, categorise it, sort it, and display it.
<br>
<span class='text-g'>SOLUTION:</span> I wrote a script that consolidates all transactions from my account (ABN Amro) and my partner's account (ING). It then categorises the transactions by keywords and outputs to a Dash dashboard, with dropdowns to filter for each user and for each category to analyse monthly spends.
<br>
<span class='text-g'>RESULT:</span> I use the app regularly, and it has helped us to compare our monthly spends, both to make sure we spend evenly, but also to make sure that we are overall within budget.
