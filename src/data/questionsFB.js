//비동기처리 코드 연습..
import { firestore } from "../shared/firebase";

let qnaList_data = [];

async function FB_test() {
    const qnaList = firestore.collection("qnaList");

    await qnaList.get().then((docs) => {
    docs.forEach((doc) => {
        if (doc.exists) {
            qnaList_data = [...qnaList_data, { id: doc.id, ...doc.data() }];
            }
        });
        console.log("과연", qnaList_data);
    });
}

const questions = FB_test().then(() => {
    console.log("제발", qnaList_data)
});

// const questions = FB_test();
// console.log("제발",questions);//[]

//FB_test();
// (async () => {
//     const questions = await FB_test();
//     console.log(questions);
// })();

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
let a=[1,2]
export const shuffled_array = shuffleArray(a);

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