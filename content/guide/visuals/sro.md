---
title: Skyrim Realistic Overhaul
step: 2
---
SRO is the most comprehensive texture overhaul out there, over 10GB in size and covering nearly every single texture in the game. We will use it as base for the Visuals setup.

## 2.1 Download

Unfortunately SRO is not on the Nexus. You need to download the following files from [its page on ModDB](https://www.moddb.com/mods/skyrim-realistic-overhaul/downloads):

- Skyrim Realistic Overhaul Part 1
- Skyrim Realistic Overhaul Part 2
- Skyrim Realistic Overhaul Part 3
- Skyrim Realistic Overhaul 1.8 Update

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> Depending on your internet speed, this may take a while. Feel free to continue with Step 3 while you wait for the download to complete as you can finish the installation of SRO anytime.</p></div>

## 2.2 Extraction

- Create a new folder inside `{Your Modding Folder}\temp` and name it *Skyrim Realistic Overhaul*.
- Extract the *textures* folder from all downloaded files into the new *Skyrim Realistic Overhaul* folder <u>in the correct order</u> (Part 1 > Part 2 > Part 3 > Update).
- This will take a while. **Make sure to merge and overwrite when asked.**
- Eventually you will have a single *textures* folder with the size of a solid 10.2GB.

## 2.3 Resize

Since in the end only a fraction of the files will be used in game, it is no big loss to downsize all 4K textures to 2K. This will also lower the total file size by 4GB.

- Run Ordenador.
- Unselect everything except **Resize down** and set it to *If > 2048*.
- Click the little folder icon.
- Point Ordenador at the `{Your Modding Folder}\temp\Skyrim Realistic Overhaul` folder.
- Hit *Start*. It will take a while to process all files.

## 2.4 Pack Assets

- Run Cathedral Asset Optimizer.
- Point it at the `{Your Modding Folder\temp\Skyrim Realistic Overhaul` folder.
- Check only **BSA > Create BSA + Pack existing loose assets** and **Textures > Full Optimization**.
- Click *Run*. This too will take a while.

## 2.5 Installation

- Move the *Skyrim Realistic Overhaul* folder (now containing ESPs+BSAs) to `Mod Organizer 2\mods`.
- Back in Mod Organizer 2, press F5 to refresh.
- Skyrim Realistic Overhaul will appear at the bottom of your mod order.
- Drag it up below the **FOUNDATION** separator and activate it.

## 2.6 ESL-ESM-ify The Plugins

- Run SSEEdit through Mod Organizer 2.
- In the plugin selection window, right-click and click *Select none*.
- Only check the following four plugins:
  - `Skyrim.esm`
  - `SkyrimRealisticOverhaul.esp`
  - `SkyrimRealisticOverhaul1.esp`
  - `SkyrimRealisticOverhaul2.esp`
- Click OK and wait for xEdit to load your selection.

---

- Right-click **SkyrimRealisticOverhaul.esp**.
- Click *Add master* and select **Skyrim.esm**.
- Click *Yes* when the warning window appears.
- Repeat this for the other two plugins.

---

- Select **SkyrimRealisticOverhaul.esp**.
- Right-click next to *Record flags* and select *Edit*.
- Check <u>both</u> *ESM* and *ESL*, then Click *OK*.
- Repeat this for the other two plugins.

---

- Once you're done, close xEdit.
- Make sure all three plugins are checked in the list before you hit *OK*.

---

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> All three plugins now have <b>Skyrim.esm</b> properly added as their master. They are flagged as ESM to load at the top of your load order and as ESL so that they don't count toward the 255 plugin limit.</p></div>

