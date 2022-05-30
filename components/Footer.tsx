import React from "react";
import {VercelBanner} from "./VercelBanner";

export const Footer = () => (
    <footer style={{
        color: "gray",
        position: "relative",
        bottom: 0,
        padding: '0 10px',
        top: '-30px',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <VercelBanner/>
    </footer>
);
