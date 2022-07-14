const loopWithRange = (fromNum: number, toNum: number): string => {
    const arrayNum: number[] = [];
    if (fromNum < toNum) {
        for (let i = fromNum; i <= toNum; i++) {
            arrayNum.push(i);
        }
    } else {
        for (let i = fromNum; i >= toNum; i--) {
            arrayNum.push(i);
        }
    }
    return arrayNum.join(', ');
};

console.log(`Input pertama: 4`);
console.log(`Input kedua: 8`);
console.log(`Output di browser: ${loopWithRange(4, 8)}`);
