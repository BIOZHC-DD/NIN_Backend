export interface Payload {
  type: 'sync_data';
  table: string;
  batchId: string | number;
  data: any[]; // Array of any type
  offset: number;
  timestamp: number;
}

export interface BioSensor {
  id?: number; // Auto-incremented primary key
  time?: number; // Defaults to 0
  visit_id: string;
  interval_tag: number;
  config: string;
  frequency: number;
  sensorType?: 'bioSensor';
  bioImpedance: number;
  phaseAngle: number;
  created_at: string;
}
