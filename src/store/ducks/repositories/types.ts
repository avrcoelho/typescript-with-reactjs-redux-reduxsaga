/**
 * Actions types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data types
 */
// formato da informacao que vai estar dentro do reducer
export interface Repository {
  id: number
  name: string
}

/**
 * State type
 */
// formato do estado que vai armazernar no reducer
export interface RepositoriesState {
  // como o estado do redux é imutavel, coloca um readonly
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}