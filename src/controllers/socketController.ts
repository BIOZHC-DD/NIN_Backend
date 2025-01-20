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

export interface response {
  type: string;
  table: string;
  offset: number;
  data: clientFormat[];
}

export async function handleMessage(message:string){
    try {
   
        const row: response = JSON.parse(message);

        const { type, table, offset, data } = row
    
        if (!Array.isArray(data) || !table) {
            throw new Error('Invalid data structure or missing sensorType.');
        }

        console.log(data)
    }
    catch (error) {
        console.error(error);
    }
}