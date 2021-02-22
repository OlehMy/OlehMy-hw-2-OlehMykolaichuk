const approval = confirm('This program adds numbers from N to M. Do you want to continue?');
if (approval) {

    let numberN
    do {
        numberN = parseInt(prompt('Enter the number N (N must be an integer)'));
    } while (!Number.isInteger(numberN));
    console.log(`N = ${numberN}`);

    let numberM
    do {
        numberM = parseInt(prompt('Enter the number M (M must be an integer)'));
    } while (!Number.isInteger(numberM));
    console.log(`M = ${numberM}`);

    if (numberM < numberN) {
        [numberN, numberM] = [numberM, numberN];
    }

    const countEvenNumbers = confirm('Do you want to exclude even numbers from the calculation?');
    console.log(`Do you want to exclude even numbers from the calculation? - ${countEvenNumbers}`);

    let sumFromNToM = 0;

    if (countEvenNumbers) {
        for (let i = numberN; i <= numberM; i++) {
            if (i % 2) {
                sumFromNToM += i;
            }
        }
    }

    for (let i = numberN; i <= numberM; i++) {
        sumFromNToM += i;
    }

    alert(`Sum from ${numberN} to ${numberM} = ${sumFromNToM}`);
    console.log(`Sum from ${numberN} to ${numberM} = ${sumFromNToM}`);

} else {
    alert('Have a nice day :)');
}