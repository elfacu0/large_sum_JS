let fibo = ["0", "1"];
fibonacci();

function fibonacci() {
    for (let i = 2; i <= 500; i++) {
        fibo[i] = c(fibo[i - 2], fibo[i - 1]);
    }
    console.log(`El Fibonacci de 500 es : ${fibo[500]}`);
}

// c() is the function that do the work
// c() needs 2 arguments, must be strings
// c("9219381923892982131839213","1298213391893218932193913") returns the sum = 010517595315786201064033126
function c(f1, f2) {
    let n1 = splice(f1);
    let n2 = splice(f2);
    let er = Math.max(n1.length, n2.length);
    for (let i = 0; n1.length < er; i++) {
        n1.push("000");
    }
    for (let i = 0; n2.length < er; i++) {
        n2.push("000");
    }
    sum = s(n1, n2);
    let f = "";
    for (let i = 0; i < sum.length; i++) {
        f += sum[i];
    }
    return f;
}

function s(a, b) {
    let f = [];
    let carry = false;
    for (let i = 0; i < b.length; i++) {
        let n = Number(a[i]) + Number(b[i]);
        if (carry) {
            n += 1;
            carry = false;
        }
        if (n >= 1000) {
            n -= 1000;
            carry = true;
        }
        if (i < a.length) {
            for (let j = 0; n.toString().length < 3; j++) {
                n = "0" + n;
            }
        }
        f.push(n.toString());
        if (i == ((b.length) - 1) && carry) {
            f.push("1");
        }
    }
    return (f.reverse())
}

function splice(a) {
    let na = [];
    a = a.toString();
    flag = 0;
    let it = Math.floor(a.length / 3);
    for (let i = a.length; flag < it; i = a.length) {
        let n = (a.slice(i - 3, i));
        na.push(n);
        a = a.slice(0, i - 3);
        flag += 1;
    }
    if (a.length >= 1) {
        na.push(a);
    }
    return na;
}
