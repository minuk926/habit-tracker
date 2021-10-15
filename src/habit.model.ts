export interface HabitTotCnt {
  totalCount: number;
}

export interface IHabitAdd {
  onAdd: (name: string) => void;
}

export interface HabitProps extends IFunc, IHabitAdd {
  habits: IHabit[]; //[habit: IHabit];
  onAdd: (name: string) => void;
  onReset: () => void;
}

export interface HabitProp extends IFunc {
  habit: IHabit;
}

export interface IHabit {
  id: number;
  name: string;
  count: number;
}

interface IFunc {
  onIncrement: (habit: IHabit) => void;
  onDecrement: (habit: IHabit) => void;
  onDelete: (habit: IHabit) => void;
}

// export onIncrement: (habit: IHabit) => void;
// export onDecrement: (habit: IHabit) => void;
// export onDelete: (habit: IHabit) => void;
// export onAdd: (name: string) => void;
// export onReset: () => [IHabit];
