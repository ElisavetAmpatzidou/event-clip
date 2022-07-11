import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import {scale} from "../../library/scale"
import {moveBottom} from "../../library/moveBottom"
import {moveLeft} from "../../library/moveLeft"
import {moveTop} from "../../library/moveTop"

const clip = new HTMLClip({
  html,
  css,
  selector: "#intro",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});

clip.addIncident(moveLeft("0%",".title",200,"@stagger(0,150)"),2200)
clip.addIncident(moveTop("0%",".date",200,"@stagger(0,150)"),2300)

export default clip;
