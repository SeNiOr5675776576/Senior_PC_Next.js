'use strict';

/**
 * periphery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::periphery.periphery');
