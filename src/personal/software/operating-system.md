---
displayOrder: 4
url: "https://nixos.org/"
logo: "/assets/software/logo-nixos.png"
category: "Operating System"
name: "NixOS"
---

I started my Linux journey with [Ubuntu](https://ubuntu.com/), which I was using for my college computer science classes. I eventually got tired of Windows and migrated my personal computers to [Pop!_OS](https://system76.com/pop) for the better hardware compatibility and better [GNOME](https://www.gnome.org/)-esque experience by default.

As with almost everyone who goes down the Linux rabbit hole, I eventually found my way to [Arch](https://archlinux.org/) and stuck with it for a few years until I tried [Gentoo](https://www.gentoo.org/) (based on a recommendation from someone I met at a [NoVaLUG](https://novalug.org) meeting).

With [Gentoo](https://www.gentoo.org/), you get near complete control over your system (e.g., you can use init systems other than systemd if you so desire), a stable package update schedule (with the option to go "unstable" if desired), rolling release, and an amazing package manager ([portage](https://wiki.gentoo.org/wiki/Portage)).

[USE flags](https://wiki.gentoo.org/wiki/USE_flag) are probably its key selling point. You can enable/disable certain features in almost every package since you compile packages yourself (at least the ones that are open source). There are options to download binaries as well if you're limited on compute resources and/or time. It doesn't have the same community as the [Arch User Repository](https://aur.archlinux.org/) in terms of package availability, but you can always write your own [ebuilds](https://wiki.gentoo.org/wiki/Ebuild) for packages that don't exist in the main repo or community maintained ones like [GURU](https://wiki.gentoo.org/wiki/Project:GURU).

With great customizability, comes a great maintenance burden. Or so I thought. That was until I discovered [NixOS](https://nixos.org/).

I got tired of having to constantly document every little thing I customized on my system and dreaing the day I would have to setup a new system from scratch. Or even just keep the configuration on my desktop in sync with my laptop. [NixOS](https://nixos.org/) solved both of these problems for me.

Unlike other Linux distributions, [NixOS](https://nixos.org/) is declarative. You define the features you want your system to have in a configuration file and [NixOS](https://nixos.org/) makes it so. This is great because I can define exactly which packages I want installed, what settings each of them should have in their respective config files, what systemd services to enable, what handy scripts to create, etc. And I can keep all of this synced in a git repository that both my desktop and laptop can share, with features enabled/disabled as appropriate for each system.

If this sounds interesting to you, check out my [NixOS Configuration](https://github.com/balajsra/nixos-config).
