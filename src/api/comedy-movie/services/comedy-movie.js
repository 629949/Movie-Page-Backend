'use strict';

/**
 * comedy-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comedy-movie.comedy-movie');
