declare module 'react-svg-unique-id';
declare module 'webfontloader' {
  export interface WebFontConfig {
    loading?: () => void,
    active?: () => void,
    inactive?: () => void,
    fontloading?: (familyName, fvd) => void,
    fontactive?: (familyName, fvd) => void,
    fontinactive?: (familyName, fvd)=>  void,
    classes: boolean,
    timeout?: number,
    // google: {
    //   families: ['Montserrat:400,600,700,800,900']
    // },
  };

  export function load(WebFontConfig): void
}