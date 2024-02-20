import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
import { seedRecipes } from './data/seed';
import { useState } from 'react';
import Admin from './pages/admin/Admin';

seedRecipes();

function App() {
  const [page,setPage] =useState('homepage')

  return (
/* <div className="d-flex flex-column appContainer"> */
<div className={`d-flex flex-column ${styles.appContainer}`} >
<Header setPage= {setPage}/>
 { page === 'homepage' && <HomePage/> }
 { page === 'admin' && <Admin /> }
<Footer />

</div>
  )
}

export default App
