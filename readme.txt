h1. install typescript server
npm install -g typescript typescript-language-server
h1. clone nvim configuration
git clone https://github.com/neovim/nvim-lspconfig ~/.config/nvim/pack/nvim/start/nvim-lspconfig

h1. Add the following lines to the ~/.config/nvim/init.lua file
-- set language to English
vim.cmd("language en_US")
-- load tsserver for typescript auto-completion
requirelspconfig.tsserver.setup {}

h1. set nvim as vi
set alias vi="nvim $@" in .zshrc

