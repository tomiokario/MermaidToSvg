# Mermaid to SVG/PDF Converter

このプログラムは、Mermaid の記述ファイル（.mmd）を SVG や PDF 形式などに変換します。

## 必要なもの

- **Node.js** (v14 以降を推奨)
- **Mermaid CLI**  
  Mermaid CLI は Mermaid 記述ファイルを画像に変換するためのツールです。

## インストール手順

1. [Node.js の公式サイト](https://nodejs.org/)から Node.js をインストールしてください。
2. Mermaid CLI をグローバルインストールします:

   ```bash
   npm install -g @mermaid-js/mermaid-cli
   ```

## 使い方

1. 変換したい Mermaid の記述ファイル（例: `diagram.mmd`）を用意してください。

2. ターミナルで以下のコマンドを実行し、ベクター画像を生成します:

   ```bash
   node convert.js diagram.mmd diagram.svg
   ```

   - `diagram.mmd` : 入力の Mermaid 記述ファイル
   - `diagram.svg` : 出力される SVG ファイル

## PDF や他の形式への変換

Mermaid CLI は、出力ファイルの拡張子に応じて出力形式を自動的に判断します。

### PDF 形式で出力するには:

```bash
node convert.js diagram.mmd diagram.pdf
```

### PNG 形式で出力するには（ラスター形式）:

```bash
node convert.js diagram.mmd diagram.png
```
