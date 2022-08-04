const user = [
    {fname: 'foram', lname: 'parmar', age: 22},
    {fname: 'nishi', lname: 'parmar', age: 25},
    {fname: 'snehal', lname: 'mistry', age: 22},
    {fname: 'nimisha', lname: 'dhanavde', age: 30},
];

//output: ['foram parmar' , 'nishi parmar' ...]
const output = user.map((x) => x.fname +" "+x.lname);
console.log(output)

//output: {22:2, 25:1, 30:1}
const output1 = user.reduce((acc,curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(output1);

//print fname of the people, whose age is less than 26
//chaining the function
const output2 = user.filter((x)=> x.age < 26).map((x)=>x.fname+' : '+x.age);
console.log(output2);

const output3 = user.reduce((acc,curr) => {
    if(curr.age < 26){
        acc.push(curr.fname +" : "+curr.age);
    }
    return acc
},[]);
console.log(output3);