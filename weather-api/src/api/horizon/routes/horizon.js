'use strict';

/**
 * horizon router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::horizon.horizon');
