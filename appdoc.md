http://localhost:9870/city
https://xomato-api.herokuapp.com/api/cityList

http://localhost:9870/restaurant
https://xomato-api.herokuapp.com/api/restaurantList

http://localhost:9870/collection
https://xomato-api.herokuapp.com/api/collectionList

http://localhost:9870/restaurant?cityId=7
https://xomato-api.herokuapp.com/api/restaurantList?cityId=7

http://localhost:9870/restaurant?optionId=3
https://xomato-api.herokuapp.com/api/restaurantList?optionId=3

https://xomato-api.herokuapp.com/api/filter/1?discountId=3
https://xomato-api.herokuapp.com/api/filter/1?cusineId=3
https://xomato-api.herokuapp.com/api/filter/1?rating=4
https://xomato-api.herokuapp.com/api/filter/1?lcost=500&hcost=700

http://localhost:9870/details/1
https://xomato-api.herokuapp.com/api/details/2

http://localhost:7800/api/menuItem 
https://xomato-api.herokuapp.com/api/menu/2
(post)https://xomato-api.herokuapp.com/api/menuItem


https://xomato-api.herokuapp.com/api/orderList
(post)https://xomato-api.herokuapp.com/api/placeOrder
{
    "order_id": 2,
    "name": "Damini",
    "email": "damini@gmail.com",
    "address": "Hno 23,Sector 1",
    "phone": 768768686,
    "cost": 783,
    "productItem":[2,5],
    "status": "Pending"
}
(put)https://xomato-api.herokuapp.com/api/updateOrder/2
{
     "status": "TXN Successful",
     "bank_name": "BOI Bank",
     "date": "01/08/2022"
}
(del)https://xomato-api.herokuapp.com/api/deleteOrder/2



https://xomato-api.herokuapp.com/api/auth/users
(post)https://xomato-api.herokuapp.com/api/auth/register
{
    "name" : "Krish",
    "email": "krish@gmail.com",
    "password" : "12345678",
    "phone" : 8134569846
}
(post)https://xomato-api.herokuapp.com/api/auth/login
{
    "email": "krish@gmail.com",
    "password": "12345678"
}

https://xomato-api.herokuapp.com/api/auth/userInfo
x-access-token   generated token

