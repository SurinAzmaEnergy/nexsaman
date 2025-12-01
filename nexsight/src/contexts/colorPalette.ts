export interface ColorShades {
  shade1: string;
  shade2: string;
  shade3: string;
  shade4: string;
  main: string;
}

export interface ColorPalette {
  electricBlue: ColorShades;
  slateNavy: ColorShades;
  cyberLime: ColorShades;
  iceGray: ColorShades;
}

export const colorPalette: ColorPalette = {
  electricBlue: {
    main: "#6ABAEF", // RGB: 0 119 255
    shade1: "#0069D1",
    shade2: "#0077FF",
    shade3: "#4AA7F4",
    shade4: "#6ABAEF",
  },
  slateNavy: {
    main: "#1A2734", // RGB: 26 39 52
    shade1: "#0D1419",
    shade2: "#1A2734",
    shade3: "#2E3D49",
    shade4: "#4A5C68",
  },
  cyberLime: {
    main: "#C6FF39", // RGB: 198 255 57
    shade1: "#B4E02B",
    shade2: "#C6FF39",
    shade3: "#D8F779",
    shade4: "#E2EFAB",
  },
  iceGray: {
    main: "#E8ECF1", // RGB: 232 236 241
    shade1: "#CFD1D3",
    shade2: "#E8ECF1",
    shade3: "#EFF2F4",
    shade4: "#F5FAF8",
  },
};
