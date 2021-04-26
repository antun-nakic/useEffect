import React, { useState, useEffect } from "react";
import Pjesma from "./Pjesma";

let nacinPromjene = "";

const useEffectMaster = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [ListaPjesama, setListaPjesama] = useState([]);

  useEffect(() => {
    noviUpit();
  }, []);

  useEffect(() => {
    console.log(nacinPromjene);
    document.title = nacinPromjene;
  }, [ListaPjesama]);

  const noviUpit = (event, searchTerm = "moje") => {
    if (event) {
      searchTerm = event.target.value;
    }

    fetch(`https://api.lyrics.ovh/suggest/${searchTerm}`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error("Nisam dohvatio podatke");
        }
      })
      .then((data) => data.data)
      .then((podaci) => {
        let novoStanje = podaci.map((clan) => {
          return [clan.title, clan.album.cover];
        });
        console.log("Iscrtavam novo stanje");
        console.log(novoStanje);
        nacinPromjene = "Novo stanje nastalo dohvatom podataka sa servera";
        setListaPjesama(novoStanje);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.error("Error:", error);
      });
  };

  const izbaci = (kljuc) => {
    setListaPjesama(ListaPjesama.filter((pjesma, index) => index !== kljuc));
    nacinPromjene = "Novo stanje nastalo izbacivanjem elementa iz liste";
  };

  //const aaa = false;
  const aaa = "Dobra večer";
  const nekaVarijabla = aaa || "Dobar dan";
  const nekaDrugaVarijabla = isLoading && "Dobar dan, trenutno se učitaje APP";

  const postoji = true;

  const pokazi = () => {
    console.log(nekaVarijabla);
    console.log(nekaDrugaVarijabla);
  };

  if (isLoading) {
    return (
      <div onClick={() => pokazi()}>
        <p>Učitaju se podaci...</p>
        <p>{nekaDrugaVarijabla}</p>
        {postoji ? nekaVarijabla : nekaDrugaVarijabla}
      </div>
    );
  } else if (isError) {
    return (
      <div>
        <input type='text' onChange={(event) => noviUpit(event)}></input>
        <p>Nema rezultata za traženi pojam!</p>
      </div>
    );
  } else {
    return (
      <div>
        <input type='text' onChange={(event) => noviUpit(event)}></input>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
          {ListaPjesama.length ? (
            ListaPjesama.map((pjesma, index) => {
              return (
                <Pjesma
                  key={index}
                  slika={pjesma[1]}
                  naziv={pjesma[0]}
                  funkcija={(kljuc) => izbaci(kljuc)}
                  param={index}
                />
              );
            })
          ) : (
            <p>Nema rezultata za traženi pojam!</p>
          )}
        </div>
      </div>
    );
  }
};

export default useEffectMaster;
