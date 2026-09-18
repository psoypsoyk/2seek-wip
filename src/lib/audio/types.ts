export type DeckId = "A" | "B";

export type EffectType =
  | "off"
  | "slicer"
  | "echo"
  | "reverb"
  | "flanger"
  | "crush"
  | "gate"
  | "phaser"
  | "filter";

export const EFFECT_ORDER: EffectType[] = [
  "off",
  "slicer",
  "echo",
  "reverb",
  "flanger",
  "crush",
  "gate",
  "phaser",
  "filter",
];

export type TrackKind = "demo" | "user";

/** Encoded file cap. Decoded audio still lives in RAM — keep a ceiling. */
export const MAX_UPLOAD_MB = 150;
export const MAX_UPLOAD_BYTES = MAX_UPLOAD_MB * 1024 * 1024;

export interface TrackMeta {
  id: string;
  title: string;
  artist: string;
  genre: string;
  bpm: number;
  duration: number;
  kind: TrackKind;
}

export interface LoadedTrack extends TrackMeta {
  buffer: AudioBuffer;
  peaks: Float32Array;
}

export interface SamplerPad {
  id: string;
  name: string;
  color: string;
}

export const HOT_CUE_COUNT = 4;
export const LOOP_BEATS = [0.5, 1, 2, 4, 8, 16] as const;
export const ZOOM_BEATS = [1, 2, 4, 8, 16, 32] as const;
export type ZoomBeats = (typeof ZOOM_BEATS)[number];
export const DEFAULT_ZOOM_BEATS: ZoomBeats = 8;
export const PITCH_RANGE = 8;
export const MIN_BPM = 1;
export const MAX_BPM = 999;
export const PLATTER_REV = 1.8;
