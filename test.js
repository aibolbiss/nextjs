"use strict";
const aibol = {
    id: '1234',
    size: {
        width: 300,
        height: 200,
    }
};
const erlan = {
    id: 'a1b2c3',
    color: 'yellow',
    size: {
        width: 600,
        height: 300,
    }
};
const azamat = {
    id: 'azamat777',
    size: {
        width: 1000,
        height: 500
    },
    print() {
        return this.size.width * this.size.height;
    }
};
