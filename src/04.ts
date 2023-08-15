/**
 * 描述
 * •输入一个字符串，请按长度为8拆分每个输入字符串并进行输出；
 *
 * •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
 * 输入描述：
 * 连续输入字符串(每个字符串长度小于等于100)
 *
 * 输出描述：
 * 依次输出所有分割后的长度为8的新字符串
 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line: string) {
  let result = "";
  let index = 0;
  for (let i = 0; i < line.length; i++) {
    result += line[i];
    index++;
    if (index === 8) {
      result += "\n";
      index = 0;
    }
  }
  if (index && index < 8) {
    for (let i = 0; i < 8 - index; i++) {
      result += "0";
    }
  }

  console.log(result);
});

export = {};
