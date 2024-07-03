import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
function FriendsList({friends}) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <span>😍</span>
          {friend.name}
          {friend.balance > 0 ? (
            <p className="green">
              {friend.name} owe {friend.balance}
            </p>
          ) : (
            ""
          )}
          {friend.balance < 0 ? (
            <p className="red">you owe {friend.balance}</p>
          ) : (
            ""
          )}
          {friend.balance === 0 ? <p className="">even</p> : ""}
          <Button>Select</Button>
        </li>
      ))}
    </ul>
  );
}

function AddFriends() {
  const [friendName, setFriendName] = useState('');
  // // const [icon, setIcon] = useState('🧳');

  function handleSubmit(e)  {
    console.log("submitted" + e);
    e.preventDefault();

   
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: {friendName},
      balance: 0,
    };
 console.log( newFriend);
    // onAddNewFriend(newFriend);
  }
  return (
    <form className="form-add-friends" onSubmit={handleSubmit}>
      <label>Name</label>
      <input 
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>Icon</label>
      <input id="icon" type="text" />
    </form>
  );
}

function BillSplit() {
  return <form className="form-split-bills">split bills</form>;
}


export default function App() {
  const [friends, setFriends] = useState([initialFriends])

  // function AddNewFriend(friend) {
  //   setFriends((friends) => [...friends, friend]);
  // }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        <AddFriends/>
        <Button>Add Friends</Button>
      </div>
      <BillSplit />
    </div>
  );
}