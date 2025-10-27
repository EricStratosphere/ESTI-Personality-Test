## ESTI Personality Test

This Project is a reimplementation of the MBTI (Myers Briggs Type Indicator) - Personality Test which is a quiz formally taken to make an objective assessment of one's personality. I say this is a reimplementation because the original MBTI implementation uses an undisclosed algorithm based on Carl Jung's theory of Personality Types rather than a primitive intelligent systems algorithm such as the Mamdani Fuzzy Inference Engine. 

The MBTI questionnaire assesses the taker of the quiz based on four dichotomies, namely: 

Introversion / Extroversion
Sensing / Intuition
Thinking / Feeling
And
Judging / Perceiving

Each of these dichotomies can be grouped in 16 ways based on how the user is assessed for each dichotomy.

For instance, an introvert with sharp intuition, critical thinking and judgment may classify under INTJ. 

In order for a more accurate representation of the MBTI, I implemented the Mamdani Fuzzy Inference engine four times for each dichotomy.

Each dichotomy is assessed by 4-5 input variables and their respective membership functions as follows:

```
Introversion/Extraversion 
-	Social Energy 
-	Low [1, 2]
-	Medium [2, 3, 4]
-	High [4, 5]
-	Group Preference
-	Solitary [1, 2]
-	Mixed [2, 3, 4]
-	Social [4, 5]
-	Talkativeness
-	Quiet [1, 2]
-	Balanced [2, 3, 4]
-	Talkative [4, 5]
-	Recharge Style
-	Alone [1, 2]
-	Either [2, 3, 4]
-	With Others [4, 5]


```
```
Sensing/Intuition 
-	Detail Orientation
-	Concrete [1, 2]
-	Balanced [2, 3, 4]
-	Abstract [4, 5]
-	Pattern Seeking
-	Literal [1, 2]
-	Mixed [2, 3, 4]
-	Symbolic [4, 5]
-	Time Focus
-	Present [1, 2]
-	Balanced [2, 3, 4]
-	Future [4, 5]
-	Information Style
-	Factual [1, 2]
-	Mixed [2, 3, 4]
-	Conceptual [4, 5]
-	Imagination Use
-	Rare [1, 2]
-	Occasional [2, 3, 4]
-	Frequent [4, 5]



```
```
Thinking/Feeling
-	Decision Basis
-	Logical [1, 2]
-	Balanced [2, 3, 4]
-	Emotional [4, 5]
-	Conflict Response
-	Fairness-Oriented [1, 2]
-	Mixed [2, 3, 4]
-	Empathy-Oriented [4, 5]
-	Value Orientation
-	Principle-Based [1, 2]
-	Mixed [2, 3, 4]
-	Personal-Based [4, 5]
-	Feedback Style
-	Direct [1, 2]
-	Balanced [2, 3, 4]
-	Supportive [4, 5]
-	Emotional Awareness
-	Low [1, 2]
-	Moderate [2, 3, 4]
-	High [4, 5]
```
```
Judging/Perceiving
-	Planning Style
-	Spontaneous [1, 2]
-	Balanced [2, 3, 4]
-	Structured [4, 5]
-	Task Completion
-	Last-Minute [1, 2]
-	Mixed [2, 3, 4]
-	Early [4, 5]
-	Decision Flexibility
-	Flexible [1, 2]
-	Moderate [2, 3, 4]
-	Fixed [4, 5]
-	Organization Level
-	Adaptable [1, 2]
-	Mixed [2, 3, 4]
-	Tidy [4, 5]
-	Time Sensitivity
-	Relaxed [1, 2]
-	Balanced [2, 3, 4]
-	Deadline-Driven [4, 5]

```


## Deployed on Vercel!


The full implementation of the app for testing can be found on this domain:

https://esti-personality-test.vercel.app

## Run manually on localhost

Clone this repo into your local machine. Make sure that you have node installed. Then open this repository on your IDE, and on its terminal, run "npm run dev".

