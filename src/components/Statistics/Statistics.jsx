import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({title, stats}) => {
return (
<section className= {styles.statistics}>
  <div className = {styles.listContainer}>
    {title && (
        <h2 className={styles.titl}>{title}</h2>
    )}
  <ul className= {styles.statList}>
  
  {stats.map(({id,label,percentage}) => 
  (<li className={styles.item} key= {id}>
   <span className={styles.label}>{label}</span>
   <span className={styles.percentage}>{percentage}%</span>
 </li>
  ))}
  </ul>
  </div>
</section>
)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
}