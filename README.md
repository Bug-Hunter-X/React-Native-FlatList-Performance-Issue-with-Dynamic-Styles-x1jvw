# React Native FlatList Performance Issue with Dynamic Styles

This repository demonstrates a performance issue in React Native's FlatList when using dynamic styles within the `renderItem` function.  The problem arises from the recalculation of styles for each item, even when the styles are constant for each item. This leads to unnecessary re-renders and performance degradation, especially with large datasets.

## Issue Description

The `bug.js` file shows a simple FlatList implementation where the background color of each item is determined by its data.  This causes a significant performance hit, as the style is recomputed for every item render.

## Solution

The `bugSolution.js` file demonstrates a solution to this problem by memoizing the style calculations. By using `useMemo` hook, we ensure that the style is calculated only once per item, improving rendering performance considerably. 

## How to reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npx react-native run-android` or `npx react-native run-ios`.
5. Observe the performance difference between `bug.js` and `bugSolution.js` (especially noticeable with a larger dataset).