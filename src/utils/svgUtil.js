export const pathCircleGenerator = (size:number):string => `
    M ${size / 2}, ${size / 2}
    m 0, -${size / 2}
    a ${size / 2},${size / 2} 0 1 1 0,${size}
    a ${size / 2},${size / 2} 0 1 1 0,-${size}
  `;
