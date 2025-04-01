// convert.js
// このスクリプトは、mermaid-cli (mmdc) を利用して Mermaid の .mmd ファイルを SVG に変換します。

const { exec } = require('child_process');
const fs = require('fs');

if (process.argv.length < 4) {
  console.error("Usage: node convert.js input.mmd output.svg");
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// 入力ファイルの存在を確認
if (!fs.existsSync(inputFile)) {
  console.error(`Error: ${inputFile} が見つかりません。`);
  process.exit(1);
}

// Mermaid CLI を利用して変換
const command = `mmdc -i ${inputFile} -o ${outputFile}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`変換中にエラーが発生しました: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`SVG の生成に成功しました: ${outputFile}`);
});
