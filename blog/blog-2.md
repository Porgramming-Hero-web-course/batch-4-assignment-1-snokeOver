# How to handle asynchronous operations using async/await over callback/promise in TypeScript.

Asynchronous operation/programming is a very inportant concept in modern JavaScript applications. It allows us to handle non-blocking operations, such as fetching data from an API, file I/O, and timers, without halting the execution of the main thread. In JavaScript and TypeScript we have several ways to handle asynchronous operations. While callbacks and promises are widely used, <mark>async/await</mark> has become the go-to choice for handling asynchronous operations due to its simplicity and readability.

## Main Reasons to choose <mark>async/await</mark> over <mark>callbacks and promises</mark>

### 1. Callbacks produce CallBack Hell

Although Callbacks have been used from the beginning of JavaScript, they have their unique problems attached with them. They often lead to callback hell (also known as pyramid of doom), where nested callbacks make the code hard to read and maintain.

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

Callback Hell arises when multiple asynchronous operations are chained that depend on each other.

### 2. Promises: Improved Structure, but introduces Verbose nature

As one technology been introduced to solve another technology but still no technology is perfect, similarly, <mark> Promises </mark> were introduced to solve callback hell.A promise represents the final completion or failure of an asynchronous operation and its final value. Promises allow chaining, which make them easier to handle multiple asynchronous tasks.

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

### 2. <mark> async/await </mark> : Clean, Simple, and Readable

Among all asynchronous operation handlers <mark> async/await </mark> is a more modern and cleaner way to handle asynchronous operations. It allows us to write asynchronous code in a synchronous-like manner, improving readability and making error handling easier.

As An async function which always returns a promise, we can use the await keyword to pause execution of other instructions within that function until the promise resolves.

The following example will demonstrate a simple asynchronous operation using <mark> async/await </mark> :

```
const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

const getData = () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

```

### Benefits of <mark> async/await </mark> in TypeScript

- [x] **_TypeScript Integration_**: <mark> async/await </mark> works seamlessly with TypeScript. We can leverage TypeScript’s type-checking features to ensure that the data returned from asynchronous functions is properly typed, reducing runtime errors.

- [x] **_Less Boilerplate_**: Compared to promises, <mark> async/await </mark> reduces the need for excessive <mark> .then() </mark> and <mark> .catch() </mark> chaining, making our code more concise and cleaner.

- [x] **_Simplicity and Readability_**: Asynchronous code looks and behaves more like synchronous code, which makes it easier to understand, maintain, and debug.

- [x] **_Error Handling_**: With <mark> async/await </mark>, error handling is simplified using <mark> try/catch </mark> blocks, similar to synchronous code, instead of chaining <mark> .catch() </mark> methods.

---

While callbacks and promises are still widely used, <mark> async/await </mark> provides a cleaner, more readable, and less error-prone way to handle asynchronous operations in TypeScript. By using <mark> async/await </mark>, we can write asynchronous code that looks and behaves like synchronous code, reducing boilerplate and making our code easier to maintain.

In TypeScript, the benefits are even greater as we can take advantage of static typing to ensure that our asynchronous operations are well-defined, improving code quality and reducing runtime errors.
