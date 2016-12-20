import { action, observable } from 'mobx'
import MarvelCharacters from '../actions/MarvelCharacters'

export default class UiState {
  @observable card = []

  @observable filter = ''
  
  @action init = (obj, data) => this[`${obj}`] = data
}