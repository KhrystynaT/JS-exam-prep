function inSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "first";
      break;
    case 2:
      answer = "second";
      break;
    case 3:
      answer = "third";
      break;
    default:
      answer = "other";
      break;
  }
  return answer;
}
function multipleSwitch(val) {
  var reply = " ";
  switch (val) {
    case 1:
    case 2:
    case 3:
      reply = "fast";
      break;
    case 4:
    case 5:
    case 6:
      reply = "slow";
      break;
  }
  return reply;
}
