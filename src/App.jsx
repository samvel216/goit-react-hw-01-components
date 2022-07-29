import { User } from 'components/User/User';
import {Statistics} from 'components/Statistics/Statistics'
import {FriendListItem} from 'components/FriendListItem/FriendListItem';
import {Transaction} from 'components/Transaction/Transaction'
import {user,friends,data,transactions} from './data/information';
import './index.css';

export const App = () => {
  return(
     <>
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
  </>);
}
 
