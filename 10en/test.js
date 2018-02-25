
const handlers1 = ((a)=> {
    return {
        get: console.log(a)
    }
})

const handlers2 = (() => {
    function Met(a) {
        console.log(a)
    }
    return {
        Met
    }
})()