import { createGlobalState } from 'react-hooks-global-state';

const initialState = { etiquetesFilterHot: [], maxAgeHot: [], maxPartHot: [] };
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState