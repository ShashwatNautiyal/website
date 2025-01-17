// eslint-disable @typescript-eslint/no-explicit-any
export interface AnalyticsPayload {
  type: "event" | "identity" | "page";
  cookieId?: string;
  props?: any;
  traits?: any;
  context?: any;
  eventName?: string;
}

export interface PageProps {
  url: string;
  path: string;
  referrer?: string;
  title?: string;
  search?: string;
}
