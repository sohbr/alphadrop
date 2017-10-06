# Rhythm-Rider - A musical video game

### Background and Overview

Rhythm-Rider is a musical video game where players score points based on how well they time their inputs to a musical beat. The idea for Rhythm-Rider is inspired by the popular Japanese dance game, Dance Dance Revolution.

### Functionality & MVP  

In Rhythm-Rider, users will be able to:

- [ ] Select a difficulty level (speed)
- [ ] Start, pause, and restart the game
- [ ] Listen to the main song that is playing as well a corresponding sound for user input
- [ ] Can mute sounds
- [ ] Save their name to a high-scores list

Points will be awarded based on the following beat proximity ratings:

  1. Perfect: 10
  2. Great: 7
  3. Good: 4
  4. Okay: 1
  5. Miss: (-3)

Bonus points will be awarded for stringing together any 'Perfect' and 'Great' ratings.

### Wireframes

This app will consist of a single screen with the difficulty selection in the top-left and playback controls in the bottom-right. During gameplay, arrows (up, right, left, down) will fall from the top of the screen to the bottom where four outlines of the arrows are visible.   

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- `Web Audio API` for sound generation, processing and control. `WebAudioAPI` allows for simultaneous sounds with more dependable time triggering
- `Firebase` as backend database to store high-scores.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, the following scripts are involved in this project:

`main.js`: this script will handle the logic for creating and updating the necessary DOM elements.

`falling_arrows.js`: this script will house the logic for the falling arrows.

`arrow_buttons.js` : this script will handle the logic for the arrow buttons at the bottom of the screen.

`audio.js`: this script will handle the audio logic.


### Implementation Timeline

**Over the weekend**:

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 4 scripts outlined above.  Learn the basics of `Web Audio API`.  Goals for the day:

- [x] Get `webpack` serving files and frame out index.html
- [x] Completed WebAudioAPI Tutorial and loaded basic sound from static assets
- [x] Learn enough `Web Audio` to render an object to the `Canvas` element and create a sound


**Day 2**: Dedicate this day to learning the `Web Audio` API.  First, build out the `audio.js` module. Then, use `main.js` to create and render `falling_arrows`s and `arrow_buttons`s. Goals for the day:

- [x] Complete the `falling_arrows.js` and `arrow_buttons.js` modules
- [x] Get sounds to play on user input
- [x] Build first sound library

**Day 3**: Create the logic for backend on firebase.

- [x] Order and store top 10 high-scores
- [x] Have a functional screen on the `Canvas` frontend that correctly handles creation and running of the simulation.
- [x] Make sure that starting, stopping, and restarting works.

**Day 4**: Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:

- [x] Create controls for game speed, stop, start, restart
- [x] Have a styled `Canvas`, nice looking controls and title
