import React from "react";
import loaderGif from '../assets/Preload/naf-logo-loading.gif'; // adjust path if needed
import { useNavigation } from "./NavigationProvider";

const preloaderStyle = (visible) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "black",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: visible ? "all" : "none",
  opacity: visible ? 1 : 0,
  transition: "opacity 0.5s",
});

export default function Preloader() {
  const { loading } = useNavigation();
  return (
    <div id="preloader" style={preloaderStyle(loading)}>
      <img style={{ width: "160px", height: "160px" }} src={loaderGif} alt="Loading..." className="preloader-gif" />
    </div>
  );
}