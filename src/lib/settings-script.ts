import { SETTINGS_KEY, TEXT_SIZE_PX } from "@/learning/settings";

// Runs in <head> before the first paint (inline, from the root layout) so a page never flashes the wrong
// theme or text size: Night → `dark` class, text size → root font size, Learn in → `data-learn-in`
// (CSS hides the Telugu half of each label until React takes over). Same key as the settings store.
export const SETTINGS_SCRIPT = `(function(){try{var d=document.documentElement,s={};try{s=JSON.parse(localStorage.getItem("${SETTINGS_KEY}")||"{}")||{}}catch(e){}var t=s.theme,dark=t==="dark"||(t!=="light"&&typeof matchMedia==="function"&&matchMedia("(prefers-color-scheme: dark)").matches);d.classList.toggle("dark",dark);var z=${JSON.stringify(TEXT_SIZE_PX)}[s.textSize];if(typeof z==="number")d.style.fontSize=z+"px";d.setAttribute("data-learn-in",s.learnIn==="en"?"en":"te")}catch(e){}})()`;
