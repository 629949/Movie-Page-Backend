import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsMiniUnitWrapper extends Schema.Component {
  collectionName: 'components_components_mini_unit_wrappers';
  info: {
    displayName: 'mini Unit Wrapper';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ComponentsTitle extends Schema.Component {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'title';
    icon: 'pencil';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ComponentsUnitWrapper extends Schema.Component {
  collectionName: 'components_components_unit_wrappers';
  info: {
    displayName: 'Unit Wrapper';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.mini-unit-wrapper': ComponentsMiniUnitWrapper;
      'components.title': ComponentsTitle;
      'components.unit-wrapper': ComponentsUnitWrapper;
    }
  }
}
