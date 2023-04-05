import React, { useState } from 'react';
function HoverMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleMouseEnter() {
    setMenuVisible(true);
  }

  function handleMouseLeave() {
    setMenuVisible(false);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>STORE</span>
      {menuVisible && (
        <div>
        <table className="hover-menu p-5">
            <tbody>
                <tr>
                    <th>Accesories</th>
                    <th></th>
                    <th>Category</th>
                    <th></th>
                    <th>Category</th>
                </tr>
                <tr> 
                    <td>AirPord & Wireless</td>
                    <td>Camera & Video</td>
                    <td>Charging Devices</td>
                    <td>Headphones</td>
                    <td>Mice & Keyboards</td>
                </tr>
                <tr> 
                    <td>AppleCare</td>
                    <td>Cars & Travel</td>
                    <td>Connected Home</td>
                    <td>HealthKit</td>
                    <td>Music Creation</td>
                </tr>
                <tr> 
                    <td>Bags, Shells & Sleeves</td>
                    <td>Cases & Films</td>
                    <td>Device Care</td>
                    <td></td>
                    <td>Networking & Server</td>
                </tr>
                <tr> 
                    <td>Business & Security</td>
                    <td></td>
                    <td>Display & Graphic</td>
                    <td></td>
                    <td></td>
                </tr>                        
                <tr> 
                    <td>Cable & Docks</td>
                    <td></td>
                    <td>FItness & Sport</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table> 
        </div>
      )}
    </div>
  );
};

export default HoverMenu;