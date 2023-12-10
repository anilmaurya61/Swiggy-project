import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const addMenuItem = async (itemData) => {
    try {
        const restaurantId = itemData.restaurantId; 
        const menuRef = doc(db, "menus", restaurantId);

        const menuSnapshot = await getDoc(menuRef);
        const currentMenuData = menuSnapshot.data();

        const existingItems = currentMenuData?.items || [];

        const updatedItems = [itemData, ...existingItems];

        const updatedMenuData = { ...currentMenuData, items: updatedItems };

        await setDoc(menuRef, updatedMenuData);
    } catch (e) {
        throw e;
    }
}


const deleteMenuItem = async (restaurantId, itemId) => {
    try {
        
        const menuRef = doc(db, "menus", restaurantId);
        const menuSnapshot = await getDoc(menuRef);
        console.log("hii");

        if (menuSnapshot.exists()) {
            const currentMenuData = menuSnapshot.data();

            const existingItems = currentMenuData?.items || [];

            const itemIndex = existingItems.findIndex(item => item.itemId === itemId);

            if (itemIndex !== -1) {
                const updatedItems = [...existingItems.slice(0, itemIndex), ...existingItems.slice(itemIndex + 1)];

                const updatedMenuData = { ...currentMenuData, items: updatedItems };

                await setDoc(menuRef, updatedMenuData);

                console.log(`Item with ID ${itemId} deleted successfully.`);
            } else {
                console.log(`Item with ID ${itemId} not found.`);
            }
        } else {
            console.log(`Menu not found for restaurant ID ${restaurantId}.`);
        }
    } catch (e) {
        throw e;
    }
};


export {deleteMenuItem , addMenuItem }