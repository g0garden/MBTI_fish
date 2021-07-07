
export let dic = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
}

export let result = "";

export const updateResult = (str) => {
    result = str;
}

export const incrementDicElement = (type) => {
    if (type === "E") {
        dic[0] += 1;
    }
    else if (type === "I") {
        dic[1] += 1;
    }
    else if (type === "N") {
        dic[2] += 1;
    }
    else if (type === "S") {
        dic[3] += 1;
    }
    else if (type === "T") {
        dic[4] += 1;
    }
    else if (type === "F") {
        dic[5] += 1;
    }
    else if (type === "P") {
        dic[6] += 1;
    }
    else if (type === "J") {
        dic[7] += 1;
    }
    
}