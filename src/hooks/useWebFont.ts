import { useEffect } from 'react';
import WebFont, { WebFontConfig } from 'webfontloader';
import showPageContent from '../helpers/showPageContent';

export default (params?: WebFontConfig) =>
  useEffect(() => {
    const config = {
      active: function() {
        showPageContent();
      },
      inactive: function() {
        showPageContent();
      },
      google: {
        families: ['Montserrat:400,600,700,800,900']
      },
      timeout: 3000,
      ...params
    };

    WebFont.load(config);
  }, []);
