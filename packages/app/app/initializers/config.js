/**
 * Copyright 2020, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import config from 'navi-app/config/environment';

export function initialize() {
  // Add server provided app settings into the environment
  config.appSettings = window.NAVI_APP.appSettings;
  config.apollo = {
    apiURL: config.appSettings.factApiHost
  };
  // Navi specific configuration
  Object.assign(config.navi, {
    user: config.appSettings.user,
    /*
     *TODO: set epoch date
     *dataEpoch: NAVI_APP.appSettings.dataEpoch,
     */
    dataSources: [
      { name: 'default', uri: config.appSettings.factApiHost, type: 'bard-facts' },
      { name: 'blockhead', uri: 'https://{elideHostname}', type: 'elide-facts' }
    ],
    appPersistence: {
      type: 'webservice',
      uri: config.appSettings.persistenceApiHost,
      timeout: 90000
    }
  });
}

export default {
  name: 'config',
  initialize
};
