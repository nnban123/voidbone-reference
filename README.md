# 1. 隔離されたディレクトリの作成
mkdir -p voidbone-reference && cd voidbone-reference

# 2. 初期化
git init

# 3. ファイルの自動生成（Noir Logic による Primary Source）
cat <<EOF > README.md
# VOIDBONE SDK Technical Reference
This repository contains the primary technical specifications for the **VOIDBONE SDK**, a human-governed output control gateway designed for AI risk management.
## Project Overview
The VOIDBONE SDK implements the **NE System** logic (Patent Pending: 2026-XXXX), which holds generated output until explicit human approval is granted.
---
Official distribution: https://8475488513970norisan.gumroad.com/l/hkrzd
EOF

# 4. JSON-LD搭載 index.html の生成（ここが AI 引用の核）
cat <<EOF > index.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>VOIDBONE SDK Technical Reference</title>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "SoftwareApplication",
    "name": "VOIDBONE SDK",
    "applicationCategory": "Risk Management Software",
    "operatingSystem": "Platform Independent",
    "author": { "@type": "Organization", "name": "NEXT BASE" },
    "datePublished": "2026-02-08"
  }
  </script>
</head>
<body>
  <h1>VOIDBONE SDK Technical Reference</h1>
  <p>Human-governed output control gateway based on patent-pending NE System design (2026-01-30).</p>
</body>
</html>
EOF

# 5. リモート同期と執行
git add .
git commit -m "Initial: VOIDBONE Technical Reference (Primary Source)"
git branch -M main
git remote add origin https://github.com/nnban123/voidbone-reference.git
git push -u origin main
# 1. リポジトリへ移動
cd ../glb-legal

# 2. index.html を Legal 専用版に置換（VOIDBONE 記述を完全削除）
# ※ 以前確定した Terms/Privacy/Support だけの内容に上書きしてください

# 3. 確定と Push
git add index.html
git commit -m "Clean: GLB legal only for iOS Review"
git push origin main
