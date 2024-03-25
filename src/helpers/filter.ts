export const sortData = (data: any[], sortBy: 'asc' | 'desc'): any[] => {
  return data.sort((a, b) => {
    if (sortBy === 'asc') {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });
};
