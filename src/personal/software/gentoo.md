---
displayOrder: 3
url: "https://www.gentoo.org"
logo: "/assets/software/logo-gentoo.png"
category: "Operating System"
name: "Gentoo Linux"
---

I started my Linux journey with Ubuntu, which I was using for my college CS classes. I eventually got tired of Windows and migrated my personal computers to PopOS! for the better hardware compatibility and better GNOME-esque experience by default.

As with almost everyone who goes down the Linux rabbit hole, I eventually found my way to Arch and stuck with it for a few years until I tried Gentoo (based on a recommendation from someone I met at a [NoVaLUG](https://novalug.org) meeting).

With Gentoo, you get near complete control over your system (e.g., you can use init systems other than systemd if you so desire), a stable package update schedule (with the option to go "unstable" if desired), rolling release, and an amazing package manager (portage).

USE flags are probably its key selling point. You can enable/disable certain features in almost every package since you compile packages yourself (at least the ones that are open source). There are options to download binaries as well if you're limited on compute resources and/or time. It doesn't have the same community as the AUR in terms of package availability, but you can always write your own ebuilds for packages that don't exist in the main repo or community maintained ones like GURU.

I maintain a [personal overlay](https://github.com/balajsra/sravan-overlay) with ebuilds for packages I use.