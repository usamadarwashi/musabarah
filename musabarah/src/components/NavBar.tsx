import { Edit, FolderOpen, Home, Setting2 } from "iconsax-react";


const NavBar: React.FC = () => {
    return (
        <div className="flex justify-around bg-white py-4">
          <Home size="32" color="#88889D" />
          <FolderOpen size="32" color="#88889D" />
          <Edit size="32" color="#88889D" />
          <Setting2 size="32" color="#88889D" />
        </div>
      );
    };

export default NavBar;
