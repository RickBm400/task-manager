type level = 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';

interface ILogOptions {
  level?: level;
  target?: string;
  metadata?: object | any;
}

export default class TraceLog {
  static create(context: string, options?: ILogOptions | null) {
    let _level = 'INFO';
    let _target = 'server';
    let _time = new Date().toISOString();
    let _metadata = null;

    let _context = context;

    if (options) {
      _level = options.level! || 'INFO';
      _target = options.target! || 'server';
      _metadata = options.metadata;
    }

    console.log(`[${_time}] [${_level}] [${_context}] -> ${_target}`);
    if (_metadata) {
      console.log('\n', JSON.parse(JSON.stringify(_metadata)), '\n');
    }
  }
}
