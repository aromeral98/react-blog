This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Only for test use,there is no security measures.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

You must create a json archive for database with this structure on an outside directory,with the name of user.json and execute json-server --watch user.json on port3000
and next use npm start on port 3001

{
  "users": [
    {
      "username": "test",
      "email": "test@gdasfasfa.com",
      "password": "123456",
      "confirmPassword": "123456",
      "img": "https://www.dtest.org.es",
      "created_at": "2022-01-04T20:52:50.847Z",
      "id": 2
    }
    ],"posts": [
     {
      "id": 8,
      "author_id": 1,
      "title": "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci ve",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
      "img": "https://365enfoques.com/wp-content/uploads/2017/09/enfocar-un-retrato.jpg",
      "published": "1st January, 2023",
      "author": "test"
    }]
   }
