import { time } from "console";

enum JP{
    perceiving, // [1, 2, 3]
    judging // [2.15, 3, 4]
}

enum Range{
    Low, //[1, 1.5, 2.2]
    Medium, //[1.8, 3, 4]
    High // [3.7. 4.5, 5]
}

class OutputVariable{
    public myScore : number;
    public jp : JP;
    constructor(score : number, JP : JP){
        this.myScore = score;
        this.jp = JP;
    }  
}

function solveJP(scores : number[]) : JP{
    const planningScore : number = scores[0];
    const taskCompletionScore : number = scores[1];
    const decisionFlexibility : number = scores[2];
    const organizationLevel : number = scores[3];
    const timeSensitivity : number = scores[4];

    const outputVariables : OutputVariable[] = [];
    //r1
    if(isHigh(planningScore) && isHigh(taskCompletionScore)){
        console.log("r1 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(planningScore, Range.High),
                        DOM(taskCompletionScore, Range.High)
                    ), 
                    JP.judging));
    }

    
    //r2
    if(isHigh(timeSensitivity) && isHigh(organizationLevel)){
        console.log("r2 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(timeSensitivity, Range.High),
                        DOM(organizationLevel, Range.High)
                    ), 
                    JP.judging));
    }
    //r3
    if(isHigh(decisionFlexibility) && isHigh(planningScore)){
        console.log("r3 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(decisionFlexibility, Range.High),
                        DOM(planningScore, Range.High)
                    ), 
                    JP.judging));
    }
    //r4
    if(isHigh(taskCompletionScore) && isHigh(timeSensitivity)){
        console.log("r4 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(taskCompletionScore, Range.High),
                        DOM(timeSensitivity, Range.High)
                    ), 
                    JP.judging));
    }
    //r5
    if(isHigh(organizationLevel) && isHigh(decisionFlexibility)){
        console.log("r5 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(organizationLevel, Range.High),
                        DOM(decisionFlexibility, Range.High)
                    ), 
                    JP.judging));
    }

    //MIDDLE SHI

    if(isMid(planningScore) && isHigh(timeSensitivity)){
        console.log('r-mid-1');
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(planningScore, Range.Medium),
                    DOM(timeSensitivity, Range.High)
                ),
                JP.judging   
            )
        );
    }

    if(isMid(taskCompletionScore) && isHigh(organizationLevel)){
        console.log('r-mid-2');
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(taskCompletionScore, Range.Medium),
                    DOM(organizationLevel, Range.High)
                ),
                JP.judging
            )
        )
    }

    if(isMid(decisionFlexibility) && isHigh(planningScore)){
        console.log('r-mid-3');
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(decisionFlexibility, Range.Medium),
                    DOM(planningScore, Range.High)
                ),
                JP.judging
            )
        )
    }

    if(isMid(organizationLevel) && isHigh(timeSensitivity)){
        console.log('r-mid-4');
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(organizationLevel, Range.Medium),
                    DOM(timeSensitivity, Range.High)
                ),
                JP.judging
            )
        )
    }

    //r6
    if(isLow(planningScore) && isLow(taskCompletionScore)){
        console.log("r6 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(planningScore, Range.Low),
                        DOM(taskCompletionScore, Range.Low)
                    ), 
                    JP.perceiving));
    }
    //r7
    if(isLow(timeSensitivity) && isLow(organizationLevel)){
        console.log("r7 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(timeSensitivity, Range.Low),
                        DOM(organizationLevel, Range.Low)
                    ), 
                    JP.perceiving));
    }

    //r8
    if(isLow(decisionFlexibility) && isLow(planningScore)){
        console.log("r8 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(decisionFlexibility, Range.Low),
                        DOM(planningScore, Range.Low)
                    ), 
                    JP.perceiving));
    }

    //r9
    if(isLow(taskCompletionScore) && isLow(timeSensitivity)){
        console.log("r1 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(taskCompletionScore, Range.Low),
                        DOM(timeSensitivity, Range.Low)
                    ), 
                    JP.perceiving));
    }
    //r10
    if(isLow(organizationLevel) && isLow(decisionFlexibility)){
        console.log("r1 true!");
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(organizationLevel, Range.Low),
                        DOM(decisionFlexibility, Range.Low)
                    ), 
                    JP.perceiving));
    }

    if(isMid(planningScore) && isLow(timeSensitivity)){
        console.log('r-mid-5');
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(planningScore, Range.Medium),
                        DOM(timeSensitivity, Range.Low)
                    ), 
                    JP.perceiving));
    }

    if(isMid(taskCompletionScore) && isLow(organizationLevel)){
        console.log('r-mid-6');
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(taskCompletionScore, Range.Medium),
                        DOM(timeSensitivity, Range.Low)
                    ), 
                    JP.perceiving));
    }

    if(isMid(decisionFlexibility) && isLow(planningScore)){
        console.log('r-mid-7');
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(decisionFlexibility, Range.Medium),
                        DOM(planningScore, Range.Low)
                    ), 
                    JP.perceiving));
    }

    if(isMid(organizationLevel) && isLow(timeSensitivity)){
        console.log('r-mid-8');
        outputVariables.push(
                new OutputVariable(
                    Math.min(
                        DOM(organizationLevel, Range.Medium),
                        DOM(timeSensitivity, Range.Low)
                    ), 
                    JP.perceiving));
    }
    // console.log(outputVariables);
    // console.log("Output variables acquired.");

    const area : number[] = [];
    for(let i = 0; i < outputVariables.length; i++)
    {
        if(outputVariables[i].jp === JP.perceiving){
            area.push(
                ((4-2.15) / 2) * ((2 * outputVariables[i].myScore) - Math.pow(outputVariables[i].myScore, 2))
            );    
        }
        if(outputVariables[i].jp === JP.judging){
            area.push(
                ((3 - 1) / 2) * ((2 * outputVariables[i].myScore) - 
                    Math.pow(outputVariables[i].myScore, 2))
            );
        }   
    }
    // console.log(area);
    // console.log("Area acquired.");

    let centroidNumeratorSum = 0;
    let centroidDenominatorSum = 0;
    for(let i = 0; i < outputVariables.length; i++){
        if(outputVariables[i].jp == JP.perceiving)
            centroidNumeratorSum += (3 * area[i]); 
        else if(outputVariables[i].jp == JP.judging)
            centroidNumeratorSum += (2 * area[i]);
        centroidDenominatorSum += area[i];
    }

    // console.log("centroid numerator  " + centroidNumeratorSum + " centroid denominator" + centroidDenominatorSum)
    const centroid = centroidDenominatorSum === 0 ? 0 : centroidNumeratorSum/centroidDenominatorSum;
    // console.log("Centroid " + centroid);


    let index : number = 0;
    const outputDOM : number[] = [];
    for(let i = 0; i < outputVariables.length; i++){
        if(outputVariables[i].jp === JP.perceiving){
            // console.log("outputVar is perceiving")
            outputDOM.push(
                        fuzzify(
                            centroid,
                            [2.15, 3, 4]
                        )
                    )
            }
        else if(outputVariables[i].jp === JP.judging){
            // console.log("outputVar is judging")
            outputDOM.push(
                        fuzzify(
                            centroid,
                            [1, 2, 3]
                        )
                    )
        }
        index = outputDOM[i] > outputDOM[index] ? i : index; 
    }
    if(outputVariables.length > 0){
        // console.log("Judging vs Perceiving result: " + 
            // outputVariables[index].jp + " " + outputDOM[index]);
        
        return outputVariables[index].jp;
    }
    //In a case where mid tanan
    return JP.perceiving    ;
}

function DOM(score : number, range : Range) : number{
    const lowSet : [number, number, number] = [1, 1.5, 2.2];
    const midSet : [number, number, number] = [1.8, 3, 4];
    const highSet : [number, number, number] = [3.7, 4.5, 5];

    if(range === Range.Low)
        return fuzzify(score, lowSet);
    else if(range === Range.Medium)
        return fuzzify(score, midSet);
    else if(range === Range.High)
        return fuzzify(score, highSet);
    return 0;
}

function fuzzify(input : number, [lowVal, midVal, highVal] : [number, number, number]) : number{
    if(areEqual(input, midVal)){
        // console.log("Input == midval! " + input + " " + midVal);
        // console.log(((input - lowVal) / (midVal - lowVal)));
        return 1;
    }
    else if(input < midVal){
        // console.log("Input < midval! " + input + " " + midVal);
        // console.log(truncateToFourDecimals((input - lowVal) / (midVal - lowVal)));
        return truncateToFourDecimals((input - lowVal) / (midVal - lowVal));
    }
    else if(input > midVal){
        // console.log("Input > midval! " + input + " " + midVal);
        // console.log(((highVal - input) / (highVal - midVal)));
        return truncateToFourDecimals((highVal - input) / (highVal - midVal));
    }
    return -1;
}
function isLow(score : number) : boolean {
    return score < 2.2 || areEqual(score, 2.2);
}

function isMid(score : number) : boolean{
    return ((score > 1.8 || areEqual(score, 1.8)) && score <= 4);
}

function isHigh(score : number) : boolean{
    return score > 3.7 || areEqual(score, 3.7);
}

function areEqual(num1 : number, num2 : number) : boolean{
    return Math.abs(num1 - num2) < Number.EPSILON;
}


function truncateToFourDecimals(num : number) : number {
  return Math.trunc(num * 10000) / 10000;
}
export {JP, solveJP};