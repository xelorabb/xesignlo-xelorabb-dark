import '../../../dist/index.css';

const iconList: { [key: string]: { [key: string]: string }} = {
  'box': {
    'regular': '<path d="M24,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V9H1V24H23V9h1ZM2,3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1V7H2ZM21,22H3V9H21Z"/><rect x="8" y="12" width="8" height="2"/>',
    'solid': '<path d="M21,0H3A3,3,0,0,0,0,3V8H24V3A3,3,0,0,0,21,0Z"/><path d="M1,10V24H23V10Zm15,5H8V13h8Z"/>'
  },
  'checkbox': {
    'regular': '<path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z"/>',
    'solid': '<path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3"/>'
  },
  'checkbox-checked': {
    'regular': '<path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z"/><path d="M9.333,15.919,5.414,12A1,1,0,0,0,4,12H4a1,1,0,0,0,0,1.414l3.919,3.919a2,2,0,0,0,2.829,0L20,8.081a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0Z"/>',
    'solid': '<path d="M 19 0 L 5 0 C 2.238281 0.00390625 0.00390625 2.238281 0 5 L 0 19 C 0.00390625 21.761719 2.238281 23.996094 5 24 L 19 24 C 21.761719 23.996094 23.996094 21.761719 24 19 L 24 5 C 23.996094 2.238281 21.761719 0.00390625 19 0 Z M 20 8.078125 L 10.746094 17.332031 C 9.964844 18.113281 8.699219 18.113281 7.917969 17.332031 L 4 13.417969 C 3.609375 13.027344 3.609375 12.390625 4 12 C 4.390625 11.609375 5.027344 11.609375 5.417969 12 L 9.332031 15.917969 L 18.589844 6.660156 C 18.980469 6.273438 19.613281 6.273438 20.003906 6.664062 C 20.390625 7.054688 20.390625 7.6875 20 8.078125 Z M 20 8.078125 "/>'
  },
  'star': {
    'regular': '<path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453ZM12,15.346l3.658,2.689-1.4-4.344L17.937,11H13.39L12,6.669,10.61,11H6.062l3.683,2.691-1.4,4.344Z"/>',
    'solid': '<path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/>'
  },
  'trash': {
    'regular':'<path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"/><rect x="9" y="10" width="2" height="8"/><rect x="13" y="10" width="2" height="8"/>',
    'solid': '<path d="M17,4V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2V4ZM11,17H9V11h2Zm4,0H13V11h2ZM15,4H9V2h6Z"/>'
  },
}

function createSVGElement(svgString: string): HTMLElement {
  const parser = new DOMParser();
  const parsedSvg = parser.parseFromString(svgString, 'image/svg+xml');

  if (parsedSvg.documentElement.tagName.toLowerCase() === 'svg') {
    return parsedSvg.documentElement;
  } else {
    return document.createElement("span");
  }
}

export interface IconProps {
  name: string;
  type?: 'regular' | 'solid';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const createIcon = ({
  name,
  type = 'regular',
  size = 'md'
}: IconProps) => {

  const iconString = `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      class="icon icon--${size}"
    >
      ${iconList[name][type]}
    </svg>
  `;

  const icon = createSVGElement(iconString);
  return icon;
};