'use strict';

/**
 * periphery router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::periphery.periphery');
