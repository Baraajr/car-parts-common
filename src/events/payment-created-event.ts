import { Subjects } from './subjects';

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;                      
    orderId: string;                 
    stripePaymentIntentId: string;   
    stripeChargeId: string;          
    amount: number;                  
    status: 'succeeded';             
  };
}
