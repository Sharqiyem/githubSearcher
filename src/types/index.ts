export interface State<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

export type Cache<T> = {[url: string]: T};

export type Action<T> =
  | {type: 'loading'; payload: boolean}
  | {type: 'fetched'; payload: T}
  | {type: 'error'; payload: Error};

export enum ListType {
  following = 'following',
  followers = 'followers',
}

export interface User {
  // Avatar
  avatar_url: string;
  // Username
  login: string;
  // Name
  name: string;
  // Description
  bio: string;
  // Follower count
  followers: number;
  // Following count
  following: number;
}
