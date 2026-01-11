// console.log("1")

// setTimeout(() => {
//     console.log("2")
//     const newPromise =  new Promise((resolve, reject) => {
//         console.log("4.1")
//         resolve()
//     }).then(() => console.log("5.1"))
//     newPromise.then(() => {})
// }, 10);

// setTimeout(() => {
//     console.log("3")
// }, 0);

const newPromise =  new Promise((resolve, reject) => {
    console.log("4")
    resolve()
    // reject()
    console.log("4.1")
}).then(() => console.log("5"))

const asyncFunc = async () => {
    console.log('13')
    await Promise.resolve();
    console.log("14")
}

newPromise
.then(() => {
    console.log('15');
    const anotherPromise = new Promise((res, rej) => {
        console.log('15.1');
        rej("Rejected !");
    });
    anotherPromise
    .then((res) => console.log(res))
    .catch(res => console.log(`${res} from catch`))
})
.then(() => {
    console.log('12.1');
    asyncFunc();
    console.log("12.2")
})
// .then(() => {
//     console.log('11.1');
//     newPromise.reject()
// })
// .then(() => {
//     console.log("6")
//     throw "This is error"
// })
// .then(() => console.log("9"))
// .catch(() => console.log("7"))
// .then(() => console.log("10"))
// .finally(() => console.log("11"))

// console.log("8")



//
// async function test() {
//   console.log("A");
//   await Promise.resolve();
// //   Promise.resolve();
//   console.log("B");
// }

// console.log("C");
// test();
// console.log("D");


//
// Promise.resolve().then(() => {
//   console.log("1");
//   setTimeout(() => console.log("2"), 0);
// });

// setTimeout(() => console.log("3"), 0);


//
// async function test() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }

// setTimeout(() => console.log("C"), 0);
// test();

//
// async function test() {
//   console.log(1);
//   await 10;
//   console.log(2);
// }
// test();
// console.log(3);
// async function test() {
//   console.log("A");
//   await null;
//   console.log("B");
//   await null;
//   console.log("C");
// }
// test();


// await pauses only the async function, not the whole JS thread.