import React, { useState, useEffect} from 'react';
import PrinCard from '../components/PrinCard'
import {getCards} from '../services/CardServices'

function HomeView(){
    const [state, setState] = useState({
        cards: [],
      });

      useEffect(() => {
        getData();
      }, []);
    
    const getData = async () => {
        if (state.cards.length <= 0) {
            const data = await getCards();
            setState({
            ...state,
            cards: data.cards,
            });
        }
    };

    const renderCards = () =>{
        if (state.cards.length > 0) {
            return state.cards.map((card) => (
                <PrinCard key={card._id} name={card.title} photo={card.photo} description={card.description}/>
            ));
          } else {
            return <h3>Cargando...</h3>;
          }
    }

    return <div className="Users" display='flex'> {renderCards()} </div>;
    
};

export default HomeView