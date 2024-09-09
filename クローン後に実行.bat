
@echo off
set currentDir=%cd%
set frontDir=%currentDir%\front
set backendDir=%currentDir%\backend

echo front, backendの不要ファイルを削除しますか？ (y/n)
set /p confirm=確認:
if /i "%confirm%"=="y" (
    cd %frontDir%
    echo front .nuxt削除中...
    echo y | rmdir /s .nuxt
    echo.
    echo front node_modules削除中...
    echo y | rmdir /s node_modules
    echo.
    echo front側の不要ファイルの削除が完了しました。
    
    cd %backendDir%
    echo backend .nuxt削除中...
    echo y | rmdir /s .nuxt
    echo.
    echo backend node_modules削除中...
    echo y | rmdir /s node_modules
    echo.
    echo backend側の不要ファイルの削除が完了しました。
) else (
    echo 削除がキャンセルされました。
    pause
    exit
)

echo front, backendに必要ファイルをインストールしますか？ (y/n)
set /p confirm=確認:
if /i "%confirm%"=="y" (
    cd %frontDir%
    echo frontに必要ファイルをインストールします。
    echo front .package読み込み中...
    echo.
    npm ci
    echo frontに必要ファイルをインストール完了しました。
    
    cd %backendDir%
    echo backendに必要ファイルをインストールします。
    echo backend .package読み込み中...
    echo.
    npm ci
    echo backendに必要ファイルをインストール完了しました。
    pause
    exit

) else (
    echo インストールがキャンセルされました。
    pause
    exit
)
