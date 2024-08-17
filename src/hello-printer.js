function hello(message) {
    console.log(`Hello ${message}`);
}

async function asyncHello(message) {
    setTimeout(() => console.log(`Async Hello ${message}`), 100);
}
module.exports.hello = hello;
module.exports.asyncHello = asyncHello;
