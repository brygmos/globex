import './App.css'
import Search from "./components/search/Search.tsx";
import CardsContainer from "./components/cardsContainer/cardsContainer.tsx";
import {useEffect, useState} from "react";
import {SERVER_URL} from "./const/const.ts";
import {Card as cardType} from "./types/index.ts";
import Modal from "./components/Modal/Modal.tsx";
import FullCard from "./components/FullCard/FullCard.tsx";

function App() {
  const [cards, setCards] = useState<cardType[]>([])
  const [term, setTerm] = useState<string>('')
  const [activeCard, setActiveCard] = useState<cardType>({} as cardType)
  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
      fetch(SERVER_URL + '?' + new URLSearchParams({
          term: term
      }))
          .then(res => res.json())
          .then(data => setCards(data))
  }, [term])

    function setModal (card: cardType) {
      setActiveCard(card)
      setModalActive(true)
    }

  return (
      <main className="container">
        <Search onChange={(query) => {setTerm(query)}}/>
        <CardsContainer cards={cards} onClick={(card) => {setModal(card)}}/>
          <Modal setModalVisibility={setModalActive} visible={modalActive}>
              <FullCard card={activeCard}/>
          </Modal>
      </main>
  )
}

export default App
