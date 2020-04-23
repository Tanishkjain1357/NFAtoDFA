//obj { name: string, c: string }

let array = [
  {
    name: "1",
    a: "12",
    b: "134"
  },
  {
    name: "2",
    a: "0",
    b: "5"
  },
  {
    name: "3",
    a: "6",
    b: "0"
  },
  {
    name: "4",
    a: "0",
    b: "7"
  },
  {
    name: "5",
    a: "0",
    b: "8"
  },{
    name: "6",
    a: "0",
    b: "8"
  },
  {
    name: "7",
    a: "8",
    b: "0"
  },
  {
    name: "8",
    a: "8",
    b: "8"
  }
]


function sort(array) {
  let arr = [];
  let index = 0;
  arr.push(array[0]);
  while(index < arr.length){
    
    //For a
    let obj = {};
    let val = lib220.getProperty(arr[index], "a").value;
    let check = arr.filter(function(x) {
      // console.log("THIS IS THE VALUE OF EVER ELEMENT IN A");
      // console.log(x);
      return lib220.getProperty(x, "name").value === val;
    });
    if(check.length === 0) { 
      lib220.setProperty(obj, "name", val); 
      let s = val.split("");
      let stringA = "";
      let stringB = "";
      s.forEach(function(o) { 
        let b = array.filter(y => lib220.getProperty(y, "name").value === o);
        stringA += b[0].a === "0" ? "" : b[0].a;
        stringB += b[0].b === "0" ? "" : b[0].b;
      });
      lib220.setProperty(obj, "a", removeDuplicate(stringA));
      lib220.setProperty(obj, "b", removeDuplicate(stringB));
      arr.push(obj);
    }

    //For b
    let obj2 = {};
    val = lib220.getProperty(arr[index], "b").value;
    // console.log(val);
    check = arr.filter(function(x) {
      // console.log("THIS IS THE VALUE OF EVER ELEMENT IN B");
      // console.log(x);
      return lib220.getProperty(x, "name").value === val;
    });
    if(check.length === 0) {  
      lib220.setProperty(obj2, "name", val); 
      let s = val.split("");
      let stringA = "";
      let stringB = "";
      s.forEach(function(o) { 
        let b = array.filter(y => lib220.getProperty(y, "name").value === o);
        stringA += b[0].a === "0" ? "" : b[0].a;
        stringB += b[0].b === "0" ? "" : b[0].b;
      });
      lib220.setProperty(obj2, "a", removeDuplicate(stringA));
      lib220.setProperty(obj2, "b", removeDuplicate(stringB));
      arr.push(obj2);
    }
    index += 1;
  }
  return arr;
}

function removeDuplicate(s) {
  s = s.split("");
  let newS = [];
  let str = "";
  s.forEach(x => {
    if(!newS.includes(x)) {
      newS.push(x);
      str += x;
    }
  });
  return str;
}
console.log(sort(array));
// let t = removeDuplicate("11223435434534523");


