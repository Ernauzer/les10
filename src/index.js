/// FizzBuzz \\\
const fizzBuzz = (num) => {
    const fizz = 3;
    const buzz = 5;
    const zero = 0;
    for (let i = 1; i < num; i++) {
        if (i % fizz === zero && i % buzz === zero) {
            console.log('fizzBuzz'); // eslint-disable-line
        }
        else if (i % fizz === zero) {
            console.log('fizz'); // eslint-disable-line
        }
        else if (i % buzz === zero) {
            console.log('buzz'); // eslint-disable-line
        }
        else {
            console.log(i); // eslint-disable-line
        }
    }
};
fizzBuzz();



/// VowelsSearch \\\
const vowelsSearch = (str) => {
    let result = '';
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                result += vowels[j];
            }
        }
    }
    const numVowels = result.length;
    return 'Гластных : ' + numVowels;
};
vowelsSearch('Viverra accumsan nisl nIsI ScElErIsqUe');



/// Fibonacci \\\
const fibonacci = (num) => {
    const result = [0,1]; // eslint-disable-line
    let a = 0;
    let b = 1;
    for (let i = 0; i <= num; i++) {
        const c = a + b;
        a = b;
        b = c;
        result.push(b);
    }
    return result;
};
fibonacci();


