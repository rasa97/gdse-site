const siteMatrix = [
    ["Sydney", 10, 9, 0.12, 144, 62000, 1, 1.25, 1.25, 1.5, 1.25, 1, 0.5, 1, "SYD"],
    ["Tokyo", 9, 9, 0.12, 128, 44000, 1.5, 1.25, 1, 1.5, 1, 1.25, 1.5, 1.5, "TKY"],
    ["Beijing", 8, 8, 0.12, 112, 5000, 1.5, 1, 0.75, 0.5, 0.5, 1, 0.75, 1.5, "BJG"],
    ["Jakarta", 7, 8, 0.1, 232, 5000, 0.75, 0.75, 1.5, 1.5, 1, 1, 0.5, 1.25, "JKR"],
    ["Bangalore", 5.5, 10, 0.08, 224, 5900, 1.25, 1.5, 0.5, 0.5, 1.25, 1, 1.25, 0.75, "BLR"],
    ["Amsterdam", 1, 10, 0.8, 104, 35000, 1.5, 1.25, 1.5, 1.5, 1.25, 1.25, 1, 1, "AMS"],
    ["London", 0, 9, 0.1, 208, 70000, 0.75, 1.5, 1.5, 0.5, 1, 1, 0.75, 0.75, "LDN"],
    ["New York", -5, 10, 0.02, 232, 63000, 1, 1.25, 1.5, 1.25, 0.75, 1.25, 1, 0.5, "NY"],
    ["Los Angeles", -8, 8, 0.09, 232, 63000, 1.5, 1.5, 1.25, 1.5, 1, 1, 1.5, 0.5, "LA"],
    ["Honolulu", -10, 10, 0.11, 232, 63000, 1, 0.75, 0.75, 1, 1.25, 0.75, 0.5, 0.75, "HNL"]
];

const weights = [
    [0.50, 0.23, 0.10, 0.17],
    [0.09, 0.27, 0.52, 0.12]
]

const kp = [];
const kl = [];

const E = 10;

for(let i=0; i<10; i++){
    let s1=0, s2=0;
    for(let j=0; j<4; j++){
        s1 = s1 + weights[0][j] * siteMatrix[i][10+j]
        s2 = s1 + weights[1][j] * siteMatrix[i][6+j]
    }
    kp.push(Number(s1.toFixed(2)));
    kl.push(Number(s2.toFixed(2)));
}

const interactionMatrix = [...Array(10)].map(x=>Array(10).fill(0));

for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        if(i==j)
            interactionMatrix[i][j] = 0;
        else{
            interactionMatrix[i][j] = Number((kp[i] / Math.min(kl[i], kl[j])).toFixed(2));
        }
    }
}

function getPrice(country, teams, jobs){

    const dayEnd = [];
    for(let i=0; i<10; i++)
        dayEnd.push(9+siteMatrix[i][2]);

    let pos = siteMatrix.findIndex(((ele) => ele[14]==country));
    let currentZone = siteMatrix[pos][1];
    let firstSites = [];
    let secondSites = [];
    let thirdSites = [];
    let feasible = [];
    let tempFirst = [];
    
    for(let i=0; i<10; i++){
        if(i != pos){
            let otherZone = siteMatrix[i][1];
            otherTime = dayEnd[pos] - currentZone + otherZone;
            if(otherTime >= 24)
                otherTime -= 24;
            if(otherTime >=9){
                let otherRemaining = Number((dayEnd[i] - interactionMatrix[pos][i] - otherTime).toFixed(2));
                if(otherRemaining > 0){
                    let otherTotalRemaining = Number((dayEnd[i] - otherTime).toFixed(2));
                    firstSites.push([i,siteMatrix[i][14],otherTotalRemaining,siteMatrix[pos][2],String(pos)+","+String(i)]);
                    tempFirst.push([String(pos)+","+String(i), 0]);
                }
            }
        }
    }

    if (teams >= 2){

        let tempSecond = [];
        for(let k=0; k<firstSites.length; k++){
        
            let position = firstSites[k][0];
            let iterations = [];
    
            for(let i=0; i<10; i++){
                if(i != position){
    
                    let otherZone = siteMatrix[i][1];
                    let thisZone = siteMatrix[position][1];
                    let qerty;
    
                    otherTime = dayEnd[position] - thisZone + otherZone;
                    if(otherTime >= 24)
                        otherTime -= 24;
                    if(otherTime >=9){
                        let otherRemaining = Number((dayEnd[i] - interactionMatrix[position][i] - otherTime).toFixed(2));
                        if(otherRemaining > 0){
                            let otherTotalRemaining = Number((dayEnd[i] - otherTime).toFixed(2));
                            if (otherTotalRemaining + Number((firstSites[k][3]+firstSites[k][2]).toFixed(2)) >= 24)
                                //feasible.push([firstSites[k][4]+","+String(i), otherTotalRemaining + Number((firstSites[k][3]+firstSites[k][2]).toFixed(2)) - 24]);
                                qwert=1+2;
                            else{
                                iterations.push([i,siteMatrix[i][14],otherTotalRemaining,Number((firstSites[k][3]+firstSites[k][2]).toFixed(2)), firstSites[k][4]+","+String(i)]);
                                tempSecond.push([firstSites[k][4]+","+String(i), 0]);
                            }
                        }
                    }
                }
            }
    
            secondSites.push(iterations);
        }
    
        if(teams == 3){
            for(let l=0; l<firstSites.length; l++){
    
                let iteration = [];
        
                for(let k=0; k<secondSites[l].length; k++){
        
                    let position = secondSites[l][k][0];
                    let subIteration = [];
        
                    for(let i=0; i<10; i++){
                        if(i != position){
                
                            let otherZone = siteMatrix[i][1];
                            let thisZone = siteMatrix[position][1];
                
                            otherTime = dayEnd[position] - thisZone + otherZone;
                            if(otherTime >= 24)
                                otherTime -= 24;
                            if(otherTime >=9){
                                let otherRemaining = Number((dayEnd[i] - interactionMatrix[position][i] - otherTime).toFixed(2));
                                if(otherRemaining > 0){
                                    let otherTotalRemaining = Number((dayEnd[i] - otherTime).toFixed(2));
                                    if(otherTotalRemaining + Number((secondSites[l][k][3]+secondSites[l][k][2]).toFixed(2)) >= 24)
                                        feasible.push([secondSites[l][k][4]+","+String(i), otherTotalRemaining + Number((secondSites[l][k][3]+secondSites[l][k][2]).toFixed(2)) - 24])
                                    else
                                        feasible.push([secondSites[l][k][4]+","+String(i), 0]);
                                }
                            }
                        }
                    }
                    iteration.push(subIteration);
                }
        
                thirdSites.push(iteration);
            }
        }else{
            feasible = tempSecond;
        }
    }else{
        feasible = tempFirst;
    }

    let minMoney = 100000;
    let minMoneyArray = [];
    let minTime = 100000;
    let minTimeArray = [];
    
    for(let i=0; i<feasible.length; i++){
        let interactive = [];
        let work = [];
        let members = JSON.parse("[" + feasible[i][0] + "]");
        let numEle = members.length;

        let prev;
        let prevZone;

        for(let j=0; j<numEle; j++)
            interactive.push(Number((interactionMatrix[members[(numEle-1+j)%numEle]][j]).toFixed(2)));

        for(let j=0; j<numEle; j++){
            if(j == 0){
                work.push(Number((siteMatrix[members[j]][2] - interactive[0]).toFixed(2)));
                prevZone = siteMatrix[members[0]][1];
                prev = members[0];
            }else{
                let newStart = (dayEnd[prev] - prevZone + siteMatrix[members[j]][1])%24;
                let isWork = dayEnd[j] - newStart - interactive[j];
                if (j == numEle - 1) {
                    if (feasible[i][1] != 0) {
                        isWork -= feasible[i][1];
                        if (isWork > 0)
                            work.push(Number(isWork.toFixed(2)));
                    }else
                        work.push(Number(isWork.toFixed(2)));
                } else
                    work.push(Number(isWork.toFixed(2)));
            }
            prevZone = siteMatrix[members[j]][1];
            prev = members[j];
        }
        let hp = work.reduce((a, b) => a + b, 0);
        let I = interactive.reduce((a, b) => a + b, 0);
        let wp = 0;
        let C1 = 0;
        for(let j=0; j<numEle; j++){
            wp += work[j]*siteMatrix[members[j]][3];
            C1 += siteMatrix[members[j]][5]/365;
        }
        T = jobs/wp;
        C2 = I*10;
        C = (C1+C2)*T;
        C = Number(C.toFixed(2));
        T = Number(T.toFixed(2));
        if(T < minTime){
            minTime = T;
            minTimeArray = [C, T, members];
        }
        if(C < minMoney){
            minMoney = C;
            minMoneyArray = [C, T, members];
        }
    }
    console.log(minTimeArray, minMoneyArray);

    document.getElementById('minCostMoney').innerHTML = minMoney;
    document.getElementById('minCostDays').innerHTML = minMoneyArray[1];
    document.getElementById('minDaysTime').innerHTML = minTime;
    document.getElementById('minDaysMoney').innerHTML = minTimeArray[0];
    document.getElementById('minCostPartners').innerHTML = '';
    document.getElementById('minTimePartners').innerHTML = '';

    
    for(let i=1; i<minMoneyArray[2].length; i++){
        if(i==minMoneyArray[2].length-1)
            document.getElementById('minCostPartners').innerHTML += siteMatrix[minMoneyArray[2][i]][0];
        else
            document.getElementById('minCostPartners').innerHTML += siteMatrix[minMoneyArray[2][i]][0]+",";
    }
    for(let i=1; i<minTimeArray[2].length; i++){
        if(i==minTimeArray[2].length-1)
            document.getElementById('minTimePartners').innerHTML += siteMatrix[minTimeArray[2][i]][0];
        else
            document.getElementById('minTimePartners').innerHTML += siteMatrix[minTimeArray[2][i]][0]+",";
    }

}

function start(country, teams, jobs){
    getPrice(country, teams, jobs);
    let pos = siteMatrix.findIndex(((ele) => ele[14]==country));
    let TT = jobs/((siteMatrix[pos][3])*siteMatrix[pos][2]);
    let TC = (siteMatrix[pos][5]/365)*TT;
    TT = Number(TT.toFixed(2));
    TC = Number(TC.toFixed(2));

    document.getElementById('normalCost').innerHTML = TC;
    document.getElementById('normalDays').innerHTML = TT;
    document.getElementById('whichCountry').innerHTML = siteMatrix[pos][0];
    document.getElementById('resultID').style.display = "block";

    console.log(TC,TT);
}