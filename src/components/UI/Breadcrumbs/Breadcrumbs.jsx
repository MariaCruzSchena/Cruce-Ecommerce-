import React from 'react'
import style from "./style.module.scss"

const Breadcrumbs = () => {
  return (
    <div className={style.breadcrumbsContainer}>
        <p>Inicio</p>
        <p>/</p>
        <p>Juguetes</p>
        <p>/</p>
        <p className={style.breadcrumbsDiff}>Funko Pop</p>

    </div>
  )
}

export default Breadcrumbs