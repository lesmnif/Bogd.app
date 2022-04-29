import { createGlobalState } from 'react-hooks-global-state';

const initialState = { etiquetesFilter: [], maxAge: [], maxPart: [] };
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState