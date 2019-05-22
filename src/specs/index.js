/*eslint-disable*/
import polyfill from './polyfill';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

//Jest will execute this config file before running the test suite
