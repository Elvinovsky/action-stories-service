import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Injectable()
export class HistoryService {
  create(createHistoryDto: CreateHistoryDto) {
    console.log(createHistoryDto);
    return createHistoryDto;
  }

  findAll() {
    return `This action returns all history`;
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(updateHistoryDto: UpdateHistoryDto) {
    console.log(updateHistoryDto);
    return `This action updates a #${updateHistoryDto.id} history`;
  }
}

// import { Injectable } from '@nestjs/common';
// import { Consumer, KafkaClient } from 'kafka-node';

// @Injectable()
// export class KafkaService {
//   private readonly client: KafkaClient;
//   private readonly consumer: Consumer;
//
//   constructor() {
//     this.client = new KafkaClient({ kafkaHost: 'localhost:9092' });
//     this.consumer = new Consumer(this.client, [{ topic: 'user-events', partition: 0 }]);
//     this.initConsumer();
//   }
//
//   private initConsumer() {
//     this.consumer.on('message', (message) => {
//       const event = JSON.parse(message.value);
//       // Обработка сообщения здесь
//       // Вызывайте методы вашего HistoryService для обработки событий
//     });
//
//     this.consumer.on('error', (error) => {
//       console.error('Kafka Consumer Error:', error);
//     });
//
//     this.consumer.on('offsetOutOfRange', (error) => {
//       console.error('Kafka Consumer Offset Out Of Range:', error);
//     });
//   }
// }
