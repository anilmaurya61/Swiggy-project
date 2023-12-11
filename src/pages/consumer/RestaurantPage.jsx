
import Header from '../../components/Consumer/Header'
import RestaurantMenu from '../../components/Consumer/RestaurantMenu';
import MenuItem from "../../components/Restaurant/MenuItem";
import { useSelector } from 'react-redux';
function RestaurantPage(){
    const Items = useSelector((state) => state.AddItems.items)

    return <>
     <Header/>
     <RestaurantMenu/>
     {Items?.map((item, index) => (
        <MenuItem {...item} addBtn={true} key={index} />
      ))}
    </>
}
export default RestaurantPage;