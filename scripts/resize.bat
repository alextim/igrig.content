@ECHO ON

for %%f in (*.jpg) do (magick convert "%%~f" -resize 1000 "%%~nf.jpg")
PAUSE