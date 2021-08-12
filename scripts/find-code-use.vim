source ~/.config/nvim/init.vim

" You can point to another code base by changing the path
command -nargs=1 FindCodeUse :vimgrep <args> ~/youtube-clone/src/**/*.js

FindCodeUse /$CODE/

copen
