import { EventEmitter } from 'events'

export class Queue {
  private readonly items: number[] = []
  private readonly eventEmitter = new EventEmitter()

  public get length (): number { return this.items.length }

  public enqueue (item: number): void {
    this.items.push(item)
    this.eventEmitter.emit('item.enqueued')
  }

  public dequeue (): number | undefined {
    return this.items.shift()
  }
}
