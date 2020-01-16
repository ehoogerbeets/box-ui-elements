/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid
 * intl context around them.
 */

import React from 'react';
import { mount, shallow } from 'enzyme';
// import { Runtime as jest } from 'jest-runtime';
// const { IntlProvider, intlShape } = jest.requireActual('react-intl');

import { IntlProvider, intlShape } from 'react-intl';

// Create the IntlProvider to retrieve context for wrapping around.
export function createIntl(locale, messages) {
    const intlProvider = new IntlProvider({ locale, messages }, {});
    const { intl } = intlProvider.getChildContext();

    return intl;
}

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(intl, node) {
    return React.cloneElement(node, { intl });
}

/**
 * Export these methods.
 */
export function shallowWithIntl(intl, node) {
    return shallow(nodeWithIntlProp(intl, node), { context: { intl } });
}

export function mountWithIntl(intl, node) {
    return mount(nodeWithIntlProp(intl, node), {
        context: { intl },
        childContextTypes: { intl: intlShape },
    });
}
