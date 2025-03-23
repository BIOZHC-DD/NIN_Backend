export interface bioSensor {
  bioImpedance: number;
  phaseAngle: number;
  time: Date;
}

export interface temSensor {
  temperature: number;
  time: Date;
}

export interface gluSensor {
  glucose: number;
  time: Date;
}

export interface gsrSensor {
  gsr: number;
  time: Date;
}

export interface clientFormat {
  sensorType: 'bioSensor' | 'temSensor' | 'gluSensor' | 'gsrSensor';
  time: Date;
  visit_id: string;
  config: string;
  frequency: number;
  createdAt: Date;
  data: bioSensor[] | temSensor[] | gluSensor[] | gsrSensor[];
}

export interface Payload {
  type: 'sync_data';
  table: string;
  batchId: string | number;
  data: any[]; // Array of any type
  offset: number;
  timestamp: number;
}
