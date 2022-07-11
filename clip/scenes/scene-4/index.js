import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import {scale} from "../../library/scale"
import {moveBottom} from "../../library/moveBottom"
import {moveLeft} from "../../library/moveLeft"
import {moveTop} from "../../library/moveTop"
import {moveRight} from "../../library/moveRight"
import {opacity} from "../../library/opacity"

const clip = new HTMLClip({
  html,
  css,
  selector: "#root4",
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
clip.addIncident(scale(0.39,".title",500),500)
clip.addIncident(moveLeft("-33%",".title",500),500)
clip.addIncident(moveRight("-30%",".background",500),2500)
clip.addIncident(moveLeft("100%",".title",500),2500)


export default clip;
