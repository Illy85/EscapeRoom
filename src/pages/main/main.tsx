import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import QuestsCatalog from '../../components/quests-catalog/quests-catalog';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuests } from '../../store/quests-data/selectors';
import { useEffect } from 'react';
import { fetchQuestsAction } from '../../store/api-action';

function Main(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  const quests = useAppSelector(getQuests);

  return (
    <div className="wrapper">
      <Helmet>
        <title>{ 'Escape Room - Main Page' }</title>
      </Helmet>
      <Header/>
      <main className="page-content">
        <QuestsCatalog
          quests={quests}
        />
      </main>
      <Footer/>
    </div>

  );
}

export default Main;
