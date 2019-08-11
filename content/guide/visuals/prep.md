---
title: Preperations
step: 1
---

## 1.1 Recommended Hardware

- processor with high single core performance (3.2GHz or more)
- 8-16 GB of DDR3 or DDR4 memory, running at 2400MHz or faster
- a modern GPU with at least 4GB of VRAM
- at least 50GB of free space on a fast HDD or SSD

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> Please note that you can follow this guide even with weaker specs than recommended above. There are plenty of opportunities to install lower resolution versions of a texture or opt for a less performance-intense setup.</p></div>

---

#### For reference - my setup:

- Intel i5 7600k @4.2GHz, hybrid-cooled
- EVGA GTX 1070 Founder’s Edition (8192MB VRAM)
- Corsair Vengeance 16GB DDR4-3200 Memory
- Samsung 850 Evo Series 256GB SSD (OS)
- Samsung 860 Evo Series 1TB (Games)
- 1080p Acer Monitor (60Hz)

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> With the <b>full VISUALS</b> module, <b>BethINI’s HIGH preset</b> and <b>DynDOLOD on High w/ 3D tree LOD</b> I never drop below 60FPS. Depending on the enabled features, ENB presets drop my framerate for around 5-10 FPS in certain locations.</p></div>

## 1.2 Monitor Calibration

Before we touch anything related to visuals, we should ensure your monitor’s brightness and gamma settings are correct.

Now assuming you have your monitor set to your preferred settings (in my case that is 60Hz and 1920×1080, the native resolution), you might want to adjust brightness / gamma either through your graphics card (_Control Panel > NVIDIA Control Panel > Adjust Desktop Color Settings_) or Windows’ in-built calibration tool (_Control Panel > Colour Management > Advanced > Calibrate display_).

To help you find the sweet spot for your monitor, check out these resources:

- [CFL ENB – monitor calibration help](https://i.imgur.com/k1v8p1M.png)
- [Photo Friday Monitor Calibration Tool](https://www.photofriday.com/info/calibrate)
- [Lagom: LCD monitor test images](http://www.lagom.nl/lcd-test/)

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> Keep in mind that your display should have been running for at least 30 minutes when you calibrate it.</p></div>

## 1.3 Dynamic Range

It is recommend that you ensure **your monitor’s dynamic range is set to Full** if your monitor is connected via DisplayPort or HDMI. [Here are instructions for NVIDIA and AMD](https://pcmonitors.info/articles/correcting-hdmi-colour-on-nvidia-and-amd-gpus/).

(I actually had mine set to _Limited_ for years and found that I was so used to it that setting it to _Full_ only irritated me. Eventually I went back to _Limited_ with no regrets. Your mileage may vary.)

## 1.4 New Profile

To preserve your current **CORE** installation as it is, we are going to copy its profile into a new instance for the **VISUALS** module of this guide.

- In Mod Organizer 2, bring up the **Profiles** window by clicking the ID Card icon (top left).
- Select your **The Phoenix Flavour – Core** profile and select _Copy_.
- Name your new profile **The Phoenix Flavour – Visuals**. Then hit OK.
- Select your new profile in the list and make sure both options at the bottom are ticked.
- Close the **Profiles** window.
- Switch to your new profile using the drop-down menu at the top.
- It should look identical to your **The Phoenix Flavour – Core** profile.

## 1.5 Separators

- Download the VISUALS – MO2 Separators from [the guide’s mod page](https://www.nexusmods.com/skyrimspecialedition/mods/14223).
- Open the archive.
- Move all folders ending on **\_separator** to `Mod Organizer 2\mods`.
- Refresh (F5) Mod Organizer 2 and sort them as follows:
  - _DLC: Dawnguard_
  - _DLC: HearthFires_
  - _DLC: Dragonborn_
  - 01 ESSENTIAL MODS
  - 02 INTERFACE
  - 03 FIXES
  - 04 TWEAKS
  - **05 FOUNDATION**
  - **06 WEATHER OVERHAUL**
  - **07 LIGHTING OVERHAUL**
  - **08 LANDSCAPE**
  - **09 FLORA**
  - **10 ARCHITECTURE**
  - **11 INTERIORS**
  - **12 DUNGEONS**
  - **13 CLUTTER**
  - **14 APPEARANCE**
  - **15 CREATURES**
  - **16 CLOTHING & JEWELLERY**
  - **17 WEAPONS & ARMOR**
  - **18 VISUAL FX**
  - **19 ENB ADDONS**
  - 31 UTILITIES
  - 32 CONFLICT RESOLUTION
  - 33 PATCHER OUTPUT
