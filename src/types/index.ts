export interface Attraction {
  name: string;
  obs: string;
}

export interface Event {
  id: number;
  name: string;
  subtitle: string;
  local?: string;
  date: string;
  image: string;
  description: string;
  attraction?: Attraction[];
  tags: string[];
}

export interface Tag {
  name: string;
}
