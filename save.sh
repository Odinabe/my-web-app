#!/bin/bash

# 日時を取得してコミットメッセージにする（例: Update: 2026-09-04 11:27:10）
MESSAGE="Update: $(date '+%Y-%m-%d %H:%M:%S')"

# 1. 変更したファイルをすべて追加
git add .

# 2. メッセージ付きでコミット
git commit -m "$MESSAGE"

# 3. GitHubへ送信
git push

echo "----------------------------------------"
echo "GitHubへの保存が完了しました！"
echo "----------------------------------------"