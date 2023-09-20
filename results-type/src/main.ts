type Result = <number, string> {
  successValue?: number;
  failureValue?: number;
}

function divide(x: number, y: number): Result<number, string> {
  if (y === 0) {
    return { failure: "Division by zero is not allowed." };
  }
  
  const result = x / y;
  return { success: result };
}

const result1 = divide(22, 5);
  if (result1.successValue !== undefined) {
    console.log("Result is a success");
  } else {
    console.log("Result is a failure");
  }

  const result2 = divide(100, 10);
  if (result2.successValue !== undefined) {
    console.log("Result is a success!");
  } else {
    console.log("Result is a failure!");
  }