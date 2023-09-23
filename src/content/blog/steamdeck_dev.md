Title: devs on deck!
Author: Winston Myers
Date: 2023-09-23 00:32
Modified: 2023-09-23 00:32
Slug: devs-on-deck
Keyword: webdev, linux, flatpak, pacman, tmux, vim, nerd-fonts, hack, arch, cyberdeck
Category: dotfiles
Summary: A short summary of how I got my steamdeck setup as a mobile dev environment.

I got the steamdeck several months back in preparation for the release of Diablo 4,
as my crappy dell laptop wasn't cutting it anymore. My cyberpunk dream seemed like
a potential reality, but life came up and I spent more time gaming than coding in
my free time. Since then I barely scratched the surface on the things flexibility,
namely due to how little I know about Arch. Then I thought flatpaks would help,
but they were no where near the point of being viable to support my kind of
development environment.

Flatpaks were my saving grace and allowed me to originally install chrome to
originally get off the ground.  At the time I thought firefox must not have a
well maintained repo, but oh was I wrong! I thought I'd dabble with getting some
emulators running to match my old N64 and Dreamcast collection, but even that
proved more annoying than I wanted to deal with - besides I had Diablo 4!

So this will bemoan my stuggles with pacman, flatpak, dot files, and ergonomic/portable
hardware.

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
over usb-c, I've had to be careful about where to

## dev env

My basic setup is:

- firefox - I used to be a huge Brave propnent, but [recent news about them]() has made me tad more reticent.
- alacritty - I've used iTerm2 and WSL 1 & 2, but have really liked alacritty for
the short time I've been using it.
- tmux - tiling manager for
  - tmux plugin manager # TODO - need to fix this
  - odedlaz/tmux-onedark-theme
  - odedlaz/tmux-status-variables
  - tmux-plugins/tmux-battery
  - tmux-plugins/tmux-resurrect
  - tmux-plugins/tmux-continuum
- vim - text editor IDE and often terminal
    - 
- programming languages and tools - for leik... stuff...
  - python3 & nodejs - I like to keep these around for experimentation, but will
try to stick to miniconda or npx if I start working on a project
  - rust - FINALLY GOT THIS INSTALLED thanks to the alacritty install. Have been
struggling to get ripgrep working on my mac and haven't had a need to learn cargo
(nomad has been taking up my time lately).
  - aws cli and boto3 - I mostly work with aws, they've got a great offering.
  - jq - For processing json, usually aws cli responses.

## the install from hell

0. couldn't install ANYTHING
  - tmux, alacritty, tools to compile tmux, etc.
1. pacman and flatpack initialization
  - reddit post
  - Likely need to tie this into a cron job or something that will produce an
  email report or something.  Might setup a discord server for managing all this.
2. github key setup & keychain tool
  - realized I needed a better way to secure my dotfiles and where the important
credentials may be found
3. fixes to repo
  1. need to create $HOME/.tmux directory, this stopped <C-b>I from actually
  running to completion and the errors weren't printing to screen.
  2. Need better way to handle colors so I can deploy dotfiles on machines that
  don't support them, but let's be real colors rock!
  3. Don't really think it's worthwhile due to the variety of systems I use this on, iTerm2(darwin/zsh)/WSL2(ubuntu/bash)/alacritty(arch/bash)
  4. Want to harden these dotfiles so I can make them publicly accessible with heavy comments


## summary

Linux is so great to work with and valve has put a lot of fine effort towards
open source projects like proton.  I never bought it really thinking I'd end up with
anything more than something to play games online with friends, but now I'm
finding myself using it more and more.  Maybe arch is winning me over, we shall see!  

Until next time, ya'll be well!
