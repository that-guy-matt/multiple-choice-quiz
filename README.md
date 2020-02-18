# Multiple Choice Quiz App

This was a homework assignment for a JavaScript class

## About the project

The requirement for this homework assignment was to create a quiz application that made use of an array and/or object value.

## Built with

- HTML
- JavaScript
- JQuery

## Roadmap

Currently the quiz is just functional. It goes through a set loop of 10 questions and keeps score of one point per question. There is no css styling at all at this point other than just to make a class to hide certain objects that will not be produced until the game end screen. The current plan is as follows:

1. ~~Recreate the game using JQuery (per homework assignment)~~ done
2. Add some CSS styling because, let's be honest, it's kinda ugly
3. (Optional) create a randomized array of the questions so they are not always in the same order

## Known issues

1. ~~Play again button functionality~~ FIXED

- On subsequent playthroughs, the game would crash due to not getting the right question count increment. It jumps from 0 to the end after only a single question. I have no idea why it's doing that.
- Currently this has been hotfixed by making the button do a page reload instead of resetting the game and variables.
