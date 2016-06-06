// export { default as instrument, ActionCreators, ActionTypes } from 'redux-devtools-instrument';
// export { default as persistState } from './persistState';
// export { default as createDevTools } from './createDevTools';

import { instrument, ActionCreators, ActionTypes } from 'redux-devtools-instrument';
import create from './createDevTools';
import persist from './persistState';

exports.createDevTools = create.createDevTools;
exports.persistState = persist.persistState;
exports.instrument = instrument;
exports.ActionCreators = ActionCreators;
exports.ActionTypes = ActionTypes;
