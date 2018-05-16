/*
 *  Required hookup for enzyme to CRA Jest-Cli
 *
 *  Setting this Up Resources
 *  [this issue](https://github.com/facebook/jest/issues/4545)  lead to
 *  [this fix](https://github.com/facebookincubator/create-react-app/issues/3199) in the end I lifted
 *  update to react-scripts 0.15.0 fixed the various issues, but this setup is required.
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
