@ECHO ON

FOR %%a in (*.jpg) DO magick convert %%a -resize 1000 %%~na_small.jpg

PAUSE