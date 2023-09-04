# QUIZ SWEDEN'S POLITICS 

This quiz assesses your general knowledge of Swedish politics and includes 10 easy-level questions that you should be familiar with if you are a resident of Sweden. 

![Responsive Mockup](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/images/amiresponsive.jpeg)

## Features

### Site Wide 

* Footer 

    * Containing two social media icons connected to my GitHub and LinkedIn profile.

![Footer](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/images/footer.jpeg)

### Landing Page

* Start quiz

    * Offers a brief explanation of the quiz's content to the user and the option to continue with the quiz.

![Landing Page](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/images/start.jpeg)

### The Quiz 

* The quiz 

    * A simple layout, including a question, response options and a scoring system.
    * When the user selects an answer, the button will turn red or green, depending on whether the answer is correct and the score will increase.  

![The Quiz](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/images/quiz.jpeg)

### End of quiz

* Score board

    * A score board with the current result also the highest score of any time if the user wants to replay.
    * This will give the user a overview of the results.

![End of Quiz](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/images/end.jpeg)
## Design 

### WireFrames 

![Wireframe](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/wireframes/wireframes.jpeg)

## Testing 

### Manually testing 

### Buttons

---
   **- The Start Quiz button is expected to display quiz to the user.**

   **Result:** When clicking the button it displays the quiz as it is supposed to do.

--- 
   **- The answer option buttons is expected to display the diffrent answers to that specific question and when the user makes a choice the background is supposed to change to red or green depending on the result.**

   **Result:** The button diplayed the answers options and when correct the selected option turned green, when wrong the button turned red and correct option turned green as expected.

---
   **- The Next button is expected to display the next question if there is more questions if not is it supposed to display the results.**

   **Result:** The button displayed the next question, after the last question it displayed the results. 

---
   **- The Quit button is expected to take the user back to the start.**

   **Result:** When the button where tested it navigated back to the start as intended. 

---
### Functions 

   **startQuiz - Expected to hide the start quiz section and display the quiz.** 

   **Result:** The function hidd start section and displayed the quiz as expected. 

---
   **showQuestion - Expected to display the questions and answers opitons.** 

   **Result:** The questions and answers options were displayed as expected. 

---
   **resetState - Expected to display the next question, hide the next button.** 

   **Result:** The start section is hidden and the quiz is displayed as expected. 

---
   **selectedAnswer - Expected to validate the user's answer choice, if the answer is correct, the selected option's background will turn green. In case of an incorrect answer, it turns red and the correct option is shown in green. In case of color vision deficiency i choose to display the correct and incorrect scores which increase depending on the result.** 

   **Result:** The selected option's background turned red when incorrect, the correct option turned green and the 'incorrect answers:' score increased. When correct it turned green and the 'correct answers:' score increased. 

---
   **showScore - Is expected to display result at the end of game and gives user the options to play again or to quit.** 

   **Result:** The results and the options to play again or to quit where displayed, when choosing to play again the quiz started again with my highest score from before display. When choosing to quit i was taken back to start again.

---
   **handleNextButton - Is expected handle the next button, if there is more questions they should be displayed and if not the results should be displayed.** 

   **Result:** When using the next button the next question were displayed, after the last question the results were displayed as intended. 

---
   **shuffle(array) - Is expected to shuffle the arrays.** 

   **Result:** The function is shuffling the items inside the array as expected.  

---
   **setHighScore(gameScore) - Is expected to display the users highest score saved in window local storage, if user beats the last score the new score is displayed.** 

   **Result:** Did the quiz aimed at a low score to test it, first round my highest score were 3. Next round my score while doing the quiz remained 3 even when passing it, at the end when the results where displayed my highest score changed 8 the new score. The function worked as expected.   

---

### External links

   **Icons - Should open the social media in a new tab.** 

   **Result:** When testing the GitHub icon a new tab opened with my GitHub profile, when testing the LinkedIn icon a new tab with my LinkedIn profile opened. The links worked as expected.

---
### Wave

* I had an error due to an empty button that I corrected by adding content to the button. 

![Wave error](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/testing/waveerror.jpeg)

![Wave](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/testing/wavefix.png)

### Lighthouse 

#### Mobile 

- Quiz

![Mobile](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/testing/lighthousemob.jpeg)

#### Desktop 

- Quiz

![Desktop](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/testing/lighthousedesk.jpeg)

### Validator Testing 

#### HTML

![HTML](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/testing/html1-w3.jpeg)

#### CSS 

![CSS](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/testing/w3c.jpeg)

#### JSHint 

![JSHint](https://github.com/rimanfarhood/Quiz-Swedens-politics/blob/main/assets/readme/testing/jshint.jpeg)

### Bugs 

**Problem:**

   - The high score were not being set at the start of the if the user didn't have the local storage item.

**Solution:**

   - I added the "|| 0" to the end in the startQuiz function so it would default to 0 to solve that problem.


## Tecnologies used

  * HTML, for the Structure.
  * CSS, to add the style.
  * JavaScript, to create dynamic content.
  * [JSHint](https://jshint.com/)
  * [Gitpod](https://www.gitpod.io/), coding, editing and preview.
  * [Github](https://github.com), store code and deployment.
  * [Reverso](https://www.reverso.net/spell-checker/english-spelling-grammar/), to check spelling and grammar. 
  * [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/open/), Measuring for responsiveness.
  * [W3C HTML Validator](https://validator.w3.org/#validate_by_input), HTML validation.
  * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), CSS validation.
  * [Wave](https://wave.webaim.org/), accessibility evaluation tool.
  * [Am I responsive](https://ui.dev/amiresponsive), mockup image.
  * [Google Fonts](https://fonts.google.com/), fonts.
  * [Font Awsome](https://fontawesome.com/), icons.
  * [Favicon](https://favicon.io/), favicon in tab.

## Deployment 

* This site was deployed to Github pages, steps are following:

     * Go to the repository settings
     * On the side menu of settings click on pages
     * Click on the branch dropdown menu and select main

     The page will refresch, it might take a couple minutes. 

The live link can be found here - [Quiz Swe Politics](https://rimanfarhood.github.io/Quiz-Swedens-politics/).

### Forking GitHub Repository

1. Log into GitHub and locate the repository.
2. Choose the option Fork" at the top of the screen, to create a copy of the repository.
3. A copy of the repository will be created in your GitHub account.

### Creating a Local Clone 

1. Navigate to the GitHub repository
2. Click on the "Code" drop-down button.
3. Choose local and HTTPS you will have a link copy that URL
4. If wanted, change the current working directory in GitPod to the location desired.
5. Type "git clone" and paste the URL from GitHub.
6. Press "Enter" and the local clone will be create.

## Credits 
### Code 

 * Tutorial on how to make a quiz with JavaScript - [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=1478s).
 * Code on how to shuffle an array with JavaScript - [Fisher-Yates](https://medium.com/@omar.rashid2/fisher-yates-shuffle-a2aa15578d2f).
 * I also used Love Maths as help and inspiration to do the correct and incorrect answers. 

### Content 

- Icons [Font Awsome](https://fontawesome.com/).

