import styles from './User.module.css';
import PropTypes from 'prop-types';
export const User = ({username, tag, location, avatar, stats }) => {
return (
    <div className = {styles.profile}>
  <div className=   {styles.description}>
    <div className = {styles.imgcontainer}>
    <img
      src= {avatar}
      alt="User avatar"
      className= {styles.avatar}
    />
    </div>
   
    <p className= {styles.name}>{username}</p>
    <p className= {styles.tag}>{tag}</p>
    <p className= {styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className= {styles.item}>
      <span className= {styles.label}>Followers</span>
      <span className= {styles.quantity}>{stats.followers}</span>
    </li>
    <li className= {styles.item}>
      <span className= {styles.label}>Views</span>
      <span className= {styles.quantity}>{stats.views}</span>
    </li>
    <li className= {styles.item}>
      <span className= {styles.label}>Likes</span>
      <span className= {styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
);
};
User.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object
}