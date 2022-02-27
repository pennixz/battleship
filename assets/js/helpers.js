function newBlankBoard() {
    let arr = []
    let init = []
    for (let i = 0; i < 10; i++) {
        let square = [0, 0]
        init.push(square)
    }
    for (let i = 0; i < 10; i++) {
        arr.push(init)
    }


    return arr;
}