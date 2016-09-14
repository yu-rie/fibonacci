'use strict';
function tri(n){
    if (n === 0 || n === 1 ){
        return 0;
    } else if (n === 2){
        return 1;
    }
    return tri(n - 1) + tri(n - 2) + tri(n - 3);
}

const length = 40;

for (let i = 0; i < length; i++) {
    console.log(tri(i));
}
