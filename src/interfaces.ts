export interface ToDoInterface {
    id: number;
    title: string;
    completed: boolean;
};

export interface ItemInterface {
  complete: (id: number) => void;
  remove: (id: number) => void;
  update: (id: number) => void;
  inputText: string;
  todo: ToDoInterface;
}

export interface ListInterface {
  complete: (id: number) => void;
  remove: (id: number) => void;
  update: (id: number) => void;
  inputText: string;
  todos: ToDoInterface[];
}

export interface InputInterface {
  createTodo: (text: string) => void;
  setInputText: (text: string) => void;
  inputText: string;
}
