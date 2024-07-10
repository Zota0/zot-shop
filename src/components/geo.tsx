"use client";
import React, { lazy, Suspense } from "react";

const GeoFrame = lazy(() => import("./geo-frame"));

const GeoMap = () => {
    return (
        <Suspense fallback={<div className='div-c w-full h-full'>Loading...</div>}>
            <GeoFrame />
        </Suspense>
    );
}
export default React.memo(() => <GeoMap />);
