export interface DoctorType {
    id: number;
    bio: string;
    name: string;
    title: string;
    availableSlots: Array<{ date: string; time: string; isBooked: boolean }>;
  }
  