function first(obj, n=0) {
    return obj[Object.keys(obj)[n]]
}

function last(obj) {
    return obj[Object.keys(obj).length]
}

export default { first, last }


