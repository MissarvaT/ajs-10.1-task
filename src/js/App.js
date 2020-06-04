import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => json(response)).catch((error) => `Error: ${error}`).then((result) => JSON.parse(result));
  }
}
