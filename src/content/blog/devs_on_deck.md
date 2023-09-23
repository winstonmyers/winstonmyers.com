Title: devs on deck
Modified: 2023-09-23 00:32
Slug: devs-on-deck
Keyword: webdev, linux, flatpak, pacman, tmux, vim, nerd-fonts, hack, arch, cyberdeck
Category: dotfiles
Summary: A short summary of how I got my steamdeck setup as a mobile dev environment.
Status: draft

I got the steamdeck several months back in preparation for the release of Diablo 4,
as my crappy dell laptop wasn't cutting it anymore. My cyberdeck dream seemed like
a potential reality, but life came up and I spent more time gaming than coding in
my free time. Until recently I barely scratched the surface on this things flexibility,
namely due to how little I know about Arch. While stuggling to install chrome,
I thought flatpaks might make things easier. But they were no where near supporting my
kind of development environment.

I thought I'd dabble with getting some emulators running to match my N64 and Dreamcast 
collection, but even that proved more annoying than I wanted to deal with - besides 
I had Diablo 4! So I recently decided that I would turn my steamdeck into my new 
portable dev environment and this bemoans my stuggles with pacman, flatpak, dot 
files, and ergonomic/portable hardware.

## dev env

This isn't an exhaustive list of all my plugins and configs, but a gist of my basic setup.

- [Firefox](https://www.mozilla.org/en-US/firefox/new/) - I used to be a huge Brave
proponent, but [this post on Hacker News](https://news.ycombinator.com/item?id=36735777) 
has made me tad more reticent.
  - [Vimium-FF](https://addons.mozilla.org/en-US/firefox/addon/vimium-ff) - Helps
  with keeping my fingers off the mouse while browsing the web with familiar keybindings.
  - [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) - 
  Super ad/tracking/cookie blocker
  - [KeePassXC-Browser](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/) - 
  Secure password storage.
- [alacritty](https://github.com/alacritty/alacritty) - I've used iTerm2 and WSL 
1 & 2, but have really liked alacritty for the short time I've been using it.
- [tmux](https://github.com/tmux/tmux/wiki) - tiling manager for terminal emulators
  - [tmux-plugins/tpm](https://github.com/tmux-plugins/tpm) - Helps manage all
  the other tmux plugins.
  - [odedlaz/tmux-onedark-theme](https://github.com/odedlaz/tmux-onedark-theme) - 
  My favorite theme.
  - [odedlaz/tmux-status-variables](https://github.com/odedlaz/tmux-status-variables) - 
  Simplifies displaying various variables in the tmux status line, like battery and memory usage.
  - [tmux-plugins/tmux-battery](https://github.com/tmux-plugins/tmux-battery) - 
  Helps  with displaying the battery status.
  - [tmux-plugins/tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect) - 
  Saves/restores tmux sessions and integrates with vim-obsession (described below).
  - [tmux-plugins/tmux-continuum](https://github.com/tmux-plugins/tmux-continuum) - 
  Continuously saves tmux sessions so that data isn't lost and you can easily
  restore you last session.
- [Vim](https://github.com/vim/vim) - text editor, IDE, and often terminal (where
I sometimes also open vim... yo dawg I heard you like vim...)
  - [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) - Language Server
  Protocol (LSP) client bringing VSCode extensions into vim.
  - [puremourning/vimspector](https://github.com/puremourning/vimspector) - Fantastic
  debugger for vim that works with a variety of languages.
  - [tpope/vim-fugitive](https://github.com/tpope/vim-fugitive) - Git plugin thats
  simply fantastic.
  - [tpope/vim-obsession](https://github.com/tpope/vim-obsession) - Simple session
  management for vim
  - [easymotion/vim-easymotion](https://github.com/easymotion/vim-easymotion) -
  Allows you to easily move to specific words.
  - [yuttie/comfortable-motion.vim](https://github.com/yuttie/comfortable-motion.vim) - 
  Fantastic scrolling extension, especially for large files.
  - [mrk21/yaml-vim](https://github.com/mrk21/yaml-vim) - Helps with getting "folds"
  (like collapsing/expanding a nested file) to work right for yaml files.
  - [mbbill/undotree](https://github.com/mbbill/undotree) - Comprehensive undo
  log.
  - [vim-airline/vim-airline](https://github.com/vim-airline/vim-airline) - Vim
  status line plugin that works great with the onedark theme.
  - [vim-airline/vim-airline-themes](https://github.com/vim-airline/vim-airline-themes) - 
  Allows more status line configuration.
  - [powerline/fonts](https://github.com/powerline/fonts) - Allows more complicated
  symbols from airline.
  - [joshdick/onedark.vim](https://github.com/joshdick/onedark.vim) - Matches really
  great with the tmux onedark theme.
- programming languages and tools - for leik... stuff...
  - bash & zsh - I rely on bash scripts because how common bash is, but I prefer
  using zsh for my daily driver shell.
  - nodejs & npm - These are mainly for coc.nvim and other LSP type functionality.
  I don't really work with JS too much anymore.
  - python3 - I like to keep version 10 around for experimentation, but will
  try to stick to miniconda or npx if I start working on an actual project.
    - boto3 - For working with AWS 
    - [miniconda3](https://docs.conda.io/projects/miniconda/en/latest/index.html) - A great python environment manager, though pyenv is more common.
    - [pelican](https://docs.getpelican.com/en/latest/quickstart.html) - A really great static site generator.This is how I created this website and blog, read more about that [here]({filename}blog/my_first_post.md).
  - ripgrep - I haven't been able to get this working on MacOS because I haven't
  learned rust or cargo yet (Hashicorp's `nomad` has been taking up a lot of time
  recently). This was already installed so I didn't have much to do.
  - [AWS CLI V2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) - 
  I mostly work with aws, they've got a great offering. Pacman
  wasn't much help here but I usually like to download and install the AWS CLI
  v2 directly from AWS: 
  ``` shell
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
  unzip awscliv2.zip
  sudo ./aws/install
  ```
  - jq - For processing json, usually aws cli responses. This was already
  installed so I didn't have much to do.

I used to be a big fan of Jupyter notebooks, but with my move towards vim, I'll
write code on one side of the screen and then select the code in vims VISUAL mode
and send it to the terminal.  Using coc.nvim as a Language Server Protocol client,
I can make use of many of the same (or similar) language-specific extensions that
provide intellisense/sytax-highlighting/formatting/etc. in VSCode.

Being able to easily rearrange various vim instances using tmux has been immensely
useful, allowing me to work from one vim window and then easily go and poke around
from another tmux panel. All without ever having to touch a mouse.  This combined
with the vimium browser extension makes it much easier to keep my hands off the mouse.

## the install from hell

I'm being dramatic, I just really didn't read any documentation on Arch and was
only lucky to stumble across a [reddit thread](https://www.reddit.com/r/SteamDeck/comments/t8al0i/install_arch_packages_on_your_steam_deck/) with excellent details about getting
a dev environment up and running.

### off to a bad start

First I tried to install chrome with a flatpak, as I'd heard these might be easier
to deal with than arch pacman package manager.  What took me a while to figure out
was that you have to add the remote flathub with the following:

``` shell
flatpak remote-add --if-not-exists flathub https://flathug.org/repo/flathub.flatpakrepo
flatpak modify-remote --enable flathub system
cd ~/.local/share/flatpak/repo/
wget https://flathub.org/repo/flathub.gpg
```

After that, I didn't want to even begin thinking about setting up emudeck and
finding all my old games as ROMs.

### pa(ni)cman

That was back when I first got the deck, around April/May.  Recently, I thought
I'd try installingfirefox with pacman, hoping that it would be easier to keep
up-to-date. First thing I learn about pacman is that you have to initialize its
keys with the following:

``` shell
sudo pacman-key --init
```

I thought this was all that was needed, instead of actually looking back at my
history to see the steps needed to get flatpak going (namely pulling down flathubs
GPG key). I was unable to install most of my favorite package, `tmux`, and even
simple packages like `nodejs` and `npm` seemed to be giving me a headache. So I
tried to build `tmux` from source, but even its dependencies (`libevent`,
`libutempter`, and `ncurses`) couldn't be downloaded to compile `tmux`. 
Attempts to install alacritty to replace the default terminal, kate, were equally
fruitless. Finally I came across the following [reddit thread](https://www.reddit.com/r/SteamDeck/comments/t8al0i/install_arch_packages_on_your_steam_deck/)
discussing first steps for setting up a steamdeck for pacman.  This was IMMENSELY
helpful, all I needed was:

``` shell
\# I'd already setup a password for the deck user
sudo btrfs property set -ts / ro false
sudo pacman-key --populate archlinux

\# Ran this again due to continued issues, and this seemed to fix it
sudo pacman-key --init
```

After that it was easy to install the `base-devel` package, which helped with the
majority of my install issues and I was quickly able to get tmux up and running.

### putting it all together

For sake of simplicity, here's a snippet of how I got up and running:

``` shell
\# Setup a password for the deck user

sudo btrfs property set -ts / ro false
sudo pacman-key --populate archlinux
sudo pacman-key --init
gpg --refresh-keys

sudo pacman -Syu
sudo pacman -S base-devel tmux nodejs npm alacritty 

\# I manually cloned and installed my favorite nerd-font, Hack
cd $HOME/git
mkdir ryanoasis
cd ryanoasis
git clone https://github.com/ryanoasis/nerd-fonts.git
cd nerd-fonts
./install.sh Hack
cd ../.. && rm -rf ryanoasis/nerd-fonts

\# Installing AWS CLI V2
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

\# Ripgrep and jq were already installed and so there was nothing I needed to do there.

\# Installing miniconda3 to manage python environments
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh

python -m pip install "pelican[markdown]"
```

I already have a bash script in my dotfiles repo that installs my favorite tmux
& vim plugins as well as coc.nvim extensions, but the initial setup of tmux & vim
has always required more tinkering than it's been worth to fully script out to
run across all Linux-like platforms, particularly macos. However, other items like
the nerd font could easily be added to my dotfile install process.

### dotfile code fixes and next steps

Getting things settled on the Steam Deck took only a few minor adjustments. 
There were a couple lessons-learned, including:

1. Need to create $HOME/.tmux directory, this stopped `<C-b>I` (Ctrl + b then
I, which installs plugins with tmux plugin manager) from actually running to
completion and the errors weren't printing to screen.
2. Need better way to handle colors so I can deploy dotfiles on machines that
don't support them, but let's be real colors rock!
3. Don't really think it's worthwhile to make my dotfiles work on systems without
colors due to the variety of systems I use this on,
iTerm2(darwin/zsh)/WSL2(ubuntu/bash)/alacritty(arch/bash).
4. Want to harden these dotfiles so I can make them publicly accessible with
heavy comments.

The toughest part about getting a new system up and running is always making git
run as expected and right now it's using the default deck user info, so I'd
really like to get that fixed.  It would be nice to securely automate my github
credential provisioning.

## hardware

So how do you turn this tiny gaming device into a delightfully portable dev machine?
A couple pieces of gear really transform this into a dope clicky-clack machine.

- asus zenscreen mb1aasksd - Great screen for the price, came with a decent soft
case that doubles as a stand, but doesn't have the best viewing angle.
- asus portable monitor stand - Another goal for my dev workstations has become
ergonomics and I'm hoping this will help mitigate aches and pains of being at a
computer way too much.
- slicemk ergodox wireless keyboard - This thing deserves it's own article, it's
my favorite keyboard ever and feels so much more approachable than my ergodox ez.
My wrists thank me for using these split keyboards, but man does it take a while
to get used to it again. Theres also a great case that you can get, great for
storing all the other odds and ends needed for this to work.
- anker vertical mouse - Another ergonomic improvement.  I've used the apple
magicpad in the past and wasn't a huge fan. I'd seen some custom keyboards with
track-balls built into both halves, but none that were also wireless.
- anker wireless battery - This is to keep it simple on the go when I may not
have a power outlet at hand. I can easily throw up a wifi hotspot and get cracking
away on an idea, especially when combined with the last item.
- dock ??? - Since the asus portable screen sends both power and video signals
over usb-c, I've had to be careful as this is not a terribly common connection
for usb-c hubs, . Here's some more details if you're interested.

Here are a couple pictures of the whole rig setup for use:

### out in the wild

I took this setup to a D&D session recently and while it was really comfortable,
the Steam Deck kept powering down too quickly and eventually the Asus screen
stopped working. A quick reboot would have likely fixed the issue, but I didn't
want to invite more complexity than I already had.

## summary

Linux is so great to work with and valve has put a lot of fine effort towards
open source projects like proton.  I never bought it really thinking I'd end up with
anything more than something to play games online with friends, but now I'm
finding myself using it more and more.  Maybe arch is winning me over, we shall see!  

I've been reading the book [Debugging: The 9 Indispendible Rules for Finding Even the Most Elusive Software and Hardware Problems by David J. Agans](https://debuggingrules.com/) 
and the first rule is "Understand the System" aka RTFM.  If I'd first sat down 
to get even a cursory understanding of how arch and pacman work, I would have
likely saved myself a lot of headaches.  But you live and you learn.

Until next time, ya'll be well!
