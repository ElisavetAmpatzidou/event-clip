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
  selector: "#root1",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    event: "@initParams.event",
  },
});

clip.addIncident(scale(0.45,".title",500),500)
clip.addIncident(moveBottom("-28%",".title",500),500)
clip.addIncident(moveLeft("-10%",".title",500),500)
clip.addIncident(moveTop("-30%",".background",500),2500)
clip.addIncident(moveBottom("100%",".title",500),2500)


export default clip;
