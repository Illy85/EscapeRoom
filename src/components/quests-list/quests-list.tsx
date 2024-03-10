import { memo } from 'react';

import { Quests } from '../../types/quest';
import { QuestCardMemo as QuestCard }from '../quest-card/quest-card';

type QuestsListProps = {
  quests: Quests[];
}

function QuestsList({quests}: QuestsListProps): JSX.Element {

  return (
    <div className="cards-grid">
      { quests.map((quest)=> (
        <QuestCard
          key={quest.id}
          {...quest}
        />
      )
      )}
    </div>
  );
}

export const QuestsListMemo = memo(QuestsList);

