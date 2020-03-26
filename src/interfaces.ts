export interface ToDoInterface {
    id: number;
    title: string;
    completed: boolean;
};

export interface ItemInterface {
  complete: (id: number) => void;
  remove: (id: number) => void;
  todo: ToDoInterface;
}

export interface ListInterface {
  complete: (id: number) => void;
  remove: (id: number) => void;
  todos: ToDoInterface[];
}
