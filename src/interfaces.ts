export interface ToDoInterface {
    id: number;
    title: string;
    completed: boolean;
};

export interface ItemInterface {
  complete: (id: number) => void;
  remove: (id: number) => void;
  update: (id: number) => void;
  todo: ToDoInterface;
}

export interface ListInterface {
  complete: (id: number) => void;
  remove: (id: number) => void;
  update: (id: number) => void;
  todos: ToDoInterface[];
}

export interface InputInterface {
  createTodo: (text: string) => void;
}
