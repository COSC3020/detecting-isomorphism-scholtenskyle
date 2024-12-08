function are_isomorphic(graph1, graph2){
    if(graph1.length != graph2.length){
        return false;
    }
    perms = permutation(graph1.length)
    for (let value of perms){ //n! in worst case
        valueT = matrixTrans(value)
        midpoint = matrixMult(value, graph2)
        finished = matrixMult(midpoint, valueT)
        if (JSON.stringify(finished) == JSON.stringify(graph1)){
            return true;
        }
    }
    return false;
}

function permutation(n){
    final = []
    for(let i = 0; i < n; i++){
        temp = new Array(n).fill(0)
        temp[i] = 1
        final.push([...temp])
    }
    return permute(final)
}

function permute(arr){
    let res = [[]]
    for (let num of arr) {
        const temp = [];
        for (let arr of res) {
            for (let i = 0; i <= arr.length; i++) {
                const newArr = [...arr];
                newArr.splice(i, 0, num);
                temp.push(newArr);
            }
        }
        res = temp;
    }
    return res;
}

function matrixTrans(matrix){
    result = [...matrix]
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < i; j++) {
            tmp = result[i][j];
            result[i][j] = result[j][i];
            result[j][i] = tmp;
        }
    }
    return result
}


function matrixMult(matrix1, matrix2){
    len = matrix1.length
    result = Array.from({length: len}, () => Array(len).fill(0));
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result
}
