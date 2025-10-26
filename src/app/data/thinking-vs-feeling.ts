enum TF{
    thinking, // [1, 2, 3]
    feeling // [2.15, 3, 4]
}

enum Range{
    Low, //[1, 1.5, 2.2]
    Medium, //[1.8, 3, 4]
    High // [3.7. 4.5, 5]
}

class OutputVariable{
    public myScore : number;
    public TF : TF;
    constructor(score : number, TF : TF){
        this.myScore = score;
        this.TF = TF;
    }  
}


function solveTF(scores : number[]) : TF{
    
    const decisionBasis : number = scores[0];
    const conflictResponse : number = scores[1];
    const valueOrientation : number = scores[2];
    const feedbackStyle : number = scores[3];
    const emotionalAwareness : number = scores[4];

    const outputVariables : OutputVariable[] = [];

    //r1
    if(isLow(decisionBasis) && isLow(conflictResponse)){
        // console.log("r1 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(decisionBasis, Range.Low),
                    DOM(conflictResponse, Range.Low)
                ), 
                TF.thinking
            )
        );
    }
    //r2
    if(isLow(valueOrientation) && isLow(feedbackStyle)){
        // console.log("r2 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(valueOrientation, Range.Low),
                    DOM(feedbackStyle, Range.Low)
                ), 
                TF.thinking
            )
        );
    }
    //r3

    if(isLow(emotionalAwareness) && isLow(decisionBasis)){
        // console.log("r3 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(emotionalAwareness, Range.Low),
                    DOM(decisionBasis, Range.Low)
                ), 
                TF.thinking
            )
        );
    }

    //r4
    if(isLow(conflictResponse) && isLow(valueOrientation)){
        // console.log("r4 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(conflictResponse, Range.Low),
                    DOM(valueOrientation, Range.Low)
                ), 
                TF.thinking
            )
        );
    }
    //r5
    if(isLow(feedbackStyle) && isLow(emotionalAwareness)){
        // console.log("r5 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(feedbackStyle, Range.Low),
                    DOM(emotionalAwareness, Range.Low)
                ), 
                TF.thinking
            )
        );
    }
    //r6
    if(isMid(decisionBasis) && isLow(conflictResponse)){
        // console.log("r6 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(decisionBasis, Range.Medium),
                    DOM(conflictResponse, Range.Low)
                ), 
                TF.thinking
            )
        );
    }
    //r7
    if(isMid(valueOrientation) && isLow(feedbackStyle)){
        // console.log("r7 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(valueOrientation, Range.Medium),
                    DOM(feedbackStyle, Range.Low)
                ), 
                TF.thinking
            )
        );
    }
    //r8
    if(isMid(emotionalAwareness) && isLow(decisionBasis)){
        // console.log("r8 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(emotionalAwareness, Range.Medium),
                    DOM(decisionBasis, Range.Low)
                ), 
                TF.thinking
            )
        );
    }
    //r9
    if(isMid(conflictResponse) && isLow(valueOrientation)){
        // console.log("r9 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(conflictResponse, Range.Medium),
                    DOM(valueOrientation, Range.Low)
                ), 
                TF.thinking
            )
        );
    }

    //r10

    if(isHigh(decisionBasis) && isHigh(conflictResponse)){
        // console.log("r10 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(decisionBasis, Range.High),
                    DOM(conflictResponse, Range.High)
                ), 
                TF.feeling
            )
        );
    }
    //r11
    if(isHigh(valueOrientation) && isHigh(feedbackStyle)){
        // console.log("r11 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(valueOrientation, Range.High),
                    DOM(feedbackStyle, Range.High)
                ), 
                TF.feeling
            )
        );
    }
    //r12

    if(isHigh(emotionalAwareness) && isHigh(decisionBasis)){
        // console.log("r12 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(emotionalAwareness, Range.High),
                    DOM(decisionBasis, Range.High)
                ), 
                TF.feeling
            )
        );
    }

    //r13
    if(isHigh(conflictResponse) && isHigh(valueOrientation)){
        // console.log("r13 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(conflictResponse, Range.High),
                    DOM(valueOrientation, Range.High)
                ), 
                TF.feeling
            )
        );
    }
    //r14
    if(isHigh(feedbackStyle) && isHigh(emotionalAwareness)){
        // console.log("r14 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(feedbackStyle, Range.High),
                    DOM(emotionalAwareness, Range.High)
                ), 
                TF.feeling
            )
        );
    }

    //r15
    if(isMid(decisionBasis) && isHigh(conflictResponse)){
        // console.log("r15 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(decisionBasis, Range.Medium),
                    DOM(conflictResponse, Range.High)
                ), 
                TF.feeling
            )
        );
    }
    //r16
    if(isMid(valueOrientation) && isHigh(feedbackStyle)){
        // console.log("r16 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(valueOrientation, Range.Medium),
                    DOM(feedbackStyle, Range.High)
                ), 
                TF.feeling
            )
        );
    }
    //r17
    if(isMid(emotionalAwareness) && isHigh(decisionBasis)){
        // console.log("r17 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(emotionalAwareness, Range.Medium),
                    DOM(decisionBasis, Range.High)
                ), 
                TF.feeling
            )
        );
    }

    //r18

    if(isMid(conflictResponse) && isHigh(valueOrientation)){
        // console.log("r18 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(conflictResponse, Range.Medium),
                    DOM(valueOrientation, Range.High)
                ), 
                TF.feeling
            )
        );
    }


    // console.log(outputVariables);
    // console.log("Output variables acquired.");


    const area : number[] = [];
    for(let i = 0; i < outputVariables.length; i++)
    {
        if(outputVariables[i].TF === TF.feeling){
            area.push(
                ((4-2.15) / 2) * ((2 * outputVariables[i].myScore) - Math.pow(outputVariables[i].myScore, 2))
            );    
        }
        if(outputVariables[i].TF === TF.thinking){
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
        if(outputVariables[i].TF == TF.feeling)
            centroidNumeratorSum += (3 * area[i]); 
        else if(outputVariables[i].TF == TF.thinking)
            centroidNumeratorSum += (2 * area[i]);
        centroidDenominatorSum += area[i];
    }
        
    // console.log("centroid numerator  " + centroidNumeratorSum + " centroid denominator" + centroidDenominatorSum)
    const centroid = centroidDenominatorSum === 0 ? 0 : centroidNumeratorSum/centroidDenominatorSum;
    // console.log("Centroid " + centroid);

    let index : number = 0;
        const outputDOM : number[] = [];
        for(let i = 0; i < outputVariables.length; i++){
            if(outputVariables[i].TF === TF.feeling){
                // console.log("outputVar is thinking");
                outputDOM.push(
                            fuzzify(
                                centroid,
                                [2.15, 3, 4]
                            )
                        )
            }
            else if(outputVariables[i].TF === TF.thinking){
                // console.log("outputVar is feeling");
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
        // console.log("Thinking vs Feeling result: " + 
        // outputVariables[index].TF + " " + outputDOM[index]);
            
        return outputVariables[index].TF;
    }
    return TF.thinking;
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

export {TF, solveTF};