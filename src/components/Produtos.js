import React from 'react'
import style from './Produtos.module.css'

const Produtos = () => {

  React.useEffect( ()=> {
    async function fetchData(){
      const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      console.log(response);
    }
    fetchData()
    console.log()
  },[])

  return (
    <>
    <h2>Hello Produtos</h2>
    </>
  )
}

export default Produtos
