---
displayOrder: 3
title: Switching from Windows to Linux
updated: July 1, 2022
banner: /assets/blog_posts/windows_to_linux/cover_windows_to_linux.jpeg
layout: layouts/blog_post.html
---

## Introduction

Around the summer of 2020, I started experimenting with Linux to see if it could replace Windows as my daily driver operating system. I had a little bit of experience with [Red Hat Enterprise Linux](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) and [Ubuntu](https://ubuntu.com) through my Computer Science course work, but I had never really used it as my daily driver desktop / laptop operating system. I really wanted to see if it could handle development, general productivity, and gaming.

### Development

Development is definitely where Linux shines because of its superior package management. For example, Ubuntu (and its derivatives) use the `apt` package manager which allows you to easily install most development packages like Python, gcc, Git, etc. On Windows, you have to go to a website, click on a download link, run an executable, and walk through the steps in an installer. On Linux, it is as simple as a couple terminal commands. There's a reason even Microsoft felt it needed to improve the developer experience on Windows via the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

### Productivity

General productivity is no different on Linux than Windows, other than the lack of Microsoft Office and some proprietary software like Adobe's products. This wasn't a big deal for me because there are plenty of free and open-source alternatives as well as web-based options if I ever needed to write documents, create presentations, edit pictures, etc. If you rely on software that only works on Windows for daily productivity work, you might want to look into free and open-source alternatives before switching to Linux.

### Gaming

Gaming was really the main concern I had when thinking about moving away from Windows. Luckily, there has been a lot of progress on this front in recent years. Per [ProtonDB](https://www.protondb.com):

> "Proton is a new tool released by Valve Software that has been integrated with Steam Play to make playing Windows games on Linux as simple as hitting the Play button within Steam. Underneath the hood, Proton comprises other popular tools like Wine and DXVK among others that a gamer would otherwise have to install and maintain themselves. This greatly eases the burden for users to switch to Linux without having to learn the underlying systems or losing access to a large part of their library of games. Proton is still in its infancy so support is inconsistent, but regularly improving."

Looking at ProtonDB, a lot of the games I play (mostly single-player) have gold or above ratings, meaning they generally work by just pressing the play button, possibly with a few tweaks.  After trying this out myself, I have come to the same conclusion.  Gaming on Linux is as good as it has ever been and will only get better, especially after the launch of the SteamOS 3.0 powered [Steam Deck](https://store.steampowered.com/steamdeck) from Valve.

If you play a lot of online multiplayer games, you may need to wait. Not all anti-cheat software currently works through Proton. [Are We Anti-Cheat Yet?](https://areweanticheatyet.com) provides "a comprehensive and crowd-sourced list of games using anti-cheats and their compatibility with GNU/Linux or Wine/Proton". [Apex Legends](https://www.ea.com/games/apex-legends) is one notable example that enabled Linux support for Easy Anti-Cheat shortly after the launch of the Steam Deck.

<hr />

## Distro Hopping

After trying out a bunch of distros like [Ubuntu](https://ubuntu.com), [Pop!_OS](https://pop.system76.com), and [Fedora](https://getfedora.org), I eventually landed on [Arch Linux](https://archlinux.org). As someone who likes to tinker with their computer a lot, Arch felt like the best option because I could literally build my OS from the ground up. I essentially have complete control over which packages get installed on my system. This means there is a steep learning curve and things can break if you are not careful. If you can get over the initial difficulties, you will find an amazing Linux desktop experience. The main reasons I decided on Arch are:

- **Rolling Release**: I don't have to re-install my OS every 6 months. My system and the kernel get updated through a simple package manager command.
- **Package Management**: Pacman and AUR helpers (e.g. [paru](https://github.com/Morganamilo/paru)) are by far the best package management solution I have seen in Linux. Pretty much any piece of software you might want to use is available in either the [main Arch repos](https://archlinux.org/packages/) or the [AUR](https://aur.archlinux.org). I wanted my packages to be up to date without relying on universal package formats like [snap](https://snapcraft.io), [flatpak](https://flathub.org/en), or [AppImage](https://appimage.org). While these universal package formats are great in that they can run on any Linux distro, they don't integrate into the system as well as I would like. AppImages have to be updated manually and don't integrate well with the desktop experience by default. Flatpaks are sandboxed applications, which means they require manual intervention to access certain parts of the OS. The main issue I found here was with theming. For lots of open source applications, they may not have a snap, flatpak, or AppImage package, but they almost always have an AUR package. This means it is extremely rare to have to manually install any application or program on my system.
- **ArchWiki**: The [ArchWiki](https://wiki.archlinux.org/) is by far the best source of linux documentation I have found on the internet. It has clear and well written information on pretty much any topic you may be interested in and any issue you may encounter. On other distros, you generally have to resolve issues yourself or search for solutions on random message boards without really understanding what the different components of your OS do.  By reading the ArchWiki, I feel like I have gained a much better understanding of how my computer works and how to approach resolving any issues I may have.

After running Arch on my gaming desktop and ultrabook laptop for around a year, I decided to buy a Linux gaming laptop. I wanted to have one system that I could get work done and play games on. After doing some research, I landed on the [System76 Oryx Pro 7](https://system76.com/laptops) because it is made by a U.S. based company with excellent customer service and has first-class Linux support. System76 also makes Pop!_OS, which I tried for a couple of weeks, but I just had to go back to Arch for the reasons mentioned above. Luckily, the ArchWiki has a [page for the System76 Oryx Pro](https://wiki.archlinux.org/title/System76_Oryx_Pro). By following the suggestions there, I was able to resolve issues like the audio not working, graphics switching, suspend/hibernate, etc.

<hr />

## Desktop Environments

While I was in the process of switching between Linux distros, I was also switching between desktop environments. I was most familiar with [GNOME](https://www.gnome.org) from Ubuntu and Red Hat Enterprise Linux (RHEL), but it felt kind of slow and lacked customizability. This is when I discovered [KDE Plasma](https://kde.org). Coming from Windows, I was much more comfortable with the look and feel of KDE Plasma. Additionally, it has many (perhaps too many) customizability options. After using this for a while, I eventually felt that I wanted something more minimal that I could tweak exactly to my liking.

<hr />

## Window Managers

This is when I learned about window managers from YouTubers like [DistroTube](https://www.youtube.com/channel/UCVls1GmFKf6WlTraIb_IaJg). Desktop environments are generally a combination of a window manager and a bunch of utility programs and pre-installed apps. A standalone window manager just controls where windows show up on your screen and the decorations that appear around them. The most suggested window manager for beginners is generally [i3](https://i3wm.org). This is a tiling window manager with a configuration file that is written in an easy to use syntax. I tried i3 for a while, but it never really stuck, so I went back to KDE Plasma. After doing some more research, I eventually landed on [dwm](https://dwm.suckless.org). Given my experience with C/C++, this seemed like a better window manager for my needs. One of the main downsides of dwm is that it is meant to be super minimal where features you might expect to see need to be added through patches. The process of patching can be slow, annoying, and prone to error. A great solution to this problem is [dwm-flexipatch](https://github.com/bakkeby/dwm-flexipatch). This includes a bunch of commonly used patches that can be enabled or disabled very easily. You can see my configuration of dwm-flexipatch on [GitHub](https://github.com/balajsra/dwm-flexipatch).

<hr />

## Current Setup

My [current setup](https://github.com/balajsra/dotfiles) involves these main components:

- **Window Manager**: [dwm-flexipatch](https://github.com/bakkeby/dwm-flexipatch)
- **Status Bar**: [polybar](https://github.com/polybar/polybar)
- **Terminal**: [kitty](https://sw.kovidgoyal.net/kitty/)
- **Color Theme**: [Dracula](https://draculatheme.com) / [Dracula Pro](https://draculatheme.com/pro)
- **Application Launcher**: [Rofi](https://github.com/davatorium/rofi)

<img
  class="img-fluid rounded"
  src="/assets/blog_posts/windows_to_linux/dwm_flexipatch_screenshot.png"
  alt="dwm flexipatch desktop setup"
/>
