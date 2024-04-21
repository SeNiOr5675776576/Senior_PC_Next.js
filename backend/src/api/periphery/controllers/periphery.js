'use strict';

/**
 * periphery controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::periphery.periphery');
