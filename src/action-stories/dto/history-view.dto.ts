export type ActivityHistoryView = {
  userId: string;
  actualData: {
    fullName: string;
    age: number;
    changedAt: Date;
  };
  oldData: [
    {
      fullName: string;
      age: number;
      changedAt: Date;
    },
  ];
};
