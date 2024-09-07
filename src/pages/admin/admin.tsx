import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faSocks,
  faClock,
  faHatCowboySide,
} from "@fortawesome/free-solid-svg-icons";
import "./admin.scss";
import ProductGrid from "./productGrid.tsx";

interface Feature {
  id: number;
  icon: typeof FontAwesomeIcon;
  iconName: React.ComponentProps<typeof FontAwesomeIcon>["icon"];
  title: string;
  description: string;
}


const FileUploader: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            console.log('File selected:', file.name);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
    );
};



const Admin: React.FC = () => {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin</h2>
        <ProductGrid/>
      </div>
    </div>
  );
};

export default Admin;
