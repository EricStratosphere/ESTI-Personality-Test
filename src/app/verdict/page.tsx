
import type { question } from "../data/questions";
import { IE, solveIE } from "../data/introversion-vs-extroversion";
import { SN, solveSN } from "../data/sensing-vs-intuition";
import { TF, solveTF } from "../data/thinking-vs-feeling";
import { JP, solveJP } from "../data/judging-vs-perceiving";
import { IE_InputVariable } from "../data/questions";
import { SN_InputVariable } from "../data/questions";
import { TF_InputVariable } from "../data/questions";
import { JP_InputVariable } from "../data/questions";
import './styles/globals.css'


export default async function Verdict({searchParams} : {searchParams : { myQuestions : string}}){
    
    const awaitedSearchParams = await searchParams;
    const myQuestions : question[][] = JSON.parse(awaitedSearchParams.myQuestions);

    console.log(myQuestions);
    const IEScores : number[] = [0, 0, 0, 0]
    const SNScores : number[] = [0, 0, 0, 0, 0]
    const TFScores : number[] = [0, 0, 0, 0, 0]
    const JPScores : number[] = [0, 0, 0, 0, 0]

    //IE Loop
    for(let i = 0; i < myQuestions[0].length; i++){
        if(myQuestions[0][i].inputVariable === IE_InputVariable.socialEnergy)
            IEScores[0] += myQuestions[0][i].score;

        else if(myQuestions[0][i].inputVariable === IE_InputVariable.groupPreference)
            IEScores[1] += myQuestions[0][i].score;
        else if(myQuestions[0][i].inputVariable === IE_InputVariable.talkativeness)
            IEScores[2] += myQuestions[0][i].score;

        else if(myQuestions[0][i].inputVariable === IE_InputVariable.rechargeStyle)
            IEScores[3] += myQuestions[0][i].score;
    }
    for(let i = 0; i < IEScores.length; i++){
        IEScores[i] = IEScores[i]/5;
    }
    console.log(IEScores);
   
    for(let i = 0; i < myQuestions[1].length; i++){
        if(myQuestions[1][i].inputVariable === SN_InputVariable.detailOrientation)
            SNScores[0] += myQuestions[1][i].score;

        else if(myQuestions[1][i].inputVariable === SN_InputVariable.patternSeeking)
            SNScores[1] += myQuestions[1][i].score;
        else if(myQuestions[1][i].inputVariable === SN_InputVariable.timeFocus)
            SNScores[2] += myQuestions[1][i].score;

        else if(myQuestions[1][i].inputVariable === SN_InputVariable.informationStyle)
            SNScores[3] += myQuestions[1][i].score;

        else if(myQuestions[1][i].inputVariable === SN_InputVariable.imaginationuse)
            SNScores[4] += myQuestions[1][i].score;
    }
    for(let i = 0; i < SNScores.length; i++){
        SNScores[i] = SNScores[i]/5;
    }
    console.log(SNScores);

    for(let i = 0; i < myQuestions[2].length; i++){
        if(myQuestions[2][i].inputVariable === TF_InputVariable.decisionBasis)
            TFScores[0] += myQuestions[2][i].score;

        else if(myQuestions[2][i].inputVariable === TF_InputVariable.conflictResponse)
            TFScores[1] += myQuestions[2][i].score;
        else if(myQuestions[2][i].inputVariable === TF_InputVariable.valueOrientation)
            TFScores[2] += myQuestions[2][i].score;

        else if(myQuestions[2][i].inputVariable === TF_InputVariable.feedbackStyle)
            TFScores[3] += myQuestions[2][i].score;

        else if(myQuestions[2][i].inputVariable === TF_InputVariable.emotionalAwareness)
            TFScores[4] += myQuestions[2][i].score;
    }
    for(let i = 0; i < TFScores.length; i++){
        TFScores[i] = TFScores[i]/5;
    }
    console.log(TFScores);

    for(let i = 0; i < myQuestions[3].length; i++){
        if(myQuestions[3][i].inputVariable === JP_InputVariable.planningScore)
            JPScores[0] += myQuestions[3][i].score;

        else if(myQuestions[3][i].inputVariable === JP_InputVariable.taskCompletionScore)
            JPScores[1] += myQuestions[3][i].score;
        else if(myQuestions[3][i].inputVariable === JP_InputVariable.decisionFlexibility)
            JPScores[2] += myQuestions[3][i].score;

        else if(myQuestions[3][i].inputVariable === JP_InputVariable.organizationLevel)
            JPScores[3] += myQuestions[3][i].score;

        else if(myQuestions[3][i].inputVariable === JP_InputVariable.timeSensitivity)
            JPScores[4] += myQuestions[3][i].score;
    }
    for(let i = 0; i < JPScores.length; i++){
        JPScores[i] = JPScores[i] / 5;
    }
    console.log(JPScores);


    const IEVerdict : IE = solveIE(IEScores);
    const SNVerdict : SN = solveSN(SNScores);
    const TFVerdict : TF = solveTF(TFScores);
    const JPVerdict : JP = solveJP(JPScores);

    
    console.log(IE[IEVerdict]);
    console.log(SN[SNVerdict]);
    console.log(TF[TFVerdict]);
    console.log(JP[JPVerdict]);

    let personality : string = ""
    if(IEVerdict === IE.Extroversion){
        personality += "E";
    }
    else
        personality += "I";

    if(SNVerdict === SN.intuition)
        personality += "N"
    else
        personality += "S"

    if(TFVerdict === TF.thinking)
        personality += "T";
    else
        personality += "F"

    if(JPVerdict === JP.perceiving)
        personality += "P";
    else
        personality += "J";


    let personalityImageUrl : string = "Test";
    let personalityDescription : string = "Test";
    let personalityTitle : string = "Test";

    /*Personality types:
    INTP
    INTJ
    INFP
    INFJ
    ISTP
    ISTJ
    ISFP
    ISFJ
    ENTP
    ENTJ
    ENFP
    ENFJ
    ESTP
    ESTJ
    ESFP
    ESFJ
    */
    if(personality === "INTP"){
        personalityImageUrl = './INTP.png';
        personalityDescription = 'INTP (Logician) is a personality type with the Introverted, Intuitive, Thinking, and Prospecting traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity.INTP personalities often lose themselves in thought – which isn’t necessarily a bad thing. People with this personality type hardly ever stop thinking. From the moment they wake up, their mind buzzes with ideas, questions, and insights. At times, they may even find themselves conducting full-fledged debates in their own heads. And it’s not uncommon for them to drift off during conversations. Their mind simply executes a detour to uncharted territories of thought where new ideas are constantly being born.';
        personalityTitle = 'Logician';
    }
    else if(personality === "INTJ"){
        personalityImageUrl = './INTJ.svg';
        personalityDescription = 'INTJ (Architect) is a personality type with the Introverted, Intuitive, Thinking, and Judging traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one. People with the INTJ personality type (Architects) are intellectually curious individuals with a deep-seated thirst for knowledge. INTJs tend to value creative ingenuity, straightforward rationality, and self-improvement. They consistently work toward enhancing intellectual abilities and are often driven by an intense desire to master any and every topic that piques their interest.';
        personalityTitle = 'The Architect';
    }
    else if(personality === "INFP"){
        personalityImageUrl = './INFP.svg';
        personalityDescription = 'INFP (Mediator) is a personality type with the Introverted, Intuitive, Feeling, and Prospecting traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do. Although they may seem quiet or unassuming, people with the INFP personality type (Mediators) have vibrant, passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their mind. INFPs are known for their sensitivity – these personalities can have profound emotional responses to music, art, nature, and the people around them. They are known to be extremely sentimental and nostalgic, often holding onto special keepsakes and memorabilia that brighten their days and fill their heart with joy.';
        personalityTitle = 'The Mediator';
    }
    else if(personality === "INFJ"){
        personalityImageUrl = './INFJ.png';
        personalityDescription = 'INFJ (Advocate) is a personality type with the Introverted, Intuitive, Feeling, and Judging traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things. Idealistic and principled, people with the INFJ personality type (Advocates) aren’t content to coast through life – they want to stand up and make a difference. For these compassionate personalities, success doesn’t come from money or status but from seeking fulfillment, helping others, and being a force for good in the world. While they have lofty goals and ambitions, INFJs shouldn’t be mistaken for idle dreamers. People with this personality type care about integrity, and they’re rarely satisfied until they’ve done what they know to be right. Conscientious to the core, they move through life with a clear sense of their values, and they aim to never lose sight of what truly matters – not according to other people or society at large but according to their own wisdom and intuition.';
        personalityTitle = 'The Advocate';
    }
    else if(personality === "ISTP"){
        personalityImageUrl = './ISTP.svg';
        personalityDescription = 'ISTP (Virtuoso) is a personality type with the Introverted, Observant, Thinking, and Prospecting traits. They tend to have an individualistic mindset, pursuing goals without needing much external connection. They engage in life with inquisitiveness and personal skill, varying their approach as needed.People with the ISTP personality type (Virtuosos) love to explore with their hands and their eyes, touching and examining the world around them with an impressive diligence, a casual curiosity, and a healthy dose of skepticism. They are natural makers, moving from project to project, building the useful and the superfluous for the fun of it and learning from their environment as they go. They find no greater joy than in getting their hands dirty pulling things apart and putting them back together, leaving them just a little bit better than they were before.';
        personalityTitle = 'The Virtuoso';
    }
    else if(personality === "ISTJ"){
        personalityImageUrl = './ISTJ.svg';
        personalityDescription = 'ISTJ (Logistician) is a personality type with the Introverted, Observant, Thinking, and Judging traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose. People with the ISTJ personality type (Logisticians) mean what they say and say what they mean, and when they commit to doing something, they make sure to follow through. With their responsible and dependable nature, it might not be so surprising that ISTJ personalities also tend to have a deep respect for structure and tradition. They are often drawn to organizations, workplaces, and educational settings that offer clear hierarchies and expectations.';
        personalityTitle = 'The Logistician';
    }
    else if(personality === "ISFP"){
        personalityImageUrl = './ISFP.png';
        personalityDescription = 'ISFP (Adventurer) is a personality type with the Introverted, Observant, Feeling, and Prospecting traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials. People with the ISFP personality type (Adventurers) are true artists – although not necessarily in the conventional sense. For these types, life itself is a canvas for self-expression. From what they wear to how they spend their free time, they act in ways that vividly reflect who they are as unique individuals. With their exploratory spirit and their ability to find joy in everyday life, ISFPs can be among the most interesting people you’ll ever meet.';
        personalityTitle = 'The Adventurer';
    }
    else if(personality === "ISFJ"){
        personalityImageUrl = './ISFJ.svg';
        personalityDescription = 'ISFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives. In their unassuming, understated way, people with the ISFJ personality type (Defenders) help make the world go round. Hardworking and devoted, these personalities feel a deep sense of responsibility to those around them. ISFJs can be counted on to meet deadlines, remember birthdays and special occasions, uphold traditions, and shower their loved ones with gestures of care and support. But they rarely demand recognition for all that they do, preferring instead to operate behind the scenes.';
        personalityTitle = 'The Defender';
    }


    if(personality === "ENTP"){
        personalityImageUrl = './ENTP.png';
        personalityDescription = 'ENTP (Debater) is a personality type with the Extraverted, Intuitive, Thinking, and Prospecting traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter. Quick-witted and audacious, people with the ENTP personality type (Debaters) aren’t afraid to disagree with the status quo. In fact, they’re not afraid to disagree with pretty much anything or anyone. Few things light up these personalities more than a bit of verbal sparring – and if the conversation veers into controversial terrain, so much the better.';
        personalityTitle = 'The Debater';
    }
    else if(personality === "ENTJ"){
        personalityImageUrl = './ENTJ.svg';
        personalityDescription = 'ENTJ (Commander) is a personality type with the Extraverted, Intuitive, Thinking, and Judging traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them. People with the ENTJ personality type (Commanders) are natural-born leaders. Embodying the gifts of charisma and confidence, ENTJs project authority in a way that draws crowds together behind a common goal. However, these personalities are also characterized by an often ruthless level of rationality, using their drive, determination, and sharp mind to achieve whatever objectives they’ve set for themselves. Their intensity might sometimes rub people the wrong way, but ultimately, ENTJs take pride in both their work ethic and their impressive level of self-discipline.';
        personalityTitle = 'The Commander';
    }
    else if(personality === "ENFP"){
        personalityImageUrl = './ENFP.svg';
        personalityDescription = 'ENFP (Campaigner) is a personality type with the Extraverted, Intuitive, Feeling, and Prospecting traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions. People with the ENFP personality type (Campaigners) are true free spirits – outgoing, openhearted, and open-minded. With their lively, upbeat approach to life, ENFPs stand out in any crowd. But even though they can be the life of the party, they don’t just care about having a good time. These personalities have profound depths that are fueled by their intense desire for meaningful, emotional connections with others.';
        personalityTitle = 'The Campaigner';
    }
    else if(personality === "ENFJ"){
        personalityImageUrl = './ENFJ.png';
        personalityDescription = 'People with the ENFJ personality type (Protagonists) feel called to serve a greater purpose in life. Thoughtful and idealistic, ENFJs strive to have a positive impact on other people and the world around them. These personalities rarely shy away from an opportunity to do the right thing, even when doing so is far from easy. ENFJs are born leaders, which explains why these personalities can be found among many notable politicians, coaches, and teachers. Their passion and charisma allow them to inspire others not just in their careers but in every arena of their lives, including their relationships. Few things bring people with the ENFJ personality type a deeper sense of joy and fulfillment than guiding friends and loved ones to grow into their best selves.';
        personalityTitle = 'The Protagonist';
    }
    else if(personality === "ESTP"){
        personalityImageUrl = './ESTP.png';
        personalityDescription = 'ESTP (Entrepreneur) is a personality type with the Extraverted, Observant, Thinking, and Prospecting traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits. People with the ESTP personality type (Entrepreneurs) are vibrant individuals brimming with an enthusiastic and spontaneous energy. They tend to be on the competitive side, often assuming that a competitive mindset is a necessity in order to achieve success in life. With their driven, action-oriented attitudes, they rarely waste time thinking about the past. In fact, they excel at keeping their attention rooted in their present – so much so that they rarely find themselves fixated on the time throughout the day.';
        personalityTitle = 'The Entrepreneur';
    }
    else if(personality === "ESTJ"){
        personalityImageUrl = './ESTJ.png';
        personalityDescription = 'ESTJ (Executive) is a personality type with the Extraverted, Observant, Thinking, and Judging traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity. People with the ESTJ personality type (Executives) are representatives of tradition and order, utilizing their understanding of what is right, wrong, and socially acceptable to bring families and communities together. Embracing the values of honesty and dedication, ESTJs are valued for their mentorship mindset and their ability to create and follow through on plans in a diligent and efficient manner. They will happily lead the way on difficult paths, and they won’t give up when things become stressful.';
        personalityTitle = 'The Executive';
    }
    else if(personality === "ESFP"){
        personalityImageUrl = './ESFP.png';
        personalityDescription = 'ESFP (Entertainer) is a personality type with the Extraverted, Observant, Feeling, and Prospecting traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities. If anyone is to be found spontaneously breaking into song and dance, it is people with the ESFP personality type (Entertainers). They get caught up in the excitement of the moment and want everyone else to feel that way too. No other type is as generous with their time and energy when it comes to encouraging others, and no other type does it with such irresistible style.';
        personalityTitle = 'The Entertainer';
    }
    else if(personality === "ESFJ"){
        personalityImageUrl = './ESFJ.svg';
        personalityDescription = 'ESFJ (Consul) is a personality type with the Extraverted, Observant, Feeling, and Judging traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others. For people with the ESFJ personality type (Consuls), life is sweetest when it’s shared with others. These social individuals form the bedrock of many communities, opening their homes – and their hearts – to friends, loved ones, and neighbors.This doesn’t mean that they are saints or that they like everyone. In fact, they are much more likely to form close bonds with people who share their same values and opinions. But regardless of other people’s beliefs, ESFJ personalities still strongly believe in the power of hospitality and good manners, and they tend to feel a sense of duty to those around them. Generous and reliable, they often take it upon themselves – in ways both large and small – to hold their families and their communities together.';
        personalityTitle = 'The Consul';
    }
    console.log(personality);
    return(
        <>
            <div className="personality-card">
                <h3>
                    {personality}
                </h3>
            </div>

            <div className="image-box-parent">
                <div className="image-box">
                    <img src={personalityImageUrl} alt="myImg" />
                </div>
            </div>

            <div className="personality-data">
                <h3>
                    {personalityTitle}
                </h3>

                <p>
                    {personalityDescription}
                </p>
            </div>
        </>
    )
}