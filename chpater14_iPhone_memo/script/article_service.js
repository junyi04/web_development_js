let boardInputDatas = {
  id: 0,
  title: "",
  content: "",
  writer: "",
}

function setInputsEvent() {
  const titleInput = document.querySelector('.main-article > input:nth-of-type(1)');
  const contentInput = document.querySelector('.main-article > textarea');
  const writerInput = document.querySelector('.main-article > input:nth-of-type(2)');
  titleInput.onKeyup = handleBoardInputOnChange;
  contentInput.onKeyup = handleBoardInputOnChange;
  writerInput.onKeyup = handleBoardInputOnChange;
}

function setButtonEvent() {
  const submitButton = document.querySelector('.writer-submit-button');
  submitButton.onclick = handleSubmitOnClick;
}

function handleSubmitOnClick() {
  saveBoard();
  clear();
}

function handleBoardInputOnChange(e) {
  boardInputDatas = {
    ...boardInputDatas,
    [e.target.name]: e.target.value,
  };
}

function saveBoard() {
  let boardInputDatas = !!localStorage.getItem('boardDatas')
  ? JSON.parse(localStorage.getItem('boardDatas'))
  : [];

  if (boardInputDatas.length > 0) {
    boardInputDatas.id = boardDatas[boardDatas.length - 1].id + 1;  // index 개수와 index 넘버의 차이로 이렇게 작성했음
  }

  boardDatas = [
    ...boardDatas,
    boardInputDatas,
  ]

  localStorage.setItem('boardDatas', JSON.stringify(boardDatas));

  alert('게시글 작성 완료❤️')
  location.href = './list.html';
}

function clear() {
  const titleInput = document.querySelector('.main-article > input:nth-of-type(1)');
  const contentInput = document.querySelector('.main-article > textarea');
  const writerInput = document.querySelector('.main-article > input:nth-of-type(2)');
  const inputs = [ titleInput, contentInput, writerInput ];
  inputs.forEach(input => input.value = "");

  boardInputDatas = {
    title: "",
    content: "",
    writer: "",
  };
}

setInputsEvent();
setButtonEvent();

// saveBoard(); -> 여기부터 정의하겠음
// clear();