{
  //Problem4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type CircleOrRectangle = Circle | Rectangle;

  const calculateShapeArea = (currObj: CircleOrRectangle): number | string => {
    if (currObj.shape === "circle")
      return parseFloat((Math.PI * currObj.radius * currObj.radius).toFixed(2));
    else if (currObj.shape === "rectangle")
      return parseFloat((currObj.height * currObj.width).toFixed(2));
    else return "Others than Circle or Rectangle are not allowed";
  };

  // Testing

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  console.log(circleArea);
  console.log(rectangleArea);
}
