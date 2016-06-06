// export { default as instrument, ActionCreators, ActionTypes } from 'redux-devtools-instrument';
// export { default as persistState } from './persistState';
// export { default as createDevTools } from './createDevTools';

import { instrument, ActionCreators, ActionTypes } from 'redux-devtools-instrument';
import createDevTools from './createDevTools';
import persistState from './persistState';

exports.createDevTools = createDevTools.createDevTools;
exports.persistState = persistState.persistState;
exports.instrument = instrument;
exports.ActionCreators = ActionCreators;
exports.ActionTypes = ActionTypes;
