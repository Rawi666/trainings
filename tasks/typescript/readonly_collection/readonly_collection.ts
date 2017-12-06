
interface CollectionMapper<T> {
    (element: T, index: number, collection: ReadonlyCollection<T>) : T
};

class ReadonlyCollection<T> {

    private data: T[];

    constructor(...args: T[]) {
        this.data = args;
    }

    public get(index: number): T {
        return this.data[index];
    }

    public toArray(): T[] {
        return [...this.data]; //return this.data.slice();
    }

    public add(...o: T[]): ReadonlyCollection<T>{
        return new ReadonlyCollection(...this.data, ...o);
    }

    public remove(...args: T[]): ReadonlyCollection<T>{
        let newData: T[] = this.data.filter((element: T) => {
            return args.indexOf(element) === -1;
        });

        return new ReadonlyCollection(...newData);
    }

    public map(callback: CollectionMapper<T>): ReadonlyCollection<T> {
        let newData: T[] = this.data.map((element: T, index: number) => {
           return callback(element, index, this) 
        });
        return new ReadonlyCollection(...newData);
    }

    get length(): number {
        return this.data.length;
    }
}

export { ReadonlyCollection, CollectionMapper };