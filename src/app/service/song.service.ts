import {Injectable} from '@angular/core';
import {Song} from "../model/song";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  playlist: Song[] = [
    {
      id: 'Qzc_aX8c8g4',
      name: 'Dancing with your ghost - Sasha Sloan'
    },
    {
      id: '1MmQUT3TjtI',
      name: 'Lỡ say bye là bye - Chang'
    }
  ];

  constructor() {
  }

  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
