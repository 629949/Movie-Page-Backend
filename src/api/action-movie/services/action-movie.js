'use strict';

/**
 * action-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::action-movie.action-movie');
