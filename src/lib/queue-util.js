export default () => {
  const queue = [];
  const queueFn = queueItem => queue.push(queueItem);
  queueFn.getQueue = () => queue;
  return queueFn;
};
