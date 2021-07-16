import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const [produto, setproduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setproduto(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.Container + " animeLeft"}>
      <Head title={`Ranek | ${produto.nome}`} descricao={produto.descricao} />
      <div className={styles.Images}>
        {produto.fotos.map((foto) => (
          <div key={foto.src}>
            <img className={styles.Img} src={foto.src} alt={foto.titulo} />
          </div>
        ))}
      </div>
      <div className={styles.Informacoes}>
        <h1> {produto.nome} </h1>
        <h1 className={styles.preco}> R$$ {produto.preco} </h1>
        <p>Descrição: {produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
