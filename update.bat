@echo off
set /p a=更新原因:
echo %a%
del /S /F /Q docs
RMDIR /S /Q  docs
del /S /F /Q public
RMDIR /S /Q  public
hugo
ren public docs
copy CNAME docs
git config --global core.autocrlf false
git pull
git add .
git commit -m %a%
git push
pause>nul