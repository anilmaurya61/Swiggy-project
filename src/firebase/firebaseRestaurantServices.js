import { doc, setDoc} from "firebase/firestore";
import { db } from './firebaseConfig'

async function addMenuItem(menuItem) {
    try {
        await setDoc(doc(db, "menus", menuItem.restaurantId), menuItem);
        console.log('Menu item added to Firestore successfully!');
    } catch (error) {
        console.error('Error adding menu item to Firestore:', error);
    }
}

export { addMenuItem };