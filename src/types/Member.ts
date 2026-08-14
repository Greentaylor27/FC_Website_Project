
export type Member = {
  id: number;
  name: string;
  rank: string;
  playingSince: string;
  preferredRole: string[];
  mainJob: string[];
  favoriteContent: string[];
  playstyles: string[];
  shortDescription: string;
  bio: string;
  imageUrl: string;
  stats: MemberStats[];
}

export type MemberStats = {
  label: string;
  value: string;
}
