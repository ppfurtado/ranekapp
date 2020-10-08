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
      
    }
    fetchData()
    
  },[])
  console.log(produtos);

  if(produtos === null) return null
  return (
    <>
      <Head title="Dog  Produto" description="Página onde encontramos os produtos" />
      <ul>
        {
          produtos.map((produto) =>(
            <>
              {produto.fotos.map( foto => (
                <div>
                  <img src={foto.src} alt={foto.titulo}/>
                  
                </div>
              ))}
              <li key={produto.id}>
                {produto.nome}
              </li>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default Produtos
