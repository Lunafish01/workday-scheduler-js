# workday-scheduler-js

## Description 

- In order to keep track of my daily activities, like class times, meetings, work schedule and assignments due, implementing a work day scheduler can be very helpful. Using jQuery libraries, HTML and CSS libraries, as well as Dayjs, I was able to put together a work-day scheduler that will save important times and dates. In addition to saving important information, the scheduler also organizes my day by the current time using CSS to color code past, present and future time slots. As the day goes on, time slots will change from gray for past event times, red for present/current event times and green for all future event time slots. Dayjs was also used to add the current date and time to the scheduler, in the correct location time zone the user is in.  


## Acceptance Criteria

- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
- WHEN I view the timeblocks for that day
- THEN each timeblock is color coded to indicate whether it is in the past, present, or future
- WHEN I click into a timeblock
- THEN I can enter an event
- WHEN I click the save button for that timeblock
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist

## References 

[Dayjs Library](https://day.js.org/en/) - was used to display current time and date.

[jQuery Library](https://jqueryui.com/) - used for all Javscript in script.js

[Bootstrap Library](https://getbootstrap.com/) - used tfor some CSS stylings in application

## Link to Deployed Application

[Work-Day-Scheduler Link](https://lunafish01.github.io/workday-scheduler-js/)

## Screen shot of Deployed Application

![Alt text](<Screenshot 2023-09-25 at 11.35.25 PM.png>)