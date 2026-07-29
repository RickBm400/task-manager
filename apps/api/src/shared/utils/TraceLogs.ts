type level = 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';

interface ILog {
  level?: level;
  context: string;
  target?: string;
}

export default class TraceLog {
  static create({ level, context, target }: ILog) {
    const _level = level! || 'INFO';
    const _context = context! || '';
    const _target = target! || 'server';
    const _time = new Date().toISOString();

    console.log(`[${_time}] [${_level}] [${_context}] -> ${_target}`);
  }
}
