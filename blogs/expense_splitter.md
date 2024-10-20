---
title: First-blog/app-idea
date: 20-10-2024
description: A simple expense sharing app with friends and foes
---
# Simple Expense Splitter App

Welcome to my first blog! I'm excited to share this project idea, which involves building a simple expense splitter app(hush, ik there are lots of projects bases on this idea but anyway I am going to build it). I’ll be covering the basic components, such as user authentication and database management. 

For this project, I’m using **Supabase** and **React Native**. Why React Native? Well, I’m a React Native developer, and this project will help me explore concepts I haven’t yet touched—like using Supabase 😛. However, if I find this project too easy with React Native, I might switch to Kotlin or Flutter—just for fun and to learn something new!

## Key Features

### 1. **User Authentication**
   - Implement Supabase's authentication features to allow users (friends) to sign up and log in.
   - You can use email/password or integrate third-party logins like Google for a seamless experience.

### 2. **Database Schema**
   Define the following tables in your Supabase database:
   - **Users**: Store user details such as name, email, and unique user ID.
   - **Groups**: This table represents different friend groups where expenses will be shared.
   - **Bills**: Store bill details such as title, amount, date, and who paid.
   - **Contributions**: Track who owes what for each bill in this table.

### 3. **Real-Time Collaboration**
   - Leverage Supabase’s real-time features to ensure users see updates immediately. For example, when a bill is added or edited, the changes will reflect instantly for all group members.

### 4. **Permissions**
   - Use role-based permissions to ensure that only the bill creator can edit the bill. This can be managed through the database schema and enforced in your app logic.

### 5. **Synchronization & Offline Support**
   - Consider adding synchronization features for offline access. If a user makes changes while offline, these changes should sync automatically once they regain connectivity.

### 6. **Push Notifications**
   - Implement push notifications to inform users when a new bill is added, updated, or when they owe money.

## Basic App Structure

- **User Login**: 
   - Simple authentication system to log in or sign up.
  
- **Home Screen**:
   - Displays a random UUID that can be used to add friends.
   - Once friends, the base user can include the friend in a bill.

- **Bill Creation**:
   - Bills have a title, date, amount, and are associated with the user who added them.
   - The bill creator can add contributions from other friends, split the bill, and track how much each person owes.

## Next Steps

1. **User Interface**:
   - Build a clean, simple UI in React Native that allows easy navigation between creating and viewing bills, managing groups, and splitting expenses.

2. **Backend**:
   - Set up your Supabase database with the necessary schema.
   - Implement authentication and real-time data syncing.

3. **Deploy**:
   - Consider deploying the app on both Android and iOS (using React Native’s cross-platform capabilities) or switch to a native development platform like Kotlin or Flutter if you want to explore further.

---

This project will not only help me understand Supabase better but will also improve my React Native skills. If the project becomes too simple, I might even dive into Kotlin or Flutter development—why not explore new things while we’re at it, right?

Stay tuned for updates on my progress!

---

Let me know your thoughts or if you have any questions. I'm excited to dive into this project and would love any feedback on improving the app or this blog post.

Thanks for reading!