import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, name: 'This Application'},
      {id: 2, name: 'GMAT'},
      {id: 3, name: 'Interview Preparation'},
      {id: 4, name: 'Communication'},
      {id: 5, name: 'Book'}
    ];
    return {heroes};
  }
}
