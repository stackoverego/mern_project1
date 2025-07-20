
# 🚀 MERN Stack Notes & Setup Guide

## 📦 Module Systems  
✅ **ES6**  
```js
import something from 'module';
export default something;
```

✅ **CommonJS**  
```js
const something = require('module');
module.exports = something;
```

---

## 🌐 Step 1: MongoDB Cluster Setup  
1. Go to MongoDB Atlas and create the cluster.  
2. Open **MongoDB Compass** for connection and use the **"Connection String"** to connect. 👍🔥  

### ❗❗❗ TLS/SSL Connection Error Fix ❗❗❗  
📌 We were unable to connect to the server initially.  
📺 We watched a video and followed these steps:

🔹 Open CMD and run this command to get your IP:  
```bash
curl -4 ifconfig.me
```

🔹 Copy the IP and add it to **Network Access** in Atlas.

🔹 Tried to connect again → Got `bad auth: authentication failed` 🛑  
👉 This means wrong login details.

✅ **Fix:**  
- Created a new user under **Database Access**  
- Added default IP `0.0.0.0/0` to allow all requests from local PC

🟢 **So the first error was due to missing IP in Atlas (SSL/TLS)**  
🟢 **Second error was due to wrong user credentials**

✅ **Now everything works fine!** 🔥

---

## 🗂️ Step 2: Create DB and Collection  
- DB Name: `mern`  
- Collection Name: `user`  
✅ Done with the **online MongoDB connection**

---

## 📁 Step 3: VS Code Setup  
1. Create a folder named `Server`.  
2. Move inside Server folder and run:  
```bash
npm init -y


3. Install dependencies:  
```bash
npm i cors express mongoose nodemon
```

---

## 📄 Step 4: Create Files  
📌 Inside `Server` folder, create `index.js`

📌 In `package.json`, add:  
```json
"scripts": {
  "start": "nodemon index.js"
}
```

📌 Now connect MongoDB in `index.js`  
```js
mongoose.connect("your_connection_string/mern?");
```

✅ **Connection successful**

📌 Manually inserted one user in Compass with `name` and `age`

---

## 📡 Step 5: Create GET User API  
Using:  
```js
app.get("/getUsers", (req, res) => {
  // fetch from DB
});
```

---

## 🧬 Step 6: Mongoose Model  
1. Create folder `models` inside `Server`  
2. Create `Users.js` inside it

📌 Import mongoose:  
```js
const mongoose = require('mongoose');
```

📌 Define schema:  
```js
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
```

📌 Create model and export:  
```js
module.exports = mongoose.model("user", UserSchema);
```

🧠 **Reminder:** Collection names in MongoDB are **always plural**, even if you name it singular.

---

## 📥 Step 7: Insert & Retrieve Users  
📌 Inserted user manually via Compass  
📌 Used `find()` method to fetch users via GET API at:  
```
http://localhost:3001/getUsers
```

---

## ✍️ Step 8: Create POST API (Add User)  
1. Use `req.body` to receive data  
2. Create new user:  
```js
const newUser = new UserModel(user);
newUser.save().then(res => {
  // return res
});
```

📌 Use `user` (not `newUser`) to send back cleaner data without `_id`

---

## 🔥 NEW THINGS LEARNED 🔥

### 🧹 Delete User API  
Learned how to delete a user using `findOneAndDelete()` in backend.

📌 While sending delete request:  
```js
axios.delete("route",{data: {name:name}});
```

📌 In backend, receive via:  
```js
req.body.name
```

---

### ⚡ Vite React App Setup  
```bash
npm create vite@latest
```
OR  
```bash
npm init vite
```

Then:  
```bash
cd folderName
npm install
npm run dev
```

🧹 Clean up default files: `App.css`, `App.jsx`, `index.css`

---

## ⚙️ React: useEffect = Smart Watcher  
- Triggers when value/API/dependency changes  
- Empty dependency `[]` → runs **only once**

---

## 🧠 State & Forms  
```js
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [users, setUsers] = useState([]);
```

📌 Two forms:  
- One to **add** user  
- One to **delete** user

📌 Two functions for forms:  
- `submitForm` for SUBMIT  
- `deleteUser` for DELETE

---

## 🔁 useEffect to Fetch Users  
```js
useEffect(() => {
  axios.get("http://localhost:3001/getUsers")
    .then(users => setUsers(users.data))
    .catch(err => console.log(err));
}, []);
```

❗ Always use `users.data` in `setUsers()` 🔥

---

## 📤 Submit Function (POST)
```js
axios.post("route", { name, age })
  .then(user => console.log(user))
  .catch(err => console.log(err));
```

## ❌ Delete Function (DELETE)
```js
axios.delete("route", { data: { name } })
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

---

## 🖥️ Display Users with `map()`
```jsx
users.map(user => {
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
    </div>
  );
});
```

---

✅ ✅ ✅ **Complete Setup Ready!** 🚀
