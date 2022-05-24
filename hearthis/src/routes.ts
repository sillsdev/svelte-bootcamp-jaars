import ChooseProject from "./views/ChooseProject.svelte";
import Settings from "./views/Settings.svelte";
import Record from "./views/Record.svelte";
import Check from "./views/Check.svelte";
import Publish from "./views/Publish.svelte";

export default {
  "/": ChooseProject,
  "/publish": Publish,
  "/settings": Settings,
  "/record": Record,
  "/check": Check,
};
