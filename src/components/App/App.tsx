import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Messanger } from '../Messanger/Messanger';

const MessangerWithRouter = withRouter(Messanger);

export const App:React.FC = () => (<Router><MessangerWithRouter /></Router>);
