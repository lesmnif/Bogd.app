import { createGlobalState } from 'react-hooks-global-state';

const initialState = { etiquetesFilterSong: [], maxAgeSong: [] ,maxPartSong: []};
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState