
@echo off
set currentDir=%cd%
set frontDir=%currentDir%\front
set backendDir=%currentDir%\backend

echo front, backend�̕s�v�t�@�C�����폜���܂����H (y/n)
set /p confirm=�m�F:
if /i "%confirm%"=="y" (
    cd %frontDir%
    echo front .nuxt�폜��...
    echo y | rmdir /s .nuxt
    echo.
    echo front node_modules�폜��...
    echo y | rmdir /s node_modules
    echo.
    echo front���̕s�v�t�@�C���̍폜���������܂����B
    
    cd %backendDir%
    echo backend .nuxt�폜��...
    echo y | rmdir /s .nuxt
    echo.
    echo backend node_modules�폜��...
    echo y | rmdir /s node_modules
    echo.
    echo backend���̕s�v�t�@�C���̍폜���������܂����B
) else (
    echo �폜���L�����Z������܂����B
    pause
    exit
)

echo front, backend�ɕK�v�t�@�C�����C���X�g�[�����܂����H (y/n)
set /p confirm=�m�F:
if /i "%confirm%"=="y" (
    cd %frontDir%
    echo front�ɕK�v�t�@�C�����C���X�g�[�����܂��B
    echo front .package�ǂݍ��ݒ�...
    echo.
    npm ci
    echo front�ɕK�v�t�@�C�����C���X�g�[���������܂����B
    
    cd %backendDir%
    echo backend�ɕK�v�t�@�C�����C���X�g�[�����܂��B
    echo backend .package�ǂݍ��ݒ�...
    echo.
    npm ci
    echo backend�ɕK�v�t�@�C�����C���X�g�[���������܂����B
    pause
    exit

) else (
    echo �C���X�g�[�����L�����Z������܂����B
    pause
    exit
)
