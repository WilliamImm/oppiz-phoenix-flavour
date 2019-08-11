---
title: 04. INI Files
step: 4
---

# STEP 4 - INI FILES

### 4.1 Generate Fresh INI Files

- Locate your `C:\Users\%USERNAME%\Documents\My Games\Skyrim Special Edition` folder. It contains your save games in the **saves** folder and your INIs as loose files.
- If you do have old save games you’d like to keep, **back them up now –** then delete the entire **Skyrim Special Edition** folder.
- Open your Steam Library, find **The Elder Scrolls V: Skyrim Special Edition** in your games list and hit **Play** to open the regular launcher.
- A window will automatically come up, informing you that Skyrim SE will now be configured based on your hardware – your INI files are being re-generated. Click **OK** twice.
- Hit **Exit** once it’s done.

---

![Regenerate INIs](/media/core/step_04/regenerate_inis.png "Regenerate INis"){.img-fluid .mx-auto .d-block}

### 4.2 Install BethINI

- Download the latest version of [BethINI](https://www.nexusmods.com/skyrimspecialedition/mods/4875) from the Skyrim Nexus.
- Extract the downloaded archive with all files to `{Your Modding Folder}\Tools`.
- Double-click **BethINI.exe**.

### 4.3 BethINI - Setup

- After starting BethINI, you will be prompted with a window asking you to choose your game.
- Select *Skyrim Special Edition* from the drop-down menu.
- Once the BethINI window has come up, go to the first tab – **Setup**.
- Disregard the error under *Mod Organizer*. BethINI can’t find MO2 because we haven’t installed it yet.
- Everything should be configured correctly there, but it’s always a good idea to double-check that *Game Path* and *INI Path* point to the correct locations – that’s your **root** and **INI** folder respectively.

---

![BethINI Setup Tab](/media/core/step_04/bethini-setup-1.png "BethINI Setup Tab"){.img-fluid .mx-auto .d-block}

### 4.4 BethINI - Basic

Continue with the second tab, **Basic**.

- Make sure to check **Recommended Tweaks**.
- Double-check whether **Resolution** is set to the correct value for your monitor.
- Select one of the presets (**Low** – **Medium** – **High**), see below.
- Disable both **VSYNC** and **Lock Frame Rate**. Also uncheck **Borderless**.

---

![BethINI Basic Tab](/media/core/step_04/bethini-setup-2.png "BethINI Basic Tab"){.img-fluid .mx-auto .d-block}

---

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> Unless you’re going for a maximum graphics screen-archery modding setup, you should not select the <b>Ultra</b> preset. For high-end PC owners I would recommend the <b>High</b> option and everyone else might want to select <b>Medium</b>. If your PC is already struggling with vanilla Skyrim go for the <b>Low</b> option.</p></div>

### 4.5 BethINI - Interface

Continue with the fifth tab, **Interface**.

- I prefer my **Lock Sensitivity** at <u>0.0450</u> but this will come down to personal taste and your mouse configuration.
- Dialogue Subtitles and General Subtitles are unchecked by default, toggle them on if you need them. You can still always toggle them ingame.

---

![BethINI Interface Tab](/media/core/step_04/bethini-setup-3.png "BethINI Interface Tab"){.img-fluid .mx-auto .d-block}

### 4.6 BethINI - Detail

Continue with the sixth tab, **Detail**.

- **Godrays:** I recommend setting them to *None*, they don’t look great and eat frames for breakfast.
- **Field of View:** Increase this if you prefer a wider FoV.
- **Lens Flare:** Matter of taste. Personally I disable this.
- **Anamorphic Lens Flare**: Looks ugly, recommended to be turned off.
- **Ambient Occlusion**: Recommended to set this to *None* in favour of ENB AO.
- **Shadow Bias:** Set to 0.47 (helps hide ugly pyramid-shapes in snowy regions).

---

![BethINI Detail Tab](/media/core/step_04/bethini-setup-4.png "BethINI Detail Tab"){.img-fluid .mx-auto .d-block}

### 4.7 BethINI - View Distance

Continue with the seventh tab, **View Distance**.

- **Grass Fade**: 15000 - *or higher*

### 4.8 BethINI - Custom, Pt 1

Continue with the ninth tab, **Custom**.

- Go to the **Custom** tab.
- Select the following: 
  - Section: *Display*.
  - Setting: `fGlobalContrastBoost`.
- Change the value to `-0.1800`.
- Click **Save**.

---

![BethINI Custom Tab](/media/core/step_04/bethini-setup-5.png "BethINI Custom Tab"){.img-fluid .mx-auto .d-block}

---

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> This should fix the “black crush” that some people are experiencing in SSE.</p></div>

### 4.9 BethINI - Custom, Pt 2

- Still in the **Custom** tab, select the following:
  - Section: *General*.
  - Setting: `bModManagerMenuEnabled`
- Change the value to `0`.
- Click **Save**.

---

![BethINI Custom Tab](/media/core/step_04/bethini-setup-6.png "BethINI Custom Tab"){.img-fluid .mx-auto .d-block}

---

<div class="alert alert-info" role="alert">
<p><i class="fas fa-info-circle"></i> This will disable the <b>MODS</b> entry in the ingame pause menu. You should not be using the in-built Bethesda mod manager or Beth.net platform anyway.</p></div>

### 4.10 BethINI - Final Step

Return to the second tab, **Basic**, and click *Save and Exit*.

