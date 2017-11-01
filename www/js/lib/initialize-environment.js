/* global window */
import es6Promise from 'es6-promise';
es6Promise.polyfill();

import FastClick from 'fastclick';

function initializeEnvironment() {
    const doc = window.document;

    FastClick.attach(doc.body);
}

initializeEnvironment();

module.exports = initializeEnvironment;
