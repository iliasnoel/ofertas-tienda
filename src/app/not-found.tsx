
'use client'

import Link from "next/link";

export const dynamic = 'force-dynamic'; 
export default function NotFound() {

    return (
        <div className="bg-gray-100 p-5 align-middle" style={{marginTop: "5%", marginLeft: "5%"}}>
            <Link className="text-" href="/">
                <p className="text-slate-900">Lo sentimos no es posible atender su solicitud.</p>
                <h1 className="text-slate-900">Error 404 Página no encontrada</h1>
            </Link>
        </div>
    );
}