# TODO

1. use csstree-validator to validate form input and if there is an issue display that message by the property
2. allow a dynamic add property/value to each customizableComponent, and also validate that it is a css property and a proper css value for that property
3. santize css wherever nessesary sanitize where ness
4. allow admins to edit the themes just like one would edit userPreference

<br>
Title: Passing Props<br>
Duration: 1hr+<br>
Creator:  Joe Keohan<br>

---

## Recreating WeatherForecast in React

In this exercise, you will practice creating reusable React Components.

Use the following [CodeSandbox Starter](https://codesandbox.io/s/adoring-goodall-mhive) code to replicate the following HTML with react:

<img src="https://i.imgur.com/mX2VNh1.png
" width=500/><br>

#### React Hierarchy

Here is the React Hierarchy you will be implementing:

<img src="https://i.imgur.com/7YlFsU7.png" width=500/><br>

#### Getting Started

In `template.html` you will find five weather elements that generate the output you are seeing now.

Perform the following to complete the lab:

**Creating The Data**

-   Create a new file called `weatherData.js` that contain an array of five objects with the following properties: `img`,`conditions`,`time`.
-   Populate the objects based on the values from those same elements in the HTML
-   Import into `App.js`
-   Console.log the file to confirm that it has been imported

**Creating The `WeatherForecast` Component**

-   Look over the HTML structure used to create the weather icons
-   Create a `WeatherForecast` Component based on the HTML structure
-   Make sure to set the Component up to accept props and update the JSX to work with those props

**Rendering The `WeatherForecast` Component**

-   Import the `WeatherForecast` Component into `App`
-   Loop over the weatherData array data and create a `WeatherForecast` Component for each element passed
-   In the loop pass the element the props it needs for `img`, `conditions` and `time`.
-   App will then render those `WeatherForecast` Components

**Bonus**

-   Try creating the following additional Components:

    -   WeatherIcon - contains only the img
    -   WeatherData - contains both the `conditions` and `time`

    If successful your React Hierarchy will now look like the following:

    <img src="https://i.imgur.com/ffkXBPi.png" width=600/>
