import React from 'react'

import { useState } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

import { storage } from "../../firebase";
import { v4 } from "uuid";

export const Upload = () => {
    const [fileUplaod, setfileUplaod] = useState(null);
    const [fileUrls, setfileUrls] = useState([]);

    // const imagesListRef = ref(storage, "images/");
    const uploadFile = async () => {
        if (fileUplaod == null) return;
        const imageRef = ref(storage, `audios/${fileUplaod.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, fileUplaod);
        const url = await getDownloadURL(snapshot.ref);
        setfileUrls((prev) => [...prev, url]);
      
        console.log(url);
      };
      

    return (
        <div className="App">
            <input
                type="file"
                onChange={(event) => {
                    setfileUplaod(event.target.files[0]);
                }}
            />
            <button onClick={uploadFile}> Upload Image</button>

        </div>
    );
}
