// const person01 = {
//   name: "김철수",
//   age: 25,
//   address: "부산광역시 연제구",
//   married: false
// };

// const myArray = [true, 3.14, "Hello", person01];

// console.log(myArray, myArray.length);
// myArray.length -> java 기준 field에 해당 -> () 없음

// console.log(
//   myArray[0],
//   myArray[1],
//   myArray[2],
//   myArray[3]
// )

/*
  배열의 내무에 있는 각 element들의 자료형을 감안하는게 중요.

  Java를 배운 우리는 배열 선언할 때 int arr[] 형태로 선언하다보니까 element들의 자료형이 일치한다고 생각하는 경우가 너무 많음.

  그런데 Javascript의 경우 각 element마다 고유의 자료형을 지닐 수 있기 때문에, 하나의 배열 내에서도 다양한 방식의 데이터 조작이 가능.
*/

// myArray[1] *= 10;

// console.log(myArray[1]);

// myArray.push(123);

// console.log(myArray);

// const popped1 = myArray.pop();  // 마지막 요소 삭제한 후에 그 결과값을 popped1 상수에 대입

// console.log(popped1, myArray);

// console.log(popped1);   // 123
// console.log(myArray); 


// 객체와 배열의 중첩 사용 관련 코드

const person02 = {
  name: "김일",
  age: 23,
  languages: ["Korean", "English", "French"],
  education: {
    school: "백제대",
    major: ["컴퓨터공학", "영어교육"],
    graduated: true,
  },
};

console.log(person02.languages[2]);

console.log(person02.education.graduated);