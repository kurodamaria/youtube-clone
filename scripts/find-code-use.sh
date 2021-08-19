#!/usr/bin/bash

TEMP_CONFIG=$(mktemp find-code-use-XXXXXX.rc)

cat ./find-code-use.vim | sed "s/\$CODE/$1/" > "$TEMP_CONFIG"

nvim -u "$TEMP_CONFIG"

rm "$TEMP_CONFIG"
