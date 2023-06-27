'use strict';

/**
 * horizon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::horizon.horizon');
