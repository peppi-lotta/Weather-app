export interface StrapiImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      medium: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      small: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      large: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Horizon {
    id: number,
    attributes: {
      createdAt: string,
      updatedAt: string,
      Starting_time: string,
      Ending_time: string,
      Bottom: {
        data: {
          id: number,
          attributes: StrapiImageAttributes
        }
      },
      Middle: {
        data: {
          id: number,
          attributes: StrapiImageAttributes
        }
      },
      Top: {
        data: {
          id: number,
          attributes: StrapiImageAttributes
        }
      }
    }
  }
  
  export interface Horizons {
    data: Array<Horizon>
  }