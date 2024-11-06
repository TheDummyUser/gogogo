---
title: BUNNY... the app
date: 6-11-24
description: A simple multi purpose app.
---
Hello, everyone (or people of the internet)! I'm back with another blog.


If you haven't read my [first blog](https://g0g0g0.netlify.app/blogs/expense_splitter), go check it out! In this blog, I'll talk more about that app idea, though I've changed some parts of the plan.


About a year ago, I had created a clone of the Hacker News website, but for some reason, I removed it. Now, I'm planning to recreate it using React Native.


Here's the current app idea and its stages:


## First Stage:


- Implement Hacker News functionality within the app.
- Allow users to save posts to Supabase and access them later.


## Second Stage:


- Add a simple to-do list with time reminders, notifications, and similar features.


## Third Stage:


- Finalize the app with an expense tracker and bill splitter.


These are the stages I have in mind for now, but they may evolve over time.


As for the tech stack, not much has changed. I'll be using `rn-cli` and Supabase.


So, let's get started!


I'll be using the React Native CLI to set up the base project:


```node
npx @react-native-community/cli@latest init Bunny --version latest 
```


I've installed a few additional packages:


```
npm install @react-navigation/material-top-tabs react-native-tab-view @reduxjs/toolkit react-redux @react-navigation/material-bottom-tabs react-native-paper
```


You might be wondering why I'm using both the top and bottom navigation tabs. That will become clearer as the project progresses.


I'll set up a top tab bar stack for Hacker News categories like (top, best, new, ask, jobs). Other components will go into a stack and bottom tab navigation.


I'll start by setting up global themes with Redux and using Redux Toolkit (RTK) for managing data fetching for Hacker News.


I know I am not so consistent but I will try to update app and the blog from now on...


I guess this will be a good nah, great learning experience for me will all the stuff I am trying to use/do in a single app...




With this blog I am done setting up the global themes, fonts and screens to display news feed (top, best, new) and the slug page to display the webview or the markdown content...


Hope we meet again untill then bye bye...
