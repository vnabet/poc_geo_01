import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, skip } from 'rxjs';

@Injectable()
export class LogsService {

  private _logger:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private _logs:string[] = []

  logs:Observable<string[]> = this._logger.asObservable().pipe(skip(1));

  constructor() { }

  send(log:string) {
    const date:Date = new Date();
    const logs = [...this._logs, `${date.toLocaleTimeString('fr-FR')} - ${log}`];
    this._logs = logs.length > 20?logs.slice(-20):logs;

    this._logger.next(this._logs);
  }
}
