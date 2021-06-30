export let questions = [
        {
            "question": "누군가 당신을 좋아한다고 말했을 때?",
            "answers": [{"a": "감사합니다.", "type": "E", "index": 0}, {"b": "저리가세요.", "type": "I", "index": 1}]
        },
        {
            "question": "누군가 당신을 싫어한다고 말했을 때?",
            "answers": [{"a": "저는 당신을 좋아해요!", "type": "E", "index": 0}, {"b": "아 관심없어요", "type": "I", "index": 1}]
        },
        {
            "question": "누군가 당신을 더럽다고 말했을 때?",
            "answers": [{"a": "맞아요 오늘 안 씻었어요.", "type": "E", "index": 0}, {"b": "뭐 향수라도 뿌릴까요?", "type": "I", "index": 1}]
        },
        {
            "question": "누군가 당신을 예쁘다고 말했을 때?",
            "answers": [{"a": "뭐래", "type": "N", "index": 2}, {"b": "구라 ㄴ", "type": "S", "index": 3}]
        },
        {
            "question": "누군가 당신을 못생겼다고 말했을 때?",
            "answers": [{"a": "응 너도", "type": "N", "index": 2}, {"b": "진실 ㄱㅅ", "type": "S", "index": 3}]
        },
        {
            "question": "누군가 당신을 사랑한다고 말했을 때?",
            "answers": [{"a": "사랑은 무슨?", "type": "N", "index": 2}, {"b": "돈 많아요?", "type": "S", "index": 3}]
        },
        {
            "question": "누군가 당신을 존경한다고 말했을 때?",
            "answers": [{"a": "나두.", "type": "T", "index": 4}, {"b": "메롱", "type": "F", "index": 5}]
        },
        {
            "question": "누군가 당신을 경멸한다고 말했을 때?",
            "answers": [{"a": "쬬뾰쬬뾰", "type": "T", "index": 4}, {"b": "부리부리.", "type": "F", "index": 5}]
        },
        {
            "question": "누군가 당신을 슬퍼한다고 말했을 때?",
            "answers": [{"a": "우엥", "type": "T", "index": 4}, {"b": "아하!", "type": "F", "index": 5}]
        },
        {
            "question": "누군가 당신을 때린다고 말했을 때?",
            "answers": [{"a": "땡뀨", "type": "P", "index": 6}, {"b": "노땡큐", "type": "J", "index": 7}]
        },
        {
            "question": "누군가 당신을 발로 찬다고 말했을 때?",
            "answers": [{"a": "너도 대", "type": "P", "index": 6}, {"b": "한 대 더", "type": "J", "index": 7}]
        },
        {
            "question": "누군가 당신을 팔꿈치로 때린다고 말했을 때?",
            "answers": [{"a": "감사합니다.", "type": "P", "index": 6}, {"b": "저리가세요.", "type": "J", "index": 7}]
        }
    ]

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
}

shuffleArray(questions);

console.log(questions);