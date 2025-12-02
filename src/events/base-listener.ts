import {
  Consumer,
  Kafka,
  EachMessagePayload,
  ConsumerConfig,
  KafkaMessage,
  TopicPartitionOffsetAndMetadata,
} from 'kafkajs';
import { Subjects } from './subjects';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class KafkaListener<T extends Event> {
  abstract subject: T['subject'];
  abstract groupId: string;
  abstract onMessage(data: T['data'], message: KafkaMessage): Promise<void>;

  protected kafka: Kafka;
  protected consumer!: Consumer; // Will be initialized in listen()
  protected sessionTimeout = 30000; // 30 seconds
  protected consumerConfig?: Partial<ConsumerConfig>;

  constructor(kafka: Kafka, consumerConfig?: Partial<ConsumerConfig>) {
    this.kafka = kafka;
    this.consumerConfig = consumerConfig;
  }

  async listen() {
    // Initialize consumer here where groupId is available
    this.consumer = this.kafka.consumer({
      groupId: this.groupId,
      sessionTimeout: this.sessionTimeout,
      ...this.consumerConfig,
    });

    await this.consumer.connect();
    console.log(`Kafka consumer connected: ${this.groupId}`);

    await this.consumer.subscribe({
      topic: this.subject,
      fromBeginning: true, // Similar to setDeliverAllAvailable in NATS
    });

    await this.consumer.run({
      eachMessage: async ({
        topic,
        partition,
        message,
      }: EachMessagePayload) => {
        console.log(
          `Message received: ${topic} / ${this.groupId} / Partition: ${partition}`
        );

        try {
          const parsedData = this.parseMessage(message);
          await this.onMessage(parsedData, message);
          // Kafka automatically commits offsets by default (autoCommit: true)
          // If you want manual commit, set autoCommit to false in run() options
        } catch (err) {
          console.error('Error processing message:', err);
          // Implement your error handling strategy here
          // You might want to:
          // 1. Skip the message and continue
          // 2. Send to dead letter queue
          // 3. Retry with backoff
          throw err; // This will pause the consumer
        }
      },
    });

    // Handle errors
    this.consumer.on('consumer.crash', (event) => {
      console.error('Consumer crashed:', event.payload.error);
    });

    this.consumer.on('consumer.disconnect', () => {
      console.log('Consumer disconnected');
    });
  }

  parseMessage(message: KafkaMessage) {
    if (!message.value) {
      throw new Error('Message value is null');
    }

    const data = message.value.toString('utf8');
    return JSON.parse(data);
  }

  async disconnect() {
    await this.consumer.disconnect();
    console.log('Kafka consumer disconnected');
  }
  // Manual commit if needed (set autoCommit: false in consumer.run())
  async commitOffsets(
    offsets: Array<TopicPartitionOffsetAndMetadata>
  ): Promise<void> {
    await this.consumer.commitOffsets(offsets);
  }
}
