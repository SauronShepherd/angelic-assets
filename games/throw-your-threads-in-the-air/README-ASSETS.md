# 🎃 Special Halloween 🎃 Throw Your Threads In The Air — asset map

Keep `index.html` beside the `assets/` folder. The HTML keeps its artwork and soundtrack external. Every image and audio file in this package has a UUID filename; `asset-map.json` maps each UUID back to its source name and checksum.

The website copy uses a temporary `@main` asset URL until this package is committed; pin it to the asset commit before publishing.

## Artwork

The nine story rooms each have a separate, original cartoon background; the front hall also serves as the game cover.

| Scene | UUID asset |
|---|---|
| Front Hall and title card | assets/a731b910-abfa-4c23-a863-e4dc7074e62a.png |
| Portrait Gallery | assets/62f21364-4fcd-49e0-9e49-d6812e678c50.png |
| Jekyll & Hyde laboratory | assets/d093d052-dbfe-490e-a6e8-896f58e3b5c7.png |
| Waiting Room / Condition Knot | assets/913a82bc-b1f6-47e9-9303-73c98f629924.png |
| Executor Workshop | assets/8f16e7f7-cdd8-44c1-bd00-5efe4e12b0a6.png |
| Cemetery of Almost-OOMs | assets/004e69ed-0e86-4a11-a25e-529663be2cb8.png |
| Project Loom carnival | assets/5f617c29-cebe-496c-b859-0d02ebc487d6.png |
| Mirror Chapel | assets/5fdd7fc5-1938-42a4-b9fe-eb42cb5216cd.png |
| Duplicate Delivery Ledger | assets/a3b00847-549a-4967-b506-de6e8b470506.png |
| Character portraits | assets/characters/<UUID>.svg |
| Edda Vale · recorded testimony | assets/characters/7bb34c39-536f-4297-af1e-99717501c16f.svg |

## Soundtrack cues

The supplied soundtrack is cued by room, puzzle, character conversation, jump scare, and ending. It starts after the player presses **Enter Threadvale Manor**. The in-game music button and volume slider remain available throughout. The original track title is retained below; the UUID-to-source mapping is in `asset-map.json`.

| Story beat | Audio file | Supplied track title |
|---|---|---|
| Front Hall ambience | `assets/audio/b2d707ec-e46d-4bb7-9faa-f34e6b7d073e.mp3` | 01 — Museum Main Theme Family — 1 |
| Pip conversation / gentle clue | `assets/audio/0402facf-3cf5-413a-99b9-550e5142609b.mp3` | 15 — Museum Human Quiet — 1 |
| Edda’s recorded testimony | `assets/audio/0402facf-3cf5-413a-99b9-550e5142609b.mp3` | 15 — Museum Human Quiet — 1 |
| Edda’s Midnight Index · evidence puzzle resolution | `assets/audio/0402facf-3cf5-413a-99b9-550e5142609b.mp3` | 15 — Museum Human Quiet — 1 |
| Portrait Gallery | `assets/audio/f8d4e3dc-989c-4f49-a5e2-b9d9f66030b7.mp3` | 10 — Museum Threshold / Crossing Family — 1 |
| Sister Semaphore and scheduler puzzle | `assets/audio/3d448729-9323-4c25-8adb-70c9b03d1019.mp3` | 05 — Seven Bees Main Family — 1 |
| Jekyll & Hyde lab | `assets/audio/fe630473-9075-4dff-ab0f-e37be616fa9c.mp3` | 13 — Field Access / Resonance Test — 1 |
| Jekyll conversation | `assets/audio/fe630473-9075-4dff-ab0f-e37be616fa9c.mp3` | 13 — Field Access / Resonance Test — 1 |
| Hyde conversation | `assets/audio/a7dc50b7-cbd0-4725-b1a4-0f0677d1b54c.mp3` | 12 — Continuity Failure — 1 |
| Experiment 1 lab gate | `assets/audio/1c660fb5-b1ec-44d6-b0b4-ec187e259e56.mp3` | 13 — Field Access / Resonance Test — 2 |
| Condition Knot / waiting room | `assets/audio/a7dc50b7-cbd0-4725-b1a4-0f0677d1b54c.mp3` | 12 — Continuity Failure — 1 |
| Condition puzzle and Knot conversation | `assets/audio/7731a0f8-09c2-4d5b-955c-90c8d6c5e7e3.mp3` | 12 — Continuity Failure — 2 |
| Producer confrontation | `assets/audio/0088dfe4-4387-40a2-ac7b-6f51bf474fe0.mp3` | 29 — Dama Moral Confrontation — 1 |
| Executor workshop | `assets/audio/5a5d54c4-5e22-4941-9e62-d39a6264a562.mp3` | 19 — Fullonica / Work Process — 1 |
| Warden PID and Experiment 2 | `assets/audio/e3109065-509e-4356-bf68-fb92883fa169.mp3` | 24 — Dama Accounting Main Puzzle — 1 |
| Worker return chute | `assets/audio/f8d4e3dc-989c-4f49-a5e2-b9d9f66030b7.mp3` | 10 — Museum Threshold / Crossing Family — 1 |
| Memory graveyard | `assets/audio/00e6c3e6-4dfa-4191-89e6-36868cefcc18.mp3` | 31 — First Plume / Early Fallout Suite — 1 |
| Reaper dialogue and OOM puzzle | `assets/audio/d2d208e7-dc20-4cf9-bc01-5a3e45ded931.mp3` | 31 — First Plume / Early Fallout Suite — 2 |
| Thread/PID clue | `assets/audio/e3109065-509e-4356-bf68-fb92883fa169.mp3` | 24 — Dama Accounting Main Puzzle — 1 |
| Direct-buffer clue | `assets/audio/d5aeca71-cb66-4119-af9e-961ebdee0aef.mp3` | 14 — Wrong Storage / Incorrect Reality — 1 |
| Loom carnival | `assets/audio/ae192488-353e-4489-9e80-afeec95cf693.mp3` | 28 — Voss Main Theme — 1 |
| Vee and Loom puzzle | `assets/audio/7518ce87-db63-4610-a430-32421b680189.mp3` | 20 — Rooftop Wonder — 1 |
| JDK ticket booth | `assets/audio/ae192488-353e-4489-9e80-afeec95cf693.mp3` | 28 — Voss Main Theme — 1 |
| Carrier/stagehand conversation | `assets/audio/0402facf-3cf5-413a-99b9-550e5142609b.mp3` | 15 — Museum Human Quiet — 1 |
| Mirror Chapel | `assets/audio/d5aeca71-cb66-4119-af9e-961ebdee0aef.mp3` | 14 — Wrong Storage / Incorrect Reality — 1 |
| Mirror Twins and race puzzle | `assets/audio/ae66d133-5a8a-4ce6-afcf-45050732a32d.mp3` | 14 — Wrong Storage / Incorrect Reality — 2 |
| Shared expression clue | `assets/audio/b3ea0be4-6664-44aa-bf6c-b9ef2cb1541e.mp3` | 30 — Baseline Causal Puzzle — 1 |
| Issue-ledger clue | `assets/audio/f0eb0314-6f40-4e7c-8849-2ea634a47a53.mp3` | 39 — Final Causal Board — 1 |
| Retry room ambience | `assets/audio/f0eb0314-6f40-4e7c-8849-2ea634a47a53.mp3` | 39 — Final Causal Board — 1 |
| Madame Retry / Experiment 3 | `assets/audio/f6bc281b-cb34-4627-86f9-87a8ab932201.mp3` | 39 — Final Causal Board — 2 |
| Parcel clue | `assets/audio/b3ea0be4-6664-44aa-bf6c-b9ef2cb1541e.mp3` | 30 — Baseline Causal Puzzle — 1 |
| Commit bell and final choice | `assets/audio/0088dfe4-4387-40a2-ac7b-6f51bf474fe0.mp3` | 29 — Dama Moral Confrontation — 1 |
| Edda’s privacy and provenance choice | `assets/audio/0402facf-3cf5-413a-99b9-550e5142609b.mp3` | 15 — Museum Human Quiet — 1 |
| Two-part diagnosis and protected case-file resolution | `assets/audio/a6de1b7d-54bb-4d80-a551-ec6de0c5c439.mp3` | 40 — Final Solution Master Family — 1 |
| End credits / case closed | `assets/audio/87d27aa4-badf-4378-8b11-410839419eaf.mp3` | 45 — The First Story Finale Suite — 1 |

The audio files were selected from the supplied `Museum of Lost Days/audios` folder and copied into `assets/audio/`. No audio is base64-embedded in the article.

## Optional cross-room evidence puzzle

After the Mirror Chapel, Edda’s casebook reveals a role-scaled “Midnight Index.” Junior sorts four slips, Senior six, and Architect eight into recorded observations, scoped mechanisms, and unsupported claims. The puzzle rewards evidence boundaries rather than guessing a universal Spark thread count; a wrong filing can be corrected without losing progress. Solving it restores Edda’s private margin to the case file.

## Technical packaging

The supplied emulator's JavaScript runtime is embedded in the HTML so the three labs do not need a separate runtime file. Its user interface is custom to this adventure. The scene illustrations, character portraits, and soundtrack remain external files.
