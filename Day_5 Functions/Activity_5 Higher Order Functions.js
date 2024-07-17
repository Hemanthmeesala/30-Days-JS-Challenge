// Task-9 

//  Repeat strings n number of times


const dummyFunc = () => {
    console.log("Hey There!");
  };
  
  const higherOrderFunction = (func, num) => {
    if (!num) return;
    func();
    num--;
    higherOrderFunction(func, num);
  };
  
  higherOrderFunction(dummyFunc, 10);

//   task-10 

//  Higher order
  
  const add5ToNum = (num) => {
    return num + 5;
  };
  const multiplyNumWith10 = (num) => {
    return num * 10;
  };
  
  const higherOrderFunction2 = (func1, func2, val) => {
    const res1 = func1(val);
    const res2 = func2(res1);
    return res2;
  };
  
  const high = higherOrderFunction2(add5ToNum, multiplyNumWith10, 2);
  console.log(high);