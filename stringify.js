// POST stringify a JS object
function stringify(obj){
    return Object.keys(obj).reduce((acc, key, i) => {
        acc += key + "=" + obj[key] + "&";
        return acc;
    }, "").slice(0, -1);
}
