export const size_Width = {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px'
}

export const size_Height = {
    mobile: '667px',
    tablet: '1280px',
    laptop: '1440px',
    desktop: '2560px'
}


export const device = {
    mobileM: `(max-width: ${size_Width.mobile})`,
    tablet: `(max-width: ${size_Width.tablet})`,
    laptop: `(max-width: ${size_Width.laptop})`,
    desktop: `(max-width: ${size_Width.desktop})`,
};


export const device_Height = {
    mobileM: `(max-width: ${size_Height.mobile})`,
    tablet: `(max-width: ${size_Height.tablet})`,
    laptop: `(max-width: ${size_Height.laptop})`,
    desktop: `(max-width: ${size_Height.desktop})`,
};