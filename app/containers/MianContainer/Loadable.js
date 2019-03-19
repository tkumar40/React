/**
 *
 * Asynchronously loads the component for MianContainer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
