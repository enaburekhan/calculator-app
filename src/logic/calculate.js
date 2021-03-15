import operate from './operate';

export default function calculate(data, buttonName) {
  let { total, next, operation } = data;
  const isNumber = item => !!item.match(/[0-9]+/);
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
    return { total, next, operation };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && data.next === '0') {
      return {};
    }
    if (data.operation) {
      if (data.next) {
        return { next: data.next + buttonName };
      }
      return { next: buttonName };
    }

    if (data.next) {
      return {
        next: data.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (data.next) {
      if (data.next.includes('.')) {
        return {};
      }
      return { next: `${data.next}.` };
    }

    if (data.operation) {
      return { next: '0.' };
    }

    if (data.total) {
      if (data.total.includes('.')) {
        return {};
      }
      return { total: `${data.total}.` };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (data.next && data.operation) {
      return {
        total: operate(data.total, data.next, data.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (buttonName === '+/-') {
    if (data.next) {
      return { next: (-1 * parseFloat(data.next)).toString() };
    }
    if (data.total) {
      return { next: (-1 * parseFloat(data.total)).toString() };
    }
    return {};
  }

  // user click operation button
  if (data.operation) {
    return {
      total: operate(data.total, data.next, data.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!data.next) {
    return { operation: buttonName };
  }

  return {
    total: data.next,
    next: null,
    operation: buttonName,
  };
}
