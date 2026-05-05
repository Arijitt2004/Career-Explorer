import React from "react";
import "../App.css";

const Loader = () => {
    return (
        <div className="h-full w-full fixed z-[999] top-0 flex flex-col items-center justify-center bg-black animate-text">
            <h1 className="animated-text delay-1">WELCOME</h1>
            <h1 className="animated-text delay-2">To</h1>
            <h1 className="animated-text delay-3">CARRER-EXPLORER</h1>
        </div>
    );
};

export default Loader;
