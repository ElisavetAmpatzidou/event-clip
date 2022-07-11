import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import scene2 from "./scenes/scene-2";
import scene3 from "./scenes/scene-3";
import scene4 from "./scenes/scene-4";
import initParamsValidationRules from "./initParamsValidationRules";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

clip.addIncident(scene1, 0);
clip.addIncident(scene2, 3000);
clip.addIncident(scene3, 6000);
clip.addIncident(scene4, 9000);