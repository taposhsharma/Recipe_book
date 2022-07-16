
import Styles from './Recipe.module.css'
 
function Recipe({title,ingredients,calories,image}){
return(
    <div className={Styles.recipe}>
<h1>{title}</h1>
<ol>
    {ingredients.map((ingre,idx)=>(<li key={idx}>{ingre.text}</li>))}
</ol>
<p>
    {calories}
</p>
<img className={Styles.image } src={image} alt="" />
    </div>
)
}
export default Recipe