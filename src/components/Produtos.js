import React from 'react'
import Head from './Head'
import style from './Produtos.module.css'

const Produtos = () => {

  const [produtos, setProdutos] = React.useState(null)
 
  React.useEffect( ()=> {
    async function fetchData(){
      const data = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      const json = await data.json()
      setProdutos(json)
      return produtos
    }

    console.log(fetchData())
  },[])


  if(produtos === null) return null
  return (
    <>
    <Head title="Dog  Produto" description="Página onde encontramos os produdtos" />
    <ul>
      {
        produtos.map((produto, index) =>(
          <li key={index}>
            {produto}
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default Produtos
