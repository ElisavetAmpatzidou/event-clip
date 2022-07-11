import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import {scale} from "../../library/scale"
import {moveBottom} from "../../library/moveBottom"
import {moveLeft} from "../../library/moveLeft"
import {moveTop} from "../../library/moveTop"
import { opacity } from "../../library/opacity";

const clip = new HTMLClip({
  html,
  css,
  selector: "#root3",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});

clip.addIncident(opacity(1,".container",1),0)
clip.addIncident(scale(0.45,".title",500),500)
clip.addIncident(moveTop("-28%",".title",500),500)
clip.addIncident(moveLeft("-10%",".title",500),500)
clip.addIncident(moveBottom("-30%",".background",500),2500)
clip.addIncident(moveTop("100%",".title",500),2500)


export default clip;
