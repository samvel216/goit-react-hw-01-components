import styles from '../css/FriendListItem.module.css';
export const FriendListItem = ({friends}) => {
return (
<ul class= {styles.friendList}>
{friends.map(element =>  (<li class= {styles.item} key = {element.id}>
    {element.isOnline === true ? (
      <span class= {styles.isOnline}></span>
    ) : (<span class= {styles.noOnline}></span> )}
  <img class={styles.avatar} src= {element.avatar} alt="User avatar" width="48" />
  <p class= {styles.name}>{element.name}</p>
</li>))}
</ul>)}