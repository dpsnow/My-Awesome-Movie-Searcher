import { FETCH_MOVIES, SET_FAV_MOVIE, ADD_SEARCH } from './action-types';
import { mountMovies, changeFavoriteMovie, addSearchValues } from './handlers';

const initState: RootStoreT = { movies: new Map(), search: { values: { genre: '', text: '' } } };

const actionHandler = new Map<string, any>([
    [FETCH_MOVIES, mountMovies],
    [SET_FAV_MOVIE, changeFavoriteMovie],
    [ADD_SEARCH, addSearchValues],
    [
        'DEFAULT',
        (state: RootStoreT) => {
            console.log('reducer DEFAULT');
            return { ...state };
            // return initState;
        },
    ],
]);

export function rootReducer(state = initState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
