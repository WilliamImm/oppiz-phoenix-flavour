---
title: Skyrim SE
step: 2
---

It is highly recommended to install Skyrim SE and all modding tools <u>outside</u> of the default folders, `C:\Program Files` and `C:\Program Files x86`. This is due to permission issues with the OS that may occur at some point later on and potentially break certain mods or tools. Ultimately it's better to not install anything there in the first place.

Additionally, it is important for your Skyrim Special Edition folder and Mod Organizer 2 to be <u>on the same hard drive</u> – **preferably on an SSD**, which will improve performance over an HDD (eliminating stutters and decreasing loading screen times).

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> Skyrim SE by itself has a size of around 13GB. A decent mod setup can reach 50-100GB quite easily (depending on the type of mods you install). The current versions of The Phoenix Flavour take up around 70GB of space.</p>
</div>

## 2.1 Uninstall Skyrim SE

Obviously you should skip this step if you don’t have SSE installed.

- Open Steam and go to your **Library**.
- Find **The Elder Scrolls V: Skyrim Special Edition** in the list.
- Right-click it and select **Uninstall**.
- Wait for the process to complete before you continue.

## 2.2 Create New Steam Library

In order to keep your SSE installation outside the default folders, you will probably need to create a new Steam library. If you already have a Steam library on your chosen drive, there are instructions [here](https://steamcommunity.com/discussions/forum/1/135511294066324002/#c135511294068114690) on how to add a second library on the same partition.

- Launch Steam and open the **Settings**.
- In the **Downloads** tab, select **Steam Library Folders**.
- Click **Add Library Folder**.
- Point it to a location somewhere <u>outside</u> your `C:\Program Files` and `C:\Program Files x86` folders .
- Close all windows when you are done.

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> Again remember that the new Steam library (which will then contain the Skyrim SE directory) needs to be on the drive where you will also install Mod Organizer 2. The chosen drive should have a minimum of 200GB free space and ideally  be an SSD.</p></div>

## 2.3 Re-install Skyrim SE

- Launch Steam and open your Library.
- Go to **Skyrim Special Edition** and click _Install_.
- As location, select the Library you just created.

## 2.4 Check Version Number

For the purposes of this guide you must run a specific version of Skyrim SE. That is typically the latest version unless there recently was an update and the guide is still running on the previous version in which case you need to roll back.

**The current supported version of Skyrim SE is: <u>1.5.80.0</u>**

If you accidentally updated to a newer version, please refer to [this guide here ](https://www.nexusmods.com/skyrimspecialedition/mods/19658)in order to roll back.

- Navigate to your root folder.
- Right-click _SkyrimSE.exe_ and select **Properties**.
- Switch to the **Details** tab and check under **Product version**.

---

![Skyrim Version Number](/media/core/step_02/skyrim_version_number.png "Skyrim Version Number"){.img-fluid .mx-auto .d-block}

## 2.5 Disable Auto Updates

When Skyrim SE receives another update – which happens regularly because of the Creation Club – SKSE64 and all dependent mods will need to be updated as well. This will probably take at least a week.

However, you _can_ continue playing the previous version with SKSE64 and all your mods by simply setting Skyrim SE to only update when launching the game – since you start the game through the SKSE64 launcher, Steam will never update.

- Find **The Elder Scrolls V: Skyrim Special Edition** in your Steam Library.
- Right-click it, select **Properties** and switch to the **Updates** tab.
- Make sure **Automatic updates** is set to **Only update this game when I launch it**.
- Problem solved!

---

![Disable Auto Updates](/media/core/step_02/disable_auto_updates.png "Disable Auto Updates"){.img-fluid .mx-auto .d-block}
