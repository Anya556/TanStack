import { ICreateTodo, ITodo } from '../app.interface';
import axios from 'axios';

class TodoService {
  private URL = 'https://jsonplaceholder.typicode.com/todos';

  async getAll() {
    return axios.get<ITodo[]>(`${this.URL}/?_start=0&_limit=6`);
  }
  async getById(id: string) {
    return axios.get<ITodo>(`${this.URL}/${id}`);
  }
  async create(title: string){
    return axios.post<any,any, ICreateTodo>(this.URL, {
      title,
      userId: 1,
      completed: false,
    } )
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoService();
