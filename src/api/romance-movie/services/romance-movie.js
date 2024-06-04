'use strict';

/**
 * romance-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::romance-movie.romance-movie');
