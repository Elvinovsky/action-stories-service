export const getPageNumber = (pageNumber?: number): number => {
  return pageNumber && Number(pageNumber) > 0 ? +pageNumber : 1;
};
export const getPageSize = (pageSize?: number): number => {
  return pageSize && Number(pageSize) > 0 ? +pageSize : 10;
};

export const getSkip = (pageNumber = 1, pageSize = 10): number => {
  return (getPageNumber(pageNumber) - 1) * getPageSize(pageSize);
};
export const getPagesCount = (
  calculateOfFiles: number,
  pageSize?: number,
): number => {
  return Math.ceil(calculateOfFiles / getPageSize(pageSize));
};
