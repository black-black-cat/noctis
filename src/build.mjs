import hibernus from "./workbench/hibernus.mjs";
import noctis from "./workbench/noctis.mjs";
import { buildAllThemes } from "./buildAllThemes.mjs";

export const THEMES = [
   { hibernus: hibernus },
   { noctis: noctis }
];


buildAllThemes(THEMES);
