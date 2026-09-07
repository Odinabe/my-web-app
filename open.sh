#!/bin/bash

echo "========================================"
echo " 1: 開発サーバーを起動してWebアプリを開く"
echo " 2: GitHubのリポジトリページを開く"
echo "========================================"
read -p "番号を入力してください (1 or 2): " CHOICE

if [ "$CHOICE" = "1" ]; then
    echo "開発サーバーを起動しています..."
    # サーバーがすでに動いているか確認し、動いていなければ裏で起動
    if ! pgrep -f "vite" > /dev/null; then
        nohup npm run dev -- --host > /dev/null 2>&1 &
        sleep 2
    fi

    echo "ポート5173を公開設定にしています..."
    gh codespace ports visibility 5173:public -c $CODESPACE_NAME > /dev/null 2>&1

    URL="https://${CODESPACE_NAME}-5173.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"
    
    echo "----------------------------------------"
    echo "開発サーバーが起動しました！"
    echo "以下のURLをクリックして開いてください:"
    echo "$URL"
    echo "----------------------------------------"

elif [ "$CHOICE" = "2" ]; then
    echo "GitHubページを開きます..."
    gh browse
else
    echo "キャンセルしました。"
fi