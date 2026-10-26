# 🎃 Special Halloween 🎃 Throw Your Threads In The Air — asset map

Keep `index.html` beside the `assets/` folder. The HTML keeps its artwork and soundtrack external. Every image and audio file in this package has a UUID filename; `asset-map.json` maps each UUID back to its source name and checksum. The estate map is drawn in inline SVG/CSS as a two-page Spark field grimoire, with moving character trails and role-scaled educational notes, so it adds no separate image asset.

Character portraits are transparent, hand-inked WebP cutouts with a shared plum, indigo, and antique-gold treatment that matches the room illustrations. Gentle portrait drift and speaker pulses are CSS-driven and respect reduced-motion preferences. Scene hotspots summon an illustrated infernal action wheel: layered cartoon flame tongues lick around an engraved sigil, glowing embers drift at the rim, and each action uses a hand-drawn icon medallion. The flame shapes deform independently instead of relying on a generic glow pulse. Available destinations glow as directional arrows over each illustration. The case file looks like Edda’s spiral-bound, hand-written field notebook, complete with doodles and rotating margin notes. The three illustrated investigator cards set the learning route, and the selected investigator appears in the scene. Every visit opens the illustrated introduction and character choice; beginning a new case starts outside the Outer Gates, while continuing a save is an explicit choice.

The website copy uses a temporary `@main` asset URL until this package is committed; pin it to the asset commit before publishing.

The opening title is a hand-painted, transparent blood-red lettering plate with a left-to-right reveal. Two broad, separately illustrated ember-lit pumpkin spirits float and somersault at the frame edges, each with a distinct twisted-stem silhouette and carved expression. Their textured ink-and-paint finish matches the haunted-estate scenes.

## Artwork

The ten core story rooms, beginning at the illustrated Outer Gates, and seven optional educational branches each have a separate, original cartoon background. The investigator-select screen uses the new gate illustration as its backdrop. The Library teaches Spark’s driver/executor and task model; the Bathroom teaches condition-variable wait/notify reasoning through a steam-reveal interaction. The `asset-map.json` catalogues every UUID-named artwork and soundtrack file.

| Scene | UUID asset |
|---|---|
| Outer Gate · The Last Bell | assets/83923b5a-2248-4af6-9c2e-869d5bca9bca.webp |
| Hand-painted blood-red title lettering | assets/ui/d02200a7-52d0-4e5f-99e9-37e40c8f113e.webp |
| Broad haunted pumpkin lantern | assets/props/1c951beb-b595-4fc2-868f-18f0c3475bc2.webp |
| Broad haunted pumpkin lantern · right corner | assets/props/f2b980ca-6b41-4c67-9cc3-14c8764fa6c1.webp |
| Tall haunted pumpkin lantern | assets/props/56138b9b-9b34-455a-903e-f8cff780d8bb.webp |
| Front Hall and title card | assets/a731b910-abfa-4c23-a863-e4dc7074e62a.webp |
| Portrait Gallery | assets/62f21364-4fcd-49e0-9e49-d6812e678c50.webp |
| Jekyll & Hyde laboratory | assets/d093d052-dbfe-490e-a6e8-896f58e3b5c7.webp |
| Waiting Room / Condition Knot | assets/913a82bc-b1f6-47e9-9303-73c98f629924.webp |
| Executor Workshop | assets/8f16e7f7-cdd8-44c1-bd00-5efe4e12b0a6.webp |
| Cemetery of Almost-OOMs | assets/004e69ed-0e86-4a11-a25e-529663be2cb8.webp |
| Project Loom carnival | assets/5f617c29-cebe-496c-b859-0d02ebc487d6.webp |
| Mirror Chapel | assets/5fdd7fc5-1938-42a4-b9fe-eb42cb5216cd.webp |
| Duplicate Delivery Ledger | assets/a3b00847-549a-4967-b506-de6e8b470506.webp |
| Moonlit Courtyard · The Uncounted Choir | assets/c1a188d8-3235-4941-a506-0d88dacacc2d.webp |
| Haunted Conservatory · The Rootling | assets/140f7afc-c38b-4a8d-acc6-a0a5d131b742.webp |
| Dead Orchard · The Many-Handed Scarecrow | assets/0c50ca4f-6f8f-4543-a8b3-7de008669f9b.webp |
| Boiler Crypt · The Soot-Hound | assets/411e5cbb-83e1-4e49-9fcc-dfae90b60d12.webp |
| Clocktower Attic · The Hollow Bell-Ringer | assets/e3d5540b-8911-4c0c-a2f9-825c968ab1d3.webp |
| Library · The Archive of Unfinished Things | assets/bc179a42-4ba6-4a8e-8bbf-944f12b70672.webp |
| Bathroom · The Message Beneath the Steam | assets/c52a8ded-2674-4937-a689-f886aaf2f2c7.webp |
| Illustrated character portraits | assets/characters/<UUID>.webp |
| Uncounted Choir character cutout | assets/characters/22f3bc8a-7f31-4816-ac22-91c09956633a.webp |
| Ada NotFound · spectral librarian | assets/characters/eeb0c0a8-849a-44cf-92b0-9e651dd7e4c4.png |
| Madame Condensation · bath attendant | assets/characters/e56b3d2a-5108-4bb2-b836-266290e0af57.png |
| Edda Vale · recorded testimony | assets/characters/7bb34c39-536f-4297-af1e-99717501c16f.svg |

## Soundtrack cues

The supplied soundtrack is cued by room, puzzle, character conversation, jump scare, and ending. It starts after the player chooses an illustrated investigator and enters the Outer Gates. The in-game music button and volume slider remain available throughout. The original track title is retained below; the UUID-to-source mapping is in `asset-map.json`.

| Story beat | Audio file | Supplied track title |
|---|---|---|
| Outer Gates · The Last Bell | `assets/audio/f8d4e3dc-989c-4f49-a5e2-b9d9f66030b7.mp3` | 10 — Museum Threshold / Crossing Family — 1 |
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
| Library archive | `assets/audio/0402facf-3cf5-413a-99b9-550e5142609b.mp3` | 15 — Museum Human Quiet — 1 |
| Ada NotFound conversation | `assets/audio/fe630473-9075-4dff-ab0f-e37be616fa9c.mp3` | 13 — Field Access / Resonance Test — 1 |
| Ada’s book-catalogue puzzle | `assets/audio/1c660fb5-b1ec-44d6-b0b4-ec187e259e56.mp3` | 13 — Field Access / Resonance Test — 2 |
| Bathroom and hot-water reveal | `assets/audio/f8d4e3dc-989c-4f49-a5e2-b9d9f66030b7.mp3` | 10 — Museum Threshold / Crossing Family — 1 |
| Condition-variable mirror puzzle | `assets/audio/e3109065-509e-4356-bf68-fb92883fa169.mp3` | 24 — Dama Accounting Main Puzzle — 1 |
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

## Point-and-click props

The room props are separate transparent cartoon illustrations so the player can drag, push, pull, lift, or tilt an object as part of the investigation. Only Jekyll's laboratory trolley and the courier handcart have wheels; the other puzzles use a chair, bell rope, pantry door, crate, grave marker, trapdoor, and curtain.

| Room | UUID prop | Interaction |
|---|---|---|
| Front Hall | `assets/props/a7f2fb0e-d8a8-4e7c-9669-601e79ee479d.webp` | Push the heavy chair |
| Portrait Gallery | `assets/props/8de60f26-0eca-4c3c-bb16-1c520d4485f3.webp` | Pull the scheduler bell rope |
| Jekyll & Hyde Laboratory | `assets/props/e148a0e0-4083-4baf-97b8-6b5882bd75cd.webp` | Push the trolley |
| Waiting Room | `assets/props/f01fd045-ff0a-41ce-bc7c-155e24cb9311.webp` | Push the pantry door |
| Executor Workshop | `assets/props/4806ba40-a99f-48d2-a58e-90b4f686f123.webp` | Push the crate |
| Cemetery | `assets/props/6762aab1-0401-4dba-a53b-b8b6986a0848.webp` | Pull and tilt the grave marker |
| Project Loom Carnival | `assets/props/e5cd0d52-6847-4157-b953-14e0051dd72e.webp` | Lift the trapdoor |
| Mirror Chapel | `assets/props/fe6ee59b-e24c-4083-884c-0474f24feac9.webp` | Pull the curtain |
| Duplicate Delivery Ledger | `assets/props/3bce8b07-79cf-460f-8d08-7905884068e9.webp` | Push the handcart |
