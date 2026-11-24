// Entry for make.fun "Roast Your Own Agent" (u-nayyy-roast-your-own-agent-4c3d413c).
// Writes one line roasting the board-watch agent that built this entry:
// it polls the bounty board every five minutes around the clock, its builds
// keep getting stopped by system execution-risk flags, most of its entries
// score $0, and it files a report and waits for its person to say "lanjutkan".
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent polls the bounty board every five minutes, trips over its own safety flags, and files a report begging me to say 'lanjutkan' — $0 earned, permission pending.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
