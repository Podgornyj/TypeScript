//1
function isInArray(a: any[], ...b: any[]): boolean {
    if (!Array.isArray(a)) {
        return;
    }
    return b.every((item) => a.indexOf(item) !== -1);
};

//2
type sn = string | number;

function isNumber(a: sn): a is number {
    return typeof a === 'number';
}

function summator(...params: sn[]): number {
    let sum = 0;
    params.forEach((param) => sum += isNumber(param) ? param : parseInt(param));
    return sum;
}

//3
function getUnique_one(...a: any[]): any[]{
    let set = new Set();
    a.forEach((item)=>set.add(item))
    return set;
}

function getUnique_two(...a: any[]): any[]{
    let rez = [];
    a.forEach(function(item){
        if(rez.indexOf(item) == -1){
            rez.push(item);
        }
    });
    return rez;
}

//4

function isLetter(str: string): boolean {
        if (str.length !== 1) {
                throw new Error('Parameter must be a letter');
            }

            return /[a-zA-Z]/.test(str);
    }

function revertWord(str: string): string {
        let result = [];
        let temp = [];
        let letters = str.split('');

            for (let i = 0, len = letters.length; i < len; i++) {
                if (isLetter(letters[i])) {
                        temp.push(letters[i]);
                    } else {
                        result[i] = letters[i];
                    }
            }

            for (let i = 0, len = letters.length; i < len; i++) {
                if (result[i] === undefined) {
                        result[i] = temp.pop();
                    }
            }

            return result.join('');
    }

function revertSentence(str: string): string {
        return str.split(' ').map(revertWord).join(' ');
    }
    