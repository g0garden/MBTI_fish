import { firestore } from "../shared/firebase";


function FB_test() {
    const qnaList = firestore.collection("qnaList")

    qnaList.get().then(docs => {
        let qnaList_data = [];

        docs.forEach((doc) => {
        if(doc.exists){
            qnaList_data = [...qnaList_data, {id: doc.id, ...doc.data()}]
        }
        });
        
        console.log(qnaList_data);
        return qnaList_data
    });
    
}

//FB_test();
const questions = FB_test();
console.log("제발", questions);


function shuffleArray(arr) {
    let currentIndex = arr.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}

export const shuffled_array = shuffleArray(questions);

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