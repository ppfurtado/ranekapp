import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import styles from './Produtos.module.css'

const Produtos = () => {

  const [produtos, setProdutos] = React.useState(null)
 
  React.useEffect( ()=> {
    async function fetchData(){
      const data = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      const json = await data.json()
      setProdutos(json)
      
    }
    fetchData()
    
  },[])

  if(produtos === null) return null
  return (
    <>
      <Head title="Ranek | Produtos" description="Página onde encontramos os produtos" />  
      <section className={styles.produtos + ' animeLeft'}>
          {
            produtos.map((produto) =>(
              <Link to={`produto/${produto.id}`} key={produto.id} >
                  <h1>{produto.nome}</h1>
                  <img src={produto.fotos[0].src} alt={produto.fotos.titulo} />
              </Link>
            ))
          }
      </section>
    </>
  )
}

export default Produtos
