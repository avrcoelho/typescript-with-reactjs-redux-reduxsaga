import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);