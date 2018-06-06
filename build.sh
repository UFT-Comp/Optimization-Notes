#!/bin/sh

git clone https://github.com/matheuspf/js_nlp cpp/js_nlp --recursive --shallow-submodules
git submodule init
git submodule sync --recursive
git submodule foreach --recursive "(git checkout master; git pull)"