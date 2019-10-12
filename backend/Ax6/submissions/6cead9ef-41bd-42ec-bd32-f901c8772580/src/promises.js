let abc = 0;

const asyncTest = async () => {
    return await new Promise((r, err) => {
        r(2);
    })
}

const run = () => {
    console.log("before run: ");
    console.log(asyncTest());
    console.log("after run: ");
}

const asyncRun = async () => {
    console.log("before asyncrun: ");
    console.log(await asyncTest());
    console.log("after asyncrun: ");
}

(async () => {
    console.log(await asyncRun());
    console.log(run());
})()