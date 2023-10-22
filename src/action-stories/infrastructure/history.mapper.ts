import { HistoryCreate } from '../entities/history.entity';
import { ActivityHistoryView } from '../dto/history-view.dto';

export const historyToActivityMapper = async (
  historyCreate: HistoryCreate[],
): Promise<ActivityHistoryView[]> => {
  const userActivities = {};

  for (const el of historyCreate) {
    const userId = el.userId;

    if (!userActivities[userId]) {
      userActivities[userId] = {
        userId: userId,
        actualData: {
          fullName: el.fullName,
          age: el.age,
          changedAt: new Date(el.createdAt),
        },
        oldData: [],
      };
    } else {
      userActivities[userId].oldData.push({
        fullName: el.fullName,
        age: el.age,
        changedAt: new Date(el.createdAt),
      });

      // Обновляем актуальные данные, если текущая запись более новая
      if (
        new Date(el.createdAt) > userActivities[userId].actualData.changedAt
      ) {
        userActivities[userId].actualData.fullName = el.fullName;
        userActivities[userId].actualData.age = el.age;
        userActivities[userId].actualData.changedAt = new Date(el.createdAt);
      }
    }
  }

  // Удаляем первый элемент из старых данных, который является актуальным
  for (const userId in userActivities) {
    if (userActivities.hasOwnProperty(userId)) {
      userActivities[userId].oldData.pop();
    }
  }

  // Преобразуем объекты активностей в массив
  return Object.values(userActivities);
};
