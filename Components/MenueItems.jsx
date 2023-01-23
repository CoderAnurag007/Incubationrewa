import React from 'react'
import styles from "../styles/Home.module.css";
function MenueItems(props) {
  return (
   <>
   <div className={`${styles.menutext}`}>
                  {" "}
                  <div >  {props.name}</div> <div>{props.price} rs</div>
                </div>
   </>
  )
}

export default MenueItems