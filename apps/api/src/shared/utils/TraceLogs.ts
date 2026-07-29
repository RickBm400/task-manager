type level = 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';

interface ILog {
  level?: level;
  context?: string;
  target?: string;
  time?: Date | string;
}

export default class TraceLog {
  private _level: level;
  private _context: string;
  private _target: string;
  private _time: string | Date;

  constructor(params: Omit<ILog, 'time'>) {
    this._level = params.level! || 'INFO';
    this._context = params.context! || '';
    this._target = params.target! || 'server';
    this._time = new Date().toISOString();

    this.saveLog();
  }

  static create({ level, context, target }: Omit<ILog, 'time'>) {
    new TraceLog({ level, context, target });
  }

  private saveLog() {
    console.log(
      `[${this._time}] [${this._level}] [${this._context}] -> ${this._target}`,
    );
  }
}
