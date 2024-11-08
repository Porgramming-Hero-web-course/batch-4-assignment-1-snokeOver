{
  //problem5: A generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  const getProperty = <P, Q extends keyof P>(obj: P, key: Q) => {
    return obj[key];
  };

  // Testing
  const person = { name: "Alice", age: 30 };

  console.log(getProperty(person, "name"));
}
