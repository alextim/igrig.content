# IGRIG.CONTENT

Ctrl + Shift + B

```bash
@ECHO OFF
SETLOCAL ENABLEEXTENSIONS
SET commit_comment=
SET /p commit_comment=Input your comment for commit:
IF NOT DEFINED commit_comment (
  SET commit_comment=content update
  ECHO Default comment will be used for this commit
)

git status
git add .
git status
git commit -m "%commit_comment%"
git push
```