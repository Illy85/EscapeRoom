# Escape Room React App

Una piattaforma interattiva per Escape Room, dove gli utenti registrati possono accedere a varie missioni in diverse città, con orari precisi selezionabili su una mappa interattiva. Le missioni sono disponibili in diversi livelli di difficoltà (facile, medio, difficile) e categorie (come horror, avventura, mistica, ecc.). Di solito partecipano più persone, e solo gli utenti loggati hanno accesso alle missioni prenotate. Sviluppato inizialmente nel 2023 come progetto di apprendimento, aggiornato nel 2025 con dipendenze moderne (React 19, Vite 7) per prestazioni e accessibilità migliorate.

## Caratteristiche
- **Missioni interattive**: Enigmi e sfide in città reali e validazioni in tempo reale tramite React Hook Form.
- **Mappa interattiva**: Selezione di missioni su mappa (con Leaflet), visualizzazione di orari precisi e prenotazioni.
- **Livelli di difficoltà**: Opzioni facile, medio, difficile per adattarsi a tutti i giocatori.
- **Categorie tematiche**: Horror, avventura, mistica e altro, per esperienze personalizzate.
- **Partecipazione multipla**: Supporto per gruppi, con tracking del progresso condiviso.
- **Accesso riservato**: Login per visualizzare e prenotare missioni esclusive; gestione stato con Redux.
- **UI modulare**: Navigazione fluida con React Router e feedback visivo con React Toastify.

## Demo Live
[Vedi la demo live su Vercel](https://escape-room-959ekij1q-ilies-projects-94f47317.vercel.app)

## Tech Stack
| Frontend | Backend/Tools | Testing |
|----------|---------------|---------|
| React 19, TypeScript | Vite (build), Axios (API mocks) | Vitest, React Testing Library |
| Redux Toolkit, React Router | React Hook Form, Leaflet (mappa) | ESLint, Prettier |
| CSS Modules | Faker (dati mock) | |

## Installazione & Avvio
1. Clona il repository:  

git clone https://github.com/Illy85/EscapeRoom.git

cd EscapeRoom

2. Installa le dipendenze:  

npm install

3. Avvia il server di sviluppo:  

npm start

Apri http://localhost:5173 nel browser.

## Contributi
Forka il repository, crea un branch (es. `feat/nuova-missione`), aggiungi le modifiche e apri una Pull Request. Feedback benvenuto!

## Licenza
MIT License - vedi [LICENSE](LICENSE) per i dettagli.

---
Creato da Illy85 | [LinkedIn](https://www.linkedin.com/in/ilie-mardari-641993220/) | Aggiornato: Settembre 2025