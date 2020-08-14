/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });
import React from "react" 
React.useLayoutEffect = React.useEffect 