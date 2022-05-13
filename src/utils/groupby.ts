export const groupBy = <T>(items: T[], key: keyof T) => {
  const groupedResult = items.reduce((acc, cur) => {
    if (!acc[cur[key]]) {
      acc[cur[key]] = [] as T[];
    }

    acc[cur[key]].push(cur);
    return acc;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as any);

  return groupedResult;
};
