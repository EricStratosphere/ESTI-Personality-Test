import { ifError } from "assert";
import { time } from "console";

enum SN{
    sensing, // [1, 2, 3]
    intuition // [2.15, 3, 4]
}

enum Range{
    Low, //[1, 1.5, 2.2]
    Medium, //[1.8, 3, 4]
    High // [3.7. 4.5, 5]
}

class OutputVariable{
    public myScore : number;
    public SN : SN;
    constructor(score : number, SN : SN){
        this.myScore = score;
        this.SN = SN;
    }  
}

function solveSN(score : number[]) : SN {
    const detailOrientation : number = score[0];
    const patternSeeking : number = score[1];
    const timeFocus : number = score[2];
    const informationStyle : number = score[3];
    const imaginationUse : number = score[4];

    const outputVariables : OutputVariable[] = [];

    //rule evaluation

    //r1
    if(isLow(detailOrientation) && isLow(informationStyle)){
        // console.log("r1 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(detailOrientation, Range.Low),
                    DOM(informationStyle, Range.Low)
                ), 
                SN.sensing
            )
        );
    }
    //r2
    if(isLow(patternSeeking) && isLow(timeFocus)){
        // console.log("r2 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(patternSeeking, Range.Low),
                    DOM(timeFocus, Range.Low)
                ), 
                SN.sensing
            )
        );
    }
    //r3
    if(isLow(imaginationUse) && isLow(informationStyle)){
        // console.log("r3 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(imaginationUse, Range.Low),
                    DOM(informationStyle, Range.Low)
                ), 
                SN.sensing
            )
        );
    }

    //r4
    if(isLow(detailOrientation) && isLow(patternSeeking)){
        // console.log("r4 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(detailOrientation, Range.Low),
                    DOM(patternSeeking, Range.Low)
                ), 
                SN.sensing
            )
        );
    }
    //r5
    if(isLow(timeFocus) && isLow(imaginationUse)){
        // console.log("r5 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(timeFocus, Range.Low),
                    DOM(imaginationUse, Range.Low)
                ), 
                SN.sensing
            )
        );
    }
    //r6
    if(isMid(detailOrientation) && isLow(informationStyle)){
        // console.log("r6 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(detailOrientation, Range.Medium),
                    DOM(timeFocus, Range.Low)
                ), 
                SN.sensing
            )
        );
    }
    //r7
    if(isMid(patternSeeking) && isLow(timeFocus)){
        // console.log("r7 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(patternSeeking, Range.Medium),
                    DOM(timeFocus, Range.Low)
                ), 
                SN.sensing
            )
        );
    }
    //r8
    if(isMid(imaginationUse) && isLow(informationStyle)){
        // console.log("r8 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(imaginationUse, Range.Medium),
                    DOM(timeFocus, Range.Low)
                ), 
                SN.sensing
            )
        );
    }
    //r9
    if(isMid(detailOrientation) && isLow(patternSeeking)){
        // console.log("r9 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(detailOrientation, Range.Medium),
                    DOM(patternSeeking, Range.Low)
                ), 
                SN.sensing
            )
        );
    }
    //r10
    if(isHigh(detailOrientation) && isHigh(informationStyle)){
        // console.log("r10 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(detailOrientation, Range.High),
                    DOM(informationStyle, Range.High)
                ), 
                SN.intuition
            )
        );
    }

    //r11
    if(isHigh(patternSeeking) && isHigh(timeFocus)){
        // console.log("r11 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(patternSeeking, Range.High),
                    DOM(timeFocus, Range.High)
                ), 
                SN.intuition
            )
        );
    }
    //r12
    if(isHigh(imaginationUse) && isHigh(informationStyle)){
        // console.log("r12 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(imaginationUse, Range.High),
                    DOM(informationStyle, Range.High)
                ), 
                SN.intuition
            )
        );
    }
    //r13
    if(isHigh(detailOrientation) && isHigh(patternSeeking)){
        // console.log("r13 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(detailOrientation, Range.High),
                    DOM(patternSeeking, Range.High)
                ), 
                SN.intuition
            )
        );
    }
    //r14
    if(isHigh(timeFocus) && isHigh(imaginationUse)){
        // console.log("r14 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(timeFocus, Range.High),
                    DOM(imaginationUse, Range.High)
                ), 
                SN.intuition
            )
        );
    }
    //r15
    if(isMid(detailOrientation) && isHigh(informationStyle)){
        // console.log("r15 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(detailOrientation, Range.Medium),
                    DOM(informationStyle, Range.High)
                ),
                SN.intuition
            )
        );
    }
    //r16
    if(isMid(patternSeeking) && isHigh(timeFocus)){
        // console.log("r16 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(patternSeeking, Range.Medium),
                    DOM(timeFocus, Range.High)
                ),
                SN.intuition
            )
        );
    }
    //r17
    if(isMid(imaginationUse) && isHigh(informationStyle)){
        // console.log("r17 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(imaginationUse, Range.Medium),
                    DOM(informationStyle, Range.High)
                ),
                SN.intuition
            )
        );
    }
    //r18
    if(isMid(detailOrientation) && isHigh(patternSeeking)){
        // console.log("r15 is true!");
        outputVariables.push(
            new OutputVariable(
                Math.min(
                    DOM(detailOrientation, Range.Medium),
                    DOM(patternSeeking, Range.High)
                ),
                SN.intuition
            )
        );
    }



    // console.log(outputVariables);
    // console.log("Output variables acquired.");
    
    const area : number[] = [];
    for(let i = 0; i < outputVariables.length; i++)
    {
        if(outputVariables[i].SN === SN.intuition){
            area.push(
                ((4-2.15) / 2) * ((2 * outputVariables[i].myScore) - Math.pow(outputVariables[i].myScore, 2))
            );    
        }
        if(outputVariables[i].SN === SN.sensing){
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
        if(outputVariables[i].SN == SN.intuition)
            centroidNumeratorSum += (3 * area[i]); 
        else if(outputVariables[i].SN == SN.sensing)
            centroidNumeratorSum += (2 * area[i]);
        centroidDenominatorSum += area[i];
    }
    
    // console.log("centroid numerator  " + centroidNumeratorSum + " centroid denominator" + centroidDenominatorSum)
    const centroid = centroidDenominatorSum === 0 ? 0 : centroidNumeratorSum/centroidDenominatorSum;
    // console.log("Centroid " + centroid);

    let index : number = 0;
    const outputDOM : number[] = [];
    for(let i = 0; i < outputVariables.length; i++){
        if(outputVariables[i].SN === SN.intuition){
            // console.log("outputVar is intuition")
            outputDOM.push(
                        fuzzify(
                            centroid,
                            [2.15, 3, 4]
                        )
                    )
        }
        else if(outputVariables[i].SN === SN.sensing){
            // console.log("outputVar is sensing")
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
        // console.log("Sensing vs Intuition result: " + 
        // outputVariables[index].SN + " " + outputDOM[index]);
            
        return outputVariables[index].SN;
    }
        //In a case where mid tanan
    return SN.sensing;
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
export {SN, solveSN};