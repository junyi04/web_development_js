// if (true) console.log("사실");
// if (false) console.log("거짓");

// 이상의 코드의 경우 거의 사용되지 않음.
// true -> false로 바꿀 방법이 없기 때문

// let open = true;

// if (open) console.log("안녕하세요.");

// open = false;

// if (open) {
//   console.log("찾아주셔서 감사합니다. 금일은 휴일입니다. 😒");
// };

// 이상의 코드는 boolean 값을 변수에 대입해서 분기를 조절할 수 있음. 

// true를 반환하는 코드 혹은 false를 반환하는 코드
// let n = 1;
// if (n > 0) {  // true를 반환하는 코드 혹은 false를 반환하는 코드 : 조건식
//   console.log("자연수입니다.");
// };

// open = !open;

// if(open) {
//   console.log("안녕하세요.");
//   console.log("자리로 안내하겠습니다.");
// } else {
//   console.log("영업 종료되었습니다. 죄송합니다.");
// }

// if절 내의 조건식이 참이면 else절은 실행되지 않음
// else 뒤에는 조건식을 명시하지 않음.

// const a = 1;
// const b = 2;

// if (a < b) {
//   console.log("a가 b보다 작다.");
// } else if (a > b) {
//   console.log("a가 b보다 크다.");
// }
// else {
//   console.log("a와 b가 같다.")
// }


// if문과 switch문으로 동일한 구조 코드 작성

const yoot = "도";

if (yoot === "도") {
  console.log("1칸 전진");
} else if (yoot === "계") {
  console.log("2칸 전진");
} else if (yoot === "걸") {
  console.log("3칸 전진");
} else if (yoot === "걸") {
  console.log("3칸 전진");
} else {
  console.log("5칸 전진");
}

switch (yoot) {
  case "도": 
    console.log("1칸 전진");
    break;
  case "계": 
    console.log("2칸 전진");
    break;
  case "걸": 
    console.log("3칸 전진");
    break;
  case "윷": 
    console.log("4칸 전진");
    break;
  case "모": 
    console.log("5칸 전진");
    break;
}

/*
  switch문의 ()내에는 str, number도 오는 것이 다능

  case "도": -> 가능
  case 1: -> 가능

  break; 의 의미도 중요.

  switch문에서 case는 순서대로 실행되면서 검증을 함.
  그래서 break;가 없으면 그 다음 case까지 실행이 됨.
*/