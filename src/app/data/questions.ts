enum dichotomy{
    IE,
    SN,
    TF,
    JP
}

enum IE_InputVariable{
    socialEnergy,
    groupPreference,
    talkativeness,
    rechargeStyle
}

enum SN_InputVariable{
    detailOrientation,
    patternSeeking,
    timeFocus,
    informationStyle,
    imaginationuse, 
}

enum TF_InputVariable{
    decisionBasis,
    conflictResponse,
    valueOrientation,
    feedbackStyle,
    emotionalAwareness,
}

enum JP_InputVariable{   
    planningScore,
    taskCompletionScore,
    decisionFlexibility,
    organizationLevel,
    timeSensitivity,
}

interface question{
    question : string,
    dichotomy : dichotomy,
    inputVariable : IE_InputVariable | SN_InputVariable | TF_InputVariable | JP_InputVariable,
    score : number
}


const questions : question[][] = 
[   
    //FORMAT : 5 questions for each inputVariable
    // that means 20-25 questions for each dichotomy.
    //which would be 80-100 questions total.
    //IE

    //Remember, Agree sa right side, Disagree sa Left side.
    [
        {
            question : "I feel more comfortable in large groups than in one-on-one settings.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.groupPreference,
            score : 0,
        },

        {
            question : "I enjoy having a wide circle.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.groupPreference,
            score : 0,
        },

        {
            question : "In class reunions, you are generally very talkative.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.talkativeness,
            score : 0,
        },

        {
            question : "In your spare time, you often actively socialize with a group of people, attend parties, and go shopping together.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.socialEnergy,
            score : 0,
        },

        {
            question : "In general, you are rarely a reserved and distant person when communicating.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.talkativeness,
            score : 0,
        },

        {
            question : "You usually don't feel shy when meeting strangers.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.socialEnergy,
            score : 0,
        },

        {
            question : "Most of the time, you like to party.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.socialEnergy,
            score : 0,
        },

        {
            question : "You tend to draw strength from your friends.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.rechargeStyle,
            score : 0,
        },

        {
            question : "You prefer the hustle and bustle of the outside world.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.socialEnergy,
            score : 0,
        },

        {
            question : "You feel confident and at ease when you have to initiate contact with strangers.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.talkativeness,
            score : 0,
        },

        {
            question : "You tend to have many acquiaintances and close friends.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.socialEnergy,
            score : 0,
        },

        {
            question : "You like to enjoy your free time with others in a crowded environment.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.groupPreference,
            score : 0,
        },

        {
            question : "You prefer to chat with people and participate in entertainment activities.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.groupPreference,
            score : 0,
        },
        {
            question : "I often dominate conversations in social settings.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.talkativeness,
            score : 0,
        },
        {
            question : "I find it easy to keep conversations going.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.talkativeness,
            score : 0,
        },
        {
            question : "I prefer to work as part of a team rather than independently.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.groupPreference,
            score : 0,
        },
        {
            question : "I regain energy best through the company of others.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.rechargeStyle,
            score : 0,
        },

        {
            question : "I seek companionship when I'm feeling low.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.rechargeStyle,
            score : 0,
        },

        {
            question : "The company and input of others helps me process my thoughts.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.rechargeStyle,
            score : 0,
        },
        {
            question : "I prefer social stimulation over quiet reflection.",
            dichotomy : dichotomy.IE,
            inputVariable : IE_InputVariable.rechargeStyle,
            score : 0,
        },
        
        
    ],

    //SN
    [
        {
            question : "I focus more on specific events than on the general principles behind them.", 
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.detailOrientation,
            score : 0,
        },
        {
            question : "I often notice small details others miss.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.detailOrientation,
            score : 0,
        },
        {
            question : "I prefer clear instructions over open-ended tasks",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.detailOrientation,
            score : 0,
        },
        {
            question : "When I think about something, I rarely focus on the current purpose but instead speculate on how it might turn out.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.detailOrientation,
            score : 0,
        },
        {
            question : "I enjoy analyzing abstract concepts.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.detailOrientation,
            score : 0,
        },


        {
            question : "You trust your intuition than direct observation and existing experiences.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.patternSeeking,
            score : 0,
        },
        {
            question : "I rely on intuition to connect ideas.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.patternSeeking,
            score : 0,
        },
        {
            question : "I enjoy puzzles that require abstract thinking,",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.patternSeeking,
            score : 0,
        },
        {
            question : "I prefer metaphors over straightforward explanations.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.patternSeeking,
            score : 0,
        },
        {
            question : "I often look for hidden meanings or patterns and rarely take things at face value.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.patternSeeking,
            score : 0,
        },




        //TIME FOCUS

        {
            question : "I focus on what's happening now rather than what could happen.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.timeFocus,
            score : 0,
        },
        {
            question : "I often think about future possibilities.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.timeFocus,
            score : 0,
        },
        {
            question : "I plan ahead more than I react in the moment.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.timeFocus,
            score : 0,
        },
        {
            question : "I reflect more on the future than on the present.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.timeFocus,
            score : 0,
        },
        {
            question : "I prefer long-term visions over short-term goals.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.timeFocus,
            score : 0,
        },


        //INFORMATIONSTYLE


        {
            question : "In my spare time, I prefer to read philosophical books rather than photography collections.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.informationStyle,
            score : 0,
        },
        {
            question : "For me, I think the process of solving problems is fun.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.informationStyle,
            score : 0,
        },
        {
            question : "I rely on data more than speculation.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.informationStyle,
            score : 0,
        },
        {
            question : "I rarely think in terms of 'what if?'.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.informationStyle,
            score : 0,
        },
        {
            question : "I prefer pratical information over abstract ideas.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.informationStyle,
            score : 0,
        },



        //IMAGINATIION USE


        {
            question : "I prefer to be seen as imaginative rather than pragmatic.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.imaginationuse,
            score : 0,
        },
        {
            question : "I crave new experiences rather than sticking to tradition.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.imaginationuse,
            score : 0,
        },
        {
            question : "I often have innovative new ideas in my mind.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.imaginationuse,
            score : 0,
        },
        {
            question : "When I am chatting with a friend, I tend to talk about future possibilities, such as new scientific inventions or advances in life.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.imaginationuse,
            score : 0,
        },
        {
            question : "I like to proactively discover new ideas.",
            dichotomy : dichotomy.SN,
            inputVariable : SN_InputVariable.imaginationuse,
            score : 0,
        },


    ],
    //TF
    [

        //decisionBasis
        {
            question : "I make decisions based on emotions first and logic second.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.decisionBasis,
            score : 0,
        },
        {
            question : "I pursue individuality in everything, act completely based on my interests and have no fixed routine.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.decisionBasis,
            score : 0,
        },
        {
            question : "I tend to be easily influenced by others rather than stick to my guts.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.decisionBasis,
            score : 0,
        },
        {
            question : "I am often influenced by personal impact rather than objective fairness.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.decisionBasis,
            score : 0,
        },
        {
            question : "I seldom take a scientific approach to things.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.decisionBasis,
            score : 0,
        },


        //CONFLICT RESPONSE

        {
            question : "I can be considered subjective in disagreements.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.conflictResponse,
            score : 0,
        },
        {
            question : "I prioritize empathy and understanding during conflict.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.conflictResponse,
            score : 0,
        },

        {
            question : "I struggle to resolve issues through reasoned discussion.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.conflictResponse ,
            score : 0,
        },

        {
            question : "I struggle to recover from emotional setbacks and deal with problems.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.conflictResponse ,
            score : 0,
        },
        
        {
            question : "I focus on emotional harmony than fairness.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.conflictResponse ,
            score : 0,
        },
        
        //Value Orientation

        {
            question : "I sometimes hesitate to speak my mind on what is right and what is wrong.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.valueOrientation ,
            score : 0,
        },

        {
            question : "I dislike hypocritical interpersonal relationships and value the authenticity of emotions.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.valueOrientation ,
            score : 0,
        },
        {
            question : "I value personal connection over abstract ideals.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.valueOrientation ,
            score : 0,
        },
        {
            question : "I rely on emotional frameworks more than logic.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.valueOrientation ,
            score : 0,
        },

        {
            question : "I don't prioritize consistency over emotional nuance.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.valueOrientation ,
            score : 0,
        },


        //Feedback Style

        {
            question : "I am hesitant to give feedback critically.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.feedbackStyle,
            score : 0,
        },

        {
            question : "I soften criticism to avoid hurting others.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.feedbackStyle,
            score : 0,
        },

        {
            question : "I value emotional comfort over honesty.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.feedbackStyle,
            score : 0,
        },

        {
            question : "I prioritize encouragement over bluntness.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.feedbackStyle,
            score : 0,
        },

        {
            question : "I'd rather have emotional cushioning over clarity.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.feedbackStyle,
            score : 0,
        },

        //Emotional Awareness

        {
            question : "I struggle to identify with my own emotions.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.emotionalAwareness,
            score : 0,
        },

         {
            question : "I struggle to detect illogicality in others.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.emotionalAwareness,
            score : 0,
        },

         {
            question : "I focus more on feelings than facts.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.emotionalAwareness,
            score : 0,
        },

         {
            question : "I often reflect on my emotional state.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.emotionalAwareness,
            score : 0,
        },

         {
            question : "I use emotional insight to guide decisions.",
            dichotomy : dichotomy.TF,
            inputVariable : TF_InputVariable.emotionalAwareness,
            score : 0,
        },

    ],

    //JP
    [
        //Higher/agreeing score is towards judging, lower is towards perceiving.

        //Planning score
        {
            question : "Most of the time, I tend to plan ahead rather than act on impulse.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.planningScore,
            score : 0,
        },

        {
            question : "I always make decisions based on prior planning rather than momentary feelings.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.planningScore,
            score : 0,
        },

        {
            question : "I want to know the details of the date in advance: where you are going, who will be there, how long you will be there.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.planningScore,
            score : 0,
        },
        {
            question : "I like to stick to routines and predefined plans.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.planningScore,
            score : 0,
        },

        {
            question : "I don't feel comfortable when I have to make changes to plans.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.planningScore,
            score : 0,
        },


        //Task Completion

        {
            question : "I usually finish tasks long before the deadline.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.taskCompletionScore,
            score : 0,
        },

        {
            question : "I tend to complete tasks well ahead of time.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.taskCompletionScore,
            score : 0,
        },
        {
            question : "I struggle to work under time pressure.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.taskCompletionScore,
            score : 0,
        },
        {
            question : "I often finish tasks early to avoid stress.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.taskCompletionScore,
            score : 0,
        },

        {
            question : "I prefer pacing my work steadily over time.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.taskCompletionScore,
            score : 0,
        },

        //Decision flexibility

        {
            question : "I think thoroughly when thinking about changing my decision when new options arise.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.decisionFlexibility,
            score : 0,
        },

        {
            question : "I prefer sticking to decisions once they are made.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.decisionFlexibility,
            score : 0,
        },

        {
            question : "I rarely revisit choices to explore alternatives.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.decisionFlexibility,
            score : 0,
        },

        {
            question : "I feel uneasy when plans are too flexible",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.decisionFlexibility,
            score : 0,
        },

        {
            question : "I like having firm decisions to guide my actions.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.decisionFlexibility,
            score : 0,
        },

        //Organization level

        {
            question : "I prefer a structured and rhythmic way of working.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.organizationLevel,
            score : 0,
        },

        {
            question : "I choose a life full of schedules and organization.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.organizationLevel,
            score : 0,
        },

        {
            question : "Keeping things organized makes me happy.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.organizationLevel,
            score : 0,
        },

        {
            question : "I seek stability and don't like unexpected changes.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.organizationLevel,
            score : 0,
        },

        {
            question : "If I have an appointment I need to prepare carefully in advance to feel at ease.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.organizationLevel,
            score : 0,
        },


        //Time sensitivity

        {
            question : "I am a person with a strong sense of time.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.timeSensitivity,
            score : 0,
        },
        {
            question : "I value punctuality and efficiency.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.timeSensitivity,
            score : 0,
        },

        {
            question : "When I am preparing to travel long distances by train, I will pack my luggage in advance and arrive at the station early.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.timeSensitivity,
            score : 0,
        },

        {
            question : "I prioritize tasks based on how urgent they are.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.timeSensitivity,
            score : 0,
        },

        {
            question : "I plan my time carefully to meet deadlines.",
            dichotomy : dichotomy.JP,
            inputVariable : JP_InputVariable.timeSensitivity,
            score : 0,
        },
    ]
    

]

export type {question}
export {dichotomy, IE_InputVariable, SN_InputVariable, TF_InputVariable, JP_InputVariable}
export default questions;
