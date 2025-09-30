export function fibWithForLoop(): number[] {
    const seq: number[] = [];
    let prev2: number = 0;
    let prev1: number = 1;
    let newFibo: number;

    seq.push(prev2);
    seq.push(prev1);
    for (let i=0; i <=18; i++) {
        newFibo = prev1 + prev2;
        seq.push(newFibo);
        prev2 = prev1;
        prev1 = newFibo;
    }
    
    return seq
}


export function fibWithRecursion() {

    let count = 0;
    const seq: number[] = [0,1];

    function fib(prev1: number, prev2: number): void {
        
        let newFibo: number;

        if (count < 19) {
            newFibo = prev1 + prev2;
            seq.push(newFibo);
            prev2 = prev1;
            prev1= newFibo;
            count++;
            fib(prev1, prev2);
        } else {
            return;
        }
    }
    fib(1,0)
    return seq;
    
}