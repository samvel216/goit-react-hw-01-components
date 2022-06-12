import styles from '../css/Statistics.module.css';
export const Statistics = ({title, stats}) => {
  console.log(title);
  console.log(typeof title);
return (
<section class= {styles.statistics}>
  <div class = {styles.listContainer}>
    {title !== undefined && (
        <h2 class={styles.titl}>{title}</h2>
    )}
  <ul class= {styles.statList}>
  
  {stats.map(stat => 
  (<li class={styles.item} key= {stat.id}>
   <span class={styles.label}>{stat.label}</span>
   <span class={styles.percentage}>{stat.percentage}</span>
 </li>
  ))}
  </ul>
  </div>
</section>
)
}

