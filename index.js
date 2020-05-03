console.log('I am working I am JS')

//TypeError: Assignment to constant variable.
//const a = 221;
//let changable, const unchangable ----- use const as a default
let a = 221;
let b = a-5;
a = 4;
console.log(b, a); //console.log == print

const what = "Yeongsang";
console.log(what);

const t_f = true;
console.log(t_f);

const num = 10;
console.log(num);

const float = 5.5555;
console.log(float);

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

const YSinfo = {
    name : "yeongsang",
    age : 24,
    gender : "MALE",
    interest : ["computer", "IT", "English"],
    food : [{ name : "ramen", fat: true}, { name : "coffee", fat : false}],
}

YSinfo.age = 23;

console.log(YSinfo);