# How to handle asynchronous operations using async/await over callback/promise in TypeScript.

Asynchronous operation/programming is a very inportant concept in modern JavaScript applications. It allows us to handle non-blocking operations, such as fetching data from an API, file I/O, and timers, without halting the execution of the main thread. In JavaScript, and by extension TypeScript, we have several ways to handle asynchronous operations. While callbacks and promises are widely used, <mark>async/await</mark> has become the go-to choice for handling asynchronous operations due to its simplicity and readability.

## Main Reasons to choose <mark>async/await</mark> over <mark>callbacks and promises</mark>

### 1. Callbacks produce CallBack Hell

Although Callbacks have been used from the beginning of JavaScript they have their unique problems attached. They often lead to callback hell (also known as pyramid of doom), where nested callbacks make the code hard to read and maintain.

The following example will demonstrate a simple asynchronous operation using callbacks:

```
const fetchData = (callback: (data: string) => void) => {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

Callback Hell arises when multiple asynchronous operations that depend on each other.

### 2. Promises: Improved Structure, but introduces Verbose nature

As one technology been introduced to solve another technology but still no technology is perfect, similarly, <mark> Promises </mark> were introduced to solve callback hell.A promise represents the final completion or failure of an asynchronous operation and its final value. Promises allow chaining, which makes it easier to handle multiple asynchronous tasks.

The following example will demonstrate a simple asynchronous operation using <mark> Promises </mark>:

```
const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

This example demostrate how <mark> Promises </mark> improve readability but when dealing with complex logic chaining multiple <mark> .then() </mark> methods can become verbose. Even we also have to manage catch blocks for error handling.
