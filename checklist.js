const myObject = {
    anotherObject: {
        name:'Mahmudul ',
        age:20,
        location:'Dhaka',
        education:{
            honurs:'Uttara University',
            fazil: `Ta'mirul millat kaiml Madrash, Tongi`
        },
        result:{
            ssc:4,
            hsc:4
        }
    },
    friends:['Arif', 'Rakib', 'Roton', 'Abul', 'Motin'],
    isbig: function (age){
        const myAge = this.anotherObject.age;
        const compareAge = myAge - age;
        if(compareAge < 0){
            return 'you are elder'
        }else{
            return 'you are youngest'
        }
    },
    drink: false
}

// console.log(myObject.drink)
myObject.anotherObject.education = {ssc: 'SIKM'}
const myEducation = `Arrays second element is ${myObject.friends[1] }`;
// console.log(myEducation)

const unknownFunction1 = () =>{
    return 89;
}

const unknownFunction2 = (num) =>{
    return num * 17;
}

const unknownFunction3 = (num1,num2) =>{
    return (num1 + num2) / 2;
}

const unknownFunction4 = (num1, num2) => {
    const num = num1+7;
    const num3 = num2+7;
    const total = num + num3;
    return total;
}

// console.log(unknownFunction4(11,11))


const numbers = [10,20, 30, 40, 50, 60, 70, 80];

const makeDividate = num => num / 7;

const mapNumber = numbers.map(num => num*2);
// console.log(mapNumber)


// Destrctureing 

const fish = {
    mname:'hilsha',
    address:'Padma',
    time:'winter',
    duration:3
}

const  {mname} = fish;


// console.log(mname);

const [first, second ] = ['tahmid',50];

console.log(second)