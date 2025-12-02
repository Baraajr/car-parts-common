import { Kafka, Producer, ProducerRecord, RecordMetadata } from 'kafkajs';
import { Subjects } from './subjects';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class KafkaPublisher<T extends Event> {
  abstract subject: T['subject'];
  protected producer: Producer;

  constructor(producer: Producer) {
    this.producer = producer;
  }

  async publish(data: T['data']): Promise<RecordMetadata[]> {
    try {
      const result = await this.producer.send({
        topic: this.subject,
        messages: [
          {
            value: JSON.stringify(data),
            // Optional: add key for partitioning
            // key: data.id,
            // Optional: add headers
            // headers: {
            //   'correlation-id': 'some-id',
            // },
          },
        ],
      });

      console.log('Event published to topic:', this.subject);
      return result;
    } catch (err) {
      console.error('Error publishing event:', err);
      throw err;
    }
  }

  // Publish multiple messages at once (batch)
  async publishBatch(dataArray: T['data'][]): Promise<RecordMetadata[]> {
    try {
      const result = await this.producer.send({
        topic: this.subject,
        messages: dataArray.map((data) => ({
          value: JSON.stringify(data),
        })),
      });

      console.log(
        `${dataArray.length} events published to topic:`,
        this.subject
      );
      return result;
    } catch (err) {
      console.error('Error publishing batch events:', err);
      throw err;
    }
  }

  // Publish with custom partition key
  async publishWithKey(
    data: T['data'],
    key: string
  ): Promise<RecordMetadata[]> {
    try {
      const result = await this.producer.send({
        topic: this.subject,
        messages: [
          {
            key: key,
            value: JSON.stringify(data),
          },
        ],
      });

      console.log('Event published to topic:', this.subject, 'with key:', key);
      return result;
    } catch (err) {
      console.error('Error publishing event:', err);
      throw err;
    }
  }

  async disconnect(): Promise<void> {
    await this.producer.disconnect();
    console.log('Kafka producer disconnected');
  }
}
