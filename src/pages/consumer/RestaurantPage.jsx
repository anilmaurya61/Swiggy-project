
import Header from '../../components/Consumer/Header'
import RestaurantMenu from '../../components/Consumer/RestaurantMenu';
import MenuItem from "../../components/Restaurant/MenuItem";
import { useSelector } from 'react-redux';
function RestaurantPage(){
    const Items = useSelector((state) => state.AddItems.items)

    const data=[
        {
          "addBtn": true,
          "restaurantId": "12345",
          "itemId": "67890",
          "itemName": "Burger",
          "price": 5.99,
          "description": "Classic beef burger with cheese and veggies.",
          "itemImage": "path/to/burger-image.jpg",
          "isVegetarian": false
        },
        {
          "addBtn": true,
          "restaurantId": "12345",
          "itemId": "67891",
          "itemName": "Margherita Pizza",
          "price": 8.99,
          "description": "Traditional Margherita pizza with fresh mozzarella and basil.",
          "itemImage": "path/to/pizza-image.jpg",
          "isVegetarian": true
        },
        {
          "addBtn": true,
          "restaurantId": "12345",
          "itemId": "67892",
          "itemName": "Chicken Pasta",
          "price": 12.99,
          "description": "Creamy Alfredo pasta with grilled chicken.",
          "itemImage": "path/to/pasta-image.jpg",
          "isVegetarian": false
        },
        {
          "addBtn": true,
          "restaurantId": "12345",
          "itemId": "67893",
          "itemName": "Vegetable Salad",
          "price": 7.99,
          "description": "Fresh garden salad with a variety of vegetables.",
          "itemImage": "path/to/salad-image.jpg",
          "isVegetarian": true
        },
        {
          "addBtn": true,
          "restaurantId": "12345",
          "itemId": "67894",
          "itemName": "Chocolate Brownie",
          "price": 4.99,
          "description": "Decadent chocolate brownie with a scoop of vanilla ice cream.",
          "itemImage": "path/to/brownie-image.jpg",
          "isVegetarian": true
        }
      ]
      
    return <>
     <Header/>
     <RestaurantMenu/>
     {Items?.map((item, index) => (
        <MenuItem {...item} addBtn={true} key={index} />
      ))}
    </>
}
export default RestaurantPage;