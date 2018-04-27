#!/bin/sh

files=src/Pages/Book/markdown/*.md
for f in $files
do
	filename="${f%.*}"
	filename="$(basename $filename)"
	`pandoc $f -t html5 --mathjax -o src/Pages/Book/html/$filename.html`
done
