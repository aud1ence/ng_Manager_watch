import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: Dictionary[] = [
    {
      id: 1,
      word: 'rhetoric',
      mean: 'Hùng biện'
    },
    {
      id: 2,
      word: 'factory',
      mean: 'Nhà máy'
    },
    {
      id: 3,
      word: 'The role',
      mean: 'Vai trò'
    },
    {
      id: 4,
      word: 'rest',
      mean: 'Nghỉ ngơi, số còn lại'
    },
    {
      id: 5,
      word: 'agreement',
      mean: 'Thỏa thuận'
    },
    {
      id: 6,
      word: 'activity',
      mean: 'Hoạt động'
    },
    {
      id: 7,
      word: 'opposite',
      mean: 'Tác dụng'
    },
    {
      id: 8,
      word: 'seem',
      mean: 'Có vẻ'
    },
  ]
  constructor() { }

  getAll() {
    return this.words
  }

  showDetail(id: number) {
    return this.words.find(item => item.id === id);
  }
}
