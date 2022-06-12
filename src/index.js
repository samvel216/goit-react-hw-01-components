import React from 'react';
import ReactDOM from 'react-dom/client';
import { User } from 'components/User';
import {Statistics} from 'components/Statistics'
import {FriendListItem} from 'components/FriendListItem';
import {Transaction} from 'components/Transaction'
import {user,friends,data,transactions} from './information';
import './index.css';
console.log(user);
console.log(friends);
console.log(data);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User
    username = {user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />
     <Statistics stats={data} />
   <Statistics title="Upload stats" stats={data}/>
  
   <FriendListItem
   friends = {friends}
   />
   <Transaction
   items = {transactions}
   />
  
  </React.StrictMode>
);