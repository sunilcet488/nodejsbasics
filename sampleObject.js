// working with objects - these are like workarea in ABAP

var oEmp = {
  empId: 10001,
  name: "Sunil Kumar",
  salary: 5000,
  currency: "EUR",
};

console.log(oEmp);
console.log(oEmp.name);
oEmp.salary = 1000;
console.log(oEmp.salary);

// looping on object
for (const key in oEmp) {
  console.log(oEmp[key]);
}

// complex json

var oComplexData = {
  empTable: [
    {
      empId: 10002,
      name: "Das",
      salary: 5000,
      currency: "EUR",
    },
    {
      empId: 10003,
      name: "Gula",
      salary: 15000,
      currency: "EUR",
    },
    {
      empId: 10003,
      name: "samir",
      salary: 25000,
      currency: "EUR",
    },
  ],
  cities: [
    {
      cityName: "Mumbai",
      state: "Maharastra",
    },
    {
      cityName: "Cuttack",
      state: "Odisha",
    },
    {
      cityName: "Bhubaneswar",
      state: "Odisha",
    },
  ],
  gender: { M: "Male", F: "Female" },
};


console.log("Complex json=========================");
console.log(oComplexData);

console.log("Complex json stringfy=========================");

console.log(JSON.stringify(oComplexData));

console.log("Complex json parse=========================");

var strjson = JSON.stringify(oComplexData);
console.log(JSON.parse(strjson));