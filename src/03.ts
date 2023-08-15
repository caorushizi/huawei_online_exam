/**
 * 描述
 * 明明生成了 N个1到500之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。
 * 数据范围： 1 ≤ N ≤ 1000，输入的数字大小满足 1 ≤ val ≤ 500
 *
 * 输入描述：
 * 第一行先输入随机整数的个数 N 。 接下来的 N 行每行输入一个整数，代表明明生成的随机数。 具体格式可以参考下面的"示例"。
 * 输出描述：
 * 输出多行，表示输入数据处理后的结果
 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let index = 0;
const result: number[] = [];

rl.on("line", function (line: string) {
  if (!n) {
    n = Number(line);
  } else {
    index++;
    const cur = Number(line);

    for (let i = 0; i < result.length + 1; i++) {
      if (cur === result[i]) {
        break;
      }
      if (cur < result[i] || i === result.length) {
        result.splice(i, 0, cur);
        break;
      }
    }

    if (index === n) {
      console.log(result.join("\n"));
    }
  }
});

export = {};
