import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Produto.module.css'

const Produto = () => {

  const [produto , setproduto] = React.useState([])

  const { id } = useParams()

  React.useEffect(()=> {
    async function fetchProduto(url){
      const response = await fetch(url)
      const json = await response.json()
      setproduto(json)
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  },[id])

  return (
    <div>
      <h1> {produto.id} </h1>  
    </div>
  )
}

export default Produto
