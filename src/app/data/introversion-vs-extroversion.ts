import { group } from "console";

enum IE{
    Introversion, // [1, 2, 3]
    Extroversion // [2.15, 3, 4]
}

enum Range{
    Low, //[1, 1.5, 2.2]
    Medium, //[1.8, 3, 4]
    High // [3.7. 4.5, 5]
}

class InputVariable{
    public myScore : number;
    public range : Range;
    constructor(score : number, range : Range = Range.Low){
        this.myScore = score;
        this.range = range; // temporary default
    }
}

class OutputVariable{
    public myScore : number;
    public IE : IE
    constructor(score : number, IE : IE){
        this.myScore = score;
        this.IE = IE;
    }  
}

//the scores array is an array of integers containing the scores for each input variable. 
//Ex. scores[0] is the SocialEnergy score
//    scores[1] is the Group Preference score

//sample data [3.5, 2, 4, 2, 5]
function solveIE(scores : number[]) : IE {
    const socialEnergy : InputVariable = new InputVariable(scores[0]);
    const groupPreference : InputVariable = new InputVariable(scores[1]);
    const talkativeness : InputVariable = new InputVariable(scores[2]);
    const rechargeStyle : InputVariable = new InputVariable(scores[3]);

    const outputVariables : OutputVariable[] = [];
    // Fuzzification/Rule Evaluation

    //r1
    if(isLow(socialEnergy.myScore) && isLow(rechargeStyle.myScore)){
        // console.log("r1 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(socialEnergy.myScore, Range.Low),
                    DOM(rechargeStyle.myScore, Range.Low)
                ), 
                IE.Introversion));
    }
    //r2
    if(isLow(talkativeness.myScore) && isLow(groupPreference.myScore)){
        // console.log("r2 true!");
        outputVariables.push(
            new OutputVariable(
            Math.min(
                DOM(talkativeness.myScore, Range.Low),
                DOM(groupPreference.myScore, Range.Low)
            ), 
            IE.Introversion)
        );
    }
    //r3
    if(isLow(rechargeStyle.myScore) && isMid(groupPreference.myScore)){
        // console.log("r3 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(rechargeStyle.myScore, Range.Low),
                    DOM(groupPreference.myScore, Range.Medium)
                ),
                IE.Introversion
            )
        )
    }
    //r4
    if(isMid(socialEnergy.myScore) && isLow(talkativeness.myScore)){
        // console.log("r4 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(socialEnergy.myScore, Range.Medium),
                    DOM(talkativeness.myScore, Range.Low)
                ),
                IE.Introversion
            )
        )
    }
    //r5
    if(isLow(talkativeness.myScore) && isMid(rechargeStyle.myScore)){
        // console.log("r5 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(talkativeness.myScore, Range.Low),
                    DOM(rechargeStyle.myScore, Range.Medium)
                ),
                IE.Introversion
            )
        )
    }
    //r6
    if(isLow(groupPreference.myScore) && isMid(socialEnergy.myScore)){
        // console.log("r6 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(groupPreference.myScore, Range.Low),
                    DOM(socialEnergy.myScore, Range.Medium)
                ),
                IE.Introversion
            )
        )
        // console.log("DOM " +  DOM(groupPreference.myScore, Range.Low));
    }

    //r7
    if(isHigh(socialEnergy.myScore) && isHigh(talkativeness.myScore)){
        // console.log("r7 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(socialEnergy.myScore, Range.High),
                    DOM(talkativeness.myScore, Range.High)
                ),
                IE.Extroversion
            )
        )
    }
    //r8
    if(isHigh(groupPreference.myScore) && isHigh(rechargeStyle.myScore)){
        // console.log("r8 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(groupPreference.myScore, Range.High),
                    DOM(rechargeStyle.myScore, Range.High)
                ),
                IE.Extroversion
            )
        )
    }
    
    //r9
    if(isHigh(talkativeness.myScore) && isHigh(rechargeStyle.myScore)){
        // console.log("r9 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(talkativeness.myScore, Range.High),
                    DOM(rechargeStyle.myScore, Range.High)
                ),
                IE.Extroversion
            )
        )
    }

    //r10
    if(isMid(groupPreference.myScore) && isHigh(socialEnergy.myScore)){
        // console.log("r10 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(groupPreference.myScore, Range.Medium),
                    DOM(socialEnergy.myScore, Range.High)
                ),
                IE.Extroversion
            )
        )
    }
    //r11
    if(isHigh(talkativeness.myScore) && isHigh(groupPreference.myScore)){
        // console.log("r11 true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(talkativeness.myScore, Range.High),
                    DOM(groupPreference.myScore, Range.High)
                ),
                IE.Extroversion
            )
        )
    }
    //r12
    if(isHigh(rechargeStyle.myScore) && isMid(socialEnergy.myScore)){
        // console.log("r12 true!");
        
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(rechargeStyle.myScore, Range.High),
                    DOM(socialEnergy.myScore, Range.Medium)
                ),
                IE.Extroversion
            )
        )
    }
    // console.log(outputVariables)

    // console.log("output Variables acquired")
    //Defuzzification
    const area : number[] = []
    for(let i = 0; i < outputVariables.length; i++) {
        if(outputVariables[i].IE === IE.Extroversion){
            area.push(
                ((4-2.15) / 2) * ((2 * outputVariables[i].myScore) - Math.pow(outputVariables[i].myScore, 2))
            );
        }
        if(outputVariables[i].IE === IE.Introversion){
            area.push(
                ((3 - 1) / 2) * ((2 * outputVariables[i].myScore) - 
                Math.pow(outputVariables[i].myScore, 2))
            )
        }
    }
    // console.log(area);
    // console.log("Area acquired")
    let centroidNumeratorSum = 0;
    let centroidDenominatorSum = 0;
    for(let i = 0; i < outputVariables.length; i++){
        if(outputVariables[i].IE == IE.Extroversion)
            centroidNumeratorSum += (3 * area[i]); 
        else if(outputVariables[i].IE == IE.Introversion)
            centroidNumeratorSum += (2 * area[i]);
        centroidDenominatorSum += area[i];
    }
    // console.log("centroid numerator  " + centroidNumeratorSum + " centroid denominator" + centroidDenominatorSum)
    const centroid = centroidDenominatorSum === 0 ? 0 : centroidNumeratorSum/centroidDenominatorSum;
    // console.log("Centroid " + centroid);

    let index : number = 0;
    const outputDOM : number[] = [];
    for(let i = 0; i < outputVariables.length; i++){
        if(outputVariables[i].IE === IE.Extroversion)
            outputDOM.push(
                        fuzzify(
                            centroid,
                            [2.15, 3, 4]
                        )
                    )
        else if(outputVariables[i].IE === IE.Introversion)
            outputDOM.push(
                        fuzzify(
                            centroid,
                            [1, 2, 3]
                        )
                    )
        index = outputDOM[i] > outputDOM[index] ? i : index; 
    }
    if(outputVariables.length > 0){
        // console.log("Introversion vs Extraversion result: " + outputVariables[index].IE + " " + outputDOM[index]);
        return outputVariables[index].IE;
    }
    return IE.Introversion;
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
export {IE, solveIE};