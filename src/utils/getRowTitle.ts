export const getRowTitle = (cellId: string) => {
  const rowIndex = parseInt(cellId.split("_")[0], 10);

  return `Cell value M = ${rowIndex + 1}`;
};
