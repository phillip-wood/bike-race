# Bike Race
## Getting Started

#### create branch, eg feature/something before working!

### User Stories
- as a user, I want to be able to visit the app, and view and join a list of organised bike races

- as a user, I want to be able to create a new bike race, with a given start point and end point, at a given time

- i want to be able to view the profiles of the attending members of any organised bike race

- i want to be able to withdraw from an event i have signed up from

- i want to be able to create a profile and update my user profile

- i want to be able to view all races I have currently signed up to

- be able to view events i have attended in the past

- be able to pick a point on a map as my start point.

### DB structure

#### user
id\
username\
email\
imgURL\
eventsAttended\
bike_type\ dropdown list
bike image? null initially\


#### event
id\
eventName\
description\
startPoint [lat, long]\
endPoint null\
startTime(epoch)\
maxGroupSize\
distance\
creator_id\


#### users_events
id\
user_id\
event_id\


#### comments
id\
username\
comment\
event_id\

### stretches

event categories\
editing events? notifying other members\
i want to be able to pick an endpoint on a map, and be given the path, distance and estimated duration of the bike race\
enable comments on events\
convert to progressive web app \
