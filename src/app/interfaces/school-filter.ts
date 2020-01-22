export interface SchoolFilter {
  places: ('remote' | string)[];
  types: ('front' | 'server' | 'mobile')[];
  skills: string[];
  plans: ('isa' | 'free' | 'subscription')[];
}
