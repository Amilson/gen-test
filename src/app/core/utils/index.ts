import { orderBy } from 'lodash';
import { PaginationSortData } from 'src/app/interfaces';

export const getRandomString = (len: number, charSet?: string) => {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const randomString: string = new Array(len)
    .fill('1')
    .map(() => {
      return charSet?.charAt(Math.floor(Math.random() * charSet.length));
    })
    .join('');
  return randomString;
};

export function sortResult<T>(entities: T[], sortData: PaginationSortData): T[] {
  const sortable = ({ key, format, obj }: any): any => {
    const value = obj[key];

    return {
      number: () => {
        return Number(value);
      },
      string: () => {
        return `${value}`;
      }
    };
  };

  let iteratees: any[] = [];
  let orders: any[] = [];
  const entries = Object.entries(sortData);

  entries.map(([key, { type, format, direction }]) => {
    if (!type) return null;

    iteratees = [
      ...iteratees,
      (obj: any) => {
        return sortable({ key, format, obj })?.[type]();
      }
    ];

    orders = [...orders, direction];

    return null;
  });

  return orderBy(entities, iteratees, orders);
}
