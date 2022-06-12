import styles from '../css/FriendListItem.module.css';
export const FriendListItem = ({friends}) => {
return (
<ul className= {styles.friendList}>
{friends.map(element =>  (<li className= {styles.item} key = {element.id}>
    {element.isOnline === true ? (
      <span className = {styles.isOnline}></span>
    ) : (<span className= {styles.noOnline}></span> )}
  <img className={styles.avatar} src= {element.avatar} alt="User avatar" width="48" />
  <p className= {styles.name}>{element.name}</p>
</li>))}
</ul>)}