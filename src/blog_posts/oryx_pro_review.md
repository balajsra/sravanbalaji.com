---
displayOrder: 2
title: System76 Oryx Pro 7 Review
updated: "July 1, 2022"
banner: "/assets/blog_posts/oryx_pro_review/oryx-pro-7.png"
layout: layouts/blog_post.html
---

## System Specifications

### Oryx Pro 7 Configuration

See the [System76 Technical Documentation](https://tech-docs.system76.com/models/oryp7/README.html) for more information.

- **OS**: Pop!_OS 20.10 (64-bit) with full disk-encryption
- **CPU**: 5 GHz i7-10870H (2.2 up to 5.0 GHz - 16MB Cache - 8 Cores -16 Threads)
- **GPU**: 8 GB RTX 3070 w/ 5888 CUDA Cores
- **Memory**: 8 GB Single Channel DDR4 at 2933 MHz
- **Storage**: 240 GB Seq Read: 540 MB/s, Seq Write: 465 MB/s
- **Display**: 15.6" 1920x1080@144Hz LCD
- **Warranty**: 2 Year Limited Parts and Labor Warranty
- **Link**: [System76 Website](https://system76.com/laptops)
- **Price**: $2,209.47

### Additional Parts

#### Storage

- **Model**: Samsung 970 EVO Plus M.2 NVMe SSD
- **Size**: 2TB
- **Link**: [Amazon](https://www.amazon.com/gp/product/B07MFZXR1B/ref=ppx_od_dt_b_asin_title_s01?ie=UTF8&psc=1)
- **Price**: $319.99

#### RAM
- **Model**: HyperX Impact DDR4 CL17 SODIMM Memory (Kit of 2)
- **Size**: 32GB
- **Speed**: 2933MHz
- **Link**: [Amazon](https://www.amazon.com/gp/product/B07BGLBZBK/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1)
- **Price**: $219.00

<hr />

## Upgradeability

I ended up purchasing the Oryx Pro 7 with base memory and storage in March of 2021, then upgraded these components with parts I bought from Amazon. The upgrade experience was pretty good. Removing the bottom cover just involves removing a bunch of screws, nothing too difficult. I had a little trouble with this because one of the screws seemed to get stuck, but I eventually got it out. The [Parts & Repairs guide](https://tech-docs.system76.com/models/oryp7/repairs.html) was very clear and helpful in this regard.

<hr />

## Experimenting with Linux Distros

I initially decided to give [Pop!_OS](https://pop.system76.com/) a chance since it came pre-installed on the Oryx Pro and was developed by System76. My experience was very positive. I'm really happy that System76 and Pop!_OS have come up with a good and reliable solution for switching between the integrated graphics and discrete NVIDIA graphics. Being able to just click on the option in the GNOME menu is so useful. The window management in Pop!_OS's [COSMIC](https://github.com/pop-os/cosmic) desktop environment is very good too. Coming from a standalone tiling window manager like dwm, I found that this provides a pretty good balance between convenience and usability.

After some more time with Pop!_OS, I realized that I really missed the package management, customizability, and rolling release of Arch. For the longest time, I couldn't get Arch working reliably, so I decided to try some other Arch based distros like [Manjaro](https://manjaro.org/) and [Garuda](https://garudalinux.org/). With both of these, I found that switchable graphics (via the [system76-power AUR package](https://aur.archlinux.org/packages/system76-power/)) works very well. I eventually decided on Garuda because it implements a lot of the customizations I usually do in my vanilla Arch installs anyways (e.g., btrfs, zen kernel, chaotic-aur, backups w/ timeshift, easy options to enable gaming tweaks, etc.).

Later, I started noticing some issues with suspending and hibernating as well as switching graphics. I couldn't rely on my laptop to stay awake or suspend when I expected it to. Sometimes the computer would just freeze up randomly and I would need to hard reboot. It seemed that there was something interfering with the graphics card. This is when I noticed that the [Oryx Pro ArchWiki page](https://wiki.archlinux.org/title/System76_Oryx_Pro) had been updated and I noticed an [issue on GitHub](https://github.com/pop-os/system76-power/issues/299). These finally led me to a stable install with Arch Linux.

Install the following packages from the [AUR](https://aur.archlinux.org/):

- `system76-dkms`
- `system76-acpi-dkms`
- `system76-io-dkms`
- `system76-driver`
- `system76-power`
- `system76-firmware-daemon`
- `system76-firmware`
- `firmware-manager`

Then add your user to the `adm` group and enable the following services:

- `sudo gpasswd -a $USER adm`
- `sudo systemctl enable --now system76`
- `sudo systemctl enable --now system76-firmware-daemon`
- `sudo systemctl enable --now com.system76.PowerDaemon.service`

Finally, disable the Power Profiles Daemon which was interfering with `system76-power` and enable the NVIDIA services for suspending (and optionally hibernating & resuming if you want that):

- `sudo systemctl mask power-profiles-daemon`
- `sudo systemctl enable nvidia-{suspend,resume,hibernate}`

To get the speakers working, you will probably need to create a file called `/etc/modprobe.d/clevo-p950.conf` and put the following inside:

```conf
options snd-hda-intel model=clevo-p950
```

If you encounter any other issues, be sure to check out the [Oryx Pro ArchWiki page](https://wiki.archlinux.org/title/System76_Oryx_Pro).

Now your laptop should be able to run Arch with all the same graphics switching goodness and functional speakers of Pop!_OS without any of the random freezing or crashing!

<hr />

## Pros and Cons

### Pros
- The display is really good, I am highly satisfied with it. Everything is just so much smoother in 144Hz.
- Keyboard is not bad at all, but it definitely doesn't match up in terms of quality and satisfaction to the excellent HP Spectre x360 keyboard that I used previously. I really don't mind it though and love that it includes a full sized number pad. The layout doesn't feel cramped and it has plenty of keys that can be customized via the [keyboard configurator](https://github.com/pop-os/keyboard-configurator)
- Gaming performance is amazing! I can run Yakuza: Like a Dragon at around 70 or 80 fps with all the settings turned up to the max. I love that I can use my favorite operating system without having to compromise too much on gaming performance.
- Love the keyboard backlighting and color changing on the fly. Would love to be able to customize this further in software though.
- When I need a mouse, I tend to use an external one, but the trackpad feels excellent to me. My finger just glides across the super smooth surface. I think the overall trackpad size is good as well. Not as large as one you would find on a Macbook, but definitely good enough for my use cases.
- It was a bit more difficult than I expected to remove the bottom plate when upgrading the RAM and storage, but overall a very easy process. Really appreciate the focus on upgradeability in the hardware design.
- I absolutely love the port selection. No need to live the dongle life when the laptop has so many built-in already.
- The build quality is pretty solid. It definitely feels like a premium device.

### Cons

- Speakers are really sub-par. I understand that System76 doesn't design the hardware, but this was my main disappointment. I have external bookshelf speakers and bluetooth headphones I can use, so this isn't an unsolvable problem, but just generally annoying.
- Webcam is functional, but not good at all. Definitely need to use an external webcam for video calls.
- The microphone has a strange oscillatory behavior where there is some buzzing sound that increases and decreases regularly.  Additionally, you can really hear the fans ramping up and down in the mic, makes it difficult to have a meeting if you use the integrated mic and the fans suddenly turn on. Definitely need an external mic.
- Battery life is really bad when the discrete graphics card is on (as expected). Maybe a little more than an hour a time, sometimes more depending on how willing I am to lower CPU frequency and stuff. As a desktop replacement type laptop, that is to be expected through.
- Fans can get really loud at times, especially when pushing the GPU in games. I often have to turn up my speakers or wear noise cancelling headphones. This is an understandable physical limitation of thin and light gaming laptops though.
- While the display itself is great, I really wish the hinge would rotate farther back. It looks like the screen can only rotate about 120 degrees from fully closed, so getting a good viewing angle (especially when the laptop is propped up or really low) can be difficult.

<hr />

## Conclusions

It may seem that the cons outweigh the pros, but this is only because I am really nitpicking. The things this laptop gets right (e.g., gaming, refresh rate, switchable graphics, general performance) are much more important to me than the other things (e.g., mic / webcam quality). Regarding price, you are definitely paying a premium for first-class linux support, but it is well worth it in my opinion. I do not want to use Windows anymore and I am happy to pay extra if it means supporting a company that promotes and sells Linux computers and having a device that can be easily upgraded down the line. Overall, I am very happy with my purchase.  Especially now that I have a stable installation of Arch Linux that has all the functionality I expect without random freezing or crashing.

<hr />

## Images

These are some images from when I unboxed the laptop, installed the RAM & SSD, and customized my setup a little.

<div class="container-fluid">
  <div class="row align-items-center">
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/01_oryp7.jpg"
        alt=""
      />
    </div>
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/02_oryp7.jpg"
        alt=""
      />
    </div>
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/03_oryp7.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/04_oryp7.jpg"
        alt=""
      />
    </div>
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/05_oryp7.jpg"
        alt=""
      />
    </div>
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/06_oryp7.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/07_oryp7.jpg"
        alt=""
      />
    </div>
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/08_oryp7.jpg"
        alt=""
      />
    </div>
    <div class="col-md-4">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/09_oryp7.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col-md-6">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/10_oryp7.jpg"
        alt=""
      />
    </div>
    <div class="col-md-6">
      <img
        class="img-fluid rounded"
        src="/assets/blog_posts/oryx_pro_review/11_oryp7.jpg"
        alt=""
      />
    </div>
  </div>
</div>
