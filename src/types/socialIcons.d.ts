//src/types/socialIcons.d.ts
export interface ISocialIcon {
  id: number;
  icon: IconType;
  title: string;
  url: string;
  position: 'prev' | 'main' | 'next' | 'offline';
}
