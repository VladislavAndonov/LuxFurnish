import { useEffect, useState } from "react";
import * as request from '../../../api/requester.js'

export default function ProductDetails() {
    const [product, setProduct] = useState({});

    useEffect(() =>
    (async () => {
        request.get()
    })
    )
    return (
        <div className="bg-white py-16">
            <h1>HEllo</h1>
        </div>
    );
}