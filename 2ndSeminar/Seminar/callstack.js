function wakeUp(){
   wash();
}
function wash(){
    breakfast();
}
function breakfast(){
    throw new Error('콜스택에서 에러 찾기~!');
}

wakeUp();