import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const addMenuItem = async (itemData) => {
    try {
        const restaurantId = 'lpxif54v'; 
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

export { addMenuItem }