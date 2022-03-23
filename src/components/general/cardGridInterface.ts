export interface CardGridProps {
  nodes?: Array<{
    id: string;
    data?: {
      Role?: string | null;
      Name?: string | null;
      Program?: string | null;
      linkedInUrl?: string | null | undefined;
      Attachments?: Array<{
        thumbnails?: {
          large?: {
            height?: number | null;
            width?: number | null;
            url?: string | null | undefined;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  }>;

  panelNodes?: Array<{
    id: string;
    data?: {
      Name?: string | null;
      Organization?: string | null;
      Title?: string | null;
      Panel?: string | null;
      LinkedIn_Url?: string | null | undefined;
      Attachments?: Array<{
        thumbnails?: {
          large?: {
            height?: number | null;
            width?: number | null;
            url?: string | null | undefined;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  }>;
}
