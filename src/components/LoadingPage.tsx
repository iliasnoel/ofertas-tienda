
'use client'
import React from "react";

export default function LoadingPage() {

    return (
        <>
            <div className="flex items-center" style={{ marginTop: "50px" }}>
                <label className="mr-1">Espere un momento por favor ... </label>
                <img src="/loader.gif" alt="" style={{ width: "30px", height: "30px" }} />
            </div>
        </>
    );

};