const getSeconds = () => new Date().getSeconds();

const async1 = num => {
  return new Promise((resolve, reject) =>  {
    console.log("start" + num, getSeconds());
    
    setTimeout(() => {
      console.log("done" + num, getSeconds());
      resolve(num);
    }, 1000);
  });
};

async1(1).then(result => {
  return async1(result + 1);
}).then(result => {
  return async1(result + 1);
});


