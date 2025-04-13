function findBracketsInArray(bracket, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] === bracket || bracketsConfig[i][1] === bracket) {
          return i;
      }
  }
  return -1;
}

function isOpenBracket(bracket, brackets) {
  return (brackets[0] === bracket);
}

function areBracketsEqual (brackets) {
  return brackets[0] === brackets[1];
}

function isLastBracketAppropriate (stack, bracketsIndex) {
  return stack.at(-1) === bracketsIndex;
}

function isStackEmpty (stack) {
  return stack.length === 0;
}

module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  for (let i = 0; i < str.length; i++) {
      let bracketIndex = findBracketsInArray(str[i], bracketsConfig);
      if (bracketIndex !== -1) {
          if (areBracketsEqual(bracketsConfig[bracketIndex])){
              if (isLastBracketAppropriate(stack, bracketIndex)) {
                  stack.pop();
              } else {
                  stack.push(bracketIndex);
              }
          } else {
              if (isOpenBracket(str[i], bracketsConfig[bracketIndex])) {
                  stack.push(bracketIndex);
              } else {
                  if ((isStackEmpty(stack)) || (!isLastBracketAppropriate(stack, bracketIndex))) {
                      return false;
                  } else {
                      stack.pop();
                  }
              }
          }
      }
  }
  return stack.length === 0;
}
