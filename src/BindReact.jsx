import React from 'react';
import Router from 'react-router';
import Routes from './Routes.jsx';

require('./shared/css/global.less');

document.addEventListener("DOMContentLoaded", function(e){
    Router.run(Routes, Router.HistoryLocation, function(Handler, state){
        React.render(<Handler/>, document.getElementById('react-body'));
    });
});
