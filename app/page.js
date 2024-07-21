// pages/index.js
"use client";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./components/LeafletMap"), {
  ssr: false, // Disable server-side rendering for this component
});

const HomePage = () => {
  return (
    <div>
      <h1>Lims Vehicle Map</h1>
      <LeafletMap />
    </div>
  );
};

export default HomePage;
